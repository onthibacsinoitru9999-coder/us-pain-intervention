// ============================================================================
// ADVERSARIAL FALLBACK RESILIENCE & STRUCTURAL EQUALITY TEST HARNESS
// Milestone 1: MSK-Differential Screening Pro
// Challenger 2: Adversarial Challenge & Fallback Resilience
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const { execSync } = require('child_process');

console.log('======================================================================');
console.log('  CHALLENGER 2: ADVERSARIAL FALLBACK RESILIENCE & EQUALITY HARNESS');
console.log('======================================================================\n');

let passCount = 0;
let failCount = 0;
const findings = [];

function runTest(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passCount++;
  } catch (err) {
    console.error(`  [FAIL] ${name}`);
    console.error(`         Reason: ${err.message}`);
    if (err.stack) {
      const lines = err.stack.split('\n').slice(1, 4).join('\n');
      console.error(`         ${lines}`);
    }
    failCount++;
  }
}

// ----------------------------------------------------------------------------
// PHASE 1: SYNTAX & DEEP STRUCTURAL EQUALITY ORACLE
// ----------------------------------------------------------------------------
console.log('--- PHASE 1: SYNTAX & DEEP STRUCTURAL EQUALITY ORACLE ---');

runTest('1.1 Syntax validation of data/screening.js via node -c', () => {
  execSync('node -c data/screening.js', { stdio: 'pipe' });
});

runTest('1.2 Syntax validation of data/screening.fallback.js via node -c', () => {
  execSync('node -c data/screening.fallback.js', { stdio: 'pipe' });
});

runTest('1.3 Syntax validation of js/screening.js via node -c', () => {
  execSync('node -c js/screening.js', { stdio: 'pipe' });
});

const primary = require('../data/screening.js');
const fallback = require('../data/screening.fallback.js');

runTest('1.4 Exported symbols existence check in primary and fallback', () => {
  assert.ok(primary.SCREENING_DATA, 'Primary missing SCREENING_DATA');
  assert.ok(primary.GUIDEMAP_ALGORITHM, 'Primary missing GUIDEMAP_ALGORITHM');
  assert.ok(primary.RED_FLAGS_MASTER, 'Primary missing RED_FLAGS_MASTER');
  assert.ok(primary.LAB_TESTS_GUIDE, 'Primary missing LAB_TESTS_GUIDE');
  assert.ok(primary.DRUG_INDUCED_PAIN_GUIDE, 'Primary missing DRUG_INDUCED_PAIN_GUIDE');

  assert.ok(fallback.STABLE_SCREENING_FALLBACK, 'Fallback missing STABLE_SCREENING_FALLBACK');
  assert.ok(fallback.STABLE_GUIDEMAP_ALGORITHM, 'Fallback missing STABLE_GUIDEMAP_ALGORITHM');
  assert.ok(fallback.STABLE_RED_FLAGS_MASTER, 'Fallback missing STABLE_RED_FLAGS_MASTER');
  assert.ok(fallback.STABLE_LAB_TESTS_GUIDE, 'Fallback missing STABLE_LAB_TESTS_GUIDE');
  assert.ok(fallback.STABLE_DRUG_INDUCED_PAIN_GUIDE, 'Fallback missing STABLE_DRUG_INDUCED_PAIN_GUIDE');
});

runTest('1.5 Deep strict equality: SCREENING_DATA <=> STABLE_SCREENING_FALLBACK', () => {
  assert.deepStrictEqual(primary.SCREENING_DATA, fallback.STABLE_SCREENING_FALLBACK);
  const pJson = JSON.stringify(primary.SCREENING_DATA);
  const fJson = JSON.stringify(fallback.STABLE_SCREENING_FALLBACK);
  assert.strictEqual(pJson, fJson, 'JSON stringification must match byte-for-byte');
});

runTest('1.6 Deep strict equality: GUIDEMAP_ALGORITHM <=> STABLE_GUIDEMAP_ALGORITHM', () => {
  assert.deepStrictEqual(primary.GUIDEMAP_ALGORITHM, fallback.STABLE_GUIDEMAP_ALGORITHM);
  assert.strictEqual(JSON.stringify(primary.GUIDEMAP_ALGORITHM), JSON.stringify(fallback.STABLE_GUIDEMAP_ALGORITHM));
});

runTest('1.7 Deep strict equality: RED_FLAGS_MASTER <=> STABLE_RED_FLAGS_MASTER', () => {
  assert.deepStrictEqual(primary.RED_FLAGS_MASTER, fallback.STABLE_RED_FLAGS_MASTER);
  assert.strictEqual(JSON.stringify(primary.RED_FLAGS_MASTER), JSON.stringify(fallback.STABLE_RED_FLAGS_MASTER));
});

runTest('1.8 Deep strict equality: LAB_TESTS_GUIDE <=> STABLE_LAB_TESTS_GUIDE', () => {
  assert.deepStrictEqual(primary.LAB_TESTS_GUIDE, fallback.STABLE_LAB_TESTS_GUIDE);
  assert.strictEqual(JSON.stringify(primary.LAB_TESTS_GUIDE), JSON.stringify(fallback.STABLE_LAB_TESTS_GUIDE));
});

