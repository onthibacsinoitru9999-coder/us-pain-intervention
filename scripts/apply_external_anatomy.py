# -*- coding: utf-8 -*-
"""
Integrates authoritative external Surface Anatomy (Giải phẫu Bề mặt) and
Cross-Sectional Anatomy (Giải phẫu Thiết đồ) across all 51 clinical procedures
in data/procedures.js and data/procedures.fallback.js.
"""
import os
import sys
import json
import datetime

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'scripts'))

from external_anatomy_data.ext_part1_upper import EXT_UPPER_ANATOMY
from external_anatomy_data.ext_part2_lower import EXT_LOWER_ANATOMY
from external_anatomy_data.ext_part3_spine_pelvis_bio import EXT_SPINE_PELVIS_BIO_ANATOMY

ALL_EXT_ANATOMY = {}
for part_name, d in (
    ('EXT_UPPER_ANATOMY', EXT_UPPER_ANATOMY),
    ('EXT_LOWER_ANATOMY', EXT_LOWER_ANATOMY),
    ('EXT_SPINE_PELVIS_BIO_ANATOMY', EXT_SPINE_PELVIS_BIO_ANATOMY),
):
    for k, v in d.items():
        assert k not in ALL_EXT_ANATOMY, f"Duplicate ID {k} in {part_name}"
        ALL_EXT_ANATOMY[k] = v

print(f"Loaded external anatomy entries: {len(ALL_EXT_ANATOMY)}")
assert len(ALL_EXT_ANATOMY) == 51, f"Expected 51 entries, got {len(ALL_EXT_ANATOMY)}"

