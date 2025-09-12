"""
Small script to replace white/transparent backgrounds with black for favicons.

Usage (macOS zsh):
  python3 -m venv .venv && source .venv/bin/activate
  pip install pillow
  python scripts/fix_favicons.py

It will update:
  - public/favicon-16x16.png
  - public/favicon-32x32.png
  - src/app/favicon.ico (generated from PNGs)

Note: backups will be created as .bak files.
"""
from PIL import Image
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"

FILES = [
    PUBLIC / "favicon-16x16.png",
    PUBLIC / "favicon-32x32.png",
]

BACKUP_SUFFIX = ".bak"


def ensure_backup(p: Path):
    """Create a copy backup next to the original (e.g. favicon.png -> favicon.png.bak)."""
    backup = p.with_suffix(p.suffix + BACKUP_SUFFIX)
    if p.exists() and not backup.exists():
        shutil.copy2(p, backup)


def replace_bg_with_black(img: Image.Image) -> Image.Image:
    """Return image with transparent or white background replaced with black."""
    img = img.convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        # Treat fully/mostly transparent as transparent
        if a == 0:
            new_data.append((0, 0, 0, 255))
            continue
        # Treat near-white as background
        if r > 240 and g > 240 and b > 240:
            new_data.append((0, 0, 0, 255))
        else:
            new_data.append((r, g, b, a))
    img.putdata(new_data)
    return img.convert("RGBA")


def main():
    print("Processing favicons...")
    processed = []
    for p in FILES:
        if not p.exists():
            print(f"Skipping missing: {p}")
            continue
        # create a copy backup, but keep reading from the original path
        ensure_backup(p)
        img = Image.open(p)
        out = replace_bg_with_black(img)
        out_path = PUBLIC / p.name
        out.save(out_path)
        processed.append(out_path)
        print(f"Wrote: {out_path}")

    # Create favicon.ico in src/app
    if processed:
        icons = [Image.open(x).convert("RGBA") for x in processed]
        # ensure sizes for ICO: 16 and 32
        ico_sizes = []
        for im in icons:
            ico_sizes.append(im)
        ico_path = APP / "favicon.ico"
        # save ICO with multiple sizes
        ico_sizes[0].save(ico_path, format="ICO", sizes=[(16, 16), (32, 32)])
        print(f"Wrote: {ico_path}")


if __name__ == "__main__":
    main()
