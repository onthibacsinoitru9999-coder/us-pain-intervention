import os

dirs_to_check = [
    'assets/images/ch22_hip',
    'assets/images/ch13_cervical_medial_branch',
    'assets/images/ch8_pelvic_muscles',
    'assets/images/ch20_elbow',
    'assets/images/ch24_ankle_foot',
]

for d in dirs_to_check:
    print(f"\nFiles in {d}:")
    for f in sorted(os.listdir(d)):
        print("  ", f)
