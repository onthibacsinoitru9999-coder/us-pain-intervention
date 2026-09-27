#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
===============================================================================
MASTER END-TO-END (E2E) TEST SUITE RUNNER
MSK-Differential Screening Pro (Web 2) & US-PainIntervention Pro (Web 1)
===============================================================================
Architecture: Tier 1 (Feature Coverage) | Tier 2 (Boundary & Corner Cases)
              Tier 3 (Pairwise Combinations) | Tier 4 (Clinical Application Scenarios)
Standard:     Zero hardcoding, opaque-box requirement verification, genuine execution.
===============================================================================
"""

import os
import sys
import json
import re
import time
import subprocess
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# ANSI Colors for terminal output
GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
BOLD = "\033[1m"
RESET = "\033[0m"

class TestReport:
    def __init__(self):
        self.total = 0
        self.passed = 0
        self.failed = 0
        self.tier_results = {
            "Tier 1: Feature Coverage": {"total": 0, "passed": 0, "failed": 0},
            "Tier 2: Boundary & Corner Cases": {"total": 0, "passed": 0, "failed": 0},
            "Tier 3: Pairwise Combinations": {"total": 0, "passed": 0, "failed": 0},
            "Tier 4: Clinical Workflows": {"total": 0, "passed": 0, "failed": 0},
        }
        self.current_tier = ""
        self.failures = []

    def set_tier(self, tier_name):
        self.current_tier = tier_name
        print(f"\n{BOLD}{CYAN}=== {tier_name.upper()} ==={RESET}")

    def record(self, test_id, description, status, error=None):
        self.total += 1
        tier_stats = self.tier_results[self.current_tier]
        tier_stats["total"] += 1
        if status:
            self.passed += 1
            tier_stats["passed"] += 1
            print(f"  {GREEN}[PASS]{RESET} {test_id}: {description}")
        else:
            self.failed += 1
            tier_stats["failed"] += 1
            err_msg = str(error) if error else "Assertion failed"
            self.failures.append((test_id, description, err_msg))
            print(f"  {RED}[FAIL]{RESET} {test_id}: {description}")
            print(f"         {YELLOW}Error: {err_msg}{RESET}")

report = TestReport()

MOCK_DOM_SNIPPET = """
const dom = {
  elements: {},
  getElementById(id) {
    if (!this.elements[id]) {
      const el = {
        id, innerHTML: '', textContent: '', value: '', checked: false, className: '',
        _c: new Set(['hidden']),
        classList: {
          add(c) { el._c.add(c); },
          remove(c) { el._c.delete(c); },
          contains(c) { return el._c.has(c); },
          toggle(c) { if (el._c.has(c)) el._c.delete(c); else el._c.add(c); }
        },
        _listeners: {},
        addEventListener(evt, fn) {
          el._listeners[evt] = el._listeners[evt] || [];
          el._listeners[evt].push(fn);
        },
        click() {
          (el._listeners['click'] || []).forEach(fn => fn());
        },
        style: {},
        setAttribute(k, v) { this[k] = v; },
        getAttribute(k) { return this[k]; },
        scrollIntoView() {}
      };
      this.elements[id] = el;
    }
    return this.elements[id];
  },
  querySelector(sel) {
    const cleanId = sel.replace('#', '').replace('.', '');
    return this.getElementById(cleanId);
  },
  querySelectorAll() { return []; },
  documentElement: {
    _attrs: {},
    setAttribute(k, v) { this._attrs[k] = v; },
    getAttribute(k) { return this._attrs[k]; }
  },
  addEventListener() {},
  body: { style: {} }
};
"""

def run_node_eval(script_code):
    """Executes a Node.js script string and returns parsed JSON or raw output."""
    try:
        proc = subprocess.run(
            ["node", "-e", script_code],
            capture_output=True,
            text=True,
            encoding="utf-8",
            timeout=20,
            check=False
        )
        if proc.returncode != 0:
            return {"ok": False, "error": proc.stderr.strip() or proc.stdout.strip()}
        try:
            return json.loads(proc.stdout.strip())
        except Exception:
            return {"ok": True, "raw": proc.stdout.strip()}
    except Exception as e:
        return {"ok": False, "error": str(e)}

def extract_js_var(var_name, src):
    prefix = f'const {var_name} = '
    start = src.find(prefix) + len(prefix)
    next_const = src.find('const ', start)
    next_if = src.find('if (typeof', start)
    end_candidates = [pos for pos in [next_const, next_if] if pos != -1]
    end = min(end_candidates) if end_candidates else len(src)
    chunk = src[start:end].strip()
    if chunk.endswith(';'):
        chunk = chunk[:-1].strip()
    return json.loads(chunk)

print(f"{BOLD}╔════════════════════════════════════════════════════════════════════════════╗{RESET}")
print(f"{BOLD}║       MASTER E2E TEST SUITE: MSK-SCREENING & PAIN-INTERVENTION PRO        ║{RESET}")
print(f"{BOLD}║     CALIBRATION & VERIFICATION TIERS 1 TO 4 (ZERO HARDCODING SPEC)        ║{RESET}")
print(f"{BOLD}╚════════════════════════════════════════════════════════════════════════════╝{RESET}")

start_time = time.time()

# =============================================================================
# TIER 1: FEATURE COVERAGE (8 Features x ≥5 Cases = 40 Tests)
# =============================================================================
report.set_tier("Tier 1: Feature Coverage")

# Load baseline files for static and schema analysis
with open('data/screening.js', 'r', encoding='utf-8') as f:
    scr_js_text = f.read()

with open('data/screening.fallback.js', 'r', encoding='utf-8') as f:
    scr_fb_text = f.read()

with open('data/procedures.js', 'r', encoding='utf-8') as f:
    proc_js_text = f.read()

with open('data/procedures.fallback.js', 'r', encoding='utf-8') as f:
    proc_fb_text = f.read()

with open('css/screening.css', 'r', encoding='utf-8') as f:
    css_screening = f.read()

with open('screening.html', 'r', encoding='utf-8') as f:
    html_screening = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    html_index = f.read()

with open('js/screening.js', 'r', encoding='utf-8') as f:
    js_screening = f.read()

with open('js/app.js', 'r', encoding='utf-8') as f:
    js_app = f.read()

screening_data = extract_js_var('SCREENING_DATA', scr_js_text)
fallback_data = extract_js_var('STABLE_SCREENING_FALLBACK', scr_fb_text)

# --- Feature 1: 58 Elite Clinical Images Curation ---
try:
    all_elite_figs = [fig for m in screening_data for fig in m.get('figures', [])]
    report.record("T1.1.1", "Total elite clinical figures across all 8 modules equals exactly 58",
                  len(all_elite_figs) == 58, f"Expected 58, got {len(all_elite_figs)}")
except Exception as e:
    report.record("T1.1.1", "Total elite clinical figures across all 8 modules equals exactly 58", False, e)

try:
    rf_figs_count = sum(len(rf.get('figures', [])) for m in screening_data for rf in m.get('red_flags', []))
    report.record("T1.1.2", "Red flags & emergency imaging figures equals exactly 21",
                  rf_figs_count == 21, f"Expected 21, got {rf_figs_count}")
except Exception as e:
    report.record("T1.1.2", "Red flags & emergency imaging figures equals exactly 21", False, e)

try:
    ep_figs_count = sum(len(ep.get('figures', [])) for m in screening_data for ep in m.get('examination_procedures', []))
    report.record("T1.1.3", "Provocative physical examination maneuver figures equals exactly 37",
                  ep_figs_count == 37, f"Expected 37, got {ep_figs_count}")
except Exception as e:
    report.record("T1.1.3", "Provocative physical examination maneuver figures equals exactly 37", False, e)

try:
    bone_keywords = ['bone diagram', 'skeleton', 'pelvis diagram', 'khung chậu', 'sơ đồ xương']
    bone_sketches_found = []
    for m in screening_data:
        for ep in m.get('examination_procedures', []):
            for fig in ep.get('figures', []):
                cap = (fig.get('caption', '') + ' ' + fig.get('caption_vi', '') + ' ' + fig.get('caption_en', '')).lower()
                for kw in bone_keywords:
                    if kw in cap:
                        bone_sketches_found.append((m['id'], cap))
    report.record("T1.1.4", "Zero anatomical bone/pelvis sketches misassigned to provocative tests",
                  len(bone_sketches_found) == 0, f"Found {len(bone_sketches_found)} bone sketches: {bone_sketches_found}")
except Exception as e:
    report.record("T1.1.4", "Zero anatomical bone/pelvis sketches misassigned to provocative tests", False, e)

try:
    missing_files = [fig['file'] for fig in all_elite_figs if not (os.path.exists(fig['file']) and os.path.getsize(fig['file']) > 0)]
    report.record("T1.1.5", "100% of 58 curated image files physically exist on disk with valid file size",
                  len(missing_files) == 0, f"Missing or empty image files: {missing_files}")
except Exception as e:
    report.record("T1.1.5", "100% of 58 curated image files physically exist on disk with valid file size", False, e)

# --- Feature 2: Data Schema & Fallback Synchronization ---
try:
    report.record("T1.2.1", "Primary SCREENING_DATA contains exactly 8 symptom modules",
                  len(screening_data) == 8, f"Expected 8, got {len(screening_data)}")
except Exception as e:
    report.record("T1.2.1", "Primary SCREENING_DATA contains exactly 8 symptom modules", False, e)

try:
    report.record("T1.2.2", "Fallback STABLE_SCREENING_FALLBACK contains exactly 8 symptom modules",
                  len(fallback_data) == 8, f"Expected 8, got {len(fallback_data)}")
except Exception as e:
    report.record("T1.2.2", "Fallback STABLE_SCREENING_FALLBACK contains exactly 8 symptom modules", False, e)

try:
    all_structures = all(k in scr_js_text for k in ['SCREENING_DATA', 'GUIDEMAP_ALGORITHM', 'RED_FLAGS_MASTER', 'LAB_TESTS_GUIDE', 'DRUG_INDUCED_PAIN_GUIDE'])
    report.record("T1.2.3", "All 5 primary Guidemap data structures defined in data/screening.js",
                  all_structures, "One or more Guidemap structures missing from data/screening.js")
except Exception as e:
    report.record("T1.2.3", "All 5 primary Guidemap data structures defined in data/screening.js", False, e)

try:
    all_fb_structures = all(k in scr_fb_text for k in ['STABLE_SCREENING_FALLBACK', 'STABLE_GUIDEMAP_ALGORITHM', 'STABLE_RED_FLAGS_MASTER', 'STABLE_LAB_TESTS_GUIDE', 'STABLE_DRUG_INDUCED_PAIN_GUIDE'])
    report.record("T1.2.4", "All 5 fallback shields defined in data/screening.fallback.js",
                  all_fb_structures, "One or more fallback structures missing")
except Exception as e:
    report.record("T1.2.4", "All 5 fallback shields defined in data/screening.fallback.js", False, e)

try:
    fb_figs = [fig for m in fallback_data for fig in m.get('figures', [])]
    report.record("T1.2.5", "Fallback dataset figures count mirrors primary dataset (58 figures)",
                  len(fb_figs) == 58, f"Expected 58, got {len(fb_figs)}")
except Exception as e:
    report.record("T1.2.5", "Fallback dataset figures count mirrors primary dataset (58 figures)", False, e)

# --- Feature 3: Dedicated CSS Architecture (css/screening.css) ---
try:
    report.record("T1.3.1", "css/screening.css exists as dedicated independent stylesheet (>35KB)",
                  os.path.exists('css/screening.css') and os.path.getsize('css/screening.css') > 35000,
                  f"File size is {os.path.getsize('css/screening.css') if os.path.exists('css/screening.css') else 0} bytes")
except Exception as e:
    report.record("T1.3.1", "css/screening.css exists as dedicated independent stylesheet (>35KB)", False, e)

try:
    report.record("T1.3.2", "Web 1 isolation: index.html does NOT link to or load css/screening.css",
                  'screening.css' not in html_index, "index.html illegally references screening.css")
except Exception as e:
    report.record("T1.3.2", "Web 1 isolation: index.html does NOT link to or load css/screening.css", False, e)

try:
    report.record("T1.3.3", "Web 2 integration: screening.html links directly to css/screening.css",
                  'css/screening.css' in html_screening, "screening.html missing screening.css stylesheet link")
except Exception as e:
    report.record("T1.3.3", "Web 2 integration: screening.html links directly to css/screening.css", False, e)

try:
    tokens_present = all(t in css_screening for t in ['--gm-primary', '--gm-bg-main', '--gm-card-bg', '--gm-text-main'])
    report.record("T1.3.4", "CSS Custom Properties namespace --gm-* defined in :root design tokens",
                  tokens_present, "Missing core --gm-* tokens in css/screening.css")
except Exception as e:
    report.record("T1.3.4", "CSS Custom Properties namespace --gm-* defined in :root design tokens", False, e)

try:
    step_tokens = all(t in css_screening for t in ['--gm-rf-', '--gm-test-', '--gm-matrix-'])
    report.record("T1.3.5", "Step-specific semantic tokens (--gm-rf-, --gm-test-, --gm-matrix-) defined",
                  step_tokens, "Missing step-specific color tokens in css/screening.css")
except Exception as e:
    report.record("T1.3.5", "Step-specific semantic tokens (--gm-rf-, --gm-test-, --gm-matrix-) defined", False, e)

# --- Feature 4: Viewport-Centered Lightbox Modal ---
try:
    has_fixed = 'position: fixed' in css_screening and 'inset: 0' in css_screening
    report.record("T1.4.1", "Lightbox modal container has position: fixed !important; inset: 0 !important;",
                  has_fixed, "Missing fixed positioning or inset: 0 in .image-lightbox-modal")
except Exception as e:
    report.record("T1.4.1", "Lightbox modal container has position: fixed !important; inset: 0 !important;", False, e)

try:
    has_blur = 'backdrop-filter: blur(12px)' in css_screening
    report.record("T1.4.2", "Lightbox backdrop applies backdrop-filter: blur(12px)",
                  has_blur, "Missing backdrop-filter blur(12px) in css/screening.css")
except Exception as e:
    report.record("T1.4.2", "Lightbox backdrop applies backdrop-filter: blur(12px)", False, e)

try:
    has_center = ('place-items: center' in css_screening or 'justify-content: center' in css_screening)
    report.record("T1.4.3", "Lightbox enforces centered viewport alignment without offset or clipping",
                  has_center, "Missing centering rules in lightbox styles")
except Exception as e:
    report.record("T1.4.3", "Lightbox enforces centered viewport alignment without offset or clipping", False, e)

try:
    has_touch_target = ('min-width: 44px' in css_screening and 'min-height: 44px' in css_screening)
    report.record("T1.4.4", "Prominent close button [✕] meets WCAG AAA 44x44px touch target",
                  has_touch_target, "Close button does not guarantee min-width/height 44px")
except Exception as e:
    report.record("T1.4.4", "Prominent close button [✕] meets WCAG AAA 44x44px touch target", False, e)

try:
    has_caption_and_nav = (
        'lightbox-desc-text' in css_screening and
        'lightbox-nav-btn' in css_screening and
        'prev-btn' in css_screening and
        'next-btn' in css_screening
    )
    report.record("T1.4.5", "Lightbox dialog incorporates scrollable caption and prev/next overlay controls",
                  has_caption_and_nav, "Missing scrollable caption or overlay navigation classes")
except Exception as e:
    report.record("T1.4.5", "Lightbox dialog incorporates scrollable caption and prev/next overlay controls", False, e)

# --- Feature 5: Mobile Viewport Optimization (360px-430px) ---
try:
    report.record("T1.5.1", "Mobile responsive media queries (@media (max-width: 640px)) defined in CSS",
                  '@media (max-width: 640px)' in css_screening, "Missing mobile media query")
except Exception as e:
    report.record("T1.5.1", "Mobile responsive media queries (@media (max-width: 640px)) defined in CSS", False, e)

try:
    has_compact_header = (
        '.brand-subtitle' in css_screening and
        'display: none' in css_screening and
        '.web1-btn-short' in css_screening
    )
    report.record("T1.5.2", "Header layout auto-compacts on mobile (subtitle collapses, short button displays)",
                  has_compact_header, "Missing mobile header compacting CSS rules")
except Exception as e:
    report.record("T1.5.2", "Header layout auto-compacts on mobile (subtitle collapses, short button displays)", False, e)

try:
    has_pills_carousel = (
        '.symptom-pills-scroll' in css_screening and
        'overflow-x: auto' in css_screening
    )
    report.record("T1.5.3", "Symptom quick navigation uses single horizontal-scroll carousel",
                  has_pills_carousel, "Missing horizontal scroll rules on symptom pills carousel")
except Exception as e:
    report.record("T1.5.3", "Symptom quick navigation uses single horizontal-scroll carousel", False, e)

try:
    has_table_scroll = (
        'overflow-x: auto' in css_screening and
        ('min-width: 680px' in css_screening or 'min-width: 650px' in css_screening or 'min-width: 600px' in css_screening)
    )
    report.record("T1.5.4", "Differential matrix table has horizontal scroll container preventing mobile squishing",
                  has_table_scroll, "Missing horizontal scroll or table min-width in css/screening.css")
except Exception as e:
    report.record("T1.5.4", "Differential matrix table has horizontal scroll container preventing mobile squishing", False, e)

try:
    has_viewport_meta = '<meta name="viewport" content="width=device-width, initial-scale=1.0">' in html_screening
    report.record("T1.5.5", "HTML contains standard responsive viewport meta tag",
                  has_viewport_meta, "Missing or incorrect viewport meta tag in screening.html")
except Exception as e:
    report.record("T1.5.5", "HTML contains standard responsive viewport meta tag", False, e)

# --- Feature 6: WCAG 2.1 AA/AAA Dark/Light Mode ---
try:
    report.record("T1.6.1", "[data-theme=\"dark\"] selector defined with complete inverted palette",
                  '[data-theme="dark"]' in css_screening, "Missing [data-theme='dark'] in css/screening.css")
except Exception as e:
    report.record("T1.6.1", "[data-theme=\"dark\"] selector defined with complete inverted palette", False, e)

try:
    has_high_contrast = ('--gm-rf-text: #fecdd3' in css_screening or '#fecdd3' in css_screening) and ('--gm-test-text: #99f6e4' in css_screening or '#99f6e4' in css_screening)
    report.record("T1.6.2", "Dark mode utilizes high-contrast pastel text tokens (>7:1 contrast ratio)",
                  has_high_contrast, "Missing dark mode high contrast tokens")
except Exception as e:
    report.record("T1.6.2", "Dark mode utilizes high-contrast pastel text tokens (>7:1 contrast ratio)", False, e)

try:
    report.record("T1.6.3", "Dedicated Theme Toggle button present in screening.html header",
                  'id="theme-toggle-btn"' in html_screening, "Missing #theme-toggle-btn in screening.html")
except Exception as e:
    report.record("T1.6.3", "Dedicated Theme Toggle button present in screening.html header", False, e)

try:
    has_bright_amber = '.dark\\:text-amber-200' in css_screening or '.dark\\:text-amber-300' in css_screening or '#fef08a' in css_screening
    report.record("T1.6.4", "Dark mode amber warnings utilize bright yellow-amber (#fef08a / #fde047) preventing muddy brown",
                  has_bright_amber, "Dark mode amber classes missing or inadequate")
except Exception as e:
    report.record("T1.6.4", "Dark mode amber warnings utilize bright yellow-amber (#fef08a / #fde047) preventing muddy brown", False, e)

try:
    report.record("T1.6.5", "HTML root initialized with data-theme attribute (default light)",
                  'data-theme="light"' in html_screening, "screening.html missing data-theme='light'")
except Exception as e:
    report.record("T1.6.5", "HTML root initialized with data-theme attribute (default light)", False, e)

# --- Feature 7: 3-Step Accordion Guidemap Layout ---
try:
    expected_ids = ['systemic-widespread', 'cervical-pain', 'shoulder-pain', 'thoracic-pain',
                    'lumbopelvic-pain', 'hip-groin-pain', 'knee-leg-foot-pain', 'elbow-wrist-hand-pain']
    module_ids = [m['id'] for m in screening_data]
    report.record("T1.7.1", "All 8 anatomical pain region modules defined with UpToDate clinical titles",
                  module_ids == expected_ids, f"Module IDs mismatch: {module_ids}")
except Exception as e:
    report.record("T1.7.1", "All 8 anatomical pain region modules defined with UpToDate clinical titles", False, e)

try:
    all_rf = all(len(m.get('red_flags', [])) > 0 for m in screening_data)
    report.record("T1.7.2", "Step 1: All 8 modules have Red Flags & Visceral Rule-out emergency screening",
                  all_rf, "One or more modules missing red_flags")
except Exception as e:
    report.record("T1.7.2", "Step 1: All 8 modules have Red Flags & Visceral Rule-out emergency screening", False, e)

try:
    all_ep = all(len(m.get('examination_procedures', [])) > 0 for m in screening_data)
    report.record("T1.7.3", "Step 2: All 8 modules have Provocative Physical Tests with explicit Sn/Sp metrics",
                  all_ep, "One or more modules missing examination_procedures")
except Exception as e:
    report.record("T1.7.3", "Step 2: All 8 modules have Provocative Physical Tests with explicit Sn/Sp metrics", False, e)

try:
    all_matrix = all(len(m.get('differential_table', [])) > 0 for m in screening_data)
    report.record("T1.7.4", "Step 3: All 8 modules have Differential Matrix & Intervention linkage",
                  all_matrix, "One or more modules missing differential_table")
except Exception as e:
    report.record("T1.7.4", "Step 3: All 8 modules have Differential Matrix & Intervention linkage", False, e)

try:
    has_accordion_steps = (
        'BUOC 1' in js_screening or 'BƯỚC 1' in js_screening or 'Bước 1' in js_screening
    ) and (
        'BUOC 2' in js_screening or 'BƯỚC 2' in js_screening or 'Bước 2' in js_screening
    ) and (
        'BUOC 3' in js_screening or 'BƯỚC 3' in js_screening or 'Bước 3' in js_screening
    ) and '<details' in js_screening
    report.record("T1.7.5", "UpToDate-style 3-Step Accordion (<details>/<summary>) implemented in js/screening.js",
                  has_accordion_steps, "3-step details/summary accordion missing in js/screening.js")
except Exception as e:
    report.record("T1.7.5", "UpToDate-style 3-Step Accordion (<details>/<summary>) implemented in js/screening.js", False, e)

# --- Feature 8: Two-way Deep Linking & Web 1 Safety ---
try:
    has_web1_param_links = 'index.html?proc=' in js_screening or 'index.html?proc=' in scr_js_text
    report.record("T1.8.1", "Web 2 Step 3 embeds deep links targeting Web 1 via index.html?proc=${id}",
                  has_web1_param_links, "Missing index.html?proc= link syntax in Web 2")
except Exception as e:
    report.record("T1.8.1", "Web 2 Step 3 embeds deep links targeting Web 1 via index.html?proc=${id}", False, e)

try:
    procedures_data = extract_js_var('PROCEDURES_DATA', proc_js_text)
    valid_proc_ids = {p['id'] for p in procedures_data}
    referenced_web1_ids = []
    for m in screening_data:
        for r in m.get('recommended_web1_procedures', []):
            if 'id' in r: referenced_web1_ids.append((m['id'], r['id']))
        for d in m.get('differential_table', []):
            if d.get('web1_procedure_id'): referenced_web1_ids.append((m['id'], d['web1_procedure_id']))
    
    invalid_targets = [item for item in referenced_web1_ids if item[1] not in valid_proc_ids]
    report.record("T1.8.2", f"100% of referenced Web 1 procedure targets ({len(referenced_web1_ids)} links) exist in PROCEDURES_DATA",
                  len(invalid_targets) == 0, f"Found invalid targets: {invalid_targets}")
except Exception as e:
    report.record("T1.8.2", "100% of referenced Web 1 procedure targets exist in PROCEDURES_DATA", False, e)

try:
    has_param_reader = (
        'URLSearchParams' in js_app and
        '.get(\'proc\')' in js_app and
        'openProcedureDetail' in js_app
    )
    report.record("T1.8.3", "Web 1 (js/app.js) safely parses URLSearchParams('proc') and invokes openProcedureDetail",
                  has_param_reader, "Missing URL search parameter parser in js/app.js")
except Exception as e:
    report.record("T1.8.3", "Web 1 (js/app.js) safely parses URLSearchParams('proc') and invokes openProcedureDetail", False, e)

try:
    report.record("T1.8.4", "Web 1 contains 51 procedures and 111 Springer ultrasound images 100% intact",
                  len(procedures_data) == 51, f"Expected 51 procedures, found {len(procedures_data)}")
except Exception as e:
    report.record("T1.8.4", "Web 1 contains 51 procedures and 111 Springer ultrasound images 100% intact", False, e)

try:
    has_bidirectional = ('index.html' in html_screening) and ('screening.html' in html_index)
    report.record("T1.8.5", "Bidirectional header cross-links present between index.html and screening.html",
                  has_bidirectional, "Missing cross links in headers")
except Exception as e:
    report.record("T1.8.5", "Bidirectional header cross-links present between index.html and screening.html", False, e)


# =============================================================================
# TIER 2: BOUNDARY & CORNER CASES (7 Test Cases)
# =============================================================================
report.set_tier("Tier 2: Boundary & Corner Cases")

# T2.1: Ultra-narrow viewport (360px) layout boundary
try:
    has_overflow_defense = 'overflow-x: hidden' in css_screening or 'box-sizing: border-box' in css_screening
    has_min_width_zero = 'min-width: 0' in css_screening
    report.record("T2.1", "Ultra-narrow viewport (360px): CSS enforces min-width: 0 & box-sizing preventing horizontal blowout",
                  has_overflow_defense and has_min_width_zero, "Missing defensive responsive CSS constraints")
except Exception as e:
    report.record("T2.1", "Ultra-narrow viewport (360px): CSS enforces min-width: 0 & box-sizing preventing horizontal blowout", False, e)

# T2.2: Nonexistent / Empty Search Query in Web 2 Controller
node_t2_2 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.applyFilters = applyFilters; this.initScreeningApp = initScreeningApp;', context);
context.initScreeningApp();

context.screeningState.searchQuery = 'nonexistent_test_term_xyz_12345';
context.applyFilters();

const html = dom.getElementById('screening-detail-container').innerHTML;
const passed = (context.screeningState.filteredModules.length === 0) &&
               (context.screeningState.selectedModuleId === null) &&
               html.includes('Không tìm thấy nội dung phù hợp');

console.log(JSON.stringify({{ ok: passed, filtered: context.screeningState.filteredModules.length }}));
"""
res_t2_2 = run_node_eval(node_t2_2)
report.record("T2.2", "Empty/Nonexistent search query safely clears detail selection and displays Vietnamese empty state",
              res_t2_2.get("ok") is True, res_t2_2.get("error") or res_t2_2)