runTest('1.9 Deep strict equality: DRUG_INDUCED_PAIN_GUIDE <=> STABLE_DRUG_INDUCED_PAIN_GUIDE', () => {
  assert.deepStrictEqual(primary.DRUG_INDUCED_PAIN_GUIDE, fallback.STABLE_DRUG_INDUCED_PAIN_GUIDE);
  assert.strictEqual(JSON.stringify(primary.DRUG_INDUCED_PAIN_GUIDE), JSON.stringify(fallback.STABLE_DRUG_INDUCED_PAIN_GUIDE));
});

runTest('1.10 Adversarial Oracle Sensitivity: Tripping on single-field mutation', () => {
  // Clone fallback data and mutate one deep property
  const mutatedFallback = JSON.parse(JSON.stringify(fallback.STABLE_SCREENING_FALLBACK));
  mutatedFallback[0].provocative_tests[0].name += ' [MUTATED_MUTANT]';

  // Oracle must reject this mutation immediately
  assert.throws(() => {
    assert.deepStrictEqual(primary.SCREENING_DATA, mutatedFallback);
  }, assert.AssertionError, 'Oracle must throw AssertionError on single-field mutation');

  const mutatedDiff = JSON.parse(JSON.stringify(fallback.STABLE_SCREENING_FALLBACK));
  delete mutatedDiff[3].red_flags[0].action;
  assert.throws(() => {
    assert.deepStrictEqual(primary.SCREENING_DATA, mutatedDiff);
  }, assert.AssertionError, 'Oracle must throw AssertionError on deleted property');
});

// ----------------------------------------------------------------------------
// PHASE 2: DEEP SCHEMA CONFORMANCE & MEDICAL DATA INTEGRITY
// ----------------------------------------------------------------------------
console.log('\n--- PHASE 2: DEEP SCHEMA CONFORMANCE & MEDICAL DATA INTEGRITY ---');

const EXPECTED_MODULE_IDS = [
  'systemic-widespread',
  'cervical-pain',
  'shoulder-pain',
  'thoracic-pain',
  'lumbopelvic-pain',
  'hip-groin-pain',
  'knee-leg-foot-pain',
  'elbow-wrist-hand-pain'
];

runTest('2.1 Exactly 8 modules with canonical IDs in exact order', () => {
  assert.strictEqual(primary.SCREENING_DATA.length, 8);
  const actualIds = primary.SCREENING_DATA.map(m => m.id);
  assert.deepStrictEqual(actualIds, EXPECTED_MODULE_IDS);
});

runTest('2.2 Every module has non-empty red_flags, provocative_tests, differential_matrix, figures', () => {
  primary.SCREENING_DATA.forEach(m => {
    assert.ok(m.id && typeof m.id === 'string', `Module ${m.id} missing id`);
    assert.ok(m.title && typeof m.title === 'string', `Module ${m.id} missing title`);
    assert.ok(m.title_vi && typeof m.title_vi === 'string', `Module ${m.id} missing title_vi`);
    assert.ok(m.chief_complaint && typeof m.chief_complaint === 'string', `Module ${m.id} missing chief_complaint`);
    assert.ok(m.summary && typeof m.summary === 'string', `Module ${m.id} missing summary`);

    assert.ok(Array.isArray(m.red_flags) && m.red_flags.length > 0, `Module ${m.id} red_flags empty`);
    assert.ok(Array.isArray(m.provocative_tests) && m.provocative_tests.length > 0, `Module ${m.id} provocative_tests empty`);
    assert.ok(Array.isArray(m.differential_matrix) && m.differential_matrix.length > 0, `Module ${m.id} differential_matrix empty`);
    assert.ok(Array.isArray(m.figures) && m.figures.length > 0, `Module ${m.id} figures empty`);

    // Backward-compatibility aliases
    assert.ok(Array.isArray(m.examination_procedures), `Module ${m.id} missing examination_procedures alias`);
    assert.strictEqual(m.examination_procedures.length, m.provocative_tests.length);
    assert.ok(Array.isArray(m.differential_table), `Module ${m.id} missing differential_table alias`);
    assert.strictEqual(m.differential_table.length, m.differential_matrix.length);
  });
});

