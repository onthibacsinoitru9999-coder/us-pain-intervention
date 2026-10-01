import json, re, sys

sys.stdout.reconfigure(encoding='utf-8')

REPLACEMENTS = {
    "inferior-cluneal-nerve": {
        "videoId": "2EwE3RMrvtU",
        "title": "Locating the Inferior Cluneal Nerve - Neural Surface Anatomy Series - Stimpod NMS460",
        "channel": "Xavant Technology",
        "url": "https://www.youtube.com/watch?v=2EwE3RMrvtU",
        "embedUrl": "https://www.youtube.com/embed/2EwE3RMrvtU"
    },
    "obturator-internus": {
        "videoId": "rxAKwGq13Lo",
        "title": "Obturator Internus Dysfunction, Tendonitis, Bursitis, and Injection",
        "channel": "Dr. Terkawi Pain Medicine",
        "url": "https://www.youtube.com/watch?v=rxAKwGq13Lo",
        "embedUrl": "https://www.youtube.com/embed/rxAKwGq13Lo"
    },
    "quadratus-femoris": {
        "videoId": "hIogbdYnkIs",
        "title": "Ischiofemoral Impingement Ultrasound Guided Evaluation and Injection",
        "channel": "Mehmet Mustafa Ertürk",
        "url": "https://www.youtube.com/watch?v=hIogbdYnkIs",
        "embedUrl": "https://www.youtube.com/embed/hIogbdYnkIs"
    },
    "sacral-lateral-branch": {
        "videoId": "KwtPeTkgsfE",
        "title": "Ultrasound Imaging of the Sacrum and Injection Techniques. Dr. C.P. Lin, Taiwan",
        "channel": "isspsTV",
        "url": "https://www.youtube.com/watch?v=KwtPeTkgsfE",
        "embedUrl": "https://www.youtube.com/embed/KwtPeTkgsfE"
    },
    "sacroiliac-joint-rfa": {
        "videoId": "t61ip9BEyoI",
        "title": "Dr Agnes Stogicza - Radiofrequency E-Learning Seminar 1 Session 4: Sacroiliac Joint Denervation",
        "channel": "Painschool International",
        "url": "https://www.youtube.com/watch?v=t61ip9BEyoI",
        "embedUrl": "https://www.youtube.com/embed/t61ip9BEyoI"
    },
    "glenohumeral-anterior": {
        "videoId": "f9zo3Ti4CcI",
        "title": "Rotator Cuff Interval Injection: 3-Step USG Approach | Frozen Shoulder | Dr. Chinmoy Roy",
        "channel": "Asian Pain Academy",
        "url": "https://www.youtube.com/watch?v=f9zo3Ti4CcI",
        "embedUrl": "https://www.youtube.com/embed/f9zo3Ti4CcI"
    },
    "suprascapular-nerve": {
        "videoId": "nBS3N9efdWo",
        "title": "Suprascapular Nerve Block- Ultrasound Guided",
        "channel": "Leicester Pain Education",
        "url": "https://www.youtube.com/watch?v=nBS3N9efdWo",
        "embedUrl": "https://www.youtube.com/embed/nBS3N9efdWo"
    },
    "pes-anserinus": {
        "videoId": "Nw9UwEtMVn0",
        "title": "Pes Anserine Bursitis Injection Under Ultrasound-Guidance",
        "channel": "Dr HASSAN MUBARK",
        "url": "https://www.youtube.com/watch?v=Nw9UwEtMVn0",
        "embedUrl": "https://www.youtube.com/embed/Nw9UwEtMVn0"
    },
    "distal-itb-bursa": {
        "videoId": "aKZugeNA0zM",
        "title": "Ultrasound Guided Injection for ITB Syndrome",
        "channel": "The Podiatry Clinic",
        "url": "https://www.youtube.com/watch?v=aKZugeNA0zM",
        "embedUrl": "https://www.youtube.com/embed/aKZugeNA0zM"
    },
    "patellar-tendon-fenestration": {
        "videoId": "fEwF3smEZ0c",
        "title": "Ultrasound Guided Percutaneous Needle Tenotomy of the Patellar Tendon and PRP Infiltration",
        "channel": "Dr. Abdallah Allam",
        "url": "https://www.youtube.com/watch?v=fEwF3smEZ0c",
        "embedUrl": "https://www.youtube.com/embed/fEwF3smEZ0c"
    },
    "hip-joint-denervation": {
        "videoId": "LjjVeCFlEXA",
        "title": "PENG Block (Pericapsular Nerve Group Block)",
        "channel": "Regional Anesthesiology and Acute Pain Medicine",
        "url": "https://www.youtube.com/watch?v=LjjVeCFlEXA",
        "embedUrl": "https://www.youtube.com/embed/LjjVeCFlEXA"
    },
    "carpal-tunnel": {
        "videoId": "sxNqVWDwmd0",
        "title": "How To: Ultrasound Guided Carpal Tunnel Injection 3D Video",
        "channel": "Sonosite",
        "url": "https://www.youtube.com/watch?v=sxNqVWDwmd0",
        "embedUrl": "https://www.youtube.com/embed/sxNqVWDwmd0"
    },
    "bakers-cyst": {
        "videoId": "hu5gODBof04",
        "title": "How to Scan & Inject a Baker's Cyst with Ultrasound",
        "channel": "Sports Medicine Ultrasound",
        "url": "https://www.youtube.com/watch?v=hu5gODBof04",
        "embedUrl": "https://www.youtube.com/embed/hu5gODBof04"
    },
    "prp-platelet-rich-plasma": {
        "videoId": "kP0HzwMDZos",
        "title": "Hip Joint PRP Injection with Ultrasound - Scanning and Injection Technique Training Video",
        "channel": "Sports Medicine Ultrasound",
        "url": "https://www.youtube.com/watch?v=kP0HzwMDZos",
        "embedUrl": "https://www.youtube.com/embed/kP0HzwMDZos"
    },
    "pudendal-nerve": {
        "videoId": "jhBZXwFm7nM",
        "title": "Ultrasound Guided Pudendal Nerve Block",
        "channel": "American Society For Post Surgical Pain",
        "url": "https://www.youtube.com/watch?v=jhBZXwFm7nM",
        "embedUrl": "https://www.youtube.com/embed/jhBZXwFm7nM"
    },
    "lumbar-medial-branch": {
        "videoId": "3fhPb-ZNml4",
        "title": "Lumbar Medial Branch Block",
        "channel": "The Spine & Pain Institute of New York",
        "url": "https://www.youtube.com/watch?v=3fhPb-ZNml4",
        "embedUrl": "https://www.youtube.com/embed/3fhPb-ZNml4"
    },
    "cervical-medial-branch-ton": {
        "videoId": "jdYiVV1LVzk",
        "title": "Ultrasound-Guided Cervical Facet Joint Injection – Cervical Medial Branch Block Medstudylab.com",
        "channel": "Anesthesia and Pain medicine",
        "url": "https://www.youtube.com/watch?v=jdYiVV1LVzk",
        "embedUrl": "https://www.youtube.com/embed/jdYiVV1LVzk"
    }
}