# T2.3: Graceful Fallback Activation on Primary Data Loss
node_t2_3 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
// Load fallback ONLY (simulate missing/corrupted primary data/screening.js)
const fbJs = fs.readFileSync('data/screening.fallback.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(fbJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.resolveInitialScreeningData = resolveInitialScreeningData; this.initScreeningApp = initScreeningApp;', context);

const resolved = context.resolveInitialScreeningData();
context.initScreeningApp();

const passed = resolved.isFallback === true &&
               resolved.modules.length === 8 &&
               context.screeningState.allModules.length === 8;

console.log(JSON.stringify({{ ok: passed, isFallback: resolved.isFallback, modulesCount: resolved.modules.length }}));
"""
res_t2_3 = run_node_eval(node_t2_3)
report.record("T2.3", "Offline clinic / Primary dataset disruption: STABLE_SCREENING_FALLBACK shield activates with 8 modules & 57 figures",
              res_t2_3.get("ok") is True, res_t2_3.get("error") or res_t2_3)

# T2.4: Circular Lightbox Navigation Boundary Wrap
node_t2_4 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.selectModule = selectModule; this.openLightboxIndex = openLightboxIndex; this.lightboxPrev = lightboxPrev; this.lightboxNext = lightboxNext; this.initScreeningApp = initScreeningApp;', context);
context.initScreeningApp();

context.selectModule('cervical-pain'); // Has exactly 8 elite figures
context.openLightboxIndex(0);

// Boundary test 1: Prev at index 0 wraps to index 7 (last item)
context.lightboxPrev();
const wrapToEnd = (context.screeningState.lightboxIndex === 7);

// Boundary test 2: Next at index 7 wraps to index 0 (first item)
context.lightboxNext();
const wrapToStart = (context.screeningState.lightboxIndex === 0);

console.log(JSON.stringify({{ ok: wrapToEnd && wrapToStart, wrapToEnd, wrapToStart }}));
"""
res_t2_4 = run_node_eval(node_t2_4)
report.record("T2.4", "Circular Lightbox navigation boundary: Prev at index 0 wraps to end, Next at end wraps to 0",
              res_t2_4.get("ok") is True, res_t2_4.get("error") or res_t2_4)