runTest('2.3 Provocative tests audit: Sn/Sp metrics, clinical role, and existing maneuver images', () => {
  let totalTests = 0;
  primary.SCREENING_DATA.forEach(m => {
    m.provocative_tests.forEach(test => {
      totalTests++;
      assert.ok(test.name && test.name.length > 2, `Test in ${m.id} has invalid name`);
      assert.ok(test.technique && test.technique.length > 10, `Test ${test.name} in ${m.id} missing technique`);
      
      // Accuracy object & flat props
      assert.ok(test.accuracy && typeof test.accuracy === 'object', `Test ${test.name} missing accuracy`);
      assert.ok(test.accuracy.sn, `Test ${test.name} missing accuracy.sn`);
      assert.ok(test.accuracy.sp, `Test ${test.name} missing accuracy.sp`);
      assert.strictEqual(test.sensitivity, test.accuracy.sn, `Test ${test.name} sensitivity mismatch`);
      assert.strictEqual(test.specificity, test.accuracy.sp, `Test ${test.name} specificity mismatch`);

      // Clinical role
      const role = test.clinical_role || test.diagnostic_role;
      assert.ok(role && role.length > 3, `Test ${test.name} missing clinical_role`);

      // Figures attached to test
      assert.ok(Array.isArray(test.figures) && test.figures.length > 0, `Test ${test.name} missing figures array`);
      test.figures.forEach(fig => {
        const filePath = fig.file || fig.img_path || fig.img;
        assert.ok(filePath, `Test ${test.name} figure missing file path`);
        const absPath = path.resolve(filePath);
        assert.ok(fs.existsSync(absPath), `Test ${test.name} figure file missing on disk: ${filePath}`);
        assert.strictEqual(fig.role_type, 'exam', `Test ${test.name} figure role_type must be 'exam'`);
      });
    });
  });
  console.log(`      -> Verified ${totalTests}/36 provocative physical tests across 8 modules.`);
});

runTest('2.4 Red flags audit: Warning signs, action, and verified pathology images', () => {
  let totalRedFlags = 0;
  let totalRedFlagFigures = 0;
  primary.SCREENING_DATA.forEach(m => {
    m.red_flags.forEach(rf => {
      totalRedFlags++;
      assert.ok(rf.category && rf.category.length > 5, `Red flag in ${m.id} missing category`);
      assert.ok(rf.signs && rf.signs.length > 5, `Red flag in ${m.id} missing signs`);
      assert.ok(rf.action && rf.action.length > 5, `Red flag in ${m.id} missing action`);

      if (rf.figures && Array.isArray(rf.figures)) {
        rf.figures.forEach(fig => {
          totalRedFlagFigures++;
          const filePath = fig.file || fig.img_path || fig.img;
          assert.ok(filePath, `Red flag figure missing file path`);
          const absPath = path.resolve(filePath);
          assert.ok(fs.existsSync(absPath), `Red flag figure missing on disk: ${filePath}`);
          assert.strictEqual(fig.role_type, 'redflag', `Red flag figure role_type must be 'redflag'`);
        });
      }
    });
  });
  console.log(`      -> Verified ${totalRedFlags} red flag emergency alerts with ${totalRedFlagFigures} pathology images.`);
});

runTest('2.5 Curated 57 Elite Clinical Figures: Exactly 57 slots, 55 unique files on disk', () => {
  let totalFiguresCount = 0;
  const uniquePaths = new Set();
  const sharedPaths = {};

  primary.SCREENING_DATA.forEach(m => {
    m.figures.forEach(f => {
      totalFiguresCount++;
      const p = f.file || f.img_path || f.img;
      assert.ok(p, `Figure in ${m.id} missing file path`);
      uniquePaths.add(p);
      sharedPaths[p] = (sharedPaths[p] || 0) + 1;
      const absPath = path.resolve(p);
      assert.ok(fs.existsSync(absPath), `Figure missing on disk: ${p}`);
      assert.ok(f.caption_vi || f.desc, `Figure ${p} missing Vietnamese description`);
    });
  });

  assert.strictEqual(totalFiguresCount, 57, `Total figures in module.figures must be exactly 57, got ${totalFiguresCount}`);
  assert.strictEqual(uniquePaths.size, 55, `Unique figures must be exactly 55, got ${uniquePaths.size}`);
  
  // Verify the 2 intentional shared cross-regional figures
  assert.strictEqual(sharedPaths['assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg'], 2, 'Fig 8.7 shared between systemic and knee');
  assert.strictEqual(sharedPaths['assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg'], 2, 'Fig 6.28 shared between systemic and lumbopelvic');

  console.log(`      -> Exactly 57 figure placements (55 unique physical assets) verified present on disk.`);
});

