// Comprehensive End-to-End Test Suite for MSK-Differential Screening Pro
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const { execSync } = require('child_process');

console.log('=== TEST 1: SYNTAX CHECK ===');
execSync('node -c data/screening.js');
console.log('  [PASS] data/screening.js syntax is valid.');
execSync('node -c data/screening.fallback.js');
console.log('  [PASS] data/screening.fallback.js syntax is valid.');
execSync('node -c js/screening.js');
console.log('  [PASS] js/screening.js syntax is valid.');

console.log('\n=== TEST 2: DATA STRUCTURE INTEGRITY ===');
const screening = require('../data/screening.js');
const fallback = require('../data/screening.fallback.js');

assert.strictEqual(screening.SCREENING_DATA.length, 8, 'Must have exactly 8 symptom modules');
assert.strictEqual(fallback.STABLE_SCREENING_FALLBACK.length, 8, 'Fallback must have exactly 8 symptom modules');
assert.strictEqual(screening.RED_FLAGS_MASTER.length, 10, 'Must have 10 master red flags');
assert.strictEqual(screening.LAB_TESTS_GUIDE.length, 12, 'Must have 12 lab tests');
assert.strictEqual(screening.DRUG_INDUCED_PAIN_GUIDE.length, 7, 'Must have 7 drug-induced classes');
assert.strictEqual(screening.GUIDEMAP_ALGORITHM.stages.length, 3, 'Must have 3 algorithm stages');
console.log('  [PASS] All 5 primary and fallback data structures verified intact.');

// Verify Diagnostic Metrics & Web 1 mappings
let totalTests = 0;
screening.SCREENING_DATA.forEach(m => {
  (m.examination_procedures || []).forEach(t => {
    totalTests++;
    assert.ok(t.sensitivity, `Test ${t.name} in ${m.id} missing sensitivity`);
    assert.ok(t.specificity, `Test ${t.name} in ${m.id} missing specificity`);
    assert.ok(t.diagnostic_role, `Test ${t.name} in ${m.id} missing diagnostic_role`);
  });
});
assert.strictEqual(totalTests, 37, 'Must have exactly 37 provocative tests with metrics');
console.log(`  [PASS] All ${totalTests}/37 provocative tests have explicit Sn, Sp, and diagnostic_role.`);

let totalDiffRows = 0;
screening.SCREENING_DATA.forEach(m => {
  (m.differential_table || []).forEach(r => {
    totalDiffRows++;
    assert.ok(r.confirmatory_test, `Diff row ${r.condition} in ${m.id} missing confirmatory_test`);
    assert.ok(r.gold_standard, `Diff row ${r.condition} in ${m.id} missing gold_standard`);
  });
});
assert.strictEqual(totalDiffRows, 34, 'Must have exactly 34 differential table rows with gold standards');
console.log(`  [PASS] All ${totalDiffRows}/34 differential table rows have confirmatory tests and gold standards.`);

let totalAtlasFigs = 0;
screening.SCREENING_DATA.forEach(m => {
  totalAtlasFigs += (m.figures || []).length;
});
assert.strictEqual(totalAtlasFigs, 58, 'Must have exactly 58 Deepak Atlas figures');
console.log(`  [PASS] All 58/58 Deepak Atlas figures present across modules.`);

console.log('\n=== TEST 3: CONTROLLER & DOM INTERACTION SUITE ===');

// Setup mock DOM environment
const dom = {
  elements: {},
  getElementById(id) {
    if (!this.elements[id]) {
      this.elements[id] = {
        id,
        innerHTML: '',
        textContent: '',
        value: '',
        checked: false,
        className: '',
        _classes: new Set(),
        classList: {
          add(c) { this._classes = this._classes || new Set(); this._classes.add(c); },
          remove(c) { this._classes = this._classes || new Set(); this._classes.delete(c); },
          contains(c) { return this._classes ? this._classes.has(c) : false; }
        },
        style: {},
        setAttribute(k, v) { this[k] = v; },
        getAttribute(k) { return this[k]; },
        addEventListener() {},
        scrollIntoView() {}
      };
    }
    return this.elements[id];
  },
  querySelectorAll() { return []; },
  documentElement: { setAttribute() {} },
  addEventListener() {},
  body: { style: {} }
};

const context = {
  window: { innerWidth: 1200 },
  document: dom,
  localStorage: { getItem() { return null; }, setItem() {} },
  console: console
};

vm.createContext(context);
const screeningJs = fs.readFileSync('data/screening.js', 'utf8');
const controllerJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(screeningJs + '\n' + controllerJs + '\n; this.screeningState = screeningState; this.applyFilters = applyFilters; this.selectModule = selectModule; this.switchMode = switchMode; this.openLightboxIndex = openLightboxIndex; this.lightboxNext = lightboxNext; this.lightboxPrev = lightboxPrev; this.closeLightbox = closeLightbox; this.updateInteractiveGuidemap = updateInteractiveGuidemap; this.initScreeningApp = initScreeningApp;', context);