# 1. Update data/procedure_youtube_videos.json
with open('data/procedure_youtube_videos.json', 'r', encoding='utf-8') as f:
    vids = json.load(f)

for pid, rep in REPLACEMENTS.items():
    if pid in vids:
        vids[pid]['videoId'] = rep['videoId']
        vids[pid]['title'] = rep['title']
        vids[pid]['channel'] = rep['channel']
        vids[pid]['url'] = rep['url']
        vids[pid]['embedUrl'] = rep['embedUrl']
        print(f"Updated in JSON: {pid} -> {rep['videoId']} ({rep['title']})")

with open('data/procedure_youtube_videos.json', 'w', encoding='utf-8') as f:
    json.dump(vids, f, ensure_ascii=False, indent=2)

print("\nSuccessfully updated data/procedure_youtube_videos.json")

# 2. Update data/procedures.js and data/procedures.fallback.js
# We can load data/procedures.js, extract JSON array, update the video field, and rewrite.
with open('data/procedures.js', 'r', encoding='utf-8') as f:
    proc_js = f.read()

# Extract the JSON array
match = re.search(r'window\.PROCEDURES_DATA\s*=\s*(\[[\s\S]*?\]);\s*(?:if\s*\(typeof window|\Z)', proc_js)
if not match:
    # Try alternate pattern
    match = re.search(r'const PROCEDURES_DATA\s*=\s*(\[[\s\S]*?\]);', proc_js)

if not match:
    print("Error: Could not extract PROCEDURES_DATA from data/procedures.js")
    sys.exit(1)

raw_json = match.group(1)
procedures = json.loads(raw_json)

updated_count = 0
for p in procedures:
    pid = p.get('id')
    if pid in vids:
        v_info = vids[pid]
        p['video'] = {
            'videoId': v_info['videoId'],
            'title': v_info['title'],
            'channel': v_info['channel'],
            'url': v_info['url'],
            'embedUrl': v_info['embedUrl']
        }
        updated_count += 1

print(f"Updated video field in {updated_count} procedures.")

new_js = "const PROCEDURES_DATA = " + json.dumps(procedures, ensure_ascii=False, indent=2) + ";\n\nif (typeof window !== \"undefined\") { window.PROCEDURES_DATA = PROCEDURES_DATA; }\nif (typeof module !== \"undefined\" && module.exports) { module.exports = PROCEDURES_DATA; }\n"

with open('data/procedures.js', 'w', encoding='utf-8') as f:
    f.write(new_js)

print("Saved data/procedures.js")

# Also update fallback
with open('data/procedures.fallback.js', 'w', encoding='utf-8') as f:
    f.write(new_js)

print("Saved data/procedures.fallback.js")
