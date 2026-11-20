# MASTER DESIGN PROMPT — the Heirloom Invitation Atelier design system

> The proven structure behind noor / qamar / sultan / bukhara / mehr /
> amoris. Reuse this whole prompt for any new invitation repo to get the
> same level of elegancy. Single "world" concept discipline: pick ONE
> strong place/moment and let every colour, asset and section serve it
> (bukhara = dawn over the Registan caravan-serai; amoris = the gothic
> chapel of the rose window at dusk). Never literal clip-art — luxury is
> expressed through material, light and craft.

## 1 · THE WORLD (pick one per repo)

One sentence: "(Faith/tradition) at (a specific hour) in (a specific
place), rendered as (materials)". Examples:

- Bukhara — "Islam at dawn in a Samarkand caravan-serai, rendered in
  turquoise glaze, cobalt lapis, saffron gold and ivory silk."
- Amoris — "Christian matrimony at dusk in a gothic chapel of the rose
  window, rendered in carved ivory stone, wine crimson, antique gold and
  vellum."

## 2 · ART PIPELINE (mandatory for every new asset)

1. Generate raw: `z-ai image -p "<prompt>" -o raw.png -s 1152x864`
   (or 1024x1024 / 864x1152 portrait for the hero). Style suffix for
   every prompt: "refined painterly matte illustration for luxury
   wedding stationery, muted jewel tones, absolutely no photorealism,
   no photograph, no 3D rendering, no glossy bevel, no cartoon outlines,
   crisp clean silhouette, isolated on pure white background, high
   detail, no text, no watermark". Retry loop ×10 with backoff.
2. Cutout (`scripts/cutout-<repo>.py`): sample the ACTUAL border colour
   (generators rarely leave pure white), flood-fill from the borders
   only (keeps interior highlights), despeckle < 220px, optional
   interior_key for window openings (near-bg enclosed regions ≥
   min_hole px → alpha holes), gaussian feather 1.0–1.8, white-unmix,
   crop to bbox, maxdim, FASTOCTREE 256 colours.
3. Hero window/arch art MUST have the opening as a REAL alpha hole and
   a clean, unbroken opening shape (no tracery/mullions inside — the
   card must trace it). Keep the art 3/4 portrait for the hero.
4. Assets the suite needs: hero window/arch, lantern ×1, medallion,
   corner/rose cluster, divider hairline, wax seal, closing plate,
   swag (optional). One consistent style for all.

## 3 · THE HERO OGIVE (the signature)

`scripts/<repo>_ogive_clip.py`: read the PNG alpha, per-row central
transparent run (or span), find the tip (first row where inset width ≥
0.012), measure the plateau edges (straight sides), inset the card box
1–1.5% inside the opening, walk the curve downward emitting points every
≥0.004 movement, close with straight sides + sill, output a multi-point
`clip-path: polygon(...)` in `.arch-card__inner` coordinate space.
NEVER hand-approximate the curve — always trace the alpha. The
`.arch-card__inner` box (left/right/top/bottom %) must mirror the trace
constants exactly. `object-fit: fill` + matching aspect-ratio = zero
distortion.

## 4 · PAGE STRUCTURE (single index.html + css/ + js/)

- A · OPENING (`#opening`): full-bleed night scene (NO letterbox
  stripes), corner art bleeding off-canvas, two hanging lanterns with
  chains, drifting motes, faint watermark line behind, envelope:
  GSAP flap/letter/seal choreography (CSS-only fallback), the whole
  envelope one accessible <button>, hint line, Enter button,
  `#skip-intro` + boot watchdog (intro opens even if JS dies).
- B · HERO (`#invitation`): cross/motif emblem, shamsa/medallion behind
  the head, the traced ogive card (blessing → invite → names script →
  hairline rule → date block → ceremony hour → venue) + base rose
  clusters + signboard + scroll cue.
- C · STORY (`#story`): dropcap prose ×2, verse quote, mini-verse,
  captions row. Ivory section.
- D · SCRIPTURE PLATE (`#ayat`): dark plate, framed (frame art or
  hairline corners), scripture + translation + reference.
- E · SAVE THE DATE: medallion, numerals, calendar buttons (gcal + ics),
  wax seal monogram.
- F · EVENTS (`#details`): stacked bordered cards (NO zigzag), roman
  numerals, prime event with medallion node, particulars grid.
- G · PALETTE (`#palette`): swatches + dress code note.
- H · ITINERARY (`#itinerary`): day words timeline.
- I · VENUE (`#venue`): medallion arch, description, map button.
- J · COUNTDOWN: live clock to the ISO instant + summary lines.
- K · RSVP (`#rsvp`): shared D1 (`mumtaz-invitations`), name/attendance/
  seats/dietary/message, honeypot, preview state, sample note.
- L · CLOSING: closing art plate, script names, blessing + reference,
  message, seal, replay/back-to-top. Footer with customize link.

## 5 · VISUAL SYSTEM

- css/variables.css — every colour a token; derived tones via
  color-mix(); palette mirrors ONE world (night, paper, gold, ink,
  accent). Type: display serif (Italiana), script (Alex Brush),
  editorial (Cormorant Garamond), body (EB Garamond), UI caps (Jost,
  .3em tracking), faith-scripture font where applicable. clamp() scales.
- Paper card: inset 1px champagne ring + inner glow; shadows pool INSIDE
  recesses, tinted with the night colour (never pure black).
- Motion: 6–9s ease-in-out alternate loops (lantern sway, mote drift,
  glow breathe); `.reveal` + IntersectionObserver `.in-view { transform:
  none }`; prefers-reduced-motion honoured; GSAP via CDN, everything
  works without it.
- Accessibility: alt/aria labels, focus styles, keyboard envelope,
  contrast ≥ 4.5 for text (gold-ink token on paper).

## 6 · ENGINEERING

- css/: variables, base, envelope, sections, rsvp, theme, responsive.
  js/: boot, config (ALL copy/data), envelope, main (applyTheme +
  injectContent maps EVERY data-content key used in HTML), customizer,
  rsvp, replies. customize.html = visual editor; replies.html = guest
  submissions; functions/ + worker.js for D1.
- scripts/build.mjs stamps asset URLs with the git hash → dist/.
- Deploy: push → Cloudflare Workers Builds (Build `npm run build`,
  Deploy `npx wrangler deploy`). D1 binding `mumtaz-invitations`.
- wrangler.jsonc ships with placeholder database_id — real id set via
  dashboard/deploy notes.

## 7 · QA PROTOCOL (never skip)

1. `npm run build` → serve dist with a NO-CACHE server (stale-cache
   guard: the stamp is the git hash, unchanged between commits).
2. Desktop 1440×900 + mobile 390×844, screenshot EVERY section.
3. Zoom the hero join: the paper must meet the traced ogive with a
   1–2% glass sliver; check tip, shoulders, sill on both viewports.
4. `scrollWidth - clientWidth == 0` (no horizontal overflow).
5. Text contrast + no clipped lines inside the card (shorten copy, not
   the card).
6. Check EVERY asset referenced exists (missing file = broken section).