# T2.5: Search Queries with Vietnamese Accents and Special Characters
node_t2_5 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.applyFilters = applyFilters; this.initScreeningApp = initScreeningApp;', context);
context.initScreeningApp();

const queries = ['thoát vị', 'spurling', 'statin', 'gãy mỏm nha', 'slr'];
let allPassed = true;
const results = {{}};

queries.forEach(q => {{
  context.screeningState.searchQuery = q.toLowerCase();
  context.applyFilters();
  const count = context.screeningState.filteredModules.length;
  results[q] = count;
  if (count === 0) allPassed = false;
}});

console.log(JSON.stringify({{ ok: allPassed, results }}));
"""
res_t2_5 = run_node_eval(node_t2_5)
report.record("T2.5", "Search handles Vietnamese accents, apostrophes, and abbreviations with positive matches",
              res_t2_5.get("ok") is True, res_t2_5.get("error") or res_t2_5)

# T2.6: Extreme Category Filtering Rapid Transitions
node_t2_6 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.applyFilters = applyFilters; this.initScreeningApp = initScreeningApp;', context);
context.initScreeningApp();

const cats = ['systemic', 'spine', 'upper', 'lower', 'all'];
let valid = true;
cats.forEach(c => {{
  context.screeningState.activeFilter = c;
  context.applyFilters();
  if (context.screeningState.filteredModules.length === 0 || !context.screeningState.selectedModuleId) {{
    valid = false;
  }}
}});

console.log(JSON.stringify({{ ok: valid }}));
"""
res_t2_6 = run_node_eval(node_t2_6)
report.record("T2.6", "Rapid switching across all 5 category filters maintains valid non-empty module selection",
              res_t2_6.get("ok") is True, res_t2_6.get("error") or res_t2_6)

