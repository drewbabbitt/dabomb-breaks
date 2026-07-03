/* ==========================================================================
   DaBomb Breaks — demo inventory. Sample market data for demonstration only.
   Prices are informed estimates grounded in mid-2026 secondary market ranges;
   not live quotes. Card art is generated client-side (see cardArtSVG in app.js) —
   no image assets are referenced here.
   ========================================================================== */
const INVENTORY = [

  /* ---------------- Basketball (10) ---------------- */
  {
    id: "db-001", name: "Victor Wembanyama",
    year: 2023, set: "Panini Prizm", cardNumber: "#136", parallel: "Base",
    sport: "Basketball", grade: "PSA 10",
    price: 550, lastComp: 524, trend: 8.4,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#c4ced4", "#000000"],
    priceHistory: [483, 494, 504, 505, 495, 502, 506, 503, 514, 507, 507, 550]
  },
  {
    id: "db-002", name: "Victor Wembanyama",
    year: 2023, set: "Panini Prizm", cardNumber: "#136", parallel: "Base",
    sport: "Basketball", grade: "Raw",
    price: 145, lastComp: 137, trend: -4.2,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#c4ced4", "#000000"],
    priceHistory: [140, 141, 144, 147, 147, 147, 147, 151, 148, 153, 151, 145]
  },
  {
    id: "db-003", name: "Cooper Flagg",
    year: 2025, set: "Panini Prizm", cardNumber: "#1", parallel: "Silver Prizm",
    sport: "Basketball", grade: "PSA 10",
    price: 680, lastComp: 700, trend: 22.5,
    status: "consigned", consignor: "DB-C-1042",
    featured: false,
    colors: ["#002b5c", "#a6192e"],
    priceHistory: [504, 519, 513, 535, 533, 537, 533, 540, 552, 547, 555, 680]
  },
  {
    id: "db-004", name: "Luka Dončić",
    year: 2018, set: "Panini Prizm", cardNumber: "#280", parallel: "Base",
    sport: "Basketball", grade: "PSA 9",
    price: 310, lastComp: 299, trend: -6.8,
    status: "consigned", consignor: "DB-C-2078",
    featured: false,
    colors: ["#0053bc", "#002b5c"],
    priceHistory: [299, 301, 303, 308, 315, 314, 327, 327, 331, 336, 333, 310]
  },
  {
    id: "db-005", name: "Zion Williamson",
    year: 2019, set: "Panini Prizm", cardNumber: "#248", parallel: "Base",
    sport: "Basketball", grade: "BGS 9.5",
    price: 165, lastComp: 178, trend: 2.1,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#0c2340", "#c8102e"],
    priceHistory: [157, 155, 158, 156, 159, 160, 159, 162, 160, 163, 162, 165]
  },
  {
    id: "db-006", name: "Ja Morant",
    year: 2019, set: "Panini Prizm", cardNumber: "#249", parallel: "Base",
    sport: "Basketball", grade: "SGC 10",
    price: 95, lastComp: 89, trend: -9.5,
    status: "consigned", consignor: "DB-C-1042",
    featured: false,
    colors: ["#5d76a9", "#12173f"],
    priceHistory: [102, 105, 103, 105, 103, 102, 107, 107, 104, 107, 105, 95]
  },
  {
    id: "db-007", name: "Anthony Edwards",
    year: 2020, set: "Panini Prizm", cardNumber: "#258", parallel: "Base",
    sport: "Basketball", grade: "Raw",
    price: 70, lastComp: 67, trend: 5.5,
    status: "owned", consignor: null,
    featured: true,
    colors: ["#0c2340", "#236192"],
    priceHistory: [74, 76, 74, 73, 71, 70, 69, 69, 68, 66, 66, 70]
  },
  {
    id: "db-008", name: "Stephen Curry",
    year: 2022, set: "Topps Chrome", cardNumber: "#42", parallel: "Refractor",
    sport: "Basketball", grade: "PSA 10",
    price: 240, lastComp: 257, trend: 3.8,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#1d428a", "#ffc72c"],
    priceHistory: [249, 245, 246, 243, 240, 241, 235, 235, 230, 231, 231, 240]
  },
  {
    id: "db-009", name: "LeBron James",
    year: 2003, set: "Bowman Chrome", cardNumber: "#111", parallel: "Refractor",
    sport: "Basketball", grade: "BGS 9.5",
    price: 1850, lastComp: 1828, trend: 1.2,
    status: "owned", consignor: null,
    featured: true,
    colors: ["#860038", "#fdbb30"],
    priceHistory: [1929, 1891, 1908, 1895, 1884, 1857, 1873, 1833, 1843, 1836, 1828, 1850]
  },
  {
    id: "db-010", name: "Michael Jordan",
    year: 1991, set: "Fleer", cardNumber: "#29", parallel: "Base",
    sport: "Basketball", grade: "Raw",
    price: 625, lastComp: 668, trend: -1.5,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#ce1141", "#000000"],
    priceHistory: [639, 637, 638, 634, 634, 631, 630, 629, 640, 639, 635, 625]
  },

  /* ---------------- Football (10) ---------------- */
  {
    id: "db-011", name: "C.J. Stroud",
    year: 2023, set: "Panini Prizm", cardNumber: "#339", parallel: "Base",
    sport: "Football", grade: "PSA 10",
    price: 85, lastComp: 80, trend: 6.2,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#03202f", "#a71930"],
    priceHistory: [80, 80, 80, 81, 80, 79, 80, 80, 80, 80, 80, 85]
  },
  {
    id: "db-012", name: "Caleb Williams",
    year: 2024, set: "Panini Prizm", cardNumber: "#301", parallel: "Silver Prizm",
    sport: "Football", grade: "PSA 10",
    price: 310, lastComp: 334, trend: 15.8,
    status: "consigned", consignor: "DB-C-3115",
    featured: false,
    colors: ["#0b162a", "#c83803"],
    priceHistory: [281, 285, 287, 276, 272, 278, 275, 272, 272, 262, 268, 310]
  },
  {
    id: "db-013", name: "Jayden Daniels",
    year: 2024, set: "Panini Prizm", cardNumber: "#307", parallel: "Base",
    sport: "Football", grade: "Raw",
    price: 58, lastComp: 59, trend: -7.4,
    status: "consigned", consignor: "DB-C-2078",
    featured: false,
    colors: ["#5a1414", "#ffb612"],
    priceHistory: [61, 60, 61, 61, 61, 61, 62, 63, 63, 63, 63, 58]
  },
  {
    id: "db-014", name: "Marvin Harrison Jr.",
    year: 2024, set: "Panini Prizm", cardNumber: "#317", parallel: "Base",
    sport: "Football", grade: "Raw",
    price: 135, lastComp: 140, trend: -3.2,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#000000", "#8a8d8f"],
    priceHistory: [141, 141, 140, 139, 140, 141, 138, 142, 142, 139, 139, 135]
  },
  {
    id: "db-015", name: "Patrick Mahomes",
    year: 2017, set: "Panini Prizm", cardNumber: "#269", parallel: "Base",
    sport: "Football", grade: "PSA 10",
    price: 890, lastComp: 882, trend: 4.6,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#e31837", "#ffb612"],
    priceHistory: [890, 885, 882, 872, 877, 878, 860, 851, 853, 848, 851, 890]
  },
  {
    id: "db-016", name: "Ja'Marr Chase",
    year: 2021, set: "Panini Prizm", cardNumber: "#398", parallel: "Base",
    sport: "Football", grade: "Raw",
    price: 95, lastComp: 91, trend: -11.8,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#fb4f14", "#000000"],
    priceHistory: [102, 105, 104, 104, 103, 108, 106, 105, 109, 107, 108, 95]
  },
  {
    id: "db-017", name: "Justin Jefferson",
    year: 2020, set: "Panini Prizm", cardNumber: "#398", parallel: "Base",
    sport: "Football", grade: "BGS 9.5",
    price: 210, lastComp: 225, trend: 2.4,
    status: "consigned", consignor: "DB-C-1042",
    featured: false,
    colors: ["#4f2683", "#ffc62f"],
    priceHistory: [196, 199, 198, 198, 203, 201, 203, 202, 205, 207, 205, 210]
  },
  {
    id: "db-018", name: "Brock Bowers",
    year: 2024, set: "Panini Prizm", cardNumber: "#325", parallel: "Base",
    sport: "Football", grade: "SGC 10",
    price: 72, lastComp: 69, trend: 9.1,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#000000", "#a5acaf"],
    priceHistory: [68, 68, 67, 68, 67, 67, 66, 65, 66, 66, 66, 72]
  },
  {
    id: "db-019", name: "Bo Nix",
    year: 2024, set: "Panini Prizm", cardNumber: "#340", parallel: "Base",
    sport: "Football", grade: "Raw",
    price: 38, lastComp: 35, trend: -2.6,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#fb4f14", "#002244"],
    priceHistory: [45, 44, 44, 44, 42, 42, 41, 40, 40, 38, 39, 38]
  },
  {
    id: "db-020", name: "Tom Brady",
    year: 2000, set: "Playoff Contenders", cardNumber: "#144", parallel: "Rookie Ticket Autograph",
    sport: "Football", grade: "Raw",
    price: 2950, lastComp: 3113, trend: 0.8,
    status: "owned", consignor: null,
    featured: true,
    colors: ["#002244", "#c60c30"],
    priceHistory: [2850, 2866, 2862, 2876, 2874, 2904, 2917, 2907, 2937, 2916, 2927, 2950]
  },

  /* ---------------- Baseball (8) ---------------- */
  {
    id: "db-021", name: "Paul Skenes",
    year: 2024, set: "Topps Chrome", cardNumber: "#150", parallel: "Refractor",
    sport: "Baseball", grade: "PSA 10",
    price: 640, lastComp: 686, trend: 18.3,
    status: "consigned", consignor: "DB-C-3115",
    featured: true,
    colors: ["#27251f", "#fdb827"],
    priceHistory: [551, 546, 547, 548, 556, 554, 541, 542, 549, 534, 541, 640]
  },
  {
    id: "db-022", name: "Paul Skenes",
    year: 2024, set: "Topps Chrome", cardNumber: "#150", parallel: "Refractor",
    sport: "Baseball", grade: "Raw",
    price: 165, lastComp: 153, trend: 12.4,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#27251f", "#fdb827"],
    priceHistory: [140, 141, 141, 143, 146, 144, 146, 147, 143, 144, 147, 165]
  },
  {
    id: "db-023", name: "Shohei Ohtani",
    year: 2018, set: "Topps Chrome", cardNumber: "#1", parallel: "Base",
    sport: "Baseball", grade: "PSA 9",
    price: 420, lastComp: 434, trend: -5.6,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#ba0021", "#003263"],
    priceHistory: [479, 482, 473, 469, 463, 463, 464, 458, 443, 448, 445, 420]
  },
  {
    id: "db-024", name: "Jackson Holliday",
    year: 2024, set: "Topps Chrome", cardNumber: "#98", parallel: "Refractor",
    sport: "Baseball", grade: "SGC 10",
    price: 110, lastComp: 115, trend: 7.8,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#df4601", "#000000"],
    priceHistory: [109, 106, 104, 105, 103, 103, 104, 105, 104, 103, 102, 110]
  },
  {
    id: "db-025", name: "Bobby Witt Jr.",
    year: 2022, set: "Topps Chrome", cardNumber: "#125", parallel: "Refractor",
    sport: "Baseball", grade: "Raw",
    price: 195, lastComp: 203, trend: -8.3,
    status: "consigned", consignor: "DB-C-1042",
    featured: false,
    colors: ["#004687", "#bd9b60"],
    priceHistory: [210, 209, 210, 208, 207, 210, 211, 210, 210, 211, 213, 195]
  },
  {
    id: "db-026", name: "Ronald Acuña Jr.",
    year: 2018, set: "Topps Chrome", cardNumber: "#193", parallel: "Base",
    sport: "Baseball", grade: "Raw",
    price: 85, lastComp: 90, trend: 4.4,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#ce1141", "#13274f"],
    priceHistory: [82, 81, 80, 82, 81, 83, 82, 82, 82, 81, 81, 85]
  },
  {
    id: "db-027", name: "Mike Trout",
    year: 2011, set: "Topps Update", cardNumber: "#US175", parallel: "Base",
    sport: "Baseball", grade: "PSA 10",
    price: 780, lastComp: 781, trend: 1.9,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#ba0021", "#003263"],
    priceHistory: [769, 768, 769, 778, 768, 767, 763, 768, 767, 764, 765, 780]
  },
  {
    id: "db-028", name: "Ken Griffey Jr.",
    year: 1989, set: "Upper Deck", cardNumber: "#1", parallel: "Base",
    sport: "Baseball", grade: "PSA 9",
    price: 410, lastComp: 393, trend: -2.1,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#005c5c", "#c4ced4"],
    priceHistory: [424, 424, 424, 420, 419, 420, 417, 423, 419, 422, 419, 410]
  },

  /* ---------------- Pokémon (8) ---------------- */
  {
    id: "db-029", name: "Charizard",
    year: 1999, set: "Base Set", cardNumber: "#4", parallel: "Unlimited Holo",
    sport: "Pokémon", grade: "PSA 9",
    price: 4200, lastComp: 4162, trend: 6.5,
    status: "consigned", consignor: "DB-C-2078",
    featured: true,
    colors: ["#ff7f0e", "#1f3a93"],
    priceHistory: [4092, 4087, 4061, 4053, 4030, 4011, 3988, 3962, 3925, 3956, 3944, 4200]
  },
  {
    id: "db-030", name: "Charizard",
    year: 1999, set: "Base Set", cardNumber: "#4", parallel: "Unlimited Holo",
    sport: "Pokémon", grade: "Raw",
    price: 850, lastComp: 806, trend: 3.2,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#ff7f0e", "#1f3a93"],
    priceHistory: [787, 785, 785, 790, 799, 811, 809, 821, 817, 829, 824, 850]
  },
  {
    id: "db-031", name: "Pikachu",
    year: 2023, set: "Pokémon 151", cardNumber: "#25", parallel: "Base",
    sport: "Pokémon", grade: "PSA 10",
    price: 65, lastComp: 62, trend: -3.8,
    status: "owned", consignor: null,
    featured: true,
    colors: ["#ffcb05", "#2a75bb"],
    priceHistory: [66, 66, 64, 66, 66, 65, 68, 68, 68, 67, 68, 65]
  },
  {
    id: "db-032", name: "Umbreon",
    year: 2023, set: "Pokémon 151", cardNumber: "#131", parallel: "Base",
    sport: "Pokémon", grade: "PSA 10",
    price: 185, lastComp: 176, trend: 9.6,
    status: "consigned", consignor: "DB-C-3115",
    featured: false,
    colors: ["#2c2c3a", "#f4d03f"],
    priceHistory: [175, 172, 175, 172, 171, 168, 171, 172, 171, 168, 169, 185]
  },
  {
    id: "db-033", name: "Mew",
    year: 2023, set: "Pokémon 151", cardNumber: "#151", parallel: "Base",
    sport: "Pokémon", grade: "PSA 9",
    price: 95, lastComp: 93, trend: -6.1,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#ff9bc7", "#7bc8f6"],
    priceHistory: [101, 100, 98, 100, 102, 100, 101, 102, 103, 101, 101, 95]
  },
  {
    id: "db-034", name: "Lugia",
    year: 2000, set: "Neo Genesis", cardNumber: "#9", parallel: "1st Edition Holo",
    sport: "Pokémon", grade: "PSA 10",
    price: 310, lastComp: 314, trend: 4.1,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#5b7fa6", "#c4ced4"],
    priceHistory: [294, 289, 292, 291, 297, 295, 298, 294, 296, 302, 298, 310]
  },
  {
    id: "db-035", name: "Rayquaza",
    year: 2022, set: "Pokémon GO", cardNumber: "#111", parallel: "Base",
    sport: "Pokémon", grade: "Raw",
    price: 48, lastComp: 49, trend: -4.9,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#0f7938", "#e8e8e8"],
    priceHistory: [58, 58, 57, 56, 54, 54, 54, 53, 51, 51, 50, 48]
  },
  {
    id: "db-036", name: "Gengar",
    year: 2021, set: "Fusion Strike", cardNumber: "#271", parallel: "Base",
    sport: "Pokémon", grade: "SGC 10",
    price: 72, lastComp: 68, trend: 11.2,
    status: "consigned", consignor: "DB-C-1042",
    featured: false,
    colors: ["#5b2c83", "#2a1a3e"],
    priceHistory: [59, 58, 59, 61, 62, 62, 64, 64, 63, 65, 65, 72]
  },

  /* ---------------- Soccer (6) ---------------- */
  {
    id: "db-037", name: "Lamine Yamal",
    year: 2023, set: "Megacracks LaLiga", cardNumber: "#423", parallel: "Master Rookie",
    sport: "Soccer", grade: "PSA 10",
    price: 1950, lastComp: 1910, trend: 25.0,
    status: "consigned", consignor: "DB-C-2078",
    featured: true,
    colors: ["#a50044", "#004d98"],
    priceHistory: [1589, 1516, 1571, 1531, 1562, 1531, 1592, 1569, 1559, 1568, 1560, 1950]
  },
  {
    id: "db-038", name: "Lionel Messi",
    year: 2004, set: "Megacracks LaLiga", cardNumber: "#71", parallel: "Rookie",
    sport: "Soccer", grade: "Raw",
    price: 1250, lastComp: 1297, trend: -3.4,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#75aadb", "#ffffff"],
    priceHistory: [1262, 1246, 1270, 1275, 1267, 1274, 1271, 1297, 1285, 1295, 1294, 1250]
  },
  {
    id: "db-039", name: "Kylian Mbappé",
    year: 2018, set: "Panini Prizm", cardNumber: "#1", parallel: "Base",
    sport: "Soccer", grade: "PSA 9",
    price: 310, lastComp: 292, trend: -7.2,
    status: "consigned", consignor: "DB-C-3115",
    featured: false,
    colors: ["#002654", "#ed2939"],
    priceHistory: [372, 366, 356, 362, 355, 344, 343, 347, 341, 338, 334, 310]
  },
  {
    id: "db-040", name: "Erling Haaland",
    year: 2020, set: "Topps Chrome UEFA", cardNumber: "#28", parallel: "Refractor",
    sport: "Soccer", grade: "PSA 10",
    price: 265, lastComp: 263, trend: 5.9,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#6cabdd", "#1c2c5b"],
    priceHistory: [244, 239, 245, 243, 248, 248, 245, 245, 252, 247, 250, 265]
  },
  {
    id: "db-041", name: "Jude Bellingham",
    year: 2020, set: "Topps Chrome UEFA", cardNumber: "#55", parallel: "Base",
    sport: "Soccer", grade: "Raw",
    price: 88, lastComp: 84, trend: -10.4,
    status: "consigned", consignor: "DB-C-3115",
    featured: false,
    colors: ["#ffffff", "#00529f"],
    priceHistory: [89, 90, 91, 93, 93, 96, 95, 94, 98, 100, 98, 88]
  },
  {
    id: "db-042", name: "Cristiano Ronaldo",
    year: 2002, set: "Panini Mega Cracks", cardNumber: "#293", parallel: "Rookie",
    sport: "Soccer", grade: "BGS 9.5",
    price: 2650, lastComp: 2773, trend: 1.5,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#da020e", "#00693e"],
    priceHistory: [2576, 2598, 2593, 2574, 2594, 2586, 2606, 2620, 2606, 2599, 2611, 2650]
  },

  /* ---------------- Hockey (6) ---------------- */
  {
    id: "db-043", name: "Connor Bedard",
    year: 2023, set: "Upper Deck Series 2", cardNumber: "#451", parallel: "Young Guns",
    sport: "Hockey", grade: "PSA 10",
    price: 560, lastComp: 574, trend: -4.6,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#cf0a2c", "#000000"],
    priceHistory: [512, 525, 523, 531, 553, 546, 554, 580, 572, 582, 587, 560]
  },
  {
    id: "db-044", name: "Connor McDavid",
    year: 2015, set: "Upper Deck Series 1", cardNumber: "#201", parallel: "Young Guns",
    sport: "Hockey", grade: "PSA 9",
    price: 780, lastComp: 827, trend: 2.7,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#041e42", "#fc4c02"],
    priceHistory: [711, 715, 732, 734, 736, 741, 743, 752, 760, 755, 759, 780]
  },
  {
    id: "db-045", name: "Sidney Crosby",
    year: 2005, set: "Upper Deck Series 2", cardNumber: "#468", parallel: "Young Guns",
    sport: "Hockey", grade: "Raw",
    price: 340, lastComp: 316, trend: -1.8,
    status: "owned", consignor: null,
    featured: false,
    colors: ["#000000", "#fcb514"],
    priceHistory: [375, 371, 365, 363, 360, 354, 357, 352, 351, 347, 346, 340]
  },
  {
    id: "db-046", name: "Auston Matthews",
    year: 2016, set: "Upper Deck Series 1", cardNumber: "#201", parallel: "Young Guns",
    sport: "Hockey", grade: "Raw",
    price: 195, lastComp: 198, trend: 8.9,
    status: "consigned", consignor: "DB-C-1042",
    featured: false,
    colors: ["#00205b", "#ffffff"],
    priceHistory: [204, 198, 198, 192, 190, 190, 183, 186, 183, 179, 179, 195]
  },
  {
    id: "db-047", name: "Macklin Celebrini",
    year: 2024, set: "Upper Deck Series 1", cardNumber: "#241", parallel: "Young Guns",
    sport: "Hockey", grade: "Raw",
    price: 145, lastComp: 134, trend: 14.6,
    status: "consigned", consignor: "DB-C-2078",
    featured: false,
    colors: ["#006272", "#ea7200"],
    priceHistory: [120, 122, 123, 123, 125, 125, 125, 123, 126, 125, 127, 145]
  },
  {
    id: "db-048", name: "Wayne Gretzky",
    year: 1979, set: "O-Pee-Chee", cardNumber: "#18", parallel: "Base",
    sport: "Hockey", grade: "Raw",
    price: 2200, lastComp: 2160, trend: 0.6,
    status: "owned", consignor: null,
    featured: true,
    colors: ["#041e42", "#a2aaad"],
    priceHistory: [2115, 2115, 2117, 2137, 2155, 2144, 2161, 2179, 2187, 2180, 2187, 2200]
  }

];