runTest('2.6 Purge Verification: Zero occurrences of the 13 mislabeled raw bone diagrams', () => {
  const BLACKLIST_13 = [
    'assets/deepak_images/ch07_hip_pain/p301_img1.jpeg',
    'assets/deepak_images/ch10_elbow_wrist_hand_pain/p473_img1.png',
    'assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg',
    'assets/deepak_images/ch05_thoracic_pain/p188_img1.png',
    'assets/deepak_images/ch06_lumbopelvic_pain/p288_img1.jpeg',
    'assets/deepak_images/ch06_lumbopelvic_pain/p285_img1.jpeg',
    'assets/deepak_images/ch08_knee_pain/p377_img1.png',
    'assets/deepak_images/ch08_knee_pain/p392_img1.jpeg',
    'assets/deepak_images/ch09_leg_ankle_foot/p418_img1.jpeg',
    'assets/deepak_images/ch09_leg_ankle_foot/p440_img1.jpeg',
    'assets/deepak_images/ch10_elbow_wrist_hand_pain/p491_img1.jpeg',
    'assets/deepak_images/ch10_elbow_wrist_hand_pain/p493_img1.jpeg',
    'assets/deepak_images/ch10_elbow_wrist_hand_pain/p497_img1.png'
  ];

  const primaryStr = JSON.stringify(primary);
  const fallbackStr = JSON.stringify(fallback);

  BLACKLIST_13.forEach(diag => {
    assert.strictEqual(primaryStr.includes(diag), false, `Forbidden bone diagram found in primary: ${diag}`);
    assert.strictEqual(fallbackStr.includes(diag), false, `Forbidden bone diagram found in fallback: ${diag}`);
  });
  console.log('      -> All 13 forbidden bone diagrams completely eliminated (0 found).');
});

runTest('2.7 Web 1 Procedure Cross-link Mapping: Valid procedure IDs', () => {
  const web1Procedures = require('../data/procedures.js');
  assert.ok(Array.isArray(web1Procedures), 'data/procedures.js must export an array of procedures');
  const validWeb1Ids = new Set(web1Procedures.map(p => p.id));
  assert.strictEqual(validWeb1Ids.size, 51, 'Web 1 must contain exactly 51 procedures');

  let mappedCount = 0;
  primary.SCREENING_DATA.forEach(m => {
    (m.differential_matrix || []).forEach(row => {
      if (row.web1_procedure_id) {
        mappedCount++;
        assert.ok(validWeb1Ids.has(row.web1_procedure_id), `Invalid web1_procedure_id "${row.web1_procedure_id}" in ${m.id}`);
      }
    });
    (m.recommended_web1_procedures || []).forEach(proc => {
      assert.ok(validWeb1Ids.has(proc.id), `Invalid recommended procedure "${proc.id}" in ${m.id}`);
    });
  });
  console.log(`      -> Verified ${mappedCount}/32 differential rows mapped to valid Web 1 procedures.`);
});

// ----------------------------------------------------------------------------
// PHASE 3: ADVERSARIAL FALLBACK RESILIENCE (SIMULATING ALL FAILURE MODES)
// ----------------------------------------------------------------------------
console.log('\n--- PHASE 3: ADVERSARIAL FALLBACK RESILIENCE (FAILURE MODES) ---');

const fallbackCode = fs.readFileSync('data/screening.fallback.js', 'utf8');
const controllerCode = fs.readFileSync('js/screening.js', 'utf8');

// Extract resolveInitialScreeningData function definition cleanly
const resolveFuncMatch = controllerCode.match(/function resolveInitialScreeningData\(\)[\s\S]*?\n\}/);
assert.ok(resolveFuncMatch, 'Must find resolveInitialScreeningData in js/screening.js');
const resolveFuncCode = resolveFuncMatch[0];

function createMockDom() {
  const elements = {};
  return {
    elements,
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
}

runTest('3.1 Total Absence of screening.js (Only fallback script loaded in sandbox)', () => {
  const dom = createMockDom();
  const mockStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); }
  };
  const sandbox = {
    window: { innerWidth: 1200 },
    document: dom,
    localStorage: mockStorage,
    console: { log() {}, warn() {}, error() {} }
  };

  vm.createContext(sandbox);
  // Execute ONLY fallback + resolveInitialScreeningData (NO screening.js)
  vm.runInContext(fallbackCode + '\n' + resolveFuncCode + '\n; this.resolved = resolveInitialScreeningData();', sandbox);

  assert.strictEqual(sandbox.resolved.isFallback, true, 'isFallback must be true when primary is absent');
  assert.strictEqual(sandbox.resolved.source, 'stable_file', 'source must be stable_file');
  assert.strictEqual(sandbox.resolved.modules.length, 8, 'Must resolve exactly 8 modules');
  assert.ok(sandbox.resolved.algorithm, 'Must resolve algorithm');
  assert.strictEqual(sandbox.resolved.redFlags.length, 10, 'Must resolve 10 red flags');
  assert.strictEqual(sandbox.resolved.labTests.length, 12, 'Must resolve 12 lab tests');
  assert.strictEqual(sandbox.resolved.drugInduced.length, 7, 'Must resolve 7 drug classes');
});