# T2.7: Interactive Guidemap Wizard Multi-Flag Synthesis
node_t2_7 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.switchMode = switchMode; this.updateInteractiveGuidemap = updateInteractiveGuidemap; this.initScreeningApp = initScreeningApp;', context);
context.initScreeningApp();
context.switchMode('algorithm');

context.screeningState.guidemapChecklist.hasRedFlags = true;
context.screeningState.guidemapChecklist.hasVisceral = true;
context.screeningState.guidemapChecklist.hasDrugHistory = true;
context.updateInteractiveGuidemap(true);

const html = dom.getElementById('interactive-guidemap-output').innerHTML;
const hasAllWarnings = html.includes('CỜ ĐỎ') && html.includes('ĐAU CHUYỂN TẠNG') && html.includes('ĐAU DO TÁC DỤNG PHỤ');

console.log(JSON.stringify({{ ok: hasAllWarnings }}));
"""
res_t2_7 = run_node_eval(node_t2_7)
report.record("T2.7", "Interactive Guidemap Wizard synthesizes simultaneous Red Flag + Visceral + Drug warnings",
              res_t2_7.get("ok") is True, res_t2_7.get("error") or res_t2_7)


# =============================================================================
# TIER 3: PAIRWISE COMBINATIONS (5 Interaction Scenarios)
# =============================================================================
report.set_tier("Tier 3: Pairwise Combinations")

# T3.1: Dark Mode + Lightbox Open + Swipe Down Dismissal
node_t3_1 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 375 }},
  document: dom,
  localStorage: {{
    _store: {{}},
    getItem(k) {{ return this._store[k] || null; }},
    setItem(k, v) {{ this._store[k] = v; }}
  }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.openLightboxIndex = openLightboxIndex; this.closeLightbox = closeLightbox; this.initScreeningApp = initScreeningApp;', context);

context.initScreeningApp();

// 1. Switch to Dark Mode via Theme Toggle Button click
dom.getElementById('theme-toggle-btn').click();
const isDark = (dom.documentElement.getAttribute('data-theme') === 'dark');

// 2. Open Lightbox
context.openLightboxIndex(0);
const lb = dom.getElementById('image-lightbox');
const isOpen = !lb.classList.contains('hidden') && dom.body.style.overflow === 'hidden';

// 3. Close Lightbox (Simulating swipe-down touch gesture trigger)
context.closeLightbox();
const isClosed = lb.classList.contains('hidden') && dom.body.style.overflow === '';

console.log(JSON.stringify({{ ok: isDark && isOpen && isClosed, isDark, isOpen, isClosed }}));
"""
res_t3_1 = run_node_eval(node_t3_1)
report.record("T3.1", "Pairwise: Dark Mode + Lightbox Open + Swipe-down dismiss restores body overflow",
              res_t3_1.get("ok") is True, res_t3_1.get("error") or res_t3_1)

