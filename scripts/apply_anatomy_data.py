# -*- coding: utf-8 -*-
import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'scripts'))

from anatomy_data.part1_upper import UPPER_ANATOMY_DATA
from anatomy_data.part2_lower import LOWER_ANATOMY_DATA
from anatomy_data.part3_spine_pelvis_bio import SPINE_PELVIS_BIO_ANATOMY_DATA

ALL_ANATOMY = {}
for d in (UPPER_ANATOMY_DATA, LOWER_ANATOMY_DATA, SPINE_PELVIS_BIO_ANATOMY_DATA):
    for k, v in d.items():
        assert k not in ALL_ANATOMY, f"Duplicate ID: {k}"
        ALL_ANATOMY[k] = v

print(f"Loaded anatomy & surfaceAnatomy entries: {len(ALL_ANATOMY)}")

proc_path = os.path.join(ROOT, 'data', 'procedures.js')
with open(proc_path, 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const PROCEDURES_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nif')
assert start > len(prefix) - 1 and end != -1, "Unexpected procedures.js wrapper format"

procedures = json.loads(text[start:end].strip())
assert len(procedures) == 51, f"Expected 51 procedures, got {len(procedures)}"

proc_ids = {p['id'] for p in procedures}
missing = proc_ids - set(ALL_ANATOMY.keys())
extra = set(ALL_ANATOMY.keys()) - proc_ids
assert not missing, f"Missing IDs in anatomy data: {missing}"
assert not extra, f"Extra IDs in anatomy data: {extra}"

updated_procedures = []
total_anat_figs = 0
total_surf_figs = 0

for p in procedures:
    pid = p['id']
    entry = ALL_ANATOMY[pid]
    anat = entry['anatomy']
    surf = entry['surfaceAnatomy']

    # Validate required subfields
    assert anat.get('overview') and anat.get('targetStructure') and anat.get('innervation')
    assert isinstance(anat.get('vascularAndDangerZones'), list) and len(anat['vascularAndDangerZones']) >= 2
    assert isinstance(anat.get('figures'), list) and len(anat['figures']) >= 1

    assert isinstance(surf.get('bonyLandmarks'), list) and len(surf['bonyLandmarks']) >= 2
    assert surf.get('referenceLines') and surf.get('probePlacement')
    assert isinstance(surf.get('palpationSteps'), list) and len(surf['palpationSteps']) >= 3
    assert isinstance(surf.get('figures'), list) and len(surf['figures']) >= 1

    for fig in anat['figures'] + surf['figures']:
        full_p = os.path.join(ROOT, fig['path'].replace('/', os.sep))
        assert os.path.exists(full_p), f"Missing figure file for {pid}: {fig['path']}"
        assert os.path.getsize(full_p) > 1000, f"Empty/corrupt figure file: {fig['path']}"

    total_anat_figs += len(anat['figures'])
    total_surf_figs += len(surf['figures'])

    # Rebuild ordered dict so anatomy & surfaceAnatomy appear cleanly right before patientPosition
    new_p = {}
    inserted = False
    for k, val in p.items():
        if k in ('anatomy', 'surfaceAnatomy'):
            continue
        if k == 'patientPosition' and not inserted:
            new_p['anatomy'] = anat
            new_p['surfaceAnatomy'] = surf
            inserted = True
        new_p[k] = val
    if not inserted:
        new_p['anatomy'] = anat
        new_p['surfaceAnatomy'] = surf
    updated_procedures.append(new_p)

json_out = json.dumps(updated_procedures, ensure_ascii=False, indent=2)

# Write primary data/procedures.js
primary_content = (
    f"const PROCEDURES_DATA = {json_out};\n\n"
    'if (typeof window !== "undefined") { window.PROCEDURES_DATA = PROCEDURES_DATA; }\n'
    'if (typeof module !== "undefined" && module.exports) { module.exports = PROCEDURES_DATA; }\n'
)
with open(proc_path, 'w', encoding='utf-8') as f:
    f.write(primary_content)

# Write fallback data/procedures.fallback.js with exact canonical wrapper
import datetime
now_str = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
now_iso = datetime.datetime.now().isoformat()
fallback_path = os.path.join(ROOT, 'data', 'procedures.fallback.js')
fallback_content = f"""/**
 * US-PainIntervention Pro - STABLE FALLBACK DATA (Bản sao dự phòng ổn định v1.1.0)
 * Tự động kích hoạt khi tệp dữ liệu chính data/procedures.js gặp lỗi cú pháp, bị hỏng hoặc mất kết nối.
 * Ngày tạo bản sao: {now_str}
 * Phiên bản: v1.1.0-stable (51 quy trình lâm sàng Springer kèm Giải phẫu & Giải phẫu bề mặt)
 */

var STABLE_PROCEDURES_FALLBACK = [];
(function() {{
  try {{
    var rootObj = typeof window !== 'undefined' ? window : globalThis;
    rootObj.STABLE_PROCEDURES_FALLBACK = {json_out};
    rootObj.STABLE_VERSION_METADATA = {{
      version: '1.1.0-stable',
      timestamp: '{now_iso}',
      procedureCount: rootObj.STABLE_PROCEDURES_FALLBACK ? rootObj.STABLE_PROCEDURES_FALLBACK.length : 0
    }};
    STABLE_PROCEDURES_FALLBACK = rootObj.STABLE_PROCEDURES_FALLBACK;
    if (typeof module !== 'undefined' && module.exports) {{
      module.exports = STABLE_PROCEDURES_FALLBACK;
    }}
  }} catch (err) {{
    console.error('[US-PainIntervention] Lỗi nạp fallback dataset:', err);
  }}
}})();
"""
# Ensure exact substring match for test_video_tabs.py ('window.STABLE_PROCEDURES_FALLBACK = ' ... ';\n    window.STABLE_VERSION_METADATA')
fallback_content = fallback_content.replace('rootObj.STABLE_PROCEDURES_FALLBACK = ', 'window.STABLE_PROCEDURES_FALLBACK = ').replace('rootObj.STABLE_VERSION_METADATA', 'window.STABLE_VERSION_METADATA').replace("var rootObj = typeof window !== 'undefined' ? window : globalThis;", "if (typeof window === 'undefined') { globalThis.window = globalThis; }").replace('rootObj.STABLE_PROCEDURES_FALLBACK', 'window.STABLE_PROCEDURES_FALLBACK')
with open(fallback_path, 'w', encoding='utf-8') as f:
    f.write(fallback_content)

print(f"[SUCCESS] Updated 51/51 procedures in data/procedures.js & data/procedures.fallback.js!")
print(f"  - Anatomy figures linked: {total_anat_figs}")
print(f"  - Surface Anatomy figures linked: {total_surf_figs}")
