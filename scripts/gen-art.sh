#!/bin/bash
# BUKHARA — Samarkand turquoise & saffron silk-road suite: premium art
# on pure white for the flood-fill cutout pipeline. Textures full-bleed.
set -u
RAW=/home/z/my-project/bukhara-invitation/_raw-art
mkdir -p "$RAW"

gen () {
  local name="$1" size="$2" prompt="$3"
  for attempt in 1 2 3 4 5 6 7 8; do
    [ -s "$RAW/$name.png" ] && { echo "have $name"; return 0; }
    echo "== bukhara/$name attempt $attempt"
    if timeout 150 z-ai image -p "$prompt" -o "$RAW/$name.png" -s "$size" 2>&1 | grep -q 'File saved to'; then
      echo "ok bukhara/$name"; sleep 12; return 0
    fi
    sleep $((35 + attempt * 12))
  done
  echo "FAILED bukhara/$name"
}

TILE="fine Persian glazed tile ornament, Samarkand Timurid manuscript illumination style, turquoise and cobalt blue glaze with muted saffron gold accents, delicate hairline scrolls, matte finish, no gloss, no 3D bevel, flat elegant luxury composition, crisp clean silhouette edges, no halo, no glow bleeding outside the object, isolated on pure white background, high detail, no text, no letters, no calligraphy"

# ---------- hero & scene art ----------
gen arch-bukhara 1024x1024 "a flat ornamental Persian pishtaq pointed arch FRAME only, perfectly centred filling the frame, the arch band of turquoise glazed tiles with fine cobalt arabesque inlay and delicate saffron gold edging, small gold finial at the crown apex, thin slim band, the area inside the arch completely plain flat pure white empty, the area outside the arch completely plain flat pure white empty, no walls, no depth, no niche, no shading inside, $TILE"
gen seal-bukhara 1024x1024 "a round turquoise glazed medallion seal, a fine eight-pointed girih star in saffron gold at the centre, encircled by a delicate cobalt and gold tile border, matte ceramic glaze finish, $TILE"
gen corner-bukhara 1024x1024 "a top-left corner ornament of slender Persian eslimi arabesque vine in cobalt blue with tiny turquoise blossoms and fine saffron gold scrollwork curving gently inward, $TILE"
gen lantern-bukhara 1024x1024 "one hanging Persian gold lantern with softly translucent turquoise glass panels, slender ornate gold chains rising to a small ring at the top, matte antique gold frame with cobalt blue caps, unlit panels with no bloom, $TILE"
gen shamsa-bukhara 1024x1024 "a round Islamic girih star mosaic roundel, fine turquoise and cobalt glazed tiles radiating from a small saffron gold centre, perfectly symmetrical and delicate, $TILE"
gen divider-bukhara 1024x1024 "a slim horizontal ornament rule, a fine double hairline in saffron gold with a small Persian palmette motif and two symmetric cobalt arabesque scrolls at the centre, perfectly centred and delicate, $TILE"
gen crescent-bukhara 1024x1024 "a slender elongated saffron gold crescent moon with one tiny five-pointed turquoise star nestled in its curve, fine filigree surface texture, $TILE"
gen roses-bukhara 1024x1024 "a lush cluster of Persian tulips and cream roses with cobalt blue leaves and tiny turquoise buds, soft painterly matte illustration, muted silk-road jewel tones, crisp clean edges, isolated on pure white background, high detail, no text"
gen swag-bukhara 1024x1024 "an elegant hanging garland swag of small turquoise and cream tulips with fine gold leaves and thin saffron ribbon tied at both ends, soft painterly matte illustration, muted silk-road tones, crisp clean edges, isolated on pure white background, high detail, no text"
gen dome-bukhara 1152x864 "a majestic turquoise ribbed Persian dome with a slender gold crescent finial, flanked by two elegant slim minarets with turquoise tile bands, cobalt blue stone bands and saffron gold ornament, dawn grandeur over the Registan, $TILE"

# ---------- full-bleed textures ----------
gen tiles-bukhara 1440x720 "seamless Samarkand turquoise glazed tile mosaic surface, fine girih star lattice in cobalt blue and turquoise glaze with thin saffron gold grout lines, matte ceramic finish, soft diffused museum light, minimal, no objects, no text, no border, flat even lighting, high detail"
echo BUKHARA-DONE