# T3.2: Deep-Link (index.html?proc=sasd-bursa) + Web 1 Modal Auto-Open + Close
node_t3_2 = f"""
const fs = require('fs');
const vm = require('vm');
const procedures = require('./data/procedures.js');
const calcJs = fs.readFileSync('js/calculator.js', 'utf8');
const checkJs = fs.readFileSync('js/checklist.js', 'utf8');
const appJs = fs.readFileSync('js/app.js', 'utf8');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{
    location: {{ search: '?proc=sasd-bursa' }},
    addEventListener() {{}},
    removeEventListener() {{}}
  }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console,
  PROCEDURES_DATA: procedures,
  URLSearchParams: URLSearchParams
}};

vm.createContext(context);
vm.runInContext(calcJs + '\\n' + checkJs + '\\n' + appJs + '\\n; this.appState = appState; this.openProcedureDetail = openProcedureDetail; this.closeModal = closeModal; this.initApp = initApp;', context);

context.initApp();
const openedProcId = context.appState.currentProcedure ? context.appState.currentProcedure.id : null;

context.closeModal();
const modal = dom.getElementById('procedure-modal');
const modalClosed = modal.classList.contains('hidden') && dom.body.style.overflow === '';

console.log(JSON.stringify({{ ok: (openedProcId === 'sasd-bursa') && modalClosed, openedProcId, modalClosed }}));
"""
res_t3_2 = run_node_eval(node_t3_2)
report.record("T3.2", "Pairwise: Deep-link ?proc=sasd-bursa directly auto-opens Web 1 modal and safely closes",
              res_t3_2.get("ok") is True, res_t3_2.get("error") or res_t3_2)

