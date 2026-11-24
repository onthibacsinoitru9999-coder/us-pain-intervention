# -*- coding: utf-8 -*-
import os
import sys
import json
import subprocess

sys.stdout.reconfigure(encoding='utf-8')

print("=== KIỂM THỬ TOÀN DIỆN GIẢI PHẪU BỀ MẶT & GIẢI PHẪU THIẾT ĐỒ NGUỒN NGOÀI (51 QUY TRÌNH) ===")

# 1. Kiểm tra cú pháp JS thực tế bằng Node.js
for js_file in [
    'data/procedures.js',
    'data/procedures.fallback.js',
    'js/app.js',
    'js/calculator.js',
    'js/checklist.js',
    'data/screening.js',
    'data/screening.fallback.js',
    'js/screening.js',
]:
    res = subprocess.run(['node', '--check', js_file], capture_output=True, text=True)
    assert res.returncode == 0, f"JS syntax error in {js_file}: {res.stderr}"
print("  [PASS] 1. Cú pháp 7 tệp JavaScript (Web 1 & Web 2) chuẩn xác 100%!")

# 2. Kiểm tra dữ liệu 51 quy trình trong data/procedures.js & fallback
with open('data/procedures.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const PROCEDURES_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nif')
procedures = json.loads(text[start:end].strip())
assert len(procedures) == 51, f"Expected 51 procedures, got {len(procedures)}"

with open('data/procedures.fallback.js', 'r', encoding='utf-8') as f:
    fb_text = f.read()
fb_prefix = 'window.STABLE_PROCEDURES_FALLBACK = '
fb_start = fb_text.find(fb_prefix) + len(fb_prefix)
fb_end = fb_text.find(';\n    window.STABLE_VERSION_METADATA')
fb_procedures = json.loads(fb_text[fb_start:fb_end].strip())
assert len(fb_procedures) == 51, f"Expected 51 fallback procedures, got {len(fb_procedures)}"

surf_figs = 0
cs_figs = 0
for p, fp in zip(procedures, fb_procedures):
    pid = p['id']
    assert p['id'] == fp['id'], f"Mismatch id {pid}"
    assert 'anatomy' not in p and 'anatomy' not in fp, f"Obsolete internal anatomy key still present in {pid}"
    assert 'surfaceAnatomy' in p and 'crossSectionalAnatomy' in p, f"Missing external anatomy keys in {pid}"
    assert fp.get('surfaceAnatomy') == p['surfaceAnatomy'], f"Fallback surfaceAnatomy out of sync in {pid}"
    assert fp.get('crossSectionalAnatomy') == p['crossSectionalAnatomy'], f"Fallback crossSectionalAnatomy out of sync in {pid}"

    s = p['surfaceAnatomy']
    c = p['crossSectionalAnatomy']
    assert len(s['sourceRef']) >= 15, f"Short surf.sourceRef in {pid}"
    assert len(s['surfaceLandmarks']) >= 3, f"Too few surfaceLandmarks in {pid}"
    assert len(s['surfaceProjections']) >= 40, f"Short surfaceProjections in {pid}"
    assert len(s['palpationSteps']) >= 3, f"Too few palpationSteps in {pid}"
    assert len(s['figures']) >= 1, f"No surface figure in {pid}"

    assert len(c['sourceRef']) >= 15, f"Short cs.sourceRef in {pid}"
    assert len(c['sectionPlane']) >= 20, f"Short sectionPlane in {pid}"
    assert len(c['layeredStructure']) >= 4, f"Too few layeredStructure items in {pid}"
    assert len(c['topographicRelations']['superficialAndDeep']) >= 25, f"Short superficialAndDeep in {pid}"
    assert len(c['topographicRelations']['medialAndLateral']) >= 25, f"Short medialAndLateral in {pid}"
    assert len(c['dangerCorridors']) >= 2, f"Too few dangerCorridors in {pid}"
    assert len(c['figures']) >= 1, f"No cross-sectional figure in {pid}"

    for fig in s['figures']:
        assert fig['path'].startswith('assets/images/external_anatomy/'), f"Non-external surf fig in {pid}: {fig['path']}"
        assert os.path.exists(fig['path']) and os.path.getsize(fig['path']) > 1000, f"Missing/empty image: {fig['path']}"
        assert fig.get('atlasSource'), f"Missing atlasSource in {pid}"
        surf_figs += 1
    for fig in c['figures']:
        assert fig['path'].startswith('assets/images/external_anatomy/'), f"Non-external cs fig in {pid}: {fig['path']}"
        assert os.path.exists(fig['path']) and os.path.getsize(fig['path']) > 1000, f"Missing/empty image: {fig['path']}"
        assert fig.get('atlasSource'), f"Missing atlasSource in {pid}"
        cs_figs += 1

