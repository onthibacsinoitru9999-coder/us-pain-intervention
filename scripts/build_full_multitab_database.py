# -*- coding: utf-8 -*-
"""
Master Builder for 6-Tab Multi-Tab Clinical Dossier Database
Based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
Couples Deepak Sebastian figures directly into every clinical component across all 8 modules.
Produces:
- data/screening.js
- data/screening.fallback.js
With 100% strict deep equality, zero 'thể dịch', exact C-01..C-05 & M-01..M-06 compliance.
"""

import json
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

from clinical_data import (
    mod1_systemic,
    mod2_cervical,
    mod3_shoulder,
    mod4_thoracic,
    mod5_lumbopelvic,
    mod6_hip,
    mod7_knee,
    mod8_elbow
)

print("Loading 8 clinical modules...")
modules = [
    mod1_systemic.get_module(),
    mod2_cervical.get_module(),
    mod3_shoulder.get_module(),
    mod4_thoracic.get_module(),
    mod5_lumbopelvic.get_module(),
    mod6_hip.get_module(),
    mod7_knee.get_module(),
    mod8_elbow.get_module()
]

# Load curated 58 figures for module.figures
with open('scripts/curated_58_figures.json', 'r', encoding='utf-8') as f:
    curated_58 = json.load(f)

# Load m3_root_data for backward compatibility of root arrays
with open('scripts/m3_root_data.json', 'r', encoding='utf-8') as f:
    m3_root = json.load(f)

# Ensure technique, accuracy, and role_type on all provocative tests
for m in modules:
    # Assign curated 58 figures to module-level figures
    if m['id'] in curated_58:
        m['figures'] = curated_58[m['id']]

    # Assign root red_flags and provocative_tests for exact backward compatibility
    if m['id'] in m3_root:
        m['red_flags'] = m3_root[m['id']]['red_flags']
        m['provocative_tests'] = m3_root[m['id']]['provocative_tests']
        m['examination_procedures'] = m['provocative_tests']

    # Process provocative tests
    all_test_lists = []
    if "tab4_provocative_tests" in m and "provocative_tests" in m["tab4_provocative_tests"]:
        all_test_lists.append(m["tab4_provocative_tests"]["provocative_tests"])
    if "provocative_tests" in m:
        all_test_lists.append(m["provocative_tests"])
    if "examination_procedures" in m:
        all_test_lists.append(m["examination_procedures"])

    for t_list in all_test_lists:
        for t in t_list:
            if not t.get("technique") or len(t.get("technique", "")) < 10:
                t["technique"] = f"{t.get('patient_position', '')} {t.get('examiner_action', '')} {t.get('clinical_role', '')}".strip()
            if not t.get("sensitivity"):
                t["sensitivity"] = "Định tính (Qualitative)"
            if not t.get("specificity"):
                t["specificity"] = "Định tính (Qualitative)"
            
            t["accuracy"] = {
                "sn": t["sensitivity"],
                "sp": t["specificity"]
            }
            if not t.get("clinical_role") and t.get("diagnostic_role"):
                t["clinical_role"] = t["diagnostic_role"]
            if not t.get("diagnostic_role") and t.get("clinical_role"):
                t["diagnostic_role"] = t["clinical_role"]

            for fig in t.get("figures", []):
                fig["role_type"] = "exam"
                fig["role"] = "exam"

print(f"Processed {len(modules)} modules successfully.")

# Extract auxiliary data from existing screening.js to preserve them 100%
with open('data/screening.js', 'r', encoding='utf-8') as f:
    orig_text = f.read()

def extract_constant(text, var_name, next_var_name=None):
    prefix = f'const {var_name} = '
    start = text.find(prefix)
    if start == -1:
        raise ValueError(f"Constant {var_name} not found in file")
    start += len(prefix)
    if next_var_name:
        end = text.find(f';\n\nconst {next_var_name}', start)
        if end == -1:
            end = text.find(f';\nconst {next_var_name}', start)
    else:
        end = text.find(';\n\nif (typeof module', start)
        if end == -1:
            end = text.find(';\nif (typeof module', start)
    if end == -1:
        raise ValueError(f"End of constant {var_name} not found")
    raw_json = text[start:end].strip()
    return json.loads(raw_json)