// Initialize App
context.initScreeningApp();

// 3.1 Initial State Check
assert.strictEqual(context.screeningState.selectedModuleId, 'systemic-widespread');
assert.ok(dom.getElementById('screening-detail-container').innerHTML.includes('Đau Toàn Thân'), 'Detail view must render Module 1 initially');
console.log('  [PASS] 3.1 Initial load rendered Module 1 successfully.');

// 3.2 Category Filter & Auto-Select Bug Fix Verification
context.screeningState.activeFilter = 'spine';
context.applyFilters();
assert.strictEqual(context.screeningState.selectedModuleId, 'cervical-pain', 'Auto-select must pick Cervical when filtering to spine');
assert.ok(dom.getElementById('screening-detail-container').innerHTML.includes('Cổ - Vai - Gáy'), 'Detail view must render Cervical');
assert.ok(dom.getElementById('screening-detail-container').innerHTML.includes('Bệnh Rễ Thần Kinh Cổ'), 'Detail view must show Cervical title');
console.log('  [PASS] 3.2 Category filter spine correctly auto-selects Cervical module and renders detail view.');

context.screeningState.activeFilter = 'upper';
context.applyFilters();
assert.strictEqual(context.screeningState.selectedModuleId, 'shoulder-pain', 'Auto-select must pick Shoulder when filtering to upper limb');
assert.ok(dom.getElementById('screening-detail-container').innerHTML.includes('Khớp Vai'), 'Detail view must show Shoulder title');
console.log('  [PASS] 3.3 Category filter upper limb correctly auto-selects Shoulder module.');

// 3.3 Empty Search Result Handling
context.screeningState.activeFilter = 'all';
context.screeningState.searchQuery = 'nonexistent_keyword_12345';
context.applyFilters();
assert.strictEqual(context.screeningState.filteredModules.length, 0);
assert.strictEqual(context.screeningState.selectedModuleId, null);
assert.ok(dom.getElementById('screening-detail-container').innerHTML.includes('Không tìm thấy nội dung phù hợp'), 'Detail view must show empty state on failed search');
console.log('  [PASS] 3.4 Empty search correctly clears detail view and displays informative empty state.');

// 3.4 Mode Switching & Dynamic Counters
context.screeningState.searchQuery = '';
context.switchMode('redflags');
assert.strictEqual(context.screeningState.activeMode, 'redflags');
assert.ok(dom.getElementById('search-result-count').textContent.includes('Cờ đỏ khẩn cấp'), 'Header count must display red flags count');
assert.ok(dom.getElementById('redflags-container').innerHTML.includes('Chùm Đuôi Ngựa'), 'Red flags table must render Cauda Equina');
console.log('  [PASS] 3.5 Mode redflags switched, rendered table and updated header counter.');

context.switchMode('labs');
assert.strictEqual(context.screeningState.activeMode, 'labs');
assert.ok(dom.getElementById('search-result-count').textContent.includes('Xét nghiệm MSK'), 'Header count must display lab tests count');
assert.ok(dom.getElementById('labs-container').innerHTML.includes('HLA-B27'), 'Labs view must render HLA-B27');
console.log('  [PASS] 3.6 Mode labs switched, rendered cards and updated header counter.');

context.switchMode('drugs');
assert.strictEqual(context.screeningState.activeMode, 'drugs');
assert.ok(dom.getElementById('search-result-count').textContent.includes('Nhóm thuốc gây đau'), 'Header count must display drug count');
assert.ok(dom.getElementById('drugs-container').innerHTML.includes('Statins'), 'Drugs view must render Statins');
console.log('  [PASS] 3.7 Mode drugs switched, rendered cards and updated header counter.');

// 3.5 Searching in Specialized Modes
context.screeningState.searchQuery = 'atorvastatin';
context.applyFilters();
assert.ok(dom.getElementById('search-result-count').textContent.includes('1 / 7 Nhóm thuốc'), 'Header counter must dynamically reflect filtered drugs');
console.log('  [PASS] 3.8 Searching in drugs mode correctly updates header counter (1 / 7).');

// 3.6 Interactive Guidemap Checklist Multi-flag Synthesis
context.switchMode('algorithm');
assert.strictEqual(context.screeningState.activeMode, 'algorithm');
assert.ok(dom.getElementById('algorithm-container').innerHTML.includes('Bộ Kiểm Tra Sàng Lọc Tương Tác'), 'Interactive checklist box must render');