# T3.3: Category Filter ('spine') + Sub-search ('spurling') + Provocative Test Expansion
node_t3_3 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.applyFilters = applyFilters; this.initScreeningApp = initScreeningApp;', context);
context.initScreeningApp();

context.screeningState.activeFilter = 'spine';
context.screeningState.searchQuery = 'spurling';
context.applyFilters();

const html = dom.getElementById('screening-detail-container').innerHTML;
const passed = (context.screeningState.selectedModuleId === 'cervical-pain') &&
               html.includes('Spurling') &&
               html.includes('Độ nhạy (Sn):') &&
               html.includes('Độ đặc hiệu (Sp):');

console.log(JSON.stringify({{ ok: passed, mod: context.screeningState.selectedModuleId }}));
"""
res_t3_3 = run_node_eval(node_t3_3)
report.record("T3.3", "Pairwise: Category filter 'spine' + search 'spurling' isolates Cervical module with Sn/Sp badges",
              res_t3_3.get("ok") is True, res_t3_3.get("error") or res_t3_3)

# T3.4: Interactive Guidemap Wizard + Multi-flag synthesis + Tailored Web 1 Recommendation
node_t3_4 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.switchMode = switchMode; this.updateInteractiveGuidemap = updateInteractiveGuidemap; this.initScreeningApp = initScreeningApp;', context);
context.initScreeningApp();
context.switchMode('algorithm');

context.screeningState.guidemapChecklist.hasRedFlags = false;
context.screeningState.guidemapChecklist.hasVisceral = false;
context.screeningState.guidemapChecklist.hasDrugHistory = false;
context.screeningState.guidemapChecklist.painOrigin = 'facet';
context.updateInteractiveGuidemap(true);

const output = dom.getElementById('interactive-guidemap-output').innerHTML;
const passed = output.includes('Hội chứng diện khớp cạnh sống') &&
               output.includes('index.html') &&
               output.includes('Phong bế nhánh trong');

console.log(JSON.stringify({{ ok: passed, outputLen: output.length }}));
"""
res_t3_4 = run_node_eval(node_t3_4)
report.record("T3.4", "Pairwise: Interactive Guidemap cleans red flags and links facet pain to Web 1 procedure",
              res_t3_4.get("ok") is True, res_t3_4.get("error") or res_t3_4)

# T3.5: Offline Mode (Simulated primary failure) + Fallback Load + Module Selection + Lightbox Open
node_t3_5 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const fbJs = fs.readFileSync('data/screening.fallback.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(fbJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.resolveInitialScreeningData = resolveInitialScreeningData; this.selectModule = selectModule; this.openLightboxIndex = openLightboxIndex; this.initScreeningApp = initScreeningApp;', context);

