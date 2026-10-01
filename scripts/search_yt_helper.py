import urllib.request
import urllib.parse
import re
import json
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def search_youtube(query, max_results=6):
    url = f"https://www.youtube.com/results?search_query={urllib.parse.quote(query)}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching: {e}")
        return []

    pattern = r'\"videoRenderer\":\{\"videoId\":\"([a-zA-Z0-9_-]{11})\".*?\"title\":\{\"runs\":\[\{\"text\":\"(.*?)\"\}\].*?\"ownerText\":\{\"runs\":\[\{\"text\":\"(.*?)\"\}'
    matches = re.findall(pattern, html)
    results = []
    seen = set()
    for vid, title, channel in matches:
        if vid in seen:
            continue
        seen.add(vid)
        if '#shorts' in title.lower() or '#fyp' in title.lower():
            continue
        results.append({
            'videoId': vid,
            'title': title,
            'channel': channel,
            'url': f"https://www.youtube.com/watch?v={vid}",
            'embedUrl': f"https://www.youtube.com/embed/{vid}"
        })
        if len(results) >= max_results:
            break
    return results

if __name__ == '__main__':
    query = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "Ultrasound Guided Injection"
    res = search_youtube(query)
    print(json.dumps(res, ensure_ascii=False, indent=2))