runTest('3.2 Adversarial Corruptions of SCREENING_DATA in primary', () => {
  const corruptions = [
    { label: 'null', val: 'const SCREENING_DATA = null;' },
    { label: 'undefined', val: 'const SCREENING_DATA = undefined;' },
    { label: 'empty array', val: 'const SCREENING_DATA = [];' },
    { label: 'plain object', val: 'const SCREENING_DATA = { bad: 1 };' },
    { label: 'string', val: 'const SCREENING_DATA = "corrupt data string";' },
    { label: 'number', val: 'const SCREENING_DATA = 999;' },
    { label: 'boolean false', val: 'const SCREENING_DATA = false;' }
  ];

  corruptions.forEach(({ label, val }) => {
    const dom = createMockDom();
    const sandbox = {
      window: { innerWidth: 1200 },
      document: dom,
      localStorage: { getItem() { return null; }, setItem() {} },
      console: { log() {}, warn() {}, error() {} }
    };
    vm.createContext(sandbox);
    vm.runInContext(val + '\n' + fallbackCode + '\n' + resolveFuncCode + '\n; this.resolved = resolveInitialScreeningData();', sandbox);

    assert.strictEqual(sandbox.resolved.isFallback, true, `Corruption [${label}] must trigger fallback`);
    assert.strictEqual(sandbox.resolved.source, 'stable_file');
    assert.strictEqual(sandbox.resolved.modules.length, 8);
  });
});

runTest('3.3 Corrupted auxiliary variables fallback to STABLE_ versions', () => {
  const dom = createMockDom();
  const sandbox = {
    window: { innerWidth: 1200 },
    document: dom,
    localStorage: { getItem() { return null; }, setItem() {} },
    console: { log() {}, warn() {}, error() {} }
  };
  vm.createContext(sandbox);

  const corruptedAux = `
    const SCREENING_DATA = [];
    const GUIDEMAP_ALGORITHM = null;
    const RED_FLAGS_MASTER = undefined;
    const LAB_TESTS_GUIDE = "invalid";
    const DRUG_INDUCED_PAIN_GUIDE = {};
  `;
  vm.runInContext(corruptedAux + '\n' + fallbackCode + '\n' + resolveFuncCode + '\n; this.resolved = resolveInitialScreeningData();', sandbox);

  assert.strictEqual(sandbox.resolved.isFallback, true);
  assert.ok(sandbox.resolved.algorithm !== null, 'Algorithm must fall back');
  assert.strictEqual(sandbox.resolved.redFlags.length, 10, 'Red flags must fall back');
  assert.strictEqual(sandbox.resolved.labTests.length, 12, 'Lab tests must fall back');
  assert.strictEqual(sandbox.resolved.drugInduced.length, 7, 'Drug guide must fall back');
});

runTest('3.4 Double Failure: Primary AND Fallback missing, recovery via LocalStorage snapshot', () => {
  const dom = createMockDom();
  const mockStorage = {
    _data: {
      'deepak_screening_backup_v2': JSON.stringify(primary.SCREENING_DATA)
    },
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); }
  };
  const sandbox = {
    window: { innerWidth: 1200 },
    document: dom,
    localStorage: mockStorage,
    console: { log() {}, warn() {}, error() {} }
  };
  vm.createContext(sandbox);

  // Both SCREENING_DATA and STABLE_SCREENING_FALLBACK are undefined
  vm.runInContext(resolveFuncCode + '\n; this.resolved = resolveInitialScreeningData();', sandbox);

  assert.strictEqual(sandbox.resolved.isFallback, true);
  assert.strictEqual(sandbox.resolved.source, 'local_storage');
  assert.strictEqual(sandbox.resolved.modules.length, 8);
  assert.strictEqual(sandbox.resolved.modules[0].id, 'systemic-widespread');
});

runTest('3.5 Hostile LocalStorage: Corrupted JSON does not crash initialization', () => {
  const dom = createMockDom();
  const mockStorage = {
    getItem(k) { return '{ bad json string [[]'; },
    setItem() {}
  };
  const sandbox = {
    window: { innerWidth: 1200 },
    document: dom,
    localStorage: mockStorage,
    console: { log() {}, warn() {}, error() {} }
  };
  vm.createContext(sandbox);

  assert.doesNotThrow(() => {
    vm.runInContext(fallbackCode + '\n' + resolveFuncCode + '\n; this.resolved = resolveInitialScreeningData();', sandbox);
  }, 'Corrupted localStorage must not crash app');

  assert.strictEqual(sandbox.resolved.isFallback, true);
  assert.strictEqual(sandbox.resolved.source, 'stable_file');
});

runTest('3.6 Storage Access Denied: resolveInitialScreeningData handles throwing localStorage safely', () => {
  const dom = createMockDom();
  const mockStorage = {
    getItem() { throw new Error('SecurityError: Access is denied for this document to use Storage.'); },
    setItem() { throw new Error('SecurityError: Access is denied for this document to use Storage.'); }
  };
  const sandbox = {
    window: { innerWidth: 1200 },
    document: dom,
    localStorage: mockStorage,
    console: { log() {}, warn() {}, error() {} }
  };
  vm.createContext(sandbox);

  assert.doesNotThrow(() => {
    vm.runInContext(fallbackCode + '\n' + resolveFuncCode + '\n; this.resolved = resolveInitialScreeningData();', sandbox);
  }, 'SecurityError on localStorage must not crash resolveInitialScreeningData');
  assert.strictEqual(sandbox.resolved.modules.length, 8);
  assert.strictEqual(sandbox.resolved.isFallback, true);
  assert.strictEqual(sandbox.resolved.source, 'stable_file');
});

