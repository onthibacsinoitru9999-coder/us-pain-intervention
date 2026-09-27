# E2E Test Infra: MSK-Differential Screening Pro & US-PainIntervention Pro

## Test Philosophy
- Opaque-box, requirement-driven. No dependency on implementation design.
- Methodology: Category-Partition + Boundary Value Analysis + Pairwise + Workload Testing.
- Zero regression guarantee for Web 1 (`index.html`).

## Feature Inventory
| # | Feature | Source (requirement) | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|---------------------|:------:|:------:|:------:|:------:|
| 1 | 57 Elite Clinical Images Curation | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ | ✓ |
| 2 | Data Schema & Fallback Synchronization | ORIGINAL_REQUEST §R2, §R4 | 5 | 5 | ✓ | ✓ |
| 3 | Dedicated CSS Architecture (`css/screening.css`) | ORIGINAL_REQUEST §R3, §R4 | 5 | 5 | ✓ | ✓ |
| 4 | Viewport-Centered Lightbox Modal | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ | ✓ |
| 5 | Mobile Viewport Optimization (360px-430px) | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ | ✓ |
| 6 | WCAG 2.1 AA/AAA Dark/Light Mode | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ | ✓ |
| 7 | 3-Step Accordion Guidemap Layout | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ | ✓ |
| 8 | Two-way Deep Linking & Web 1 Safety | ORIGINAL_REQUEST §R1, §R4 | 5 | 5 | ✓ | ✓ |

## Test Architecture
- Test runners:
  1. `python scripts/test_both_apps.py`: Integration test asserting Web 1 & Web 2 files, 51 procedures, 8 modules, image file paths on disk, fallback mirrors.
  2. `node scripts/test_complete_guidemap.js`: DOM & Data consistency test asserting 8 modules, 10 red flags, 12 lab tests, 7 drug groups, Sn/Sp metrics, differential matrix gold standards.
  3. `python scripts/test_app.py`: Web 1 isolation test ensuring `index.html`, `data/procedures.js`, and 111 Springer ultrasound images remain 100% intact.
  4. `python scripts/test_embedded_figures_and_layout.py`: Layout & figure embedding test asserting 57 elite figures, 0 bone sketches in exam cards, mobile CSS rules.
  5. `python scripts/verify_web2_deep.py`: Deep-level assertion of clinical content and UI rendering.
- Directory layout:
  - `scripts/`: Automated Python & Node.js test harnesses.
  - `.agents/teamwork/`: Test logs, gate reports, and verification artifacts.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | Patient with acute groin pain: Doctor opens Hip Module, checks AVN/FAI red flags in Step 1, performs Hip Scour & Thomas tests in Step 2 with photo reference, views Differential Matrix in Step 3 and clicks through to Web 1 Intraarticular Hip Injection. | F1, F2, F4, F7, F8 | High |
| 2 | Mobile user on iPhone SE (375px) in Dark Mode: Opens Web 2, scrolls single carousel, clicks Cervical pain, taps Spurling test photo to open centered Lightbox, closes via swipe down or touch outside. | F3, F4, F5, F6, F7 | High |
| 3 | Emergency rule-out for thoracic/back pain: Doctor checks Step 1 Red Flags (Abdominal Aortic Aneurysm / Thoracic dissection) with auscultation diagram and Scotty dog spondylolysis figure. | F1, F2, F7 | Medium |
| 4 | Offline clinic with simulated network failure: Primary `screening.js` is interrupted; application falls back seamlessly to `screening.fallback.js` with full Accordion & 57 figures. | F2, F7, F8 | High |
| 5 | Web 1 integrity audit: Clinician accesses `index.html?proc=subacromial-subdeltoid-bursa-injection`, modal opens instantly; all 51 procedures and 111 images operate identically. | F8, F3 | High |

## Coverage Thresholds
- Tier 1: ≥5 test cases per feature (Happy path)
- Tier 2: ≥5 test cases per feature (Boundary/offline/fallback/small screen)
- Tier 3: Pairwise combination testing of feature interactions
- Tier 4: ≥5 realistic clinical application scenarios
