#!/bin/bash
# BUKHARA — turquoise & gold caravan-serai suite, regeneration Ⅱ.
# Hardened prompts: flat painted matte illustration, no photorealism,
# no 3D bevel. Raw on pure white for the flood-fill cutout pipeline.
set -u
RAW=/home/z/my-project/bukhara-invitation/_raw-art
mkdir -p "$RAW"

gen () {
  local name="$1" size="$2" prompt="$3"
  for attempt in 1 2 3 4 5 6 7 8 9 10; do
    [ -s "$RAW/$name.png" ] && { echo "have $name"; return 0; }
    echo "== bukhara/$name attempt $attempt"
    if timeout 150 z-ai image -p "$prompt" -o "$RAW/$name.png" -s "$size" 2>&1 | grep -q 'completed'; then
      echo "ok bukhara/$name"; sleep 8; return 0
    fi
    rm -f "$RAW/$name.png"
    sleep $((20 + attempt * 8))
  done
  echo "FAILED bukhara/$name"
}

STYLE="flat painted illustration in the manner of a Timurid illuminated manuscript, luxury wedding stationery artwork, glazed turquoise and deep cobalt lapis blue with muted matte antique gold, absolutely no photorealism, no photograph, no 3D rendering, no glossy metallic bevel, no ceramic plate, uniform matte finish, crisp clean silhouette, isolated on pure white background, high detail, no text, no letters, no watermark"

# 1 — hero arch: pointed iwan arch with glazed tile band, dawn glow inside
gen arch-bukhara-tall 1152x864 "one single grand pointed iwan arch frame perfectly centred filling most of the frame, the arch band decorated with fine glazed tile mosaic in turquoise and cobalt lapis with delicate matte gold arabesque scrollwork, slim side colonnettes with small tile panels, a small gold crescent finial at the crown apex, the inside of the arch filled with a soft warm dawn glow gradient pale gold fading gently upward, everything outside the arch pure white empty, $STYLE"

# 2 — fanous lantern
gen lantern-bukhara 768x1344 "one slender hanging Central Asian fanous lantern, matte antique gold frame with fine pierced openwork, soft turquoise tinted glass panels, small ornate chain rising to a ring at the top, small glazed turquoise cap at base and crown, $STYLE"

# 3 — shamsa medallion
gen shamsa-bukhara 1024x1024 "one round Islamic eight-pointed khatim star medallion of fine turquoise and cobalt glazed rosette line art interlacing into a delicate girih lattice with matte gold outlines, tiny gold details at the star points, perfectly symmetric, centred, generous white margin around it, $STYLE"

# 4 — corner ornament (true corner, anchored top-left)
gen corner-bukhara 1024x1024 "one top-left corner ornament of slender matte antique gold arabesque scrollwork hugging the top-left corner of the canvas with tiny turquoise glazed blossoms and fine blue leaves curving gently inward toward the centre, thin delicate lines, generous white space on the right and bottom, $STYLE"

# 5 — divider: ultra-thin horizontal rule
gen divider-bukhara 1344x768 "an extremely thin horizontal gold divider rule running across the full width at the vertical centre of the canvas, a single fine hairline double rule with one tiny turquoise-glazed eight-pointed star at the exact centre and two small symmetric arabesque scrolls curling outward at the ends, the ornament occupies only the middle eight percent of the canvas height, everything above and below the rule pure white empty, $STYLE"

# 6 — crescent
gen crescent-bukhara 1024x1024 "one slender elongated matte antique gold crescent moon elegantly curved with one tiny five-pointed gold star nestled in its upper curve, fine turquoise enamel filigree texture on the crescent surface, centred with generous white margin, $STYLE"

# 7 — roses (tight cluster, no white pockets)
gen roses-bukhara 1024x1024 "one tight lush cluster of soft ivory and blush roses with deep teal-green glazed leaves and tiny turquoise buds, flowers overlapping densely with no gaps between them, soft painterly matte illustration, muted jewel tones, crisp clean edges, isolated on pure white background, high detail, no text"

# 8 — wax seal
gen seal-bukhara 1024x1024 "one round deep cobalt lapis blue wax seal stamped with an embossed matte antique gold eight-pointed star and slender crescent at its centre, fine beaded pressed edge, slightly imperfect hand-poured wax rim, matte finish, centred, generous white margin, $STYLE"

# 9 — swag garland (wide)
gen swag-bukhara 1344x768 "one elegant hanging garland swag curving in a gentle arc across the canvas, made of small turquoise blossoms and cream roses with fine matte gold leaves and thin gold ribbon tied at both upper corners, soft painterly matte illustration, muted jewel tones, crisp clean edges, isolated on pure white background, high detail, no text"

# 10 — dome (closing plate)
gen dome-bukhara 1152x864 "one majestic glazed turquoise Samarkand mosque dome with a slender gold crescent finial at its crown, ribbed turquoise tiles with matte gold ornament bands, flanked by two elegant slim minarets with warm lit arched windows, twilight grandeur, painted matte illustration, no photorealism, no photograph, crisp clean edges, isolated on pure white background, high detail, no text"

echo BUKHARA-DONE