/* ---------- LIVE WHATNOT LISTINGS ----------
   Pulled 2026-07-03 from https://www.whatnot.com/user/dabomb_breaks
   Real items, real prices, real photos from the live shop.
   priceHistory / trend / lastComp are demo estimates around the ask. */
function wnImg(key, w) {
  return "https://images.whatnot.com/fit-in/" + w + "x0/filters:format(webp)/listings%2F" + key;
}
const WHATNOT_LIVE = [
  {
    id: "db-101", name: "Brock Bowers",
    year: 2025, set: "Topps Chrome", cardNumber: "14/25", parallel: "Orange Refractor Auto SSP",
    sport: "Football", grade: "Raw",
    price: 999, lastComp: 950, trend: 0.9,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTczMjMwNjkwNw==",
    image: wnImg("0-3578f990-0763-43ca-b284-183e141911bf-cbf02abe-f3fe-46a1-bd10-ff266d48ddd5.jpeg", 640),
    imageHd: wnImg("0-3578f990-0763-43ca-b284-183e141911bf-cbf02abe-f3fe-46a1-bd10-ff266d48ddd5.jpeg", 1280),
    colors: ["#a5acaf", "#0b0b0b"],
    priceHistory: [1050, 1080, 1020, 995, 960, 940, 955, 970, 985, 1010, 990, 999]
  },
  {
    id: "db-102", name: "Julio Rodríguez",
    year: 2025, set: "Topps Platinum", cardNumber: "1/5", parallel: "1955 City Variation Auto",
    sport: "Baseball", grade: "Raw",
    price: 1500, lastComp: 1000, trend: 4.2,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk3MjI0NTI5Nw==",
    image: wnImg("0-57f45909-255c-4c8a-ab09-f30c03012514-ee0ab91e-7d72-483d-96a7-04848723c34f.jpeg", 640),
    imageHd: wnImg("0-57f45909-255c-4c8a-ab09-f30c03012514-ee0ab91e-7d72-483d-96a7-04848723c34f.jpeg", 1280),
    colors: ["#0c2c56", "#005c5c"],
    priceHistory: [1750, 1700, 1650, 1600, 1580, 1550, 1520, 1480, 1450, 1420, 1440, 1500]
  },
  {
    id: "db-103", name: "Babe Ruth",
    year: 2019, set: "Leaf Metal", cardNumber: "#36", parallel: "Orange 5/5",
    sport: "Baseball", grade: "Graded 10",
    price: 699, lastComp: 710, trend: 1.0,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTQzNTk2MzIyMA==",
    image: wnImg("0-ac935c5d-07de-4a8d-88d8-043338299979-7be42c67-62eb-4ed8-8757-f5f66abfce57.jpeg", 640),
    imageHd: wnImg("0-ac935c5d-07de-4a8d-88d8-043338299979-7be42c67-62eb-4ed8-8757-f5f66abfce57.jpeg", 1280),
    colors: ["#ff7a00", "#3a2a1a"],
    priceHistory: [640, 650, 655, 660, 670, 665, 675, 680, 690, 685, 692, 699]
  },
  {
    id: "db-104", name: "Elijah Arroyo",
    year: 2025, set: "Rookie Phenom", cardNumber: null, parallel: "Light Blue Patch",
    sport: "Football", grade: "Raw",
    price: 10, lastComp: 10, trend: 0.0,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU2MDUwMw==",
    image: wnImg("0-2cfddc62-cc39-4892-8275-2f167dc35973-f20027fe-9097-4445-89db-a40c69128e31.jpeg", 640),
    imageHd: wnImg("0-2cfddc62-cc39-4892-8275-2f167dc35973-f20027fe-9097-4445-89db-a40c69128e31.jpeg", 1280),
    colors: ["#69be28", "#002244"],
    priceHistory: [12, 12, 11, 11, 11, 10, 10, 11, 10, 10, 10, 10]
  },
  {
    id: "db-105", name: "Malakai Starks",
    year: 2025, set: "Topps Signature", cardNumber: null, parallel: "/150",
    sport: "Football", grade: "Raw",
    price: 20, lastComp: 21, trend: 0.0,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU1Nzg5Mw==",
    image: wnImg("0-4932f865-544f-4cee-9fcd-982146660ccd-fa425400-5842-48e2-a9f6-2a7c4d4125f2.jpeg", 640),
    imageHd: wnImg("0-4932f865-544f-4cee-9fcd-982146660ccd-fa425400-5842-48e2-a9f6-2a7c4d4125f2.jpeg", 1280),
    colors: ["#241773", "#9e7c0c"],
    priceHistory: [18, 18, 19, 19, 20, 21, 21, 20, 19, 19, 20, 20]
  },
  {
    id: "db-106", name: "Tre'Quan Smith",
    year: 2019, set: "Rookie Patch Auto", cardNumber: "29/49", parallel: "Dual-Color Player-Worn Patch",
    sport: "Football", grade: "Raw",
    price: 15, lastComp: 16, trend: 0.0,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU1NjA0NA==",
    image: wnImg("0-557d445a-a294-4687-8a1f-d8e085b02b3b-c0fc25c7-62dd-4c6f-8b24-14d7f13167f2.jpeg", 640),
    imageHd: wnImg("0-557d445a-a294-4687-8a1f-d8e085b02b3b-c0fc25c7-62dd-4c6f-8b24-14d7f13167f2.jpeg", 1280),
    colors: ["#d3bc8d", "#101820"],
    priceHistory: [22, 21, 20, 19, 18, 18, 17, 16, 16, 15, 15, 15]
  },
  {
    id: "db-107", name: "Kyle Williams",
    year: 2025, set: "Rookies and Stars", cardNumber: null, parallel: "Rookie Auto",
    sport: "Football", grade: "Raw",
    price: 15, lastComp: 16, trend: -6.3,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU1MjI5NQ==",
    image: wnImg("0-ea008915-94ce-4d3b-a4d7-e730b04204b6-4405b5be-cd3c-4feb-aba9-7607219f7c19.jpeg", 640),
    imageHd: wnImg("0-ea008915-94ce-4d3b-a4d7-e730b04204b6-4405b5be-cd3c-4feb-aba9-7607219f7c19.jpeg", 1280),
    colors: ["#002244", "#c60c30"],
    priceHistory: [14, 14, 15, 15, 16, 16, 15, 15, 14, 14, 16, 15]
  },
  {
    id: "db-108", name: "Noah Fant",
    year: null, set: "Topps Chrome", cardNumber: null, parallel: "True Blue /199",
    sport: "Football", grade: "Raw",
    price: 20, lastComp: 21, trend: -4.8,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU1MDYwMQ==",
    image: wnImg("0-f6da2bed-5b09-475f-8cb6-9c5e4ef34977-48b70a61-ae04-474f-b51f-72b4ea1e7ad4.jpeg", 640),
    imageHd: wnImg("0-f6da2bed-5b09-475f-8cb6-9c5e4ef34977-48b70a61-ae04-474f-b51f-72b4ea1e7ad4.jpeg", 1280),
    colors: ["#002244", "#69be28"],
    priceHistory: [24, 23, 23, 22, 22, 21, 21, 20, 20, 21, 21, 20]
  },
  {
    id: "db-109", name: "Trey Hendrickson",
    year: 2022, set: "Autograph", cardNumber: null, parallel: null,
    sport: "Football", grade: "Raw",
    price: 20, lastComp: 20, trend: 0.0,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU0ODc0NA==",
    image: wnImg("0-2f42fc5f-706e-49f7-96a6-6e6b9641a787-3dd36573-2165-4b5d-824b-e8e979219254.jpeg", 640),
    imageHd: wnImg("0-2f42fc5f-706e-49f7-96a6-6e6b9641a787-3dd36573-2165-4b5d-824b-e8e979219254.jpeg", 1280),
    colors: ["#fb4f14", "#000000"],
    priceHistory: [18, 18, 19, 19, 19, 20, 20, 21, 21, 20, 20, 20]
  },
  {
    id: "db-110", name: "Troy Franklin",
    year: 2024, set: "Topps Chrome", cardNumber: null, parallel: "Rookie Auto",
    sport: "Football", grade: "Raw",
    price: 10, lastComp: 11, trend: -9.1,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU0NjU3NA==",
    image: wnImg("0-fe7eae6f-c97f-4a56-8410-1daae31f41e1-19e3c26b-63eb-4634-9eac-30cdab0b5f65.jpeg", 640),
    imageHd: wnImg("0-fe7eae6f-c97f-4a56-8410-1daae31f41e1-19e3c26b-63eb-4634-9eac-30cdab0b5f65.jpeg", 1280),
    colors: ["#fb4f14", "#002244"],
    priceHistory: [14, 13, 13, 12, 12, 11, 11, 10, 10, 10, 11, 10]
  },
  {
    id: "db-111", name: "Lathan Ransom",
    year: 2025, set: "Topps Signature", cardNumber: null, parallel: "/35",
    sport: "Football", grade: "Raw",
    price: 20, lastComp: 20, trend: 0.0,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU0NDAxMQ==",
    image: wnImg("0-81ca4947-9185-47c7-bdb5-3206a763dbd3-09da3922-1ae2-4114-88f0-a2e44bcc84cb.jpeg", 640),
    imageHd: wnImg("0-81ca4947-9185-47c7-bdb5-3206a763dbd3-09da3922-1ae2-4114-88f0-a2e44bcc84cb.jpeg", 1280),
    colors: ["#0085ca", "#101820"],
    priceHistory: [20, 20, 21, 21, 20, 20, 19, 20, 20, 21, 20, 20]
  },
  {
    id: "db-112", name: "Breece Hall",
    year: null, set: "Prizm", cardNumber: null, parallel: "Blue /149",
    sport: "Football", grade: "Raw",
    price: 30, lastComp: 29, trend: 3.4,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzU0MTg3OA==",
    image: wnImg("0-3ac03cd9-0c16-4fd5-a80d-282e1143df3e-6ca70ef7-8751-4e89-adcf-2d7b6de891c6.jpeg", 640),
    imageHd: wnImg("0-3ac03cd9-0c16-4fd5-a80d-282e1143df3e-6ca70ef7-8751-4e89-adcf-2d7b6de891c6.jpeg", 1280),
    colors: ["#125740", "#1c2b28"],
    priceHistory: [36, 35, 34, 33, 32, 32, 31, 30, 29, 29, 29, 30]
  },
  {
    id: "db-113", name: "Trevor Lawrence",
    year: null, set: "Donruss Optic", cardNumber: null, parallel: "Blue /199",
    sport: "Football", grade: "Raw",
    price: 35, lastComp: 34, trend: 2.9,
    status: "owned", consignor: null, featured: false,
    whatnot: true, whatnotUrl: "https://www.whatnot.com/listing/TGlzdGluZ05vZGU6MTk4MzUzOTQ0OQ==",
    image: wnImg("0-9212cb64-fc23-463d-a8c9-dc864ec2b42f-7986c9b4-a61a-43ee-8bf9-249cff8f3a38.jpeg", 640),
    imageHd: wnImg("0-9212cb64-fc23-463d-a8c9-dc864ec2b42f-7986c9b4-a61a-43ee-8bf9-249cff8f3a38.jpeg", 1280),
    colors: ["#006778", "#d7a22a"],
    priceHistory: [30, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35]
  }
];
for (var wnI = WHATNOT_LIVE.length - 1; wnI >= 0; wnI--) { INVENTORY.unshift(WHATNOT_LIVE[wnI]); }
