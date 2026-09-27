# Project: MSK-Differential Screening Pro (Web 2) & US-PainIntervention Pro (Web 1)

## Architecture
- **Web 1 (US-PainIntervention Pro)**:
  - Entry: `index.html`, `css/style.css`, `js/app.js`, `js/calculator.js`, `js/checklist.js`
  - Datasets: `data/procedures.js`, `data/procedures.fallback.js` (51 procedures, frozen backup in `backup/stable_v1.0/`)
  - Assets: `assets/images/` (111 Springer ultrasound images across 27 chapters)
  - Scope: 100% frozen and protected. Deep-link parameter `?proc=...` handler added non-invasively to `js/app.js`.
- **Web 2 (MSK-Differential Screening Pro)**:
  - Entry: `screening.html`, `css/screening.css` (dedicated stylesheet), `js/screening.js`
  - Datasets: `data/screening.js`, `data/screening.fallback.js` (8 symptom modules, 3-step decision flow, 57 elite clinical images)
  - Assets: `assets/deepak_images/` (279 total on disk; exactly 57 elite clinical photos referenced in production)
- **Data Flow & Resilience**:
  - 3-tier fallback shield on both Web 1 and Web 2: Primary dataset -> Fallback frozen script -> LocalStorage snapshot.
  - Zero external runtime dependency (Vanilla HTML5, modern CSS3, native ES6 JavaScript).
  - Cross-linking: Web 2 Step 3 links to Web 1 via `index.html?proc=${procId}`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | 57 Elite Clinical Images Curation | Curate 57 elite photos (20 red flags/pathology, 37 real doctor physical maneuvers) from 279 Deepak images. Purge 56 raw bone diagrams from exam cards. | M1 | ORIGINAL_REQUEST §R2 |
| 2 | Data Schema & Fallback Synchronization | Update `data/screening.js` and `data/screening.fallback.js` with 57 curated photos, Sn/Sp metrics, and Web 1 procedure IDs. | M1 | ORIGINAL_REQUEST §R2, §R4 |
| 3 | Dedicated CSS Architecture (`css/screening.css`) | Extract all Web 2 styles from `screening.html` and `css/style.css` into `css/screening.css`, isolating Web 1 completely. | M2 | ORIGINAL_REQUEST §R3, §R4 |
| 4 | Viewport-Centered Lightbox Modal | Centered lightbox with `backdrop-filter: blur(12px)`, 44x44px touch targets, scrollable caption, swipe-to-dismiss. | M2 | ORIGINAL_REQUEST §R3 |
| 5 | Mobile Viewport Optimization (360px-430px) | Compact header, unified carousel for symptom pills, horizontal-scroll differential table (`min-width: 680px`), fix `.proc-card` styling. | M2 | ORIGINAL_REQUEST §R3 |
| 6 | WCAG 2.1 AA/AAA Dark/Light Mode | Replace phantom Tailwind `dark:*` with robust `[data-theme="dark"]` CSS variables, achieving contrast ratios >5.7:1. | M2 | ORIGINAL_REQUEST §R3 |
| 7 | 3-Step Accordion Guidemap Layout | Restructure Web 2 detail view into UpToDate-style 3 steps (Step 1: Red flags, Step 2: Provocative tests, Step 3: Differential matrix). Default collapsed/expandable. | M3 | ORIGINAL_REQUEST §R1 |
| 8 | Two-way Deep Linking & Web 1 Safety | Web 2 links to `index.html?proc=${procId}`; Web 1 parses URL search param to auto-open modal safely without breaking Web 1. | M3 | ORIGINAL_REQUEST §R1, §R4 |
| 9 | Test Suite Calibration & E2E Validation | Update existing test harnesses to assert 57 elite figures; execute Tier 1-4 tests and Tier 5 adversarial verification. | M4 | ORIGINAL_REQUEST AC |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Image Curation & Data Model Hardening | Integrate `elite_57_images.json` into `data/screening.js` & `data/screening.fallback.js`. Remove all 13 mislabeled bone diagrams. Add Sn/Sp metrics. | None | DONE |
| M2 | CSS & Mobile Viewport / Lightbox Overhaul | Create `css/screening.css`. Implement centered Lightbox, 360-430px mobile responsiveness, unified carousel, and Dark/Light mode tokens. | None | DONE |
| M3 | Accordion Guidemap 3-Step Decision Tree & Deep-linking | Refactor `js/screening.js` to render 3-step Accordion layout. Connect Step 3 to Web 1 deep-link `index.html?proc=...` and update `js/app.js` query reader. | M1, M2 | DONE |
| M4 | E2E Testing, Web 1 Integrity & Coverage Hardening | Run all test suites, verify Web 1 zero-regression, execute Tier 1-4 E2E tests, Tier 5 adversarial review, and Forensic Audit. | M3 | DONE |

## Interface Contracts
### `data/screening.js` & `data/screening.fallback.js` ↔ `js/screening.js`
- `SCREENING_DATA`: Array of 8 module objects.
- Each module object:
  - `id`: string (`systemic-widespread`, `cervical-pain`, `shoulder-pain`, `thoracic-pain`, `lumbopelvic-pain`, `hip-groin-pain`, `knee-leg-foot-pain`, `elbow-wrist-hand-pain`)
  - `nameVi`: string
  - `red_flags`: Array of items with `name`, `warning`, `imaging_findings`, `img` (string path to `assets/deepak_images/...`), `action`
  - `visceral_referrals`: Array of items with `organ`, `pattern`, `warning`
  - `provocative_tests`: Array of items with `name`, `technique`, `accuracy` (`sn`, `sp`), `target`, `img` (string path to `assets/deepak_images/...`, MUST be genuine doctor maneuver), `clinical_role`
  - `differential_matrix`: Array of items with `condition`, `onset`, `aggravating_relieving`, `confirmatory_test`, `gold_standard`, `distinguishing_pearl`, `web1_procedure_id`
  - `recommended_web1_procedures`: Array of `{ id: string, nameVi: string, indication: string }`
  - `figures`: Array of the curated elite figure objects belonging to this module (total across 8 modules = 57).

### Web 2 (`screening.html`) ↔ Web 1 (`index.html`)
- Cross-link URL: `index.html?proc=${procId}`
- Web 1 `js/app.js`: In `initApp()`, inspect `new URLSearchParams(window.location.search).get('proc')`. If present and matches a valid procedure in `PROCEDURES_DATA`, invoke `openProcedureDetail(procId)` after initial render.

## Code Layout
- `css/screening.css`: Independent stylesheet for Web 2.
- `screening.html`: Links to `css/screening.css` and `css/style.css` (for global base variables only).
- `data/screening.js`: Curated dataset with 57 elite images and Sn/Sp data.
- `data/screening.fallback.js`: Frozen mirror of `data/screening.js`.
- `js/screening.js`: Accordion 3-step rendering and Lightbox controller.
- `js/app.js`: Safe deep-link reader for Web 1.
- `scripts/`: Updated test runners (`test_both_apps.py`, `test_complete_guidemap.js`, `test_embedded_figures_and_layout.py`, `verify_web2_deep.py`).
