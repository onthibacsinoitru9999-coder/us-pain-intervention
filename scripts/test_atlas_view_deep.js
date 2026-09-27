// Test Atlas View Vietnamese Search & Lightbox Navigation
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

console.log("=== ATLAS VIEW VIETNAMESE SEARCH & LIGHTBOX UNIT TESTS ===");

const dom = {
  elements: {},
  getElementById(id) {
    if (!this.elements[id]) {
      this.elements[id] = {
        id,
        innerHTML: '',
        textContent: '',
        value: '',
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

// Load datasets and controller
const atlasCode = fs.readFileSync('data/deepak_atlas_catalog.js', 'utf-8');
const screeningCode = fs.readFileSync('data/screening.js', 'utf-8');
const controllerCode = fs.readFileSync('js/screening.js', 'utf-8');

vm.runInContext(atlasCode + '\n' + screeningCode + '\n' + controllerCode + '\n; this.screeningState = screeningState; this.applyFilters = applyFilters; this.switchMode = switchMode; this.renderAtlasView = renderAtlasView; this.openAtlasLightbox = openAtlasLightbox; this.openLightboxIndex = openLightboxIndex;', context);

const state = context.screeningState;
assert.ok(state.atlasCatalog.length === 279, `Expected 279 atlas figures, got ${state.atlasCatalog.length}`);
console.log(`  [PASS] Atlas catalog initialized with ${state.atlasCatalog.length} figures`);

// 1. Test Vietnamese search: 'khớp vai'
state.searchQuery = 'khớp vai';
state.atlasChapterFilter = 'all';
let listVai = context.renderAtlasView();
assert.ok(listVai.length > 0, `Expected results for 'khớp vai', got ${listVai.length}`);
console.log(`  [PASS] Atlas search for 'khớp vai' returned ${listVai.length} figures`);

// 2. Test Vietnamese search: 'thắt lưng'
state.searchQuery = 'thắt lưng';
let listLung = context.renderAtlasView();
assert.ok(listLung.length > 0, `Expected results for 'thắt lưng', got ${listLung.length}`);
console.log(`  [PASS] Atlas search for 'thắt lưng' returned ${listLung.length} figures`);

// 3. Test Vietnamese search: 'sụn chêm'
state.searchQuery = 'sụn chêm';
let listCheme = context.renderAtlasView();
assert.ok(listCheme.length > 0, `Expected results for 'sụn chêm', got ${listCheme.length}`);
console.log(`  [PASS] Atlas search for 'sụn chêm' returned ${listCheme.length} figures`);

// 4. Test search for specific maneuver 'sbtt'
state.searchQuery = 'sbtt';
let listSbtt = context.renderAtlasView();
assert.ok(listSbtt.length >= 1, `Expected at least 1 figure for 'sbtt', got ${listSbtt.length}`);
console.log(`  [PASS] Atlas search for 'sbtt' returned ${listSbtt.length} figures`);

// 5. Test Lightbox caption enrichment
context.openAtlasLightbox(0);
const descEl = dom.getElementById('lightbox-desc');
assert.ok(descEl.textContent.length > 0, 'Lightbox description should not be empty');
console.log(`  [PASS] Lightbox opened with enriched caption: "${descEl.textContent.slice(0, 60)}..."`);

// 6. Test mode switching restores currentModuleFigures
state.selectedModuleId = 'shoulder-pain';
context.switchMode('modules');
assert.strictEqual(state.activeMode, 'modules');
assert.ok(state.currentModuleFigures.length <= 15, 
  `Expected module figures to be restored to module size (got ${state.currentModuleFigures.length})`);
console.log(`  [PASS] switchMode('modules') cleanly restored currentModuleFigures to module level (${state.currentModuleFigures.length} figures)`);

console.log("\n>>> ALL ATLAS DEEP TESTS PASSED 100%! <<<\n");
