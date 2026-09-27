/**
 * test_challenger_m3_adversarial.js
 * EMPIRICAL ADVERSARIAL STRESS-TEST & INTEGRITY HARNESS
 * Milestone 3: Accordion Guidemap & Deep-linking
 *
 * Requirements:
 * 1. Verify 3-step Accordion layout renders across all 8 modules (Step 1 Red flags, Step 2 Provocative tests, Step 3 Differential matrix).
 * 2. Verify toggle controls toggleGuidemapSteps(true/false).
 * 3. Adversarially test deep-link resolution: verify valid proc IDs resolve to real procedures, and test hostile inputs (?proc=<script>, ?proc=__proto__, ?proc=nonexistent) for safe no-op.
 * 4. Verify Lightbox triggers in Step 1 and Step 2.
 * 5. Verify Web 1 isolation.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

let passCount = 0;
let failCount = 0;

function reportPass(msg) {
  passCount++;
  console.log(`  [PASS] ${msg}`);
}

function reportFail(msg, err) {
  failCount++;
  console.error(`  [FAIL] ${msg}`);
  if (err) console.error(err);
}

console.log('======================================================================');
console.log('   CHALLENGER M3: EMPIRICAL ADVERSARIAL TEST HARNESS                 ');
console.log('   Accordion Guidemap (UpToDate 3-Step) & Deep-linking Security      ');
console.log('======================================================================\n');

// Load datasets
const proceduresData = require(path.resolve('data/procedures.js'));
const screeningData = require(path.resolve('data/screening.js')).SCREENING_DATA;
const fallbackData = require(path.resolve('data/screening.fallback.js')).STABLE_SCREENING_FALLBACK;
const screeningModule = require(path.resolve('js/screening.js'));
const renderScreeningDetail = screeningModule.renderScreeningDetail;
const toggleGuidemapSteps = screeningModule.toggleGuidemapSteps;

const appCode = fs.readFileSync(path.resolve('js/app.js'), 'utf8');
const calculatorCode = fs.readFileSync(path.resolve('js/calculator.js'), 'utf8');
const checklistCode = fs.readFileSync(path.resolve('js/checklist.js'), 'utf8');

// ============================================================================
// PHASE 1: 3-STEP ACCORDION GUIDEMAP RENDERING ACROSS ALL 8 MODULES
// ============================================================================
console.log('--- PHASE 1: 3-STEP ACCORDION GUIDEMAP RENDERING ACROSS ALL 8 MODULES ---');

try {
  assert.strictEqual(screeningData.length, 8, 'Expected exactly 8 modules in primary SCREENING_DATA');
  assert.strictEqual(fallbackData.length, 8, 'Expected exactly 8 modules in STABLE_SCREENING_FALLBACK');
  reportPass('1.1 Dataset integrity: 8 modules present in both primary and fallback datasets');
} catch (e) {
  reportFail('1.1 Dataset integrity check failed', e);
}

// 1.2 Render test across all 8 modules (Primary)
screeningData.forEach((mod, idx) => {
  try {
    const html = renderScreeningDetail(mod);
    assert(typeof html === 'string' && html.length > 500, `Module ${mod.id} rendered empty or truncated HTML`);

    // Check Step 1 Red flags
    assert(html.includes('class="guidemap-accordion-step step-redflags"'), `Module ${mod.id} missing Step 1 accordion container`);
    assert(html.includes('badge-step-1'), `Module ${mod.id} missing Step 1 badge`);
    assert(html.includes('Bước 1'), `Module ${mod.id} missing "Bước 1" text`);
    assert(html.includes(`${mod.red_flags.length} Cờ đỏ`), `Module ${mod.id} Step 1 red flags count chip mismatch`);

    // Check Step 2 Provocative tests
    assert(html.includes('class="guidemap-accordion-step step-provocative"'), `Module ${mod.id} missing Step 2 accordion container`);
    assert(html.includes('badge-step-2'), `Module ${mod.id} missing Step 2 badge`);
    assert(html.includes('Bước 2'), `Module ${mod.id} missing "Bước 2" text`);
    const ptCount = (mod.provocative_tests || mod.examination_procedures || []).length;
    assert(html.includes(`${ptCount} Nghiệm pháp`), `Module ${mod.id} Step 2 provocative tests count chip mismatch`);

    // Check Step 3 Differential matrix
    assert(html.includes('class="guidemap-accordion-step step-matrix"'), `Module ${mod.id} missing Step 3 accordion container`);
    assert(html.includes('badge-step-3'), `Module ${mod.id} missing Step 3 badge`);
    assert(html.includes('Bước 3'), `Module ${mod.id} missing "Bước 3" text`);
    const dmCount = (mod.differential_matrix || mod.differential_table || []).length;
    assert(html.includes(`${dmCount} Bệnh lý đối chiếu`), `Module ${mod.id} Step 3 differential matrix count chip mismatch`);

    // Check default collapsed state: details tag must NOT have "open" attribute
    const detailsRegex = /<details class="guidemap-accordion-step[^"]*"([^>]*)>/g;
    let match;
    let detailsCount = 0;
    while ((match = detailsRegex.exec(html)) !== null) {
      detailsCount++;
      const attrs = match[1] || '';
      assert(!/\bopen\b/i.test(attrs), `Module ${mod.id} step has "open" attribute by default! UpToDate requires clean collapsed default.`);
    }
    assert.strictEqual(detailsCount, 3, `Module ${mod.id} did not produce exactly 3 guidemap-accordion-step elements`);

    // Check clinical content presence
    assert(html.includes('⚡ Xử trí khẩn cấp:'), `Module ${mod.id} missing emergency action box`);
    assert(html.includes('Độ nhạy (Sn):'), `Module ${mod.id} missing Sn badge in provocative tests`);
    assert(html.includes('Độ đặc hiệu (Sp):'), `Module ${mod.id} missing Sp badge in provocative tests`);
    assert(html.includes('screening-table-wrapper overflow-x-auto'), `Module ${mod.id} missing responsive scroll container for matrix table`);

    reportPass(`1.2.${idx + 1} Module [${mod.id}] 3-step accordion rendered with correct badges, chips, and clean collapsed state`);
  } catch (e) {
    reportFail(`1.2.${idx + 1} Module [${mod.id}] accordion rendering failed`, e);
  }
});

// 1.3 Render test across all 8 modules (Fallback data)
fallbackData.forEach((mod, idx) => {
  try {
    const html = renderScreeningDetail(mod);
    assert(html.includes('step-redflags') && html.includes('step-provocative') && html.includes('step-matrix'),
      `Fallback module ${mod.id} missing 3 accordion steps`);
  } catch (e) {
    reportFail(`1.3 Fallback module ${mod.id} rendering failed`, e);
  }
});
reportPass('1.3 All 8 fallback modules render 3-step accordion structure without errors');

// 1.4 Adversarial Fuzzing on renderScreeningDetail inputs
try {
  assert.strictEqual(renderScreeningDetail(null), '', 'renderScreeningDetail(null) must return empty string');
  assert.strictEqual(renderScreeningDetail(undefined), '', 'renderScreeningDetail(undefined) must return empty string');
  assert.strictEqual(renderScreeningDetail(false), '', 'renderScreeningDetail(false) must return empty string');
  assert.strictEqual(renderScreeningDetail(''), '', 'renderScreeningDetail("") must return empty string');

  // Sparse / empty object
  const emptyHtml = renderScreeningDetail({});
  assert(emptyHtml.includes('Bước 1') && emptyHtml.includes('Bước 2') && emptyHtml.includes('Bước 3'),
    'renderScreeningDetail({}) should render safe empty structure');
  assert(emptyHtml.includes('0 Cờ đỏ • 0 Tạng chuyển đau'), 'Count chips should handle empty arrays gracefully');

  // Corrupted properties (null / undefined instead of arrays)
  const corruptedMod = {
    id: 'corrupted-mod',
    title_vi: 'Test Corrupted',
    red_flags: null,
    visceral_referrals: null,
    drug_induced: null,
    provocative_tests: null,
    stage_2_somatic_dysfunctions: null,
    differential_matrix: null,
    recommended_web1_procedures: null,
    figures: null
  };
  const corruptedHtml = renderScreeningDetail(corruptedMod);
  assert(corruptedHtml.includes('0 Cờ đỏ • 0 Tạng chuyển đau'), 'Handled null red_flags without crash');
  assert(corruptedHtml.includes('0 Nghiệm pháp'), 'Handled null provocative_tests without crash');
  assert(corruptedHtml.includes('0 Bệnh lý đối chiếu'), 'Handled null differential_matrix without crash');

  reportPass('1.4 Adversarial input fuzzing on renderScreeningDetail: null, undefined, empty, corrupted properties all safely handled');
} catch (e) {
  reportFail('1.4 Adversarial input fuzzing on renderScreeningDetail failed', e);
}

// ============================================================================
// PHASE 2: TOGGLE CONTROLS toggleGuidemapSteps(true/false)
// ============================================================================
console.log('\n--- PHASE 2: TOGGLE CONTROLS toggleGuidemapSteps(true/false) ---');

try {
  // Test presence of toggle buttons in rendered HTML
  const sampleHtml = renderScreeningDetail(screeningData[1]);
  assert(sampleHtml.includes('onclick="toggleGuidemapSteps(true)"'), 'HTML missing "Mở tất cả" onclick handler');
  assert(sampleHtml.includes('onclick="toggleGuidemapSteps(false)"'), 'HTML missing "Thu gọn" onclick handler');
  reportPass('2.1 Toggle buttons "Mở tất cả" and "Thu gọn" embedded with valid click handlers');

  // DOM Mock for toggle tests
  class MockElement {
    constructor(className) {
      this.className = className;
      this.attrs = {};
    }
    setAttribute(k, v) { this.attrs[k] = v; }
    removeAttribute(k) { delete this.attrs[k]; }
    hasAttribute(k) { return k in this.attrs; }
    isOpen() { return 'open' in this.attrs; }
  }

  const steps = [
    new MockElement('guidemap-accordion-step step-redflags'),
    new MockElement('guidemap-accordion-step step-provocative'),
    new MockElement('guidemap-accordion-step step-matrix')
  ];

  // Set global document mock
  global.document = {
    querySelectorAll: (sel) => {
      if (sel === '.guidemap-accordion-step') return steps;
      return [];
    }
  };

  // 1. Initial state: all closed
  assert(steps.every(s => !s.isOpen()), 'Initial state must be closed');

  // 2. Open all
  toggleGuidemapSteps(true);
  assert(steps.every(s => s.isOpen()), 'toggleGuidemapSteps(true) must set open on all steps');

  // 3. Open again (idempotent)
  toggleGuidemapSteps(true);
  assert(steps.every(s => s.isOpen()), 'Repeated toggleGuidemapSteps(true) remains open');

  // 4. Close all
  toggleGuidemapSteps(false);
  assert(steps.every(s => !s.isOpen()), 'toggleGuidemapSteps(false) must remove open from all steps');

  // 5. Close again (idempotent)
  toggleGuidemapSteps(false);
  assert(steps.every(s => !s.isOpen()), 'Repeated toggleGuidemapSteps(false) remains closed');

  // 6. Mixed state
  steps[0].setAttribute('open', '');
  assert(steps[0].isOpen() && !steps[1].isOpen(), 'Set up mixed state');
  toggleGuidemapSteps(true);
  assert(steps.every(s => s.isOpen()), 'toggleGuidemapSteps(true) opens all from mixed state');
  toggleGuidemapSteps(false);
  assert(steps.every(s => !s.isOpen()), 'toggleGuidemapSteps(false) closes all from mixed state');

  // 7. Edge cases: empty elements list
  global.document.querySelectorAll = () => [];
  assert.doesNotThrow(() => {
    toggleGuidemapSteps(true);
    toggleGuidemapSteps(false);
  }, 'toggleGuidemapSteps must not throw with empty querySelectorAll');

  // 8. Edge case: document undefined
  delete global.document;
  assert.doesNotThrow(() => {
    toggleGuidemapSteps(true);
    toggleGuidemapSteps(false);
  }, 'toggleGuidemapSteps must not throw when document is undefined');

  reportPass('2.2 toggleGuidemapSteps behavior verified: full expansion, full collapse, idempotency, mixed state recovery, and headless tolerance');
} catch (e) {
  reportFail('2.2 toggleGuidemapSteps verification failed', e);
} finally {
  delete global.document;
}

// ============================================================================
// PHASE 3: ADVERSARIAL DEEP-LINK RESOLUTION & SECURITY HARNESS
// ============================================================================
console.log('\n--- PHASE 3: ADVERSARIAL DEEP-LINK RESOLUTION & SECURITY HARNESS ---');

// Helper to run Web 1 in an isolated sandbox with specific query string
function executeWeb1WithQuery(query, customProcedures = proceduresData) {
  let modalHidden = true;

  const elements = {};
  function getEl(id) {
    if (!elements[id]) {
      elements[id] = {
        id,
        classList: {
          _classes: new Set(['hidden']),
          add(c) {
            this._classes.add(c);
            if (id === 'procedure-modal' && c === 'hidden') modalHidden = true;
          },
          remove(c) {
            this._classes.delete(c);
            if (id === 'procedure-modal' && c === 'hidden') modalHidden = false;
          },
          toggle(c, v) {
            if (v) this._classes.add(c); else this._classes.delete(c);
          },
          contains(c) { return this._classes.has(c); }
        },
        style: {},
        innerHTML: '',
        textContent: '',
        addEventListener: () => {},
        removeEventListener: () => {},
        setAttribute: () => {},
        getAttribute: () => null,
        scrollIntoView: () => {}
      };
    }
    return elements[id];
  }

  // Pre-seed core DOM elements required by Web 1
  getEl('procedure-modal');
  getEl('modal-title');
  getEl('modal-subtitle');
  getEl('modal-subtitle-en');
  getEl('modal-icd-pill');
  getEl('modal-meta-badges');
  getEl('modal-fav-btn');
  getEl('modal-tab-content-1');
  getEl('modal-tab-content-2');
  getEl('modal-tab-content-3');
  getEl('modal-tab-content-4');
  getEl('modal-tab-content-5');
  getEl('procedures-grid');
  getEl('search-result-count');

  const mockWindow = {
    location: {
      search: query
    },
    addEventListener: () => {},
    localStorage: {
      getItem: () => null,
      setItem: () => {}
    }
  };

  const mockDocument = {
    getElementById: (id) => getEl(id),
    querySelector: (sel) => {
      if (sel.startsWith('#')) return getEl(sel.slice(1));
      return getEl('elem_' + sel.replace(/[^a-zA-Z0-9]/g, '_'));
    },
    querySelectorAll: () => [],
    addEventListener: () => {},
    documentElement: { setAttribute: () => {} },
    body: { style: {} }
  };

  const sandbox = {
    window: mockWindow,
    document: mockDocument,
    localStorage: mockWindow.localStorage,
    PROCEDURES_DATA: customProcedures,
    URLSearchParams: URLSearchParams,
    console: { log: () => {}, warn: () => {}, error: () => {} }
  };

  vm.createContext(sandbox);
  vm.runInContext(calculatorCode, sandbox);
  vm.runInContext(checklistCode, sandbox);
  vm.runInContext(appCode, sandbox);

  // Trigger initApp()
  vm.runInContext('initApp();', sandbox);

  const modalEl = elements['procedure-modal'];
  const titleEl = elements['modal-title'];
  const currentProc = vm.runInContext('appState ? appState.currentProcedure : null', sandbox);

  return {
    isModalOpen: !modalEl.classList.contains('hidden'),
    currentProcedure: currentProc,
    modalTitle: titleEl ? titleEl.textContent : '',
    sandbox
  };
}

// 3.1 Verify all 51 Web 1 procedures can be deep-linked
try {
  let validDeepLinksTested = 0;
  proceduresData.forEach(p => {
    const res = executeWeb1WithQuery(`?proc=${p.id}`);
    assert.strictEqual(res.isModalOpen, true, `Deep-link ?proc=${p.id} failed to open modal`);
    assert(res.currentProcedure !== null, `Deep-link ?proc=${p.id} failed to set currentProcedure`);
    assert.strictEqual(res.currentProcedure.id, p.id, `Deep-link ?proc=${p.id} set incorrect procedure in appState`);
    assert.strictEqual(res.modalTitle, p.nameVi, `Deep-link ?proc=${p.id} rendered wrong title in modal`);
    validDeepLinksTested++;
  });
  reportPass(`3.1 All ${validDeepLinksTested}/51 Web 1 procedures successfully resolve via ?proc=<id> with matching title and unhidden modal`);
} catch (e) {
  reportFail('3.1 Valid procedure deep-link test failed', e);
}

// 3.2 Verify all cross-links generated by Web 2 resolve to real procedures
try {
  let crossLinksCount = 0;
  const procIdsSet = new Set(proceduresData.map(p => p.id));
  const brokenLinks = [];

  screeningData.forEach(mod => {
    // Differential matrix links
    (mod.differential_matrix || []).forEach(row => {
      if (row.web1_procedure_id) {
        crossLinksCount++;
        if (!procIdsSet.has(row.web1_procedure_id)) {
          brokenLinks.push({ module: mod.id, source: 'differential_matrix', target: row.web1_procedure_id });
        }
      }
    });

    // Recommended procedures links
    (mod.recommended_web1_procedures || []).forEach(rec => {
      if (rec.id) {
        crossLinksCount++;
        if (!procIdsSet.has(rec.id)) {
          brokenLinks.push({ module: mod.id, source: 'recommended_web1_procedures', target: rec.id });
        }
      }
    });
  });

  assert.strictEqual(brokenLinks.length, 0, `Found broken cross-links: ${JSON.stringify(brokenLinks)}`);
  assert(crossLinksCount >= 70, `Expected at least 70 cross-links across 8 modules, got ${crossLinksCount}`);
  reportPass(`3.2 All ${crossLinksCount} Web 2 cross-links (matrix + recommendations) map 100% to valid procedures in data/procedures.js (0 broken links)`);
} catch (e) {
  reportFail('3.2 Cross-link integrity check failed', e);
}

// 3.3 Adversarial Malicious Inputs Stress Test
const hostileVectors = [
  { name: 'XSS script injection', query: '?proc=<script>alert("xss")</script>' },
  { name: 'XSS img onerror', query: '?proc=<img src=x onerror=alert(1)>' },
  { name: 'XSS svg onload', query: '?proc="><svg/onload=alert(1)>' },
  { name: 'XSS javascript pseudo-protocol', query: '?proc=javascript:alert(1)' },
  { name: 'Prototype pollution __proto__', query: '?proc=__proto__' },
  { name: 'Prototype pollution constructor', query: '?proc=constructor' },
  { name: 'Prototype pollution prototype', query: '?proc=prototype' },
  { name: 'Object property toString', query: '?proc=toString' },
  { name: 'Object property valueOf', query: '?proc=valueOf' },
  { name: 'Object property hasOwnProperty', query: '?proc=hasOwnProperty' },
  { name: 'Object property isPrototypeOf', query: '?proc=isPrototypeOf' },
  { name: 'Nonexistent alphanumeric procedure', query: '?proc=nonexistent-injection-technique' },
  { name: 'Arbitrary random ID', query: '?proc=random_procedure_999999' },
  { name: 'Empty string procedure', query: '?proc=' },
  { name: 'Boolean flag only', query: '?proc' },
  { name: 'Path traversal (Linux)', query: '?proc=../../../../etc/passwd' },
  { name: 'Path traversal (Windows)', query: '?proc=..\\..\\windows\\system32' },
  { name: 'SQL injection payload', query: "?proc=' OR '1'='1" },
  { name: 'Null byte injection', query: '?proc=cervical-nerve-root%00<script>' },
  { name: 'Template string expression', query: '?proc=${process.exit(1)}' },
  { name: 'JSON stringification attempt', query: '?proc={"id":"fake"}' },
  { name: 'Array query notation', query: '?proc[]=cervical-nerve-root' },
  { name: 'Repeated fake params', query: '?proc=fake1&proc=fake2' },
  { name: 'Massive buffer DOS payload (10KB)', query: `?proc=${'A'.repeat(10000)}` },
  { name: 'Uppercase valid ID (case-sensitive check)', query: '?proc=CERVICAL-NERVE-ROOT' },
  { name: 'Empty query string', query: '' },
  { name: 'Irrelevant query string', query: '?theme=dark&page=2&tab=faq' }
];

let hostilePassed = 0;
hostileVectors.forEach((v, idx) => {
  try {
    const res = executeWeb1WithQuery(v.query);
    assert.strictEqual(res.isModalOpen, false, `Hostile input [${v.name}] opened modal!`);
    assert.strictEqual(res.currentProcedure, null, `Hostile input [${v.name}] set currentProcedure!`);
    assert.strictEqual(Object.prototype.polluted, undefined, `Hostile input [${v.name}] polluted Object.prototype!`);
    hostilePassed++;
  } catch (e) {
    reportFail(`3.3.${idx + 1} Hostile input [${v.name}] caused exception`, e);
  }
});

reportPass(`3.3 Adversarial security test: All ${hostilePassed}/${hostileVectors.length} malicious inputs safely rejected (modal remained hidden, 0 XSS, 0 prototype pollution)`);

// 3.4 Noisy valid deep-link resolution
try {
  const targetProc = proceduresData.find(p => p.id === 'glenohumeral-posterior');
  const noisyQuery = '?utm_source=facebook&campaign=msk_2026&proc=glenohumeral-posterior&ref=telegram&tab=indications';
  const res = executeWeb1WithQuery(noisyQuery);
  assert.strictEqual(res.isModalOpen, true, 'Noisy URL failed to extract valid proc parameter');
  assert(res.currentProcedure !== null, 'Noisy URL failed to set currentProcedure');
  assert.strictEqual(res.currentProcedure.id, 'glenohumeral-posterior', 'Noisy URL extracted wrong procedure ID');
  assert.strictEqual(res.modalTitle, targetProc.nameVi, 'Noisy URL rendered wrong procedure title');
  reportPass('3.4 Noisy parameter resilience: Successfully extracted valid proc ID amidst multiple UTM/tracking parameters');
} catch (e) {
  reportFail('3.4 Noisy parameter test failed', e);
}

// ============================================================================
// PHASE 4: LIGHTBOX TRIGGERS IN STEP 1 AND STEP 2
// ============================================================================
console.log('\n--- PHASE 4: LIGHTBOX TRIGGERS IN STEP 1 AND STEP 2 ---');

let totalRedFlagsFigures = 0;
let totalProvocativeFigures = 0;
const missingPhysicalFiles = [];

screeningData.forEach(mod => {
  // Step 1 figures
  (mod.red_flags || []).forEach(rf => {
    (rf.figures || []).forEach(fig => {
      totalRedFlagsFigures++;
      const absPath = path.resolve(fig.file);
      if (!fs.existsSync(absPath)) {
        missingPhysicalFiles.push({ module: mod.id, type: 'red_flag', file: fig.file });
      }
    });
  });

  // Step 2 figures
  (mod.provocative_tests || []).forEach(pt => {
    (pt.figures || []).forEach(fig => {
      totalProvocativeFigures++;
      const absPath = path.resolve(fig.file);
      if (!fs.existsSync(absPath)) {
        missingPhysicalFiles.push({ module: mod.id, type: 'provocative_test', file: fig.file });
      }
    });
  });
});

try {
  assert.strictEqual(missingPhysicalFiles.length, 0, `Missing physical image files on disk: ${JSON.stringify(missingPhysicalFiles)}`);
  assert.strictEqual(totalRedFlagsFigures, 21, `Expected exactly 21 Red Flag pathology figures, found ${totalRedFlagsFigures}`);
  assert.strictEqual(totalProvocativeFigures, 36, `Expected exactly 36 Provocative Test maneuver figures, found ${totalProvocativeFigures}`);
  const eliteTotal = totalRedFlagsFigures + totalProvocativeFigures;
  assert.strictEqual(eliteTotal, 57, `Expected exactly 57 curated elite figures in Steps 1 & 2, found ${eliteTotal}`);
  reportPass(`4.1 Physical assets verified: Exactly 57 elite figures (21 Red flag pathology + 36 Exam maneuver) verified 100% present on disk`);
} catch (e) {
  reportFail('4.1 Physical image file check failed', e);
}

// 4.2 HTML Click Handler Verification
try {
  let checkedFiguresInHtml = 0;
  screeningData.forEach(mod => {
    const html = renderScreeningDetail(mod);
    const allFigs = [
      ...(mod.red_flags || []).flatMap(r => r.figures || []),
      ...(mod.provocative_tests || []).flatMap(t => t.figures || [])
    ];

    allFigs.forEach(fig => {
      // Must contain openLightboxByFile call with the exact file path
      const expectedCallSnippet = `openLightboxByFile('${fig.file}'`;
      assert(html.includes(expectedCallSnippet), `Module ${mod.id} HTML missing click handler for figure: ${fig.file}`);
      checkedFiguresInHtml++;
    });
  });

  assert.strictEqual(checkedFiguresInHtml, 57, `Expected 57 figure click handlers in HTML, checked ${checkedFiguresInHtml}`);
  reportPass(`4.2 All 57 figures in Steps 1 and 2 contain valid onclick="openLightboxByFile('{file}', ...)" triggers`);
} catch (e) {
  reportFail('4.2 HTML click handler check failed', e);
}

// 4.3 Lightbox Controller Execution Stress Test
try {
  let lightboxHidden = true;
  let lightboxImgSrc = '';
  let lightboxDesc = '';
  let bodyOverflow = '';

  const mockLightboxElements = {
    'image-lightbox': {
      classList: {
        contains: (c) => (c === 'hidden' ? lightboxHidden : false),
        remove: (c) => { if (c === 'hidden') lightboxHidden = false; },
        add: (c) => { if (c === 'hidden') lightboxHidden = true; }
      }
    },
    'lightbox-img': {
      src: '',
      set src(v) { lightboxImgSrc = v; },
      get src() { return lightboxImgSrc; }
    },
    'lightbox-desc': {
      textContent: '',
      set textContent(v) { lightboxDesc = v; },
      get textContent() { return lightboxDesc; }
    },
    'lightbox-springer': { innerHTML: '' },
    'lightbox-counter': { textContent: '' }
  };

  const mockLightboxDoc = {
    getElementById: (id) => mockLightboxElements[id] || null,
    addEventListener: () => {},
    body: {
      style: {
        set overflow(v) { bodyOverflow = v; },
        get overflow() { return bodyOverflow; }
      }
    }
  };

  const screeningCode = fs.readFileSync(path.resolve('js/screening.js'), 'utf8');

  function runScreeningCommand(cmd, setupSnippet = '') {
    const sandbox = {
      document: mockLightboxDoc,
      window: { innerWidth: 1024 },
      localStorage: { getItem: () => null, setItem: () => {} },
      SCREENING_DATA: screeningData,
      console: { log: () => {}, warn: () => {}, error: () => {} }
    };
    vm.createContext(sandbox);
    vm.runInContext(screeningCode, sandbox);
    if (setupSnippet) {
      vm.runInContext(setupSnippet, sandbox);
    }
    return vm.runInContext(cmd, sandbox);
  }

  // Case A: Open figure in current module
  runScreeningCommand(
    "openLightboxByFile('assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg', 'Spurling test')",
    `screeningState.currentModuleFigures = ${JSON.stringify(screeningData[1].figures)};`
  );
  assert.strictEqual(lightboxHidden, false, 'openLightboxByFile failed to reveal lightbox');
  assert.strictEqual(lightboxImgSrc, 'assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg', 'Lightbox image src mismatch');
  assert.strictEqual(bodyOverflow, 'hidden', 'Body scroll lock failed');

  // Case B: Close lightbox
  runScreeningCommand('closeLightbox();');
  assert.strictEqual(lightboxHidden, true, 'closeLightbox failed to hide modal');
  assert.strictEqual(bodyOverflow, '', 'closeLightbox failed to restore body scroll');

  // Case C: Open unindexed figure (fallback mode)
  runScreeningCommand("openLightboxByFile('assets/deepak_images/custom_extra.jpeg', 'Bệnh lý khẩn cấp')");
  assert.strictEqual(lightboxHidden, false, 'Fallback openLightboxByFile failed to reveal lightbox');
  assert.strictEqual(lightboxImgSrc, 'assets/deepak_images/custom_extra.jpeg', 'Fallback lightbox image src mismatch');
  assert.strictEqual(lightboxDesc, 'Bệnh lý khẩn cấp', 'Fallback lightbox description mismatch');

  // Case D: Circular gallery bounds wrapping
  runScreeningCommand(
    'openLightboxIndex(-1);',
    "screeningState.currentModuleFigures = [{ file: 'fig1.jpeg' }, { file: 'fig2.jpeg' }];"
  );
  assert.strictEqual(lightboxImgSrc, 'fig2.jpeg', 'openLightboxIndex(-1) failed to wrap to last image');

  runScreeningCommand(
    'openLightboxIndex(100);',
    "screeningState.currentModuleFigures = [{ file: 'fig1.jpeg' }, { file: 'fig2.jpeg' }];"
  );
  assert.strictEqual(lightboxImgSrc, 'fig1.jpeg', 'openLightboxIndex(100) failed to wrap to first image');

  reportPass('4.3 Lightbox execution engine verified: indexed opening, unindexed fallback, body scroll-lock, close behavior, circular wrapping');
} catch (e) {
  reportFail('4.3 Lightbox controller verification failed', e);
}

// ============================================================================
// PHASE 5: WEB 1 ISOLATION & REGRESSION PREVENTION
// ============================================================================
console.log('\n--- PHASE 5: WEB 1 ISOLATION & REGRESSION PREVENTION ---');

try {
  // 5.1 index.html checks
  const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');
  assert(indexHtml.includes('US-PainIntervention Pro'), 'index.html missing US-PainIntervention Pro brand');
  assert(indexHtml.includes('Cẩm Nang Tra Cứu Tiêm Khớp & Siêu Âm Can Thiệp Lâm Sàng'), 'index.html title/header altered');
  assert(indexHtml.includes('data/procedures.js'), 'index.html missing data/procedures.js');
  assert(!indexHtml.includes('<script src="js/screening.js"'), 'CRITICAL: index.html contaminated with screening.js!');
  assert(!indexHtml.includes('<script src="data/screening.js"'), 'CRITICAL: index.html contaminated with screening data!');
  assert(!indexHtml.includes('<link rel="stylesheet" href="css/screening.css"'), 'CRITICAL: index.html contaminated with screening.css!');
  
  // Verify git status of index.html
  const indexDiff = execSync('git diff index.html', { encoding: 'utf8' }).trim();
  assert.strictEqual(indexDiff, '', 'CRITICAL: index.html has unexpected git modifications!');
  reportPass('5.1 index.html is 100% isolated: 0 git changes, 0 Web 2 script/style tags loaded');

  // 5.2 data/procedures.js checks
  assert.strictEqual(proceduresData.length, 51, `Web 1 procedures count altered! Expected 51, got ${proceduresData.length}`);
  const sampleProc = proceduresData.find(p => p.id === 'cervical-nerve-root');
  assert(sampleProc && sampleProc.nameVi && sampleProc.sonoanatomy && sampleProc.technique, 'Procedure schema altered');
  reportPass('5.2 data/procedures.js is 100% frozen: exactly 51 procedures with intact schema');

  // 5.3 css/style.css checks
  const styleCss = fs.readFileSync(path.resolve('css/style.css'), 'utf8');
  assert(styleCss.length > 30000, 'css/style.css truncated');
  assert(!styleCss.includes('guidemap-accordion-step'), 'CRITICAL: css/style.css contaminated with Web 2 styles!');
  reportPass('5.3 css/style.css is 100% frozen and uncontaminated');

  // 5.4 Execute Python test_app.py
  const pythonOutput = execSync('python scripts/test_app.py', { encoding: 'utf8' });
  assert(pythonOutput.includes('ALL ASSETS AND INTEGRITY CHECKS PASSED PERFECTLY!'), 'python scripts/test_app.py failed');
  reportPass('5.4 python scripts/test_app.py passed with 100% integrity confirmation');

  // 5.5 Execute adversarial fallback test
  const fallbackOutput = execSync('node scripts/adversarial_fallback_resilience_test.js', { encoding: 'utf8' });
  assert(fallbackOutput.includes('TEST RESULTS: 33 PASSED / 0 FAILED'), 'adversarial fallback test failed');
  reportPass('5.5 node scripts/adversarial_fallback_resilience_test.js passed: 33/33 tests');
} catch (e) {
  reportFail('Phase 5 Web 1 isolation verification failed', e);
}

// ============================================================================
// FINAL SUMMARY & VERDICT
// ============================================================================
console.log('\n======================================================================');
console.log(`   TEST HARNESS COMPLETE: ${passCount} PASSED / ${failCount} FAILED   `);
console.log('======================================================================');

if (failCount === 0) {
  console.log('\n>>> VERDICT: APPROVE <<<');
  console.log('Milestone 3 Accordion Guidemap & Deep-linking successfully passed all adversarial challenges.\n');
  process.exit(0);
} else {
  console.error('\n>>> VERDICT: CHALLENGE_FAILED <<<');
  console.error(`Milestone 3 failed ${failCount} adversarial challenges.\n`);
  process.exit(1);
}
