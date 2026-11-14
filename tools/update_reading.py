"""Pull the "currently reading" shelf from Goodreads and write js/reading.js.

Run by .github/workflows/goodreads.yml once a day. Only uses the standard library.
"""
import json, re, sys, urllib.request
import xml.etree.ElementTree as ET

FEED = "https://www.goodreads.com/review/list_rss/186725342?shelf=currently-reading"
OUT = "js/reading.js"

def short(title):
    # "Atlas of AI: Power, Politics, and..." -> "Atlas of AI"; drop "(Series #2)"
    title = re.split(r":\s", title, 1)[0]
    return re.sub(r"\s*\([^)]*#\d+[^)]*\)\s*$", "", title).strip()

def parse(xml_text):
    root = ET.fromstring(xml_text)
    books = []
    for item in root.iter("item"):
        t, a = item.findtext("title"), item.findtext("author_name")
        if t and a:
            books.append({"title": short(t.strip()), "author": a.strip()})
    return list(reversed(books))  # oldest-added first

def main():
    req = urllib.request.Request(FEED, headers={"User-Agent": "Mozilla/5.0 (portfolio reading list)"})
    books = parse(urllib.request.urlopen(req, timeout=30).read())
    if not books:
        print("Shelf came back empty; leaving the current list alone.")
        return
    body = "// Written by tools/update_reading.py from Goodreads. Don't edit by hand.\nconst READING = " + json.dumps(books, indent=2, ensure_ascii=False) + ";\n"
    open(OUT, "w", encoding="utf-8").write(body)
    print("\n".join(f"{b['title']} by {b['author']}" for b in books))

if __name__ == "__main__":
    sys.exit(main())
