import re

with open('scripts/build_database.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    m = re.match(r'^(\s*)([a-zA-Z0-9_]+)\s*:(.*)$', line)
    if m:
        indent, key, rest = m.groups()
        new_lines.append(f'{indent}"{key}":{rest}\n')
    else:
        new_lines.append(line)

with open('scripts/build_database.py', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Done fixing syntax in build_database.py")