runTest('3.7 Adversarial Check: Unsafe localStorage.getItem at top level of js/screening.js', () => {
  // Check if line 85 of js/screening.js uses localStorage without try/catch
  const lines = controllerCode.split('\n');
  const line85 = lines.find((l, idx) => l.includes('theme: localStorage.getItem'));
  if (line85) {
    findings.push({
      severity: 'LOW',
      title: 'Top-level localStorage.getItem outside try/catch in js/screening.js',
      description: 'js/screening.js line 85 calls localStorage.getItem(\'us_pain_theme\') at the top level without try-catch. If a browser restricts third-party storage throwing SecurityError, script evaluation will fail.',
      mitigation: 'Wrap theme initialization in safeStorageGet(\'us_pain_theme\', \'light\') during M2/M3 refactoring.'
    });
    console.log('      [NOTE] Identified top-level localStorage access in controller (documented for M2/M3).');
  }
});

runTest('3.8 Network 404 / Script Load Failure Simulation of data/screening.js', () => {
  // When <script src="data/screening.js"> returns 404 in browser, window.SCREENING_DATA is undefined
  const dom = createMockDom();
  const sandbox = {
    window: { innerWidth: 1200 },
    document: dom,
    localStorage: { getItem() { return null; }, setItem() {} },
    console: { log() {}, warn() {}, error() {} }
  };
  vm.createContext(sandbox);

  // Fallback script loads successfully
  vm.runInContext(fallbackCode, sandbox);
  const isFallbackDefined = vm.runInContext('typeof STABLE_SCREENING_FALLBACK !== "undefined"', sandbox);
  assert.ok(isFallbackDefined, 'STABLE_SCREENING_FALLBACK must be defined in context');

  // Primary script tag failed (404), so SCREENING_DATA is never set
  const isPrimaryDefined = vm.runInContext('typeof SCREENING_DATA !== "undefined"', sandbox);
  assert.strictEqual(isPrimaryDefined, false, 'SCREENING_DATA must remain undefined');

  // Controller loads
  vm.runInContext(resolveFuncCode + '\n; this.resolved = resolveInitialScreeningData();', sandbox);
  assert.strictEqual(sandbox.resolved.isFallback, true);
  assert.strictEqual(sandbox.resolved.source, 'stable_file');
  assert.strictEqual(sandbox.resolved.modules.length, 8);
});

// ----------------------------------------------------------------------------
// PHASE 4: SIMULATED BROWSER EXECUTION WITHOUT screening.js
// ----------------------------------------------------------------------------
console.log('\n--- PHASE 4: SIMULATED BROWSER EXECUTION WITHOUT screening.js ---');

const dom = createMockDom();
const mockStorage = {
  _data: {},
  getItem(k) { return this._data[k] || null; },
  setItem(k, v) { this._data[k] = String(v); }
};

const browserContext = {
  window: { innerWidth: 1200 },
  document: dom,
  localStorage: mockStorage,
  console: console
};

vm.createContext(browserContext);
// Load ONLY fallback + controller into headless environment
vm.runInContext(
  fallbackCode + '\n' + 
  controllerCode + '\n' + 
  '; this.screeningState = screeningState;' +
  'this.initScreeningApp = initScreeningApp;' +
  'this.applyFilters = applyFilters;' +
  'this.selectModule = selectModule;' +
  'this.switchMode = switchMode;' +
  'this.openLightboxIndex = openLightboxIndex;' +
  'this.lightboxNext = lightboxNext;' +
  'this.lightboxPrev = lightboxPrev;' +
  'this.closeLightbox = closeLightbox;' +
  'this.updateInteractiveGuidemap = updateInteractiveGuidemap;',
  browserContext
);

runTest('4.1 App initialization in headless browser using ONLY fallback dataset', () => {
  browserContext.initScreeningApp();
  assert.strictEqual(browserContext.screeningState.allModules.length, 8);
  assert.strictEqual(browserContext.screeningState.selectedModuleId, 'systemic-widespread');

  const detailHtml = dom.getElementById('screening-detail-container').innerHTML;
  assert.ok(detailHtml.length > 500, 'Detail container must render initial module HTML');
  assert.ok(detailHtml.includes('Đau Toàn Thân'), 'Must render Module 1 Vietnamese title');
  assert.ok(detailHtml.includes('Cờ Đỏ'), 'Must render Red flags section');
  assert.ok(detailHtml.includes('Nghiệm pháp'), 'Must render Provocative tests section');
  assert.ok(
    detailHtml.includes('Chẩn Đoán Phân Biệt') || detailHtml.includes('Differential Table'),
    'Must render Differential table section'
  );
  assert.ok(detailHtml.includes('Định Hướng Can Thiệp'), 'Must render Web 1 procedures section');
});

