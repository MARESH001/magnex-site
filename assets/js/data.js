/* =========================================================
   MAGNEX INTERNATIONAL TRADE — product catalogue
   Categories → Groups → Products → Varieties + Specs
   ========================================================= */

const SITE = {
  name: "MAGNEX",
  sub: "INTERNATIONAL TRADE",
  phone: "+91-22-0000-0000",
  email: "exports@magnexintl.com",
  address: "Magnex House, Andheri (E),<br>Mumbai - 400059, India",
  whatsapp: "https://wa.me/912200000000",
};

/* texture: type used by the procedural renderer in textures.js
   types: rice | goldenrice | brownrice | coffee | greencoffee | tea |
          spice-red | spice-yellow | seeds | sesame | pulses-yellow |
          pulses-green | chickpea | wheat | almond | cashew | raisin |
          leaf | powder-red | generic                                     */

const CATALOG = {

  rice: {
    name: "Indian Rice",
    tagline: "Basmati & Non-Basmati export grades",
    desc: "Premium Basmati and Non-Basmati rice sourced from India's finest paddy belts, milled, aged and graded strictly to buyer-approved specifications for retail, bulk and private-label programs.",
    video: { src: "assets/video/rice-quality.mp4", caption: "Rice quality testing for export — grain length, moisture and purity checks" },
    texture: "rice",
    groups: [
      {
        id: "basmati",
        name: "Basmati Rice",
        desc: "Export-grade Basmati rice supplied in multiple varieties including 1121, Pusa, 1718, and 1509, delivered to exact buyer-defined quality, ageing, and grading specifications.",
        about: [
          "Basmati rice is a premium long-grain aromatic rice cultivated in select regions of India and supplied to global markets for retail, bulk distribution, and private label programs. It is valued internationally for its grain elongation, aroma, and cooking performance when processed and aged correctly.",
          "At Magnex International Trade, Basmati rice is supplied strictly against buyer-approved specifications. Key parameters such as grain length, ageing profile, moisture content, broken percentage, aroma, and purity are defined in advance and adhered to across each shipment.",
          "Our Basmati portfolio includes 1121 Basmati Rice, Pusa Basmati Rice, 1718 Basmati Rice, and 1509 Basmati Rice. Each variety is sourced and processed based on its intended application and market requirements, ensuring consistency across repeat orders.",
          "Defined sourcing, controlled processing, and export-ready packaging protocols are followed for every shipment, supported by quality checks and documentation. This specification-driven approach enables importers, distributors, and private label buyers to rely on consistent Basmati rice supply for long-term programs."
        ],
        faqs: [
          ["What types of Basmati rice do you export?", "We export 1121, Pusa, 1718 and 1509 Basmati rice in Steam, Sella (parboiled), Golden Sella and Raw processing formats, aged as per buyer requirement."],
          ["What are the differences between 1121, Pusa, 1718 and 1509 Basmati rice?", "1121 offers the longest grain and highest elongation; Pusa is a classic aromatic long grain; 1718 balances aroma and milling yield; 1509 is a shorter-cycle crop suited to faster turnaround and competitive pricing."],
          ["Can Basmati rice be supplied to exact buyer specifications?", "Yes. Grain length, ageing, moisture, broken percentage, purity and packaging are locked against your approved specification sheet before every shipment."],
          ["Do you supply Basmati rice for bulk and private label buyers?", "Yes — bulk jute/PP shipments as well as fully finished private-label retail packs from 1kg to 40kg with custom artwork."],
          ["What is the minimum order quantity (MOQ) for Basmati rice?", "Typically one 20' FCL (~25 MT). Mixed-container loads across varieties can be arranged for established buyers."],
          ["How do you ensure consistency across Basmati rice shipments?", "Pre-shipment sampling, third-party inspection on request, sealed retention samples and specification-driven milling ensure every repeat order matches the approved standard."],
          ["What certifications do your Basmati rice exports comply with?", "Shipments comply with APEDA export norms and are supported by ISO and FSSAI certified processing partners; phytosanitary, fumigation and certificate of origin documents accompany every consignment."],
          ["Which markets do you export Basmati rice to?", "The Middle East, Europe, North America, Africa, Asia-Pacific and CIS markets."],
          ["How can I request pricing or specifications for Basmati rice?", "Use the Get a Quote button or write to us — share destination port, variety, grade and packing preference and we revert with a firm offer."]
        ],
        products: [
          {
            id: "basmati-1121",
            photo: "assets/img/products/basmati-1121.png",
            name: "1121 Basmati Rice",
            short: "Extra-long grain Basmati rice known for superior elongation after cooking, supplied to defined ageing, moisture, and broken percentage specifications.",
            origin: "India",
            crop: "October, November",
            texture: "rice",
            varieties: [
              { name: "Basmati Rice – 1121 Sella Cream", photo: "assets/img/products/1121-sella-cream.png" },
              { name: "Basmati Rice – 1121 Sella Golden", photo: "assets/img/products/1121-sella-golden.png" },
              { name: "Basmati Rice – 1121 Steam", photo: "assets/img/products/1121-steam.jpg" }
            ],
            specs: [
              ["Average Length", "8.32 – 8.35 mm"],
              ["Cooking", "95 – 96%"],
              ["Grade", "Sella Cream / Sella Golden / Steam"],
              ["Broken", "1% max."],
              ["Kett Ratio", "32+"],
              ["Moisture", "12% max."],
              ["Foreign Matter", "NIL"],
              ["Damaged & Discoloured", "1% max."],
              ["Black Grains", "Nil"],
              ["Smell", "Free from bad smell"],
              ["20' Container", "25 MT"],
              ["40' Container", "28 MT"],
              ["Packaging", "Jute Bags, Non Woven Bags, BOPP Bags, PP Bags, Pouch"],
              ["Weights", "1kg, 2kg, 4.54kg, 5kg, 10kg, 20kg, 25kg"]
            ]
          },
          {
            id: "basmati-pusa",
            photo: "assets/img/products/basmati-pusa.png",
            name: "Pusa Basmati Rice",
            short: "Aromatic long-grain Basmati rice with consistent cooking performance, supplied to buyer-approved grading, ageing, and purity specifications.",
            origin: "India",
            crop: "October, November",
            texture: "rice",
            varieties: ["Basmati Rice – Pusa Sella Cream", "Basmati Rice – Pusa Sella Golden", "Basmati Rice – Pusa Steam", "Basmati Rice – Pusa Raw"],
            specs: [
              ["Average Length", "7.45 – 7.55 mm"],
              ["Cooking", "94 – 95%"],
              ["Grade", "Sella Cream / Sella Golden / Steam / Raw"],
              ["Broken", "1% max."],
              ["Moisture", "12.5% max."],
              ["Foreign Matter", "NIL"],
              ["Damaged & Discoloured", "1% max."],
              ["Smell", "Natural Basmati aroma"],
              ["20' Container", "25 MT"],
              ["40' Container", "28 MT"],
              ["Packaging", "Jute Bags, Non Woven Bags, BOPP Bags, PP Bags"],
              ["Weights", "1kg, 5kg, 10kg, 20kg, 25kg, 39kg"]
            ]
          },
          {
            id: "basmati-1718",
            photo: "assets/img/products/basmati-1718.png",
            name: "1718 Basmati Rice",
            short: "Long-grain Basmati rice offering balanced aroma and yield, supplied to defined quality, moisture, and ageing specifications for export markets.",
            origin: "India",
            crop: "October, November",
            texture: "rice",
            varieties: ["Basmati Rice – 1718 Sella Cream", "Basmati Rice – 1718 Sella Golden", "Basmati Rice – 1718 Steam"],
            specs: [
              ["Average Length", "8.25 – 8.30 mm"],
              ["Cooking", "94 – 96%"],
              ["Grade", "Sella Cream / Sella Golden / Steam"],
              ["Broken", "1% max."],
              ["Moisture", "12% max."],
              ["Foreign Matter", "NIL"],
              ["Damaged & Discoloured", "1% max."],
              ["Smell", "Free from bad smell"],
              ["20' Container", "25 MT"],
              ["40' Container", "28 MT"],
              ["Packaging", "Jute Bags, BOPP Bags, PP Bags, Pouch"],
              ["Weights", "1kg, 5kg, 10kg, 20kg, 25kg"]
            ]
          },
          {
            id: "basmati-1509",
            photo: "assets/img/products/basmati-1509.png",
            name: "1509 Basmati Rice",
            short: "Shorter-aged long-grain Basmati rice suited for faster turnaround requirements, supplied to buyer-defined grading and quality specifications.",
            origin: "India",
            crop: "September, October",
            texture: "rice",
            varieties: ["Basmati Rice – 1509 Sella Cream", "Basmati Rice – 1509 Sella Golden", "Basmati Rice – 1509 Steam"],
            specs: [
              ["Average Length", "8.20 – 8.30 mm"],
              ["Cooking", "93 – 95%"],
              ["Grade", "Sella Cream / Sella Golden / Steam"],
              ["Broken", "1.5% max."],
              ["Moisture", "12.5% max."],
              ["Foreign Matter", "NIL"],
              ["Damaged & Discoloured", "1% max."],
              ["Smell", "Free from bad smell"],
              ["20' Container", "25 MT"],
              ["40' Container", "28 MT"],
              ["Packaging", "Jute Bags, Non Woven Bags, PP Bags"],
              ["Weights", "5kg, 10kg, 20kg, 25kg, 40kg"]
            ]
          }
        ]
      },
      {
        id: "non-basmati",
        name: "Non-Basmati Rice",
        desc: "High-volume Non-Basmati varieties — Sona Masoori, IR 64, PR 11 and Broken Rice — supplied to defined grading and moisture specifications for bulk and institutional buyers.",
        about: [
          "Non-Basmati rice forms the backbone of high-volume rice trade from India, serving staple-food programs, institutional buyers and re-packers across Africa, Asia and the Middle East.",
          "Magnex supplies Sona Masoori, IR 64, PR 11 and Broken Rice in raw, steam and parboiled formats, each milled and sortex-cleaned to buyer-approved grading, broken percentage and moisture parameters."
        ],
        faqs: [
          ["Which Non-Basmati varieties do you export?", "Sona Masoori, IR 64 / IR 36, PR 11 / PR 14 and 100% Broken Rice, in raw, steam and parboiled processing."],
          ["What is the MOQ for Non-Basmati rice?", "One 20' FCL; most buyers ship 40' HC or multi-container programs."],
          ["Do you supply sortex-cleaned rice?", "Yes, double sortex cleaning is standard for all export shipments."]
        ],
        products: [
          {
            id: "sona-masoori",
            name: "Sona Masoori Rice",
            short: "Lightweight, aromatic medium-grain rice popular across South India and the global diaspora, supplied raw or steamed to buyer specification.",
            origin: "India", crop: "November, December", texture: "rice",
            varieties: ["Sona Masoori – Raw", "Sona Masoori – Steam", "Sona Masoori – Boiled"],
            specs: [
              ["Average Length", "5.0 – 5.2 mm"], ["Broken", "2% max."], ["Moisture", "13% max."],
              ["Foreign Matter", "NIL"], ["Damaged & Discoloured", "1% max."],
              ["20' Container", "25 MT"], ["40' Container", "27 MT"],
              ["Packaging", "PP Bags, Non Woven Bags, BOPP Bags"], ["Weights", "5kg, 10kg, 25kg, 26kg"]
            ]
          },
          {
            id: "ir64",
            name: "IR 36/64 Rice",
            short: "Workhorse long-grain white rice for volume programs, supplied in 5% to 25% broken grades, raw or parboiled.",
            origin: "India", crop: "October – December", texture: "rice",
            varieties: ["IR 64 – 5% Broken", "IR 64 – 25% Broken", "IR 64 – Parboiled", "IR 36 – Raw"],
            specs: [
              ["Average Length", "5.8 – 6.0 mm"], ["Broken", "5% / 25% as per grade"], ["Moisture", "14% max."],
              ["Foreign Matter", "0.5% max."], ["Damaged & Discoloured", "2% max."],
              ["20' Container", "25 MT"], ["40' Container", "27 MT"],
              ["Packaging", "PP Bags, Jute Bags"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "pr11",
            name: "PR 11 / PR 14 Rice",
            short: "Long-grain Non-Basmati rice with excellent cooking separation, supplied in steam and sella grades for Middle-East and African markets.",
            origin: "India", crop: "October, November", texture: "rice",
            varieties: ["PR 11 – Steam", "PR 11 – Sella", "PR 11 – Golden Sella", "PR 14 – Steam"],
            specs: [
              ["Average Length", "6.8 – 7.0 mm"], ["Broken", "2% max."], ["Moisture", "13% max."],
              ["Foreign Matter", "NIL"], ["Damaged & Discoloured", "1.5% max."],
              ["20' Container", "25 MT"], ["40' Container", "28 MT"],
              ["Packaging", "PP Bags, Non Woven Bags, Jute Bags"], ["Weights", "5kg, 10kg, 25kg, 50kg"]
            ]
          },
          {
            id: "broken-rice",
            name: "100% Broken Rice",
            short: "Sortex-cleaned broken rice for food processing, brewing and staple programs, supplied at competitive volume pricing.",
            origin: "India", crop: "Year-round", texture: "rice",
            varieties: ["White Broken – Sortex", "Parboiled Broken", "Broken – Brewers Grade"],
            specs: [
              ["Broken", "100%"], ["Moisture", "14% max."], ["Foreign Matter", "0.5% max."],
              ["Damaged & Discoloured", "2% max."], ["20' Container", "25 MT"],
              ["Packaging", "PP Bags"], ["Weights", "25kg, 50kg"]
            ]
          }
        ]
      }
    ]
  },

  tea: {
    name: "Indian Tea",
    tagline: "Assam · Darjeeling · Nilgiri",
    desc: "India produces over 1.3 billion kg of tea annually — second only to China. From the malty intensity of Assam to the muscatel elegance of Darjeeling and the bright fragrance of Nilgiri, Indian tea offers unmatched diversity for blenders, packagers, and specialty retailers.",
    texture: "tea",
    groups: [
      {
        id: "tea-all",
        name: "Tea Grades",
        desc: "CTC and orthodox processing across all grades — from premium whole leaf to standard dust suitable for tea bags — sourced directly from certified estates.",
        about: [
          "Magnex sources directly from certified estates across Assam, Darjeeling and Nilgiri, offering both CTC and orthodox processing across all grades — from premium whole leaf to standard dust suitable for tea bags.",
          "Every lot is cupped and approved against the buyer's target profile before shipment, with estate traceability and season declarations on request."
        ],
        faqs: [
          ["What tea varieties do you offer?", "Assam CTC (BP/BOP), Assam Orthodox, Darjeeling Orthodox, Nilgiri Orthodox & CTC, and Indian Green Tea in leaf and dust grades."],
          ["Do you supply teas for tea-bag programs?", "Yes — BOP, fannings and dust grades with consistent particle sizing for high-speed tea-bag lines."],
          ["Can you blend to a target profile?", "Yes, our tasters match your reference sample and hold the blend recipe for repeat orders."]
        ],
        products: [
          {
            id: "assam-ctc-bp",
            name: "Assam CTC – BP Grade",
            short: "Strong, malty, full-bodied. The backbone of breakfast blends worldwide.",
            origin: "Assam, India", crop: "April – November", texture: "tea",
            varieties: ["Assam CTC – BP", "Assam CTC – BP Premium"],
            specs: [
              ["Grade", "BP (Broken Pekoe)"], ["Liquor", "Strong, malty, full-bodied"],
              ["Moisture", "7% max."], ["Total Ash", "4 – 8%"], ["Season", "Second flush preferred"],
              ["20' Container", "12 – 14 MT"], ["Packaging", "Multi-wall Kraft Sacks, PP Bags, Tea Chests"],
              ["Weights", "25kg, 35kg, 50kg"]
            ]
          },
          {
            id: "assam-ctc-bop",
            name: "Assam CTC – BOP / Standard",
            short: "Consistent, brisk character. Ideal for mass-market tea bags and blending.",
            origin: "Assam, India", crop: "April – November", texture: "tea",
            varieties: ["Assam CTC – BOP", "Assam CTC – BOPSM", "Assam CTC – Dust"],
            specs: [
              ["Grade", "BOP / BOPSM / PD / Dust"], ["Liquor", "Brisk, coloury"],
              ["Moisture", "7% max."], ["20' Container", "12 – 14 MT"],
              ["Packaging", "Kraft Sacks, PP Bags"], ["Weights", "25kg, 35kg, 50kg"]
            ]
          },
          {
            id: "assam-orthodox",
            name: "Assam Orthodox Black Tea",
            short: "Malty with honey notes. A step up for specialty retail.",
            origin: "Assam, India", crop: "May – July (2nd flush)", texture: "tea",
            varieties: ["Assam Orthodox – TGFOP", "Assam Orthodox – FBOP", "Assam Orthodox – GBOP"],
            specs: [
              ["Grade", "TGFOP / FBOP / GBOP"], ["Liquor", "Malty, honey notes"],
              ["Moisture", "7% max."], ["20' Container", "10 – 12 MT"],
              ["Packaging", "Kraft Sacks, Foil-lined Boxes"], ["Weights", "20kg, 25kg"]
            ]
          },
          {
            id: "darjeeling-orthodox",
            name: "Darjeeling Orthodox",
            short: "The \"champagne of teas.\" Muscatel aroma, light golden liquor, globally sought-after.",
            origin: "Darjeeling, India", crop: "March – November (flush-wise)", texture: "tea",
            varieties: ["Darjeeling – First Flush", "Darjeeling – Second Flush", "Darjeeling – Autumn Flush"],
            specs: [
              ["Grade", "SFTGFOP / FTGFOP"], ["Liquor", "Light golden, muscatel"],
              ["Certification", "Darjeeling GI certified"], ["Moisture", "6.5% max."],
              ["20' Container", "8 – 10 MT"], ["Packaging", "Foil-lined Chests, Vacuum Packs"],
              ["Weights", "5kg, 10kg, 20kg"]
            ]
          },
          {
            id: "nilgiri-orthodox",
            name: "Nilgiri Orthodox",
            short: "Fragrant, bright, and clean. Well-suited to iced teas and delicate blends.",
            origin: "Nilgiris, India", crop: "Year-round", texture: "tea",
            varieties: ["Nilgiri Orthodox – Whole Leaf", "Nilgiri Orthodox – Broken"],
            specs: [
              ["Grade", "OP / FOP / BOP"], ["Liquor", "Bright, fragrant, clean"],
              ["Moisture", "7% max."], ["20' Container", "10 – 12 MT"],
              ["Packaging", "Kraft Sacks, PP Bags"], ["Weights", "20kg, 25kg, 35kg"]
            ]
          },
          {
            id: "nilgiri-ctc",
            name: "Nilgiri CTC",
            short: "Brisk and full-flavoured. Popular across the Middle East and CIS markets.",
            origin: "Nilgiris, India", crop: "Year-round", texture: "tea",
            varieties: ["Nilgiri CTC – BP", "Nilgiri CTC – BOP", "Nilgiri CTC – Dust"],
            specs: [
              ["Grade", "BP / BOP / Dust"], ["Liquor", "Brisk, full flavoured"],
              ["Moisture", "7% max."], ["20' Container", "12 – 14 MT"],
              ["Packaging", "Kraft Sacks, PP Bags"], ["Weights", "25kg, 35kg, 50kg"]
            ]
          },
          {
            id: "green-tea-leaf",
            name: "Indian Green Tea – Leaf",
            short: "Lightly processed whole leaf. Growing demand in health-conscious markets.",
            origin: "India", crop: "March – November", texture: "leaf",
            varieties: ["Green Tea – Whole Leaf", "Green Tea – Fannings", "Green Tea – Dust"],
            specs: [
              ["Grade", "Whole Leaf / Fannings / Dust"], ["Liquor", "Light, vegetal, fresh"],
              ["Moisture", "6% max."], ["20' Container", "10 – 12 MT"],
              ["Packaging", "Foil-lined Kraft Sacks"], ["Weights", "20kg, 25kg"]
            ]
          }
        ]
      }
    ]
  },

  coffee: {
    name: "Coffee",
    tagline: "Arabica & Robusta from Indian estates",
    desc: "Shade-grown Indian coffee from the Western Ghats — washed Arabica plantation grades, bold Robusta cherry, and instant coffee formats for roasters and blenders worldwide.",
    texture: "coffee",
    groups: [
      {
        id: "coffee-all",
        name: "Coffee Grades",
        desc: "Green coffee and instant formats supplied against screen size, defect count and cup-profile specifications.",
        about: [
          "Indian coffee is unique — grown under shade alongside spices, giving a mellow, low-acid cup prized by European and Middle-Eastern roasters.",
          "Magnex supplies Arabica Plantation grades (AA/A/B), Robusta Cherry and Parchment grades, and spray/freeze-dried instant coffee, all against pre-agreed screen, moisture and defect specifications."
        ],
        faqs: [
          ["Which coffee grades do you export?", "Arabica Plantation AA/A/B, Robusta Cherry AA/A/AB, Robusta Parchment, and instant coffee (spray-dried and freeze-dried)."],
          ["What is the MOQ for green coffee?", "One 20' FCL (~19.2 MT in 60kg bags)."],
          ["Do you provide pre-shipment samples?", "Yes, type samples and pre-shipment samples are couriered for approval before loading."]
        ],
        products: [
          {
            id: "robusta-cherry",
            name: "Robusta Cherry AB",
            short: "Bold, full-bodied natural-processed Robusta — the workhorse of espresso blends and instant coffee manufacture.",
            origin: "Karnataka, India", crop: "January – March", texture: "coffee",
            varieties: ["Robusta Cherry – AA", "Robusta Cherry – A", "Robusta Cherry – AB", "Robusta Cherry – PB"],
            specs: [
              ["Screen Size", "AA: 17+ / A: 16+ / AB: 15+"], ["Moisture", "12.5% max."],
              ["Defects", "As per grade contract"], ["Processing", "Natural (dry)"],
              ["Cup Profile", "Bold body, low acidity, chocolatey"],
              ["20' Container", "19.2 MT (320 × 60kg)"], ["Packaging", "Jute Bags 60kg, Grain-Pro on request"]
            ]
          },
          {
            id: "arabica-plantation",
            name: "Arabica Plantation A",
            short: "Washed shade-grown Arabica with a mellow, sweet cup — a signature of Indian coffee estates.",
            origin: "Chikmagalur / Coorg, India", crop: "November – February", texture: "greencoffee",
            varieties: ["Plantation – AA", "Plantation – A", "Plantation – B", "Plantation – PB"],
            specs: [
              ["Screen Size", "AA: 18+ / A: 17+ / B: 15+"], ["Moisture", "11.5% max."],
              ["Processing", "Fully washed"], ["Cup Profile", "Mellow, sweet, mild acidity"],
              ["20' Container", "19.2 MT (320 × 60kg)"], ["Packaging", "Jute Bags 60kg, Grain-Pro on request"]
            ]
          },
          {
            id: "instant-freeze",
            name: "Instant Coffee – Freeze Dried",
            short: "Premium freeze-dried instant coffee retaining aroma and body, for retail jars and premium private label.",
            origin: "India", crop: "Year-round production", texture: "coffee",
            varieties: ["Freeze Dried – Granules", "Freeze Dried – Decaf"],
            specs: [
              ["Moisture", "4% max."], ["Solubility", "Complete in hot & cold water"],
              ["Caffeine", "Standard / Decaf on request"], ["Shelf Life", "24 months"],
              ["Packaging", "Bulk cartons 20kg, jars & pouches for private label"]
            ]
          },
          {
            id: "instant-spray",
            name: "Instant Coffee – Spray Dried",
            short: "Cost-effective spray-dried instant coffee powder and agglomerated granules for volume markets.",
            origin: "India", crop: "Year-round production", texture: "coffee",
            varieties: ["Spray Dried – Powder", "Spray Dried – Agglomerated"],
            specs: [
              ["Moisture", "4% max."], ["Bulk Density", "As per format"],
              ["Shelf Life", "24 months"], ["Packaging", "Bulk cartons 20/25kg, sachets for private label"]
            ]
          }
        ]
      }
    ]
  },

  spices: {
    name: "Indian Spices",
    tagline: "Whole, ground & custom blends",
    desc: "Turmeric, cardamom, cumin, red chilli and custom spice blends — steam-sterilised, ASTA-clean and packed for retail or bulk, from the spice gardens of India.",
    texture: "spice-red",
    groups: [
      {
        id: "spices-all",
        name: "Spices",
        desc: "Whole and ground spices supplied to ASTA cleanliness and buyer-defined pungency, colour and mesh specifications.",
        about: [
          "India is the world's largest producer and exporter of spices. Magnex sources at origin — turmeric from Erode and Sangli, chilli from Guntur, cumin from Unjha and cardamom from Idukki — and processes to export cleanliness standards.",
          "Steam sterilisation, ETO-free treatment and full pesticide-residue compliance for EU/US destinations are available on request."
        ],
        faqs: [
          ["Do you supply ground as well as whole spices?", "Yes, whole, ground and custom-blended formats with mesh size to your specification."],
          ["Can you meet EU pesticide residue norms?", "Yes, lots are pre-tested at accredited labs against EU MRL requirements before shipment."],
          ["What packaging options are available?", "Bulk PP/paper bags 10–50kg and retail pouches/jars for private label."]
        ],
        products: [
          {
            id: "turmeric-finger",
            name: "Turmeric Finger",
            short: "High-curcumin polished turmeric fingers from Erode and Sangli, supplied whole or ground to buyer-defined curcumin content.",
            origin: "Tamil Nadu / Maharashtra, India", crop: "February – May", texture: "spice-yellow",
            varieties: ["Turmeric Finger – Erode", "Turmeric Finger – Sangli", "Turmeric Powder – 2–5% Curcumin"],
            specs: [
              ["Curcumin", "2% – 5% as per grade"], ["Moisture", "10% max."],
              ["Total Ash", "7% max."], ["Flexibility", "Hard, metallic break"],
              ["Cleanliness", "ASTA"], ["20' Container", "13 – 15 MT"],
              ["Packaging", "PP Bags 25/50kg, Jute Bags"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "green-cardamom",
            name: "Green Cardamom",
            short: "Aromatic bold-size green cardamom from the Idukki hills, graded by size and colour for premium retail and food service.",
            origin: "Kerala, India", crop: "August – February", texture: "seeds",
            varieties: ["Cardamom – 8mm Bold", "Cardamom – 7–8mm", "Cardamom – 6–7mm", "Cardamom Seeds"],
            specs: [
              ["Size", "6mm – 8mm+ graded"], ["Colour", "Deep green"],
              ["Moisture", "10% max."], ["Volatile Oil", "3.5% min."],
              ["Cleanliness", "Machine + hand sorted"], ["Packaging", "Corrugated boxes with liner, vacuum packs"],
              ["Weights", "5kg, 10kg, 25kg"]
            ]
          },
          {
            id: "cumin-seeds",
            name: "Cumin Seeds",
            short: "Singapore and Europe quality cumin from Unjha, machine-cleaned and sortexed to 99%+ purity.",
            origin: "Gujarat / Rajasthan, India", crop: "February – March", texture: "seeds",
            varieties: ["Cumin – Singapore 99%", "Cumin – Europe 99.5%", "Cumin Powder"],
            specs: [
              ["Purity", "99% / 99.5% Sortex"], ["Moisture", "9% max."],
              ["Total Ash", "9.5% max."], ["Volatile Oil", "2.5% min."],
              ["20' Container", "12 – 13 MT"], ["Packaging", "PP Bags 25/50kg, Paper Bags"],
              ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "red-chilli",
            name: "Red Chilli – Whole & Powder",
            short: "Guntur and Byadgi chillies supplied whole (with/without stem) or as powder to defined SHU and colour value.",
            origin: "Andhra Pradesh / Karnataka, India", crop: "December – May", texture: "powder-red",
            varieties: ["Teja S17 – Whole", "Byadgi – Whole", "334 Sannam – Whole", "Chilli Powder – 30–100k SHU"],
            specs: [
              ["Heat", "15,000 – 100,000 SHU as per grade"], ["Colour Value", "60 – 180 ASTA"],
              ["Moisture", "10% max."], ["Cleanliness", "ASTA / steam sterilised on request"],
              ["20' Container", "7 – 9 MT (whole)"], ["Packaging", "Jute/PP Bags 25kg, cartons"],
              ["Weights", "10kg, 25kg"]
            ]
          },
          {
            id: "custom-blends",
            name: "Custom Spice Blends",
            short: "Buyer-recipe masalas and seasonings blended, sterilised and packed under private label.",
            origin: "India", crop: "Year-round", texture: "powder-red",
            varieties: ["Garam Masala", "Curry Powder", "Tandoori Seasoning", "Custom Recipe"],
            specs: [
              ["Recipe", "Buyer-defined, held in confidence"], ["Mesh Size", "As specified"],
              ["Sterilisation", "Steam / ETO-free"], ["Shelf Life", "18 – 24 months"],
              ["Packaging", "Retail pouches, jars, bulk 10–25kg"]
            ]
          }
        ]
      }
    ]
  },

  oilseeds: {
    name: "Oil Seeds",
    tagline: "Sesame · Groundnut · Niger",
    desc: "Natural and hulled sesame, bold and java groundnuts, and niger seeds — machine-cleaned, sortexed and shipped to defined purity, FFA and aflatoxin limits.",
    texture: "sesame",
    groups: [
      {
        id: "oilseeds-all",
        name: "Oil Seeds",
        desc: "Export-grade oil seeds supplied against purity, moisture, FFA and aflatoxin specifications.",
        about: [
          "Magnex supplies oil seeds from Gujarat and Rajasthan's primary markets, processed in modern cleaning and hulling lines with metal detection and colour sorting.",
          "Every export lot is tested for aflatoxin and pesticide residues at accredited laboratories against destination-market limits."
        ],
        faqs: [
          ["What purity levels do you offer for sesame?", "Natural sesame at 99/1 and 99.90/0.10; hulled sesame at 99.95% and auto-dried premium grades."],
          ["Do you test for aflatoxin?", "Yes, every groundnut and sesame lot is lab-tested against destination limits before shipment."]
        ],
        products: [
          {
            id: "hulled-sesame",
            name: "Hulled Sesame Seeds",
            short: "Pearl-white auto-dried hulled sesame at 99.95% purity for bakery, tahini and confectionery applications.",
            origin: "Gujarat, India", crop: "October – December", texture: "sesame",
            varieties: ["Hulled Sesame – Auto Dried 99.95%", "Hulled Sesame – Sortex 99.90%"],
            specs: [
              ["Purity", "99.95% min."], ["Moisture", "5% max."], ["FFA", "1% max."],
              ["Oil Content", "50% min."], ["Aflatoxin", "Within destination limits"],
              ["20' Container", "18 – 19 MT"], ["Packaging", "PP Bags 25/50kg, Paper Bags, Big Bags"],
              ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "natural-sesame",
            name: "Natural Sesame Seeds",
            short: "Whitish and black natural sesame, sortex-cleaned to 99.90/0.10 for oil crushing and food use.",
            origin: "Gujarat / Rajasthan, India", crop: "October – December", texture: "sesame",
            varieties: ["Natural Whitish – 99/1", "Natural Whitish – 99.90/0.10", "Black Sesame – 99.90"],
            specs: [
              ["Purity", "99% – 99.90%"], ["Moisture", "6% max."], ["FFA", "2% max."],
              ["Oil Content", "48 – 50% min."], ["20' Container", "19 MT"],
              ["Packaging", "PP Bags 25/50kg"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "groundnut-bold",
            name: "Groundnuts – Bold & Java",
            short: "Bold 38/42–50/55 and Java 45/50–80/90 groundnut kernels, aflatoxin-tested for edible and crushing markets.",
            origin: "Gujarat, India", crop: "October – March", texture: "chickpea",
            varieties: ["Bold – 38/42", "Bold – 40/50", "Java – 45/50", "Java – 60/70", "Blanched Peanuts"],
            specs: [
              ["Counts", "38/42 to 80/90 per oz"], ["Moisture", "8% max."],
              ["Admixture", "1% max."], ["Aflatoxin", "Within destination limits"],
              ["20' Container", "19 MT"], ["Packaging", "Jute Bags 50kg, PP Bags, Vacuum Packs"],
              ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "niger-seeds",
            name: "Niger Seeds",
            short: "Machine-cleaned niger seeds at 99% purity, primarily for bird-feed and oil extraction markets.",
            origin: "Madhya Pradesh, India", crop: "November – January", texture: "seeds",
            varieties: ["Niger – 99% Sortex", "Niger – 98% Machine Clean"],
            specs: [
              ["Purity", "98% – 99%"], ["Moisture", "8% max."], ["Oil Content", "35% min."],
              ["20' Container", "18 MT"], ["Packaging", "PP Bags 25/50kg"], ["Weights", "25kg, 50kg"]
            ]
          }
        ]
      }
    ]
  },

  pulses: {
    name: "Pulses",
    tagline: "Chickpeas · Lentils · Moong",
    desc: "Kabul chickpeas, toor dal, red lentils and green moong — machine-graded, polished and packed for staple-food and retail programs worldwide.",
    texture: "chickpea",
    groups: [
      {
        id: "pulses-all",
        name: "Pulses",
        desc: "Whole and split pulses supplied to count, moisture and admixture specifications.",
        about: [
          "Pulses are the protein staple of half the world. Magnex supplies machine-graded, sortex-cleaned pulses in whole, split and polished formats from India's primary producing belts."
        ],
        faqs: [
          ["What counts do you offer for Kabul chickpeas?", "40/42, 42/44, 44/46, 58/60 and 60/62 counts per ounce."],
          ["Do you supply retail packs?", "Yes, 500g to 5kg retail pouches under private label alongside bulk 25/50kg bags."]
        ],
        products: [
          {
            id: "kabul-chickpeas",
            name: "Kabul Chickpeas",
            short: "Cream-white bold chickpeas graded 40/42 to 60/62 count, machine-cleaned and polished for premium retail.",
            origin: "Madhya Pradesh / Maharashtra, India", crop: "March – May", texture: "chickpea",
            varieties: ["Kabuli – 40/42", "Kabuli – 42/44", "Kabuli – 44/46", "Kabuli – 58/60"],
            specs: [
              ["Counts", "40/42 to 60/62 per oz"], ["Moisture", "10% max."],
              ["Admixture", "0.5% max."], ["Damaged", "1% max."],
              ["20' Container", "24 MT"], ["Packaging", "PP Bags 25/50kg, Retail Pouches"],
              ["Weights", "500g – 50kg"]
            ]
          },
          {
            id: "toor-dal",
            name: "Toor Dal",
            short: "Oil-polished and unpolished split pigeon peas, the staple dal of Indian cuisine, milled to uniform grain size.",
            origin: "Maharashtra / Karnataka, India", crop: "December – February", texture: "pulses-yellow",
            varieties: ["Toor Dal – Oil Polished", "Toor Dal – Unpolished", "Toor Whole"],
            specs: [
              ["Moisture", "10% max."], ["Admixture", "0.5% max."], ["Broken", "2% max."],
              ["20' Container", "24 MT"], ["Packaging", "PP Bags 25/50kg, Retail Pouches"],
              ["Weights", "500g – 50kg"]
            ]
          },
          {
            id: "red-lentils",
            name: "Red Lentils (Masoor)",
            short: "Whole and split red lentils (football & split masoor) machine-cleaned for global staple markets.",
            origin: "Madhya Pradesh, India", crop: "February – April", texture: "spice-red",
            varieties: ["Masoor Whole", "Masoor Split (Football)", "Masoor Dal – Polished"],
            specs: [
              ["Moisture", "11% max."], ["Admixture", "0.5% max."], ["Damaged", "1.5% max."],
              ["20' Container", "24 MT"], ["Packaging", "PP Bags 25/50kg"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "green-moong",
            name: "Green Moong – Whole & Split",
            short: "Sortex-cleaned green gram in whole, split and skinned formats for sprouting and dal markets.",
            origin: "Rajasthan, India", crop: "October – November", texture: "pulses-green",
            varieties: ["Moong Whole – Sortex", "Moong Split – Chilka", "Moong Dal – Skinned"],
            specs: [
              ["Moisture", "10% max."], ["Admixture", "0.5% max."], ["Damaged", "1% max."],
              ["Sprouting", "95%+ (whole grade)"], ["20' Container", "24 MT"],
              ["Packaging", "PP Bags 25/50kg, Retail Pouches"], ["Weights", "500g – 50kg"]
            ]
          }
        ]
      }
    ]
  },

  cereals: {
    name: "Cereals & Grains",
    tagline: "Wheat · Maize · Millets · Flour",
    desc: "Milling wheat, yellow maize, ancient millets and wheat flour (atta / maida) supplied in bulk and consumer packs.",
    texture: "wheat",
    groups: [
      {
        id: "cereals-all",
        name: "Cereals & Flour",
        desc: "Grains and milled flour supplied against protein, moisture and gluten specifications.",
        about: [
          "From milling wheat and yellow maize to the resurging millet family — bajra, jowar, ragi and foxtail — Magnex supplies cereals in bulk and consumer-pack formats with full lab documentation."
        ],
        faqs: [
          ["Do you supply millets?", "Yes — pearl (bajra), sorghum (jowar), finger (ragi), foxtail and barnyard millet in raw and processed formats."],
          ["Can flour be packed for retail?", "Yes, atta and maida in 1–10kg private-label consumer packs."]
        ],
        products: [
          {
            id: "wheat-milling",
            name: "Milling Wheat",
            short: "Lustrous Indian milling wheat with 11–12.5% protein for flour mills and food programs.",
            origin: "Madhya Pradesh / Punjab, India", crop: "March – May", texture: "wheat",
            varieties: ["Sharbati Wheat", "Lokwan Wheat", "Milling Grade – Standard"],
            specs: [
              ["Protein", "11% – 12.5%"], ["Moisture", "12% max."], ["Admixture", "1% max."],
              ["Test Weight", "78 kg/hl min."], ["20' Container", "25 MT"],
              ["Packaging", "PP Bags 25/50kg, Bulk"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "yellow-maize",
            name: "Yellow Maize",
            short: "Feed and food-grade yellow corn, dried and cleaned to 14% max moisture with defined aflatoxin limits.",
            origin: "Bihar / Karnataka, India", crop: "October – December, April – May", texture: "pulses-yellow",
            varieties: ["Maize – Feed Grade", "Maize – Food Grade / Human Consumption"],
            specs: [
              ["Moisture", "14% max."], ["Admixture", "1% max."], ["Damaged", "2% max."],
              ["Aflatoxin", "20 ppb max."], ["20' Container", "25 MT"],
              ["Packaging", "PP Bags 50kg, Bulk"], ["Weights", "50kg"]
            ]
          },
          {
            id: "millets",
            name: "Millets – Bajra, Jowar, Ragi",
            short: "Ancient-grain millet family cleaned and graded for health-food and staple markets.",
            origin: "Rajasthan / Karnataka, India", crop: "October – December", texture: "seeds",
            varieties: ["Pearl Millet (Bajra)", "Sorghum (Jowar) – White", "Finger Millet (Ragi)", "Foxtail Millet"],
            specs: [
              ["Purity", "99% Sortex"], ["Moisture", "12% max."], ["Admixture", "1% max."],
              ["20' Container", "24 MT"], ["Packaging", "PP Bags 25/50kg, Retail Pouches"],
              ["Weights", "500g – 50kg"]
            ]
          },
          {
            id: "wheat-flour",
            name: "Wheat Flour – Atta & Maida",
            short: "Chakki-fresh atta and refined maida milled to buyer gluten and ash specification, packed for retail or bulk.",
            origin: "India", crop: "Year-round milling", texture: "wheat",
            varieties: ["Whole Wheat Atta", "Refined Flour (Maida)", "Semolina (Suji/Rawa)"],
            specs: [
              ["Gluten", "As per grade"], ["Moisture", "13% max."], ["Ash", "0.6 – 1.2%"],
              ["Shelf Life", "6 – 9 months"], ["Packaging", "1–10kg retail, 25/50kg bulk"],
              ["Weights", "1kg – 50kg"]
            ]
          }
        ]
      }
    ]
  },

  dryfruits: {
    name: "Dry Fruits",
    tagline: "Cashew · Almond · Raisins",
    desc: "Indian cashew kernels, raisins from Nashik vineyards and premium nut assortments, graded and vacuum-packed for retail and wholesale.",
    texture: "almond",
    groups: [
      {
        id: "dryfruits-all",
        name: "Dry Fruits",
        desc: "Graded kernels and dried fruits packed to retain freshness across the export chain.",
        about: [
          "Magnex supplies cashew kernels in all standard grades, golden and black raisins from Nashik, and nut assortments — vacuum or nitrogen-flushed for shelf life."
        ],
        faqs: [
          ["What cashew grades do you offer?", "W180, W240, W320, W450, splits and pieces (LWP/SWP)."],
          ["How are dry fruits packed for export?", "Vacuum pouches or nitrogen-flushed tins inside export cartons."]
        ],
        products: [
          {
            id: "cashew-kernels",
            name: "Cashew Kernels",
            short: "White wholes W180–W450 plus splits and pieces, processed under hygienic conditions and vacuum packed.",
            origin: "Kerala / Goa, India", crop: "Year-round processing", texture: "cashew",
            varieties: ["Cashew – W180", "Cashew – W240", "Cashew – W320", "Cashew – Splits / LWP"],
            specs: [
              ["Grade", "W180 / W240 / W320 / W450 / Splits"], ["Moisture", "5% max."],
              ["Broken", "As per grade"], ["Packaging", "Vacuum Pouch in Tins/Cartons"],
              ["Weights", "10kg, 11.34kg (25lb)"]
            ]
          },
          {
            id: "raisins",
            name: "Raisins – Golden & Black",
            short: "Sun-ripened Nashik raisins, machine sorted and washed, in golden, green and black varieties.",
            origin: "Maharashtra, India", crop: "March – May", texture: "raisin",
            varieties: ["Golden Raisins", "Green Long Raisins", "Black Raisins – Seedless"],
            specs: [
              ["Size", "160 – 300 per 100g"], ["Moisture", "15% max."], ["Sugar", "68% min."],
              ["Packaging", "10/12.5kg cartons with liner, retail pouches"], ["Weights", "250g – 12.5kg"]
            ]
          },
          {
            id: "almonds",
            name: "Almond Kernels",
            short: "Premium almond kernels sorted by size and colour, supplied whole, sliced or blanched.",
            origin: "India (processed)", crop: "Year-round", texture: "almond",
            varieties: ["Almond – Whole", "Almond – Sliced", "Almond – Blanched"],
            specs: [
              ["Count", "18/20 – 36/40 per oz"], ["Moisture", "6% max."],
              ["Packaging", "Vacuum pouches, cartons"], ["Weights", "10kg, 11.34kg, retail packs"]
            ]
          }
        ]
      }
    ]
  },

  dehydrated: {
    name: "Dehydrated & Superfoods",
    tagline: "Onion · Garlic · Moringa · Psyllium",
    desc: "Dehydrated onion and garlic in all cut formats, plus moringa, psyllium and amla superfood lines for nutraceutical and food-processing buyers.",
    texture: "powder-red",
    groups: [
      {
        id: "dehydrated-all",
        name: "Dehydrated & Superfoods",
        desc: "Low-moisture dehydrated vegetables and nutrient-dense superfoods with full microbiological documentation.",
        about: [
          "From Mahuva — the dehydration capital of India — Magnex supplies onion and garlic in flakes, chopped, minced, granules and powder formats, alongside a growing superfoods line of moringa, psyllium and amla."
        ],
        faqs: [
          ["What formats are available for dehydrated onion?", "Flakes (kibbled), chopped, minced, granules and powder — white, pink and red onion."],
          ["Are microbiological reports provided?", "Yes, every lot ships with moisture, TPC, yeast/mould, and pathogen test reports."]
        ],
        products: [
          {
            id: "dehydrated-onion",
            name: "Dehydrated Onion",
            short: "White, pink and red onion in flakes, chopped, minced, granule and powder formats at 5–6% moisture.",
            origin: "Gujarat, India", crop: "Processing: February – June", texture: "generic",
            varieties: ["Onion Flakes (Kibbled)", "Onion Chopped", "Onion Minced", "Onion Granules", "Onion Powder"],
            specs: [
              ["Moisture", "5 – 6% max."], ["Hot Water Insolubles", "As per format"],
              ["TPC", "Within destination limits"], ["Shelf Life", "24 months"],
              ["20' Container", "10 – 14 MT by format"], ["Packaging", "Poly-lined cartons 20/25kg, aluminium bags"]
            ]
          },
          {
            id: "dehydrated-garlic",
            name: "Dehydrated Garlic",
            short: "Pungent Indian garlic in flakes, granules and powder, mesh-graded for seasoning and food processing.",
            origin: "Gujarat / MP, India", crop: "Processing: March – July", texture: "generic",
            varieties: ["Garlic Flakes", "Garlic Granules – 8–16 / 16–26 / 26–40 mesh", "Garlic Powder – 100/120 mesh"],
            specs: [
              ["Moisture", "6% max."], ["Mesh", "8 – 120 as per format"],
              ["Shelf Life", "24 months"], ["Packaging", "Poly-lined cartons 20/25kg, aluminium bags"]
            ]
          },
          {
            id: "moringa",
            name: "Moringa Leaf Powder",
            short: "Shade-dried moringa oleifera leaf powder, nutrient-dense and lab-tested for nutraceutical use.",
            origin: "Tamil Nadu, India", crop: "Year-round", texture: "leaf",
            varieties: ["Moringa Powder – Food Grade", "Moringa Powder – Organic", "Moringa Dried Leaf"],
            specs: [
              ["Mesh", "80 – 100"], ["Moisture", "7% max."], ["Protein", "25% min."],
              ["Certification", "Organic available"], ["Packaging", "Aluminium-lined bags 10/25kg"]
            ]
          },
          {
            id: "psyllium",
            name: "Psyllium Husk",
            short: "99% pure psyllium husk and powder from Sidhpur, the world's psyllium hub, for dietary-fibre applications.",
            origin: "Gujarat, India", crop: "March – April", texture: "generic",
            varieties: ["Psyllium Husk – 95%", "Psyllium Husk – 99%", "Psyllium Powder – 40/60/80 mesh"],
            specs: [
              ["Purity", "95% / 99%"], ["Swell Volume", "40 ml/g min."], ["Moisture", "10% max."],
              ["Packaging", "PP/Paper Bags 25kg, cartons"], ["Weights", "25kg, 50kg"]
            ]
          }
        ]
      }
    ]
  }
};

/* ---------- helpers ---------- */
function allProducts() {
  const out = [];
  for (const [cid, cat] of Object.entries(CATALOG)) {
    for (const g of cat.groups) {
      for (const p of g.products) {
        out.push({ ...p, catId: cid, catName: cat.name, groupId: g.id, groupName: g.name });
      }
    }
  }
  return out;
}
function findProduct(id) { return allProducts().find(p => p.id === id) || null; }
function findGroup(catId, groupId) {
  const cat = CATALOG[catId];
  if (!cat) return null;
  const g = cat.groups.find(x => x.id === groupId);
  return g ? { ...g, catId, catName: cat.name } : null;
}

const POPULAR = ["robusta-cherry","arabica-plantation","turmeric-finger","basmati-1121","kabul-chickpeas","green-cardamom","cumin-seeds","red-chilli","hulled-sesame","groundnut-bold","ir64"];
