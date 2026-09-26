import json

with open('data/procedures.js', 'r', encoding='utf-8') as f:
    content = f.read()

prefix = 'const PROCEDURES_DATA = '
start = content.find(prefix) + len(prefix)
end = content.find(';\n\nif')
json_str = content[start:end].strip()

data = json.loads(json_str)
print(f"Loaded {len(data)} procedures from data/procedures.js")
for i, p in enumerate(data, 1):
    print(f"{i:2d}. [{p['id']}] {p['nameVi']} ({p['category']}/{p.get('subcategory', '')})")