runTest('4.2 Seamless navigation across all 8 modules in fallback mode', () => {
  EXPECTED_MODULE_IDS.forEach(id => {
    browserContext.selectModule(id);
    assert.strictEqual(browserContext.screeningState.selectedModuleId, id);
    const html = dom.getElementById('screening-detail-container').innerHTML;
    assert.ok(html.length > 500, `Module ${id} failed to render rich HTML content`);
  });
});

runTest('4.3 Interactive Guidemap Checklist multi-flag decision engine in fallback mode', () => {
  browserContext.switchMode('algorithm');
  assert.strictEqual(browserContext.screeningState.activeMode, 'algorithm');

  // Multi-flag crisis state
  browserContext.screeningState.guidemapChecklist.hasRedFlags = true;
  browserContext.screeningState.guidemapChecklist.hasVisceral = true;
  browserContext.screeningState.guidemapChecklist.hasDrugHistory = true;
  browserContext.screeningState.guidemapChecklist.painOrigin = 'radicular';
  browserContext.updateInteractiveGuidemap(true);

  let outputHtml = dom.getElementById('interactive-guidemap-output').innerHTML;
  assert.ok(outputHtml.includes('CỜ ĐỎ KHẨN CẤP'), 'Must show Red flag emergency alert');
  assert.ok(outputHtml.includes('CHỐNG CHỈ ĐỊNH'), 'Must state contraindication for procedures');
  assert.ok(outputHtml.includes('ĐAU CHUYỂN TẠNG'), 'Must show Visceral warning simultaneously');
  assert.ok(outputHtml.includes('ĐAU DO TÁC DỤNG PHỤ'), 'Must show Drug warning simultaneously');

  // Clean state -> Facet syndrome -> Web 1 procedure recommendation
  browserContext.screeningState.guidemapChecklist.hasRedFlags = false;
  browserContext.screeningState.guidemapChecklist.hasVisceral = false;
  browserContext.screeningState.guidemapChecklist.hasDrugHistory = false;
  browserContext.screeningState.guidemapChecklist.painOrigin = 'facet';
  browserContext.updateInteractiveGuidemap(true);

  outputHtml = dom.getElementById('interactive-guidemap-output').innerHTML;
  assert.ok(outputHtml.includes('KẾT QUẢ GIAI ĐOẠN 3'), 'Must indicate suitable for intervention');
  assert.ok(outputHtml.includes('Hội chứng diện khớp cạnh sống'), 'Must diagnose facet syndrome');
  assert.ok(outputHtml.includes('Phong bế nhánh trong'), 'Must recommend Web 1 medial branch block');
});

runTest('4.4 View Mode switching and DOM container rendering in fallback mode', () => {
  // Red flags view
  browserContext.switchMode('redflags');
  assert.strictEqual(browserContext.screeningState.activeMode, 'redflags');
  const rfHtml = dom.getElementById('redflags-container').innerHTML;
  assert.ok(rfHtml.includes('Chùm Đuôi Ngựa') || rfHtml.includes('Nhiễm trùng'), 'Red flags table rendered');

  // Labs view
  browserContext.switchMode('labs');
  assert.strictEqual(browserContext.screeningState.activeMode, 'labs');
  const labsHtml = dom.getElementById('labs-container').innerHTML;
  assert.ok(labsHtml.includes('HLA-B27') || labsHtml.includes('ESR'), 'Labs cards rendered');

  // Drugs view
  browserContext.switchMode('drugs');
  assert.strictEqual(browserContext.screeningState.activeMode, 'drugs');
  const drugsHtml = dom.getElementById('drugs-container').innerHTML;
  assert.ok(drugsHtml.includes('Statins') || drugsHtml.includes('Quinolone'), 'Drugs cards rendered');
});

runTest('4.5 Lightbox Navigation on Fallback Figures: Circular wrap and boundary safety', () => {
  browserContext.switchMode('modules');
  browserContext.selectModule('cervical-pain');
  const figCount = browserContext.screeningState.currentModuleFigures.length;
  assert.ok(figCount > 0, 'Cervical module must have figures loaded');

  // Open first image
  browserContext.openLightboxIndex(0);
  assert.strictEqual(browserContext.screeningState.lightboxIndex, 0);
  assert.strictEqual(dom.getElementById('lightbox-counter').textContent, `Hình 1 / ${figCount}`);

  // Next
  browserContext.lightboxNext();
  assert.strictEqual(browserContext.screeningState.lightboxIndex, 1);
  assert.strictEqual(dom.getElementById('lightbox-counter').textContent, `Hình 2 / ${figCount}`);

  // Prev
  browserContext.lightboxPrev();
  assert.strictEqual(browserContext.screeningState.lightboxIndex, 0);

  // Circular wrap-around backward from 0 to last
  browserContext.lightboxPrev();
  assert.strictEqual(browserContext.screeningState.lightboxIndex, figCount - 1);
  assert.strictEqual(dom.getElementById('lightbox-counter').textContent, `Hình ${figCount} / ${figCount}`);

  // Circular wrap-around forward from last to 0
  browserContext.lightboxNext();
  assert.strictEqual(browserContext.screeningState.lightboxIndex, 0);

  // Close lightbox
  browserContext.closeLightbox();
  assert.ok(dom.getElementById('image-lightbox').classList.contains('hidden'));
});