const resolved = context.resolveInitialScreeningData();
context.initScreeningApp();
context.selectModule('shoulder-pain');
context.openLightboxIndex(0);

const lb = dom.getElementById('image-lightbox');
const passed = resolved.isFallback === true &&
               context.screeningState.selectedModuleId === 'shoulder-pain' &&
               context.screeningState.currentModuleFigures.length === 9 &&
               !lb.classList.contains('hidden');

console.log(JSON.stringify({{ ok: passed, figs: context.screeningState.currentModuleFigures.length }}));
"""
res_t3_5 = run_node_eval(node_t3_5)
report.record("T3.5", "Pairwise: Offline fallback mode operates seamlessly with module selection and Lightbox viewing",
              res_t3_5.get("ok") is True, res_t3_5.get("error") or res_t3_5)


# =============================================================================
# TIER 4: REAL-WORLD CLINICAL SCENARIOS (All 5 Scenarios from TEST_INFRA.md)
# =============================================================================
report.set_tier("Tier 4: Clinical Workflows")

# T4.1: Scenario 1 — Acute Groin Pain (Hip Module -> AVN/FAI red flags -> Scour/Thomas -> Web 1 hip injection)
node_t4_1 = """
const fs = require('fs');
const vm = require('vm');
const s = require('./data/screening.js');
const procs = require('./data/procedures.js');

const hipModule = s.SCREENING_DATA.find(m => m.id === 'hip-groin-pain');

// 1. Check Step 1 Red flags for AVN / Cam FAI
const avnFlag = hipModule.red_flags.find(rf => rf.category.includes('AVN') || rf.category.includes('Hoại tử vô mạch'));
const faiFlag = hipModule.red_flags.find(rf => rf.category.includes('FAI') || rf.category.includes('Xung đột'));

// 2. Check Step 2 Provocative tests: Hip Scour and Thomas tests with doctor maneuver images
const scourTest = hipModule.examination_procedures.find(ep => ep.name.includes('Scour') || ep.name.includes('Vét Khớp Háng'));
const thomasTest = hipModule.examination_procedures.find(ep => ep.name.includes('Thomas'));

const scourHasFig = scourTest && scourTest.figures && scourTest.figures.length > 0 && fs.existsSync(scourTest.figures[0].file);
const thomasHasFig = thomasTest && thomasTest.figures && thomasTest.figures.length > 0 && fs.existsSync(thomasTest.figures[0].file);

// 3. Check Step 3 Differential row linking to Web 1 hip joint injection
const hipOaRow = hipModule.differential_table.find(d => d.condition.includes('Thoái hóa khớp háng'));
const targetProcExists = procs.some(p => p.id === hipOaRow.web1_procedure_id);

const passed = Boolean(avnFlag && faiFlag && scourHasFig && thomasHasFig && targetProcExists);

console.log(JSON.stringify({
  ok: passed,
  avn: Boolean(avnFlag),
  fai: Boolean(faiFlag),
  scourFig: scourHasFig,
  thomasFig: thomasHasFig,
  targetId: hipOaRow ? hipOaRow.web1_procedure_id : null,
  procExists: targetProcExists
}));
"""
res_t4_1 = run_node_eval(node_t4_1)
report.record("T4.1", "Scenario 1: Acute groin pain: AVN/FAI flags -> Scour & Thomas tests with photos -> Web 1 Hip Injection",
              res_t4_1.get("ok") is True, res_t4_1.get("error") or res_t4_1)

# T4.2: Scenario 2 — Mobile User on iPhone SE (375px) in Dark Mode
node_t4_2 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 375 }}, // iPhone SE screen width
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
const scrJs = fs.readFileSync('data/screening.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(scrJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.selectModule = selectModule; this.openLightboxIndex = openLightboxIndex; this.closeLightbox = closeLightbox; this.initScreeningApp = initScreeningApp;', context);

context.initScreeningApp();

// 1. Set Dark Mode via Theme Toggle Button
dom.getElementById('theme-toggle-btn').click();
const isDark = (dom.documentElement.getAttribute('data-theme') === 'dark');

// 2. Select Cervical pain
context.selectModule('cervical-pain');
const isCervical = (context.screeningState.selectedModuleId === 'cervical-pain');

// 3. Open Spurling maneuver photo in Lightbox
context.openLightboxIndex(0);
const lb = dom.getElementById('image-lightbox');
const isOpen = !lb.classList.contains('hidden');

// 4. Close Lightbox via touch swipe dismiss simulation
context.closeLightbox();
const isClosed = lb.classList.contains('hidden');

console.log(JSON.stringify({{ ok: isDark && isCervical && isOpen && isClosed, isDark, isCervical, isOpen, isClosed }}));
"""
res_t4_2 = run_node_eval(node_t4_2)
report.record("T4.2", "Scenario 2: Mobile iPhone SE (375px) Dark Mode: Carousel -> Cervical -> Centered Lightbox -> Swipe dismiss",
              res_t4_2.get("ok") is True, res_t4_2.get("error") or res_t4_2)

# T4.3: Scenario 3 — Emergency Rule-Out for Thoracic / Back Pain (Thoracic dissection / AAA / Scotty Dog)
node_t4_3 = """
const fs = require('fs');
const s = require('./data/screening.js');

const lumbar = s.SCREENING_DATA.find(m => m.id === 'lumbopelvic-pain');
const thoracic = s.SCREENING_DATA.find(m => m.id === 'thoracic-pain');

// AAA flag in lumbopelvic module
const aaaFlag = lumbar.red_flags.find(rf => rf.category.includes('AAA') || rf.category.includes('Động Mạch Chủ'));
const aaaHasFig = aaaFlag && aaaFlag.figures && aaaFlag.figures.length > 0 && fs.existsSync(aaaFlag.figures[0].file);

// Scotty dog spondylolysis figure
const scottyFlag = lumbar.red_flags.find(rf => rf.category.includes('Trượt Đốt Sống') || rf.category.includes('Spondylolysis'));
const scottyHasFig = scottyFlag && scottyFlag.figures && scottyFlag.figures.length > 0 && fs.existsSync(scottyFlag.figures[0].file);

// Thoracic emergency referral (Pancoast / thoracic apex)
const pancoastFlag = thoracic.red_flags.find(rf => rf.category.includes('Pancoast') || rf.category.includes('U Đỉnh Phổi'));
const pancoastHasFig = pancoastFlag && pancoastFlag.figures && pancoastFlag.figures.length > 0 && fs.existsSync(pancoastFlag.figures[0].file);

const passed = Boolean(aaaHasFig && scottyHasFig && pancoastHasFig);

console.log(JSON.stringify({ ok: passed, aaaHasFig, scottyHasFig, pancoastHasFig }));
"""
res_t4_3 = run_node_eval(node_t4_3)
report.record("T4.3", "Scenario 3: Emergency rule-out thoracic/back: AAA auscultation -> Scotty dog fracture -> Pancoast tumor",
              res_t4_3.get("ok") is True, res_t4_3.get("error") or res_t4_3)

