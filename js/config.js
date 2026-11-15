/* ═══════════════════════════════════════════════════════════════
   Bukhara · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "bukhara",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Yasmin",                     // SAMPLE
    partnerTwo: "Tariq",                      // SAMPLE
    initials:  "Y · T",                     // SAMPLE — used on seals & monograms
    namesLine: "Yasmin & Tariq"                // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"                    */
  wedding: {
    iso: "2027-04-09T17:00:00+05:00",                                     // EDIT
    endIso: "2027-04-10T23:00:00+05:00",                                    // EDIT — end of the celebration
    display: "Friday, 9 April 2027 · the Nikah begins at 5:00 PM, after Asr",   // EDIT
    zoneLabel: "PKT",                                                       // EDIT — optional note for guests abroad
    words: "Friday · The Ninth of April · Two Thousand Twenty-Seven",   // EDIT
    numerals: "09 · 04 · 2027",                                              // EDIT
    weekday: "Friday",                                                    // EDIT — the ornamental date row
    month: "April",                                                        // EDIT
    day: "09",                                                               // EDIT — the large numeral
    year: "2027",                                                            // EDIT
    muhuratLabel: "Nikah",                                                   // EDIT
    muhurat: "five in the evening, after Asr",                  // EDIT
    eventTitle: "Yasmin & Tariq — Nikah"                                       // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Firuza Mahal",                                 // SAMPLE
    address: "12 Registan Avenue, Clifton Block 4, Karachi 75600", // SAMPLE
    mapsQuery: "Firuza Mahal, Registan Avenue, Clifton, Karachi",
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Yasmin & Tariq · 9 April 2027 — A Nikah Invitation in Turquoise & Gold",
    pageDescription: "Yasmin and Tariq request the honour of your presence at The Firuza Mahal, Karachi — the mayun, the mehndi and the Nikah at the mayun, the mehndi and the Nikah at 5:00 on Friday the ninth of April 2027. Open your invitation.",
    socialTitle: "Yasmin & Tariq — A Nikah Invitation · 09.04.2027",
    socialDescription: "A turquoise envelope, a saffron girih seal and a blessed union — you are cordially invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Celebrations",
    menuPalette: "The Palette",
    menuWeddingDay: "The Festivities",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Dua",
    openingEyebrow: "With the blessings of Allah Almighty, you are invited to the wedding of",
    openingHint: "Touch the seal to break it",
    openButton: "Enter the Caravanserai",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    invitationEyebrow: "With the blessings of our families",
    invitationLead: "We joyfully invite you to celebrate the Nikah of",
    invitationAnd: "and",
    invitationClosing: "Your presence is our greatest blessing",
    heroVenueLabel: "Venue",
    sceneSignboard: "Written along the silk road",
    invitationVenueSuffix: "· Karachi",
    storyKicker: "The Chronicle",
    storyTitle: "Two hearts,",
    storyTitleScript: "one dua answered",
    storyParagraphOne: "Every great journey begins with a dua whispered quietly, and ours was whispered one Jumma evening in the old tea house, over a borrowed book of Hafez and a pot of green chai neither of us poured. One conversation that outlasted the Adhan, one walk shared along the lit boulevard — and somehow, that evening decided the rest of our lives.",
    storyParagraphTwo: "Four years and two cities later, our families gathered beneath one roof to give their blessing, and the date was written with dates and water — the sunnah way. Nothing would mean more than to have you standing beside us as we say Qubool Hai, and begin a home built on sakinah, mawaddah and mercy.",
    storyQuote: "Lovers don't finally meet somewhere. They're in each other all along.",
    storyQuoteLabel: "— Rumi — the line we read to each other that first evening",
    storyNote: "chapter one, and every chapter after",
    storyNoteCredit: "— pencilled on the back of a wedding date card",
    storyCaptionOne: "the evening in the old tea house",
    storyCaptionTwo: "one walk along the boulevard",
    storyCaptionFour: "the Qubool Hai",
    storyAside: "and they lived",
    ayatKicker: "The Blessed Verse",
    ayatArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    ayatTranslation: "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.",
    ayatReference: "Surah Ar-Rūm · 30:21",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "the mayun, the mehndi, the Nikah & the Walima",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "The Celebrations",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Events",
    detailsIntro: "Four blessed days with our families — at a glance.",
    eventOneLabel: "The Mayun",
    eventOneTime: "Wednesday, 7 April 2027 · eleven in the morning",
    eventOneNote: "The bride is showered in flowers and yellow silk — the first day of blessings at the family home.",
    eventTwoLabel: "The Mehndi",
    eventTwoTime: "Thursday, 8 April 2027 · four in the afternoon",
    eventTwoNote: "Henna vines, dholki songs and rose sherbet in the courtyard — wear turquoise and gold.",
    eventThreeLabel: "The Nikah",
    eventThreeTime: "Friday, 9 April 2027 · 5:00 PM, after Asr",
    eventThreeNote: "The Nikah ceremony and the Qubool Hai, led by the Imam, followed by dinner in the tile-lit courtyard.",
    eventFourLabel: "The Rukhsati",
    eventFourTime: "Friday, 9 April 2027 · nine in the evening",
    eventFourNote: "The bride's farewell — dua, tears of joy, and the send-off under a canopy of lights.",
    eventFiveLabel: "The Walima",
    eventFiveTime: "Saturday, 10 April 2027 · eight in the evening",
    eventFiveNote: "The groom's family hosts the grand reception banquet — a feast of celebration and welcome.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Turquoise, gold & ivory",
    particularsAttireNote: "Sherwanis, shalwar kameez and formal wear are most welcome — dress as though the silk road could blush.",
    particularsCarriagesLabel: "Kindly Reply",
    particularsCarriagesTime: "the ninth of March, 2027",
    particularsCarriagesNote: "So the banquet count is right and every seat is saved.",
    paletteKicker: "The Colours of the Day",
    paletteTitleFirst: "The turquoise",
    paletteTitleSecond: "silk road",
    paletteIntro: "Samarkand turquoise and saffron gold, ivory paper and cobalt blue — the colours of the silk road, worn by our favourite people.",
    dressCodeLabel: "Attire · Turquoise & Gold",
    dressCodeTitle: "Colours of the silk road",
    dressCodeNote: "Turquoise silks, saffron brocade and ivory paper are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "The Celebrations",
    weddingDayTitleFirst: "The wedding",
    weddingDayTitleSecond: "festivities",
    venueKicker: "The Place",
    venueDescription: "A caravanserai court of turquoise domes and girih tiles — golden lanterns at dusk, mosaic light at noon, the sweet Adhan of gratitude, and tulips on every table.",
    venueCeremonyLabel: "Nikah",
    venueCeremonyText: "in the tile-lit hall, after Asr, led by the Imam",
    venueReceptionLabel: "Walima",
    venueReceptionText: "a lantern-lit banquet in the turquoise courtyard",
    mapButton: "View Location",
    rsvpKicker: "Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Fatima Khan",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Halal, vegetarian, allergies…",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Duas, memories, blessings…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "The Grand Countdown",
    countdownTitle: "counting the hours until",
    countdownPromise: "the Nikah begins",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. May our home be filled with sakinah, mawaddah and rahmah — tranquillity, love and mercy — and may every guest who walks through our door leave with a blessing. Your presence completes our celebration.",
    closingDua: "بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    closingDuaTranslation: "May Allah bless you both, and shower His blessings upon you, and unite you both in goodness.",
    footerTagline: "Turquoise & saffron — from the silk road, with love."
  },

  palette: [
    { name: "Samarkand Turquoise", color: "#0F5E6B" },
    { name: "Saffron Gold",        color: "#D2A447" },
    { name: "Ivory Silk",          color: "#F5EFDE" },
    { name: "Cobalt Arabesque",    color: "#1D4E89" },
    { name: "Deep Saffron Ink",    color: "#6F5316" },
    { name: "Saffron Cream",       color: "#E7D9AC" }
  ],
  theme: "bukhara",
  themeColors: {},
  fonts: {
    editorial: "cormorant",
    display: "italiana",
    script: "alexBrush",
    hand: "caveat",
    body: "ebGaramond"
  },

  /* ── Wedding festivities — SAMPLE words for the string of lights.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Mayun", "The Mehndi", "The Nikah", "The Rukhsati", "The Walima", "The Duas"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 4,
    deadline: "the ninth of March, 2027"        // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The Nikah is still being finalised — see the celebrations below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