// Test with Red Flags + Visceral + Drugs all checked
context.screeningState.guidemapChecklist.hasRedFlags = true;
context.screeningState.guidemapChecklist.hasVisceral = true;
context.screeningState.guidemapChecklist.hasDrugHistory = true;
context.screeningState.guidemapChecklist.painOrigin = 'radicular';
context.updateInteractiveGuidemap(true);

const outputHtml = dom.getElementById('interactive-guidemap-output').innerHTML;
assert.ok(outputHtml.includes('CỜ ĐỎ KHẨN CẤP'), 'Must show Red flag warning');
assert.ok(outputHtml.includes('CHỐNG CHỈ ĐỊNH'), 'Must state contraindication for procedures');
assert.ok(outputHtml.includes('ĐAU CHUYỂN TẠNG'), 'Must show Visceral warning simultaneously');
assert.ok(outputHtml.includes('ĐAU DO TÁC DỤNG PHỤ'), 'Must show Drug warning simultaneously');
console.log('  [PASS] 3.9 Interactive Guidemap synthesizes multiple flags simultaneously without dropping warnings.');

// Test with clean flags and facet pain mechanism
context.screeningState.guidemapChecklist.hasRedFlags = false;
context.screeningState.guidemapChecklist.hasVisceral = false;
context.screeningState.guidemapChecklist.hasDrugHistory = false;
context.screeningState.guidemapChecklist.painOrigin = 'facet';
context.updateInteractiveGuidemap(true);
const facetOutput = dom.getElementById('interactive-guidemap-output').innerHTML;
assert.ok(facetOutput.includes('KẾT QUẢ GIAI ĐOẠN 3'), 'Must indicate suitable for intervention');
assert.ok(facetOutput.includes('Hội chứng diện khớp cạnh sống'), 'Must diagnose facet syndrome');
assert.ok(facetOutput.includes('Phong bế nhánh trong'), 'Must recommend Web 1 medial branch block');
console.log('  [PASS] 3.10 Clean screening with facet origin gives tailored Web 1 procedure recommendation.');

// 3.7 Lightbox Atlas Navigation Verification
context.switchMode('modules');
context.screeningState.activeFilter = 'all';
context.screeningState.searchQuery = '';
context.applyFilters();
context.selectModule('cervical-pain'); // 8 elite figures

assert.strictEqual(context.screeningState.currentModuleFigures.length, 8);

// Open first image
context.openLightboxIndex(0);
assert.strictEqual(context.screeningState.lightboxIndex, 0);
assert.strictEqual(dom.getElementById('lightbox-counter').textContent, 'Hình 1 / 8');

// Click Next
context.lightboxNext();
assert.strictEqual(context.screeningState.lightboxIndex, 1);
assert.strictEqual(dom.getElementById('lightbox-counter').textContent, 'Hình 2 / 8');

// Click Prev
context.lightboxPrev();
assert.strictEqual(context.screeningState.lightboxIndex, 0);
assert.strictEqual(dom.getElementById('lightbox-counter').textContent, 'Hình 1 / 8');

// Click Prev at 0 (Circular Wrap Around to end)
context.lightboxPrev();
assert.strictEqual(context.screeningState.lightboxIndex, 7);
assert.strictEqual(dom.getElementById('lightbox-counter').textContent, 'Hình 8 / 8');

// Close Lightbox
context.closeLightbox();
assert.ok(dom.getElementById('image-lightbox').classList.contains('hidden'));
console.log('  [PASS] 3.11 Lightbox navigation (Next, Prev, Counter, Circular Wrap, Close) passed 100%.');

// 3.8 Verify Rendered Provocative Tests Badges and Web 1 Links in Detail View
const cervicalHtml = dom.getElementById('screening-detail-container').innerHTML;
assert.ok(cervicalHtml.includes('Độ nhạy (Sn):'), 'Must render Sensitivity badge in tests');
assert.ok(cervicalHtml.includes('Độ đặc hiệu (Sp):'), 'Must render Specificity badge in tests');
assert.ok(cervicalHtml.includes('Vai trò chẩn đoán:'), 'Must render Diagnostic Role');
assert.ok(cervicalHtml.includes('cervical-nerve-root'), 'Must render Web 1 cervical nerve root procedure');
assert.ok(cervicalHtml.includes('Nghiệm pháp khẳng định'), 'Must render confirmatory test column');
assert.ok(cervicalHtml.includes('Tiêu chuẩn vàng CLS'), 'Must render gold standard column');
console.log('  [PASS] 3.12 Provocative test accuracy badges, differential columns, and Web 1 procedure cards verified in HTML.');

console.log('\n>>> TẤT CẢ CÁC BÀI KIỂM THỬ TỰ ĐỘNG CHO CLINICAL GUIDEMAP ĐỀU ĐẠT 100% PASS! <<<');