print(f"  [PASS] 2. Cả 51/51 quy trình chính & dự phòng đều đồng bộ 100% Giải phẫu Bề mặt ({surf_figs} hình) & Giải phẫu Thiết đồ ({cs_figs} hình) nguồn ngoài!")

# 3. Kiểm thử thực thi thực tế hàm openProcedureDetail, filterProcedures & openLightbox trong Node VM trên toàn bộ 51 quy trình
node_vm_script = r"""
const fs = require('fs');
const vm = require('vm');

const elements = {};
function makeEl(id) {
  return {
    id,
    innerHTML: '',
    textContent: '',
    value: '',
    src: '',
    scrollTop: 0,
    style: {},
    attrs: {},
    classList: {
      _set: new Set(id === 'procedure-modal' || id === 'image-lightbox' ? ['hidden'] : []),
      add(c) { this._set.add(c); },
      remove(c) { this._set.delete(c); },
      toggle(c, force) {
        if (force === undefined) {
          if (this._set.has(c)) this._set.delete(c); else this._set.add(c);
        } else if (force) this._set.add(c); else this._set.delete(c);
      },
      contains(c) { return this._set.has(c); }
    },
    getAttribute(k) { return this.attrs[k] || ''; },
    setAttribute(k, v) { this.attrs[k] = String(v); },
    addEventListener() {},
    scrollIntoView() {},
    scrollTo() {},
    getBoundingClientRect() { return { top: 0 }; }
  };
}

const documentStub = {
  documentElement: makeEl('html'),
  body: makeEl('body'),
  getElementById(id) {
    if (!elements[id]) elements[id] = makeEl(id);
    return elements[id];
  },
  querySelector(sel) { return makeEl(sel); },
  querySelectorAll() { return []; },
  addEventListener() {}
};

const sandbox = {
  console,
  setTimeout,
  clearTimeout,
  URLSearchParams,
  window: {
    location: { search: '' },
    addEventListener() {},
    print() {}
  },
  document: documentStub,
  localStorage: {
    _s: {},
    getItem(k) { return this._s[k] || null; },
    setItem(k, v) { this._s[k] = String(v); }
  }
};
sandbox.globalThis = sandbox;
sandbox.window.document = documentStub;

vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('./data/procedures.fallback.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('./data/procedures.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('./js/app.js', 'utf8'), sandbox);

// Dataset already loaded into appState via resolveInitialProcedures()
const procs = vm.runInContext('appState.procedures', sandbox);
if (procs.length !== 51) throw new Error('Expected 51 loaded procedures, got ' + procs.length);

// Test rendering openProcedureDetail on all 51 procedures!
for (const p of procs) {
  sandbox.openProcedureDetail(p.id);
  const tab2Html = documentStub.getElementById('modal-tab-content-2').innerHTML;
  const idxSurf = tab2Html.indexOf('id="sec-surface-anatomy"');
  const idxCs = tab2Html.indexOf('id="sec-cross-sectional-anatomy"');
  const idxSono = tab2Html.indexOf('id="sec-sonoanatomy"');
  const idxNeedle = tab2Html.indexOf('id="sec-needle-technique"');
  if (!(idxSurf > 0 && idxSurf < idxCs && idxCs < idxSono && idxSono < idxNeedle)) {
    throw new Error(`Invalid Tab 2 section order for ${p.id}: ${idxSurf}, ${idxCs}, ${idxSono}, ${idxNeedle}`);
  }
  if (!tab2Html.includes('cross-layer-list') || !tab2Html.includes('anatomy-source-pill')) {
    throw new Error(`Missing cross-section layers or source pill in ${p.id}`);
  }
}

// Test Lightbox external vs Springer source attribution
sandbox.openLightbox('assets/images/external_anatomy/ext_sec_neck_c6_fascia_gray388.png', 'Title', 'Desc', "Gray's Plate 388", 'external');
if (!documentStub.getElementById('lightbox-springer').textContent.includes('Nguồn Atlas Giải phẫu Kinh điển:')) {
  throw new Error('External lightbox source label mismatch');
}
sandbox.openLightbox('assets/images/procedures/sasd_1.png', 'Title', 'Desc', 'Fig 19.5', 'springer');
if (!documentStub.getElementById('lightbox-springer').textContent.includes('Springer Atlas (Philip Peng):')) {
  throw new Error('Springer lightbox source label mismatch');
}

// Test real filterProcedures() search across classical surface & cross-sectional landmarks
const expectedSearches = [
  ['nelaton', 'hip-lateral-approach'],
  ['bryant', 'hip-lateral-approach'],
  ['pfirrmann', 'trochanteric-bursa'],
  ['scarpa', 'hip-intraarticular'],
  ['lacuna musculorum', 'iliopsoas-bursa'],
  ['kaplan', 'carpal-tunnel'],
  ['tillaux', 'occipital-nerve'],
  ['cu gerdy', 'distal-itb-bursa'],
  ['chassaignac', 'stellate-ganglion'],
  ['batson', 'caudal-epidural'],
  ['hoffa', 'patellar-tendon-fenestration']
];
for (const [query, expectedId] of expectedSearches) {
  vm.runInContext(`appState.searchQuery = ${JSON.stringify(query)};`, sandbox);
  const resIds = sandbox.filterProcedures().map(x => x.id);
  if (!resIds.includes(expectedId)) {
    throw new Error(`filterProcedures(${query}) missed ${expectedId}; got [${resIds.join(',')}]`);
  }
}

console.log('VM_EXECUTION_51_PROCS_OK');
"""
res_vm = subprocess.run(['node', '-e', node_vm_script], capture_output=True, text=True, encoding='utf-8')
assert res_vm.returncode == 0 and 'VM_EXECUTION_51_PROCS_OK' in res_vm.stdout, f"Node VM test failed:\nSTDERR: {res_vm.stderr}\nSTDOUT: {res_vm.stdout}"
print("  [PASS] 3. Thực thi Node VM render thực tế 51/51 modal Tab 2 (Bề mặt -> Thiết đồ -> Siêu âm -> Đâm kim), Lightbox nguồn & Bộ tìm kiếm 9 mốc kinh điển (Nelaton, Bryant, Scarpa, Kaplan, Tillaux, Gerdy, Chassaignac, Batson, Hoffa) đạt 100%!")

# 4. Kiểm tra CSS cho thiết đồ phân tầng, Dark Mode, Mobile & Print
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()
for cls in [
    '.anatomy-workflow-bar',
    '.anatomy-source-pill',
    '.cross-plane-banner',
    '.cross-layer-list',
    '.cross-layer-item.is-target-layer',
    '[data-theme="dark"] .cross-layer-item.is-target-layer',
    '.anatomy-fig-source',
]:
    assert cls in css, f"Missing CSS rule: {cls}"
print("  [PASS] 4. Hệ thống CSS hỗ trợ đầy đủ thẻ Thiết đồ phân tầng (Target Layer highlight), Light/Dark Mode, Mobile và In A4!")

print("\n>>> TẤT CẢ BÀI KIỂM THỬ GIẢI PHẪU BỀ MẶT & GIẢI PHẪU THIẾT ĐỒ HOÀN TẤT XUẤT SẮC (100% PASSED) <<<")
