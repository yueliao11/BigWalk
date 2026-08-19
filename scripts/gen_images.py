#!/usr/bin/env python3
"""Generate WalkHub static images: og cover, favicon, tower diagrams.

Run from repo root:  python3 scripts/gen_images.py
Outputs:
  public/og-cover.png                1200x630  default social card
  app/icon.png                       512x512   favicon (Next.js app icon)
  public/images/*-tower-map.png      1200x675  per-tower schematics
  public/images/coop-platforms.png   1200x675  co-op platform checklist
"""
from PIL import Image, ImageDraw, ImageFont

INK = (15, 23, 42)          # slate-900
PANEL = (30, 41, 59)        # slate-800
LINE = (71, 85, 105)        # slate-600
TEXT = (248, 250, 252)      # slate-50
MUTED = (148, 163, 184)     # slate-400
GOOD = (52, 211, 153)       # emerald-400
BAD = (248, 113, 113)       # red-400

TOWER_COLORS = {
    "red": (239, 68, 68),
    "black": (226, 232, 240),
    "green": (34, 197, 94),
    "blue": (59, 130, 246),
    "yellow": (234, 179, 8),
}

FONT_PATHS = [
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/Library/Fonts/Arial.ttf",
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    for p in FONT_PATHS:
        try:
            return ImageFont.truetype(p, size, index=1 if bold else 0)
        except Exception:
            continue
    return ImageFont.load_default()


def canvas(w=1200, h=675):
    img = Image.new("RGB", (w, h), INK)
    return img, ImageDraw.Draw(img)


def label(d, xy, text, size=30, color=TEXT, bold=False, anchor="la"):
    d.text(xy, text, font=font(size, bold), fill=color, anchor=anchor)


def pad(d, cx, cy, r, color, text=None):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=6)
    if text:
        label(d, (cx, cy), text, size=26, color=color, bold=True, anchor="mm")


def bridge(d, x1, y, x2, color):
    d.rectangle([x1, y - 10, x2, y + 10], fill=PANEL, outline=color, width=4)


def arrow(d, x1, y, x2, color=MUTED):
    d.line([x1, y, x2, y], fill=color, width=5)
    d.polygon([(x2, y), (x2 - 18, y - 10), (x2 - 18, y + 10)], fill=color)


def title_block(d, name, color, subtitle):
    d.rounded_rectangle([48, 44, 72, 68], 6, fill=color)
    label(d, (92, 56), f"Big Walk {name} Tower", size=40, bold=True, anchor="lm")
    label(d, (92, 96), subtitle, size=24, color=MUTED, anchor="lm")


# ---------------------------------------------------------------- og cover
def og_cover():
    img, d = canvas(1200, 630)
    label(d, (600, 200), "WalkHub", size=110, bold=True, anchor="mm")
    label(
        d, (600, 300),
        "Big Walk guides, tools & co-op puzzle solutions",
        size=38, color=MUTED, anchor="mm",
    )
    # five tower pips
    xs = [420, 510, 600, 690, 780]
    names = ["RED", "BLACK", "GREEN", "BLUE", "YELLOW"]
    for x, key, nm in zip(xs, TOWER_COLORS, names):
        c = TOWER_COLORS[key]
        d.rounded_rectangle([x - 14, 380, x + 14, 460], 8, outline=c, width=5)
        d.polygon([(x - 14, 380), (x + 14, 380), (x, 356)], fill=c)
        label(d, (x, 500), nm, size=20, color=c, bold=True, anchor="mm")
    label(d, (600, 580), "walkhub · big-walk-ten.vercel.app", size=22, color=MUTED, anchor="mm")
    img.save("public/og-cover.png")


# ---------------------------------------------------------------- favicon
def icon():
    img = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, 511, 511], 110, fill=INK)
    d.text((256, 268), "W", font=font(300, bold=True), fill=TEXT, anchor="mm")
    # tower pip accent
    for i, key in enumerate(TOWER_COLORS):
        x = 156 + i * 50
        d.rounded_rectangle([x, 400, x + 30, 448], 8, fill=TOWER_COLORS[key])
    img.save("app/icon.png")


# ---------------------------------------------------------------- towers
def tower_red():
    img, d = canvas()
    title_block(d, "Red", TOWER_COLORS["red"], "Anchor holds the plate · cross single-file")
    c = TOWER_COLORS["red"]
    y = 380
    pad(d, 180, y, 46, c, "PAD")
    label(d, (180, y + 80), "All walkers start", size=22, color=MUTED, anchor="mm")
    bridge(d, 240, y, 520, c)
    pad(d, 580, y, 46, c, "ANCHOR")
    label(d, (580, y + 80), "Stays on the plate", size=22, color=MUTED, anchor="mm")
    bridge(d, 640, y, 920, c)
    pad(d, 990, y, 46, GOOD, "EXIT")
    label(d, (990, y + 80), "Full line = clear", size=22, color=MUTED, anchor="mm")
    for i in range(3):
        arrow(d, 300 + i * 60, y - 120, 340 + i * 60, GOOD)
    label(d, (430, y - 150), "cross one at a time", size=22, color=GOOD, anchor="mm")
    label(d, (600, 590), "Bridge drops the moment the plate is empty.", size=26, color=BAD, anchor="mm")
    img.save("public/images/red-tower-map.png")