proc_path = os.path.join(ROOT, 'data', 'procedures.js')
with open(proc_path, 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const PROCEDURES_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nif')
assert start > len(prefix) - 1 and end != -1, "Unexpected procedures.js wrapper format"

procedures = json.loads(text[start:end].strip())
assert len(procedures) == 51, f"Expected 51 procedures in procedures.js, got {len(procedures)}"

proc_ids = {p['id'] for p in procedures}
missing = proc_ids - set(ALL_EXT_ANATOMY.keys())
extra = set(ALL_EXT_ANATOMY.keys()) - proc_ids
assert not missing, f"Missing IDs in external anatomy data: {missing}"
assert not extra, f"Extra IDs in external anatomy data: {extra}"

updated_procedures = []
total_surf_figs = 0
total_cs_figs = 0
unique_fig_paths = set()

for p in procedures:
    pid = p['id']
    entry = ALL_EXT_ANATOMY[pid]
    surf = entry.get('surfaceAnatomy')
    cs = entry.get('crossSectionalAnatomy')
    assert surf and cs, f"Missing surfaceAnatomy or crossSectionalAnatomy for {pid}"

    # Validate surfaceAnatomy schema
    assert surf.get('sourceRef') and len(surf['sourceRef']) > 10, f"{pid}: missing surf.sourceRef"
    assert isinstance(surf.get('surfaceLandmarks'), list) and len(surf['surfaceLandmarks']) >= 3, f"{pid}: invalid surfaceLandmarks"
    assert surf.get('surfaceProjections') and len(surf['surfaceProjections']) > 30, f"{pid}: invalid surfaceProjections"
    assert isinstance(surf.get('palpationSteps'), list) and len(surf['palpationSteps']) >= 3, f"{pid}: invalid palpationSteps"
    assert isinstance(surf.get('figures'), list) and len(surf['figures']) >= 1, f"{pid}: missing surf.figures"

    # Validate crossSectionalAnatomy schema
    assert cs.get('sourceRef') and len(cs['sourceRef']) > 10, f"{pid}: missing cs.sourceRef"
    assert cs.get('sectionPlane') and len(cs['sectionPlane']) > 20, f"{pid}: invalid sectionPlane"
    assert isinstance(cs.get('layeredStructure'), list) and len(cs['layeredStructure']) >= 4, f"{pid}: invalid layeredStructure"
    topo = cs.get('topographicRelations') or {}
    assert topo.get('superficialAndDeep') and topo.get('medialAndLateral'), f"{pid}: invalid topographicRelations"
    assert isinstance(cs.get('dangerCorridors'), list) and len(cs['dangerCorridors']) >= 2, f"{pid}: invalid dangerCorridors"
    assert isinstance(cs.get('figures'), list) and len(cs['figures']) >= 1, f"{pid}: missing cs.figures"

    # Verify every local external figure exists & is non-empty, and uses external_anatomy folder
    for fig in surf['figures'] + cs['figures']:
        fpath = fig.get('path', '')
        assert fpath.startswith('assets/images/external_anatomy/'), f"{pid}: non-external figure path {fpath}"
        assert fig.get('atlasSource'), f"{pid}: missing atlasSource on {fpath}"
        full_p = os.path.join(ROOT, fpath.replace('/', os.sep))
        assert os.path.exists(full_p), f"Missing figure file on disk for {pid}: {fpath}"
        assert os.path.getsize(full_p) > 1000, f"Corrupt/tiny figure file on disk: {fpath}"
        unique_fig_paths.add(fpath)

    total_surf_figs += len(surf['figures'])
    total_cs_figs += len(cs['figures'])

    # Rebuild ordered dict: remove obsolete 'anatomy', insert 'surfaceAnatomy' & 'crossSectionalAnatomy' before 'patientPosition'
    new_p = {}
    inserted = False
    for k, val in p.items():
        if k in ('anatomy', 'surfaceAnatomy', 'crossSectionalAnatomy'):
            continue
        if k == 'patientPosition' and not inserted:
            new_p['surfaceAnatomy'] = surf
            new_p['crossSectionalAnatomy'] = cs
            inserted = True
        new_p[k] = val
    if not inserted:
        new_p['surfaceAnatomy'] = surf
        new_p['crossSectionalAnatomy'] = cs
    updated_procedures.append(new_p)

json_out = json.dumps(updated_procedures, ensure_ascii=False, indent=2)

# 1. Write primary data/procedures.js (preserving exact delimiter contract for test_both_apps.py & test_video_integration.py)
primary_content = (
    f"const PROCEDURES_DATA = {json_out};\n\n"
    'if (typeof window !== "undefined") { window.PROCEDURES_DATA = PROCEDURES_DATA; }\n'
    'if (typeof module !== "undefined" && module.exports) { module.exports = PROCEDURES_DATA; }\n'
)
with open(proc_path, 'w', encoding='utf-8') as f:
    f.write(primary_content)

# 2. Write fallback data/procedures.fallback.js (preserving exact delimiter contract for test_video_tabs.py)
now_str = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
now_iso = datetime.datetime.now().isoformat()
fallback_path = os.path.join(ROOT, 'data', 'procedures.fallback.js')
fallback_content = (
    "/**\n"
    " * US-PainIntervention Pro - STABLE FALLBACK DATA (Bản sao dự phòng ổn định v1.2.0)\n"
    " * Tự động kích hoạt khi tệp dữ liệu chính data/procedures.js gặp lỗi cú pháp, bị hỏng hoặc mất kết nối.\n"
    f" * Ngày tạo bản sao: {now_str}\n"
    " * Phiên bản: v1.2.0-stable (51 quy trình kèm Giải phẫu Bề mặt & Giải phẫu Thiết đồ nguồn Atlas kinh điển ngoài sách)\n"
    " */\n\n"
    "var STABLE_PROCEDURES_FALLBACK = [];\n"
    "(function() {\n"
    "  try {\n"
    "    if (typeof window === 'undefined') { globalThis.window = globalThis; }\n"
    f"    window.STABLE_PROCEDURES_FALLBACK = {json_out};\n"
    "    window.STABLE_VERSION_METADATA = {\n"
    "      version: '1.2.0-stable',\n"
    f"      timestamp: '{now_iso}',\n"
    "      procedureCount: window.STABLE_PROCEDURES_FALLBACK ? window.STABLE_PROCEDURES_FALLBACK.length : 0\n"
    "    };\n"
    "    STABLE_PROCEDURES_FALLBACK = window.STABLE_PROCEDURES_FALLBACK;\n"
    "    if (typeof module !== 'undefined' && module.exports) {\n"
    "      module.exports = STABLE_PROCEDURES_FALLBACK;\n"
    "    }\n"
    "  } catch (err) {\n"
    "    console.error('[US-PainIntervention] Lỗi nạp fallback dataset:', err);\n"
    "  }\n"
    "})();\n"
)
with open(fallback_path, 'w', encoding='utf-8') as f:
    f.write(fallback_content)

print("[SUCCESS] Integrated external Surface Anatomy & Cross-Sectional Anatomy into 51/51 procedures!")
print(f"  - Surface Anatomy figures linked: {total_surf_figs}")
print(f"  - Cross-Sectional Anatomy figures linked: {total_cs_figs}")
print(f"  - Unique external atlas plates used: {len(unique_fig_paths)}")
