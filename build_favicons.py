from pathlib import Path
from PIL import Image

root = Path(__file__).parent
source = Image.open(root / "assets" / "amanita-favicon-v1.png").convert("RGBA")

for size, name in [
    (48, "favicon-48x48.png"),
    (180, "apple-touch-icon.png"),
    (192, "favicon-192x192.png"),
    (512, "favicon-512x512.png"),
]:
    source.resize((size, size), Image.Resampling.LANCZOS).save(root / name, optimize=True)

source.save(root / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