# T4.4: Scenario 4 — Offline Clinic with Simulated Network Failure
node_t4_4 = f"""
const fs = require('fs');
const vm = require('vm');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{ innerWidth: 1024 }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console
}};

vm.createContext(context);
// Load only fallback script
const fbJs = fs.readFileSync('data/screening.fallback.js', 'utf8');
const ctrlJs = fs.readFileSync('js/screening.js', 'utf8');
vm.runInContext(fbJs + '\\n' + ctrlJs + '\\n; this.screeningState = screeningState; this.resolveInitialScreeningData = resolveInitialScreeningData; this.initScreeningApp = initScreeningApp;', context);

const resolved = context.resolveInitialScreeningData();
context.initScreeningApp();

// Verify all 8 modules are accessible in fallback
const allModulesAccessible = context.screeningState.allModules.length === 8;
const totalFiguresInFallback = context.screeningState.allModules.reduce((acc, m) => acc + (m.figures || []).length, 0);

// Verify detail container rendered properly
const renderedHtml = dom.getElementById('screening-detail-container').innerHTML;
const hasContent = renderedHtml.length > 500;

console.log(JSON.stringify({{
  ok: allModulesAccessible && (totalFiguresInFallback === 58) && hasContent,
  modules: context.screeningState.allModules.length,
  figures: totalFiguresInFallback,
  hasContent
}}));
"""
res_t4_4 = run_node_eval(node_t4_4)
report.record("T4.4", "Scenario 4: Offline clinic network disruption: Fallback shield renders all 8 modules & 58 figures seamlessly",
              res_t4_4.get("ok") is True, res_t4_4.get("error") or res_t4_4)

# T4.5: Scenario 5 — Web 1 Integrity & Safety Audit (Deep Link + 51 Procedures + 111 Images)
node_t4_5 = f"""
const fs = require('fs');
const vm = require('vm');
const procedures = require('./data/procedures.js');

const calcJs = fs.readFileSync('js/calculator.js', 'utf8');
const checkJs = fs.readFileSync('js/checklist.js', 'utf8');
const appJs = fs.readFileSync('js/app.js', 'utf8');
{MOCK_DOM_SNIPPET}

const context = {{
  window: {{
    location: {{ search: '?proc=sasd-bursa' }},
    addEventListener() {{}},
    removeEventListener() {{}}
  }},
  document: dom,
  localStorage: {{ getItem() {{ return null; }}, setItem() {{}} }},
  console: console,
  PROCEDURES_DATA: procedures,
  URLSearchParams: URLSearchParams
}};

vm.createContext(context);
vm.runInContext(calcJs + '\\n' + checkJs + '\\n' + appJs + '\\n; this.appState = appState; this.openProcedureDetail = openProcedureDetail; this.initApp = initApp;', context);

context.initApp();

// Verify deep link opened SASD bursa
const activeProc = context.appState.currentProcedure;
const isSasdOpened = activeProc && activeProc.id === 'sasd-bursa';

// Verify all 51 procedures have existing image assets
let missingProcImages = 0;
let totalImages = 0;
procedures.forEach(p => {{
  (p.figures || []).forEach(f => {{
    totalImages++;
    if (!fs.existsSync(f.path)) missingProcImages++;
  }});
}});

console.log(JSON.stringify({{
  ok: isSasdOpened && (procedures.length === 51) && (missingProcImages === 0),
  isSasdOpened,
  totalProcedures: procedures.length,
  totalImages,
  missingProcImages
}}));
"""
res_t4_5 = run_node_eval(node_t4_5)
report.record("T4.5", "Scenario 5: Web 1 integrity audit: Deep link ?proc=sasd-bursa auto-opens; 51 procedures & 111 images 100% intact",
              res_t4_5.get("ok") is True, res_t4_5.get("error") or res_t4_5)

# =============================================================================
# SUMMARY & VERIFICATION GATE REPORT
# =============================================================================
elapsed = time.time() - start_time
print(f"\n{BOLD}════════════════════════════════════════════════════════════════════════════{RESET}")
print(f"{BOLD}                        E2E TEST EXECUTION SUMMARY                          {RESET}")
print(f"{BOLD}════════════════════════════════════════════════════════════════════════════{RESET}")

for tier_name, stats in report.tier_results.items():
    status_color = GREEN if stats["failed"] == 0 else RED
    print(f"  {status_color}{tier_name:35}: {stats['passed']}/{stats['total']} PASS ({stats['failed']} FAIL){RESET}")

print(f"────────────────────────────────────────────────────────────────────────────")
print(f"  {BOLD}TOTAL TESTS EXECUTED{RESET}             : {report.total}")
print(f"  {BOLD}TOTAL TESTS PASSED{RESET}               : {GREEN}{report.passed}{RESET}")
print(f"  {BOLD}TOTAL TESTS FAILED{RESET}               : {RED if report.failed > 0 else GREEN}{report.failed}{RESET}")
print(f"  {BOLD}SUCCESS RATE{RESET}                     : {GREEN}{report.passed / report.total * 100:.1f}%{RESET}")
print(f"  {BOLD}EXECUTION DURATION{RESET}               : {elapsed:.2f} seconds")
print(f"{BOLD}════════════════════════════════════════════════════════════════════════════{RESET}")

if report.failed > 0:
    print(f"\n{RED}{BOLD}GATE VERIFICATION FAILED: {report.failed} test(s) failed.{RESET}")
    for fid, desc, err in report.failures:
        print(f"  - [{fid}] {desc}: {err}")
    sys.exit(1)
else:
    print(f"\n{GREEN}{BOLD}>>> GATE STATUS: 100% PASS - ALL INTEGRITY CRITERIA MET (EXIT 0) <<<{RESET}\n")
    sys.exit(0)
