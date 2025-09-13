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
        # Ensure we have both 16x16 and 32x32 images. If 16x16 missing but 32x32 exists, downscale.
        sizes = {16: None, 32: None}
        for p in processed:
            im = Image.open(p).convert("RGBA")
            w, h = im.size
            if w == 16 and h == 16:
                sizes[16] = im
            if w == 32 and h == 32:
                sizes[32] = im

        # If 16 missing but 32 present, downscale 32 -> 16 and save PNG
        if sizes[16] is None and sizes[32] is not None:
            sizes[16] = sizes[32].resize((16, 16), Image.LANCZOS)
            gen16_path = PUBLIC / "favicon-16x16.png"
            sizes[16].save(gen16_path)
            print(f"Wrote generated: {gen16_path}")

        ico_path = APP / "favicon.ico"
        ico_imgs = [img for img in (sizes[16], sizes[32]) if img is not None]
        if ico_imgs:
            # Save ICO with multiple sizes
            ico_imgs[0].save(ico_path, format="ICO", sizes=[(16, 16), (32, 32)])
            print(f"Wrote: {ico_path}")


if __name__ == "__main__":
    main()