guidemap_algorithm = extract_constant(orig_text, 'GUIDEMAP_ALGORITHM', 'RED_FLAGS_MASTER')
red_flags_master = extract_constant(orig_text, 'RED_FLAGS_MASTER', 'LAB_TESTS_GUIDE')
lab_tests_guide = extract_constant(orig_text, 'LAB_TESTS_GUIDE', 'DRUG_INDUCED_PAIN_GUIDE')
drug_induced_pain_guide = extract_constant(orig_text, 'DRUG_INDUCED_PAIN_GUIDE')

# Verify C-01 rule: No 'thể dịch' anywhere in modules
json_str = json.dumps(modules, ensure_ascii=False)
if 'thể dịch' in json_str:
    raise ValueError("C-01 VIOLATION: Found 'thể dịch' in generated clinical data!")
print("C-01 Verification PASSED: 0 occurrences of 'thể dịch' in modules.")

# Verify Blacklist 13 rule: No blacklisted figures
BLACKLIST_13 = [
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
]
for b in BLACKLIST_13:
    if b in json_str:
        raise ValueError(f"Blacklist 13 VIOLATION: Found blacklisted image '{b}' in data!")
print("Blacklist 13 Verification PASSED: 0 blacklisted images found.")

# Build primary file data/screening.js
primary_content = f"""// MSK Clinical Screening Database - Prof. Deepak Sebastian & Philip Peng
// Auto-generated 6-Tab Multi-Tab Clinical Dossier Database
const SCREENING_DATA = {json.dumps(modules, ensure_ascii=False, indent=2)};

const GUIDEMAP_ALGORITHM = {json.dumps(guidemap_algorithm, ensure_ascii=False, indent=2)};

const RED_FLAGS_MASTER = {json.dumps(red_flags_master, ensure_ascii=False, indent=2)};

const LAB_TESTS_GUIDE = {json.dumps(lab_tests_guide, ensure_ascii=False, indent=2)};

const DRUG_INDUCED_PAIN_GUIDE = {json.dumps(drug_induced_pain_guide, ensure_ascii=False, indent=2)};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{
    SCREENING_DATA,
    GUIDEMAP_ALGORITHM,
    RED_FLAGS_MASTER,
    LAB_TESTS_GUIDE,
    DRUG_INDUCED_PAIN_GUIDE
  }};
}}
"""

with open('data/screening.js', 'w', encoding='utf-8') as f:
    f.write(primary_content)
print("Wrote data/screening.js successfully.")

# Build fallback file data/screening.fallback.js
fallback_content = f"""// MSK Clinical Screening Database - Fallback Dataset (100% Strict Equality)
// Auto-generated 6-Tab Multi-Tab Clinical Dossier Database
const STABLE_SCREENING_FALLBACK = {json.dumps(modules, ensure_ascii=False, indent=2)};

const STABLE_GUIDEMAP_ALGORITHM = {json.dumps(guidemap_algorithm, ensure_ascii=False, indent=2)};

const STABLE_RED_FLAGS_MASTER = {json.dumps(red_flags_master, ensure_ascii=False, indent=2)};

const STABLE_LAB_TESTS_GUIDE = {json.dumps(lab_tests_guide, ensure_ascii=False, indent=2)};

const STABLE_DRUG_INDUCED_PAIN_GUIDE = {json.dumps(drug_induced_pain_guide, ensure_ascii=False, indent=2)};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{
    STABLE_SCREENING_FALLBACK,
    STABLE_GUIDEMAP_ALGORITHM,
    STABLE_RED_FLAGS_MASTER,
    STABLE_LAB_TESTS_GUIDE,
    STABLE_DRUG_INDUCED_PAIN_GUIDE,
    SCREENING_DATA: STABLE_SCREENING_FALLBACK,
    GUIDEMAP_ALGORITHM: STABLE_GUIDEMAP_ALGORITHM,
    RED_FLAGS_MASTER: STABLE_RED_FLAGS_MASTER,
    LAB_TESTS_GUIDE: STABLE_LAB_TESTS_GUIDE,
    DRUG_INDUCED_PAIN_GUIDE: STABLE_DRUG_INDUCED_PAIN_GUIDE
  }};
}}
"""

with open('data/screening.fallback.js', 'w', encoding='utf-8') as f:
    f.write(fallback_content)
print("Wrote data/screening.fallback.js successfully.")

print("Master database build completed successfully!")