def tower_black():
    img, d = canvas()
    title_block(d, "Black", TOWER_COLORS["black"], "Count two pulses · cross on the third")
    c = TOWER_COLORS["black"]
    y = 340
    for i, ok in enumerate([False, False, True]):
        x = 340 + i * 260
        col = GOOD if ok else BAD
        pad(d, x, y, 52, col, f"P{i+1}")
        label(d, (x, y + 90), "OPEN" if ok else "gate resets", size=22,
              color=GOOD if ok else BAD, anchor="mm")
    bridge(d, 180, 540, 1020, c)
    pad(d, 140, 540, 40, c, "IN")
    pad(d, 1060, 540, 40, GOOD, "OUT")
    label(d, (600, 620), "Move only while the gate is open — never on pulse 1.", size=26, color=MUTED, anchor="mm")
    img.save("public/images/black-tower-map.png")


def tower_green():
    img, d = canvas()
    title_block(d, "Green", TOWER_COLORS["green"], "Route the beam: near receiver first, then far")
    c = TOWER_COLORS["green"]
    # beam source
    pad(d, 150, 480, 44, c, "BEAM")
    # receivers + bridges
    pad(d, 560, 240, 44, c, "R1")
    pad(d, 560, 480, 44, c, "R2")
    d.line([200, 470, 520, 250], fill=c, width=5)
    d.line([200, 490, 520, 480], fill=LINE, width=3)
    bridge(d, 620, 240, 900, c)
    bridge(d, 620, 480, 900, LINE)
    pad(d, 990, 240, 40, GOOD, "1st")
    pad(d, 990, 480, 40, MUTED, "2nd")
    label(d, (600, 620), "One receiver at a time — extend, cross, re-aim.", size=26, color=MUTED, anchor="mm")
    img.save("public/images/green-tower-map.png")


def tower_blue():
    img, d = canvas()
    title_block(d, "Blue", TOWER_COLORS["blue"], "Hold the water at mid-level · ledge stays exposed")
    c = TOWER_COLORS["blue"]
    states = [("FULL", 0.9, "ledge submerged", BAD), ("MID", 0.5, "ledge exposed", GOOD), ("EMPTY", 0.08, "ledge gone", BAD)]
    for i, (nm, lvl, note, col) in enumerate(states):
        x = 240 + i * 360
        d.rounded_rectangle([x - 110, 180, x + 110, 520], 14, outline=LINE, width=4)
        water_top = 520 - int(340 * lvl)
        d.rectangle([x - 106, water_top, x + 106, 516], fill=(30, 64, 175))
        ledge_y = 400
        d.rectangle([x - 70, ledge_y, x + 70, ledge_y + 12], fill=GOOD if nm == "MID" else PANEL)
        label(d, (x, 560), nm, size=28, color=col, bold=True, anchor="mm")
        label(d, (x, 600), note, size=22, color=col, anchor="mm")
    img.save("public/images/blue-tower-map.png")


def tower_yellow():
    img, d = canvas()
    title_block(d, "Yellow", TOWER_COLORS["yellow"], "Finale: plate, then beam, then water — bottom-up")
    stages = [
        ("1 · PLATE", TOWER_COLORS["red"], "anchor extends base bridge"),
        ("2 · BEAM", TOWER_COLORS["green"], "route to middle receiver"),
        ("3 · WATER", TOWER_COLORS["blue"], "mid-level summit ledge"),
    ]
    for i, (nm, col, note) in enumerate(stages):
        y = 480 - i * 140
        d.rounded_rectangle([300, y - 50, 900, y + 50], 14, outline=col, width=5)
        label(d, (600, y - 12), nm, size=32, color=col, bold=True, anchor="mm")
        label(d, (600, y + 24), note, size=22, color=MUTED, anchor="mm")
        if i < 2:
            d.line([600, y - 60, 600, y - 84], fill=GOOD, width=5)
            d.polygon([(600, y - 96), (590, y - 80), (610, y - 80)], fill=GOOD)
    d.polygon([(1000, 130), (1060, 150), (1000, 170)], fill=TOWER_COLORS["yellow"])
    d.line([1000, 130, 1000, 210], fill=TEXT, width=5)
    label(d, (600, 600), "Summit plate only clears with the full line present.", size=26, color=MUTED, anchor="mm")
    img.save("public/images/yellow-tower-map.png")


def coop_platforms():
    img, d = canvas()
    d.rounded_rectangle([48, 44, 72, 68], 6, fill=GOOD)
    label(d, (92, 56), "Big Walk Co-op Checklist", size=40, bold=True, anchor="lm")
    label(d, (92, 96), "Same fix order on every platform", size=24, color=MUTED, anchor="lm")
    rows = [
        ("1. Restart the session", "host re-creates the room, share a fresh join code"),
        ("2. Check NAT type", "strict NAT blocks walkie channels — open or moderate works"),
        ("3. Match versions", "all walkers on the same patch, crossplay toggled on"),
        ("4. Re-add the friend", "platform friends list desync is the #1 Reddit fix"),
    ]
    for i, (t, note) in enumerate(rows):
        y = 200 + i * 105
        d.rounded_rectangle([120, y - 40, 1080, y + 40], 12, fill=PANEL)
        d.ellipse([150, y - 14, 178, y + 14], outline=GOOD, width=4)
        d.line([156, y, 162, y + 8, 172, y - 8], fill=GOOD, width=4)
        label(d, (210, y - 4), t, size=28, bold=True, anchor="lm")
        label(d, (560, y - 2), note, size=22, color=MUTED, anchor="lm")
    img.save("public/images/coop-platforms.png")


if __name__ == "__main__":
    og_cover()
    icon()
    tower_red()
    tower_black()
    tower_green()
    tower_blue()
    tower_yellow()
    coop_platforms()
    print("done")
