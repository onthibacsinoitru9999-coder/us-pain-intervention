const fs = require('fs');
const { SCREENING_DATA } = require('../data/screening.js');

// Mock browser environment for node testing
global.document = {
  documentElement: { setAttribute: () => {} },
  getElementById: () => null,
  querySelectorAll: () => []
};
global.window = { innerWidth: 1200 };
global.escapeHtml = (str) => (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Read js/screening.js
const screeningJs = fs.readFileSync('./js/screening.js', 'utf8');

// Extract the required functions from js/screening.js
const extractFn = (startMarker, endMarker) => {
  const s = screeningJs.indexOf(startMarker);
  const e = screeningJs.indexOf(endMarker, s);
  if (s === -1 || e === -1) throw new Error(`Could not find markers: ${startMarker}`);
  return screeningJs.slice(s, e);
};

// Evaluate helper functions and renderScreeningDetail
eval(extractFn('function renderEmbeddedFigures', 'function selectModule'));

console.log('=== MULTI-TAB CLINICAL DOSSIER TEST SUITE ===');
let allPassed = true;

SCREENING_DATA.forEach((module, idx) => {
  console.log(`\n--- Module [${idx + 1}/8]: ${module.id} (${module.region_vi}) ---`);
  
  const html = renderScreeningDetail(module);
  
  // Check HTML length
  console.log(`  HTML Output Size: ${(html.length / 1024).toFixed(1)} KB`);
  if (html.length < 5000) {
    console.error(`  [FAIL] HTML output too short (${html.length} chars)`);
    allPassed = false;
  }

  // Check 6 tabs existence in rendered HTML
  const tabs = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6'];
  tabs.forEach(tab => {
    const hasBtn = html.includes(`data-tab="${tab}"`);
    const hasPane = html.includes(`id="pane-${tab}"`);
    if (!hasBtn || !hasPane) {
      console.error(`  [FAIL] Missing tab element: ${tab} (btn=${hasBtn}, pane=${hasPane})`);
      allPassed = false;
    }
  });

  // Check embedded figures in HTML
  const figureCount = (html.match(/figure-mini-card/g) || []).length;
  console.log(`  Embedded In-Context Figures: ${figureCount}`);
  if (figureCount === 0 && module.figures && module.figures.length > 0) {
    console.warn(`  [WARN] Module has catalog figures but 0 embedded figures rendered`);
  }

  // Check Web 1 procedure links
  const web1Links = (html.match(/index\.html\?proc=/g) || []).length;
  console.log(`  Web 1 Deep Links: ${web1Links}`);
  if (web1Links === 0) {
    console.error(`  [FAIL] No Web 1 procedure links found`);
    allPassed = false;
  }

  // Check textbook depth: Arthrokinematics
  if (!html.includes('Cơ Sinh Học Khớp') && !html.includes('Arthrokinematics')) {
    console.error(`  [FAIL] Missing arthrokinematics section`);
    allPassed = false;
  }

  // Check textbook depth: Palpation
  if (!html.includes('Quy Trình Sờ Nắn')) {
    console.error(`  [FAIL] Missing palpation section`);
    allPassed = false;
  }

  // Check textbook depth: Complex cases reasoning
  if (!html.includes('Biện Luận Ca Bệnh Khó')) {
    console.warn(`  [INFO] No complex cases section for ${module.id}`);
  }
});

if (allPassed) {
  console.log('\n[SUCCESS] ALL 8 MODULES PASSED MULTI-TAB DOSSIER AUDIT WITH FLYING COLORS!');
} else {
  console.error('\n[FAILURE] SOME AUDIT CHECKS FAILED!');
  process.exit(1);
}