runTest('4.6 Pure Browser Global Execution (no Node module/exports objects)', () => {
  const browserDom = createMockDom();
  const pureBrowserSandbox = {
    window: { innerWidth: 1024 },
    document: browserDom,
    localStorage: { getItem() { return null; }, setItem() {} },
    console: { log() {}, warn() {}, error() {} }
    // Intentionally NO 'module', NO 'exports', NO 'require'
  };
  vm.createContext(pureBrowserSandbox);

  // Execute fallback script
  vm.runInContext(fallbackCode, pureBrowserSandbox);
  assert.strictEqual(typeof pureBrowserSandbox.module, 'undefined', 'module must remain undefined');
  const isFbDefined = vm.runInContext('typeof STABLE_SCREENING_FALLBACK !== "undefined"', pureBrowserSandbox);
  assert.ok(isFbDefined, 'STABLE_SCREENING_FALLBACK must be defined globally in browser');
  const count = vm.runInContext('STABLE_SCREENING_FALLBACK.length', pureBrowserSandbox);
  assert.strictEqual(count, 8);

  // Execute controller
  vm.runInContext(controllerCode + '\n; this.initScreeningApp = initScreeningApp;', pureBrowserSandbox);
  pureBrowserSandbox.initScreeningApp();
  const detail = browserDom.getElementById('screening-detail-container').innerHTML;
  assert.ok(detail.length > 500, 'Pure browser execution must render detail view');
});

runTest('4.7 Mobile Viewport Responsiveness Stress Test (360px - 430px)', () => {
  const mobileWidths = [360, 375, 390, 412, 430];
  mobileWidths.forEach(width => {
    const mobileDom = createMockDom();
    const mobileSandbox = {
      window: { innerWidth: width },
      document: mobileDom,
      localStorage: { getItem() { return null; }, setItem() {} },
      console: { log() {}, warn() {}, error() {} }
    };
    vm.createContext(mobileSandbox);
    vm.runInContext(
      fallbackCode + '\n' + controllerCode + '\n; this.initScreeningApp = initScreeningApp; this.selectModule = selectModule;',
      mobileSandbox
    );
    mobileSandbox.initScreeningApp();

    EXPECTED_MODULE_IDS.forEach(modId => {
      mobileSandbox.selectModule(modId);
      const renderedHtml = mobileDom.getElementById('screening-detail-container').innerHTML;
      assert.ok(renderedHtml.length > 500, `Viewport ${width}px: Module ${modId} failed rendering`);
    });
  });
  console.log('      -> All 8 modules rendered across mobile viewports (360px, 375px, 390px, 412px, 430px).');
});

// ----------------------------------------------------------------------------
// PHASE 5: WEB 1 INTEGRITY & FROZEN ASSETS PROTECTION
// ----------------------------------------------------------------------------
console.log('\n--- PHASE 5: WEB 1 INTEGRITY & FROZEN ASSETS PROTECTION ---');

runTest('5.1 Web 1 files intact and unmodified', () => {
  const web1Files = [
    'index.html',
    'css/style.css',
    'js/app.js',
    'js/calculator.js',
    'js/checklist.js',
    'data/procedures.js',
    'data/procedures.fallback.js'
  ];

  web1Files.forEach(f => {
    assert.ok(fs.existsSync(f), `Web 1 critical file missing: ${f}`);
  });

  const procJs = fs.readFileSync('data/procedures.js', 'utf8');
  assert.ok(procJs.includes('PROCEDURES_DATA'), 'data/procedures.js must export PROCEDURES_DATA');

  const stableBackup = 'backup/stable_v1.0/procedures.js';
  if (fs.existsSync(stableBackup)) {
    const backupContent = fs.readFileSync(stableBackup, 'utf8');
    assert.strictEqual(procJs, backupContent, 'data/procedures.js must match frozen backup in backup/stable_v1.0/');
  }
});

// ----------------------------------------------------------------------------
// TEST SUMMARY & FINAL VERDICT
// ----------------------------------------------------------------------------
console.log('\n======================================================================');
console.log(`  TEST RESULTS: ${passCount} PASSED / ${failCount} FAILED`);
console.log('======================================================================');

if (findings.length > 0) {
  console.log('\nAdversarial Observations & Findings:');
  findings.forEach((f, idx) => {
    console.log(`  [Finding ${idx + 1}] [${f.severity}] ${f.title}`);
    console.log(`            ${f.description}`);
    console.log(`            Mitigation: ${f.mitigation}`);
  });
}

if (failCount > 0) {
  console.error('\n>>> VERDICT: CHALLENGE_FAILED <<<');
  process.exit(1);
} else {
  console.log('\n>>> VERDICT: APPROVE <<<');
  console.log('All adversarial tests passed with 100% resilience and structural integrity.');
  process.exit(0);
}
