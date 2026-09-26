import os
import re

with open('data/procedures.js', 'r', encoding='utf-8') as f:
    content = f.read()

paths = re.findall(r'"(assets/images/[^"]+)"', content)
print(f"Found {len(paths)} image paths.")

missing = []
for p in paths:
    if not os.path.exists(p):
        missing.append(p)

if missing:
    print("Missing images:", missing)
else:
    print("All referenced images exist perfectly on disk!")
