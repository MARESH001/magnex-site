/* =========================================================
   MAGNEX INTERNATIONAL TRADE — product catalogue
   Categories → Groups → Products → Varieties + Specs

   Image convention (mirrors the supplier image folders):
     assets/img/products/<category>/<variety-slug>.jpg
   A product's `photo` is its card / hero image; each variety
   may carry its own `photo`, shown when the variety is clicked
   on the product page. Products without a photo fall back to
   the procedural texture renderer in textures.js.
   ========================================================= */

const SITE = {
  name: "MAGNEX",
  sub: "INTERNATIONAL TRADE",
  phone: "+91 95350 27123",
  email: "magnextrade@gmail.com",
  address: "Magnex House, Andheri (E),<br>Mumbai - 400059, India",
  whatsapp: "https://wa.me/919535027123",
  whatsappText: "Hello Magnex International Trade, I would like a quote for: ",
};

/* texture: type used by the procedural renderer in textures.js
   types: rice | goldenrice | brownrice | coffee | greencoffee | tea |
          spice-red | spice-yellow | seeds | sesame | pulses-yellow |
          pulses-green | chickpea | wheat | almond | cashew | raisin |
          leaf | powder-red | generic                                     */

const IMG = "assets/img/products/";

const CATALOG = {

  /* ======================================================= RICE */
  rice: {
    photo: IMG + "basmati-1121.png",
    name: "Indian Rice",
    tagline: "Basmati & Non-Basmati export grades",
    desc: "Premium Basmati and Non-Basmati rice sourced from India's finest paddy belts, milled, aged and graded strictly to buyer-approved specifications for retail, bulk and private-label programs.",
    video: { src: "assets/video/rice-quality.mp4?v=2", caption: "Rice quality testing for export — grain length, moisture and purity checks" },
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
            photo: IMG + "basmati-1121.png",
            name: "1121 Basmati Rice",
            short: "Extra-long grain Basmati rice known for superior elongation after cooking, supplied to defined ageing, moisture, and broken percentage specifications.",
            origin: "India",
            crop: "October, November",
            texture: "rice",
            varieties: [
              { name: "Basmati Rice – 1121 Sella Cream", photo: IMG + "rice/basmati-rice-1121-sella-cream.jpg" },
              { name: "Basmati Rice – 1121 Sella Golden", photo: IMG + "rice/basmati-rice-1121-sella-golden.jpg" },
              { name: "Basmati Rice – 1121 Steam", photo: IMG + "rice/basmati-rice-1121-steam.jpg" }
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
            photo: IMG + "basmati-pusa.png",
            name: "Pusa Basmati Rice",
            short: "Aromatic long-grain Basmati rice with consistent cooking performance, supplied to buyer-approved grading, ageing, and purity specifications.",
            origin: "India",
            crop: "October, November",
            texture: "rice",
            varieties: [
              { name: "Basmati Rice – Pusa Sella Cream", photo: IMG + "rice/basmati-rice-pusa-sella-cream.jpg" },
              { name: "Basmati Rice – Pusa Sella Golden", photo: IMG + "rice/basmati-rice-pusa-sella-golden.jpg" },
              { name: "Basmati Rice – Pusa Steam", photo: IMG + "rice/basmati-rice-pusa-steam.jpg" },
              { name: "Basmati Rice – Pusa Raw" }
            ],
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
            photo: IMG + "basmati-1718.png",
            name: "1718 Basmati Rice",
            short: "Long-grain Basmati rice offering balanced aroma and yield, supplied to defined quality, moisture, and ageing specifications for export markets.",
            origin: "India",
            crop: "October, November",
            texture: "rice",
            varieties: [
              { name: "Basmati Rice – 1718 Sella Cream", photo: IMG + "rice/basmati-rice-1718-sella-cream.jpg" },
              { name: "Basmati Rice – 1718 Sella Golden", photo: IMG + "rice/basmati-rice-1718-sella-golden.jpg" },
              { name: "Basmati Rice – 1718 Steam", photo: IMG + "rice/basmati-rice-1718-steam.jpg" }
            ],
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
            photo: IMG + "basmati-1509.png",
            name: "1509 Basmati Rice",
            short: "Shorter-aged long-grain Basmati rice suited for faster turnaround requirements, supplied to buyer-defined grading and quality specifications.",
            origin: "India",
            crop: "September, October",
            texture: "rice",
            varieties: [
              { name: "Basmati Rice – 1509 Sella Cream", photo: IMG + "rice/basmati-rice-1509-sella-cream.jpg" },
              { name: "Basmati Rice – 1509 Sella Golden", photo: IMG + "rice/basmati-rice-1509-sella-golden.jpg" },
              { name: "Basmati Rice – 1509 Steam", photo: IMG + "rice/basmati-rice-1509-steam.jpg" }
            ],
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
        desc: "High-volume Non-Basmati varieties — Sona Masoori, IR 36/64, PR 11 and Broken Rice — supplied to defined grading and moisture specifications for bulk and institutional buyers.",
        about: [
          "Non-Basmati rice forms the backbone of high-volume rice trade from India, serving staple-food programs, institutional buyers and re-packers across Africa, Asia and the Middle East.",
          "Magnex supplies Sona Masoori, IR 36/64, PR 11 and Broken Rice in raw, steam and parboiled (sella) formats, each milled and sortex-cleaned to buyer-approved grading, broken percentage and moisture parameters."
        ],
        faqs: [
          ["Which Non-Basmati varieties do you export?", "Sona Masoori, IR 36 / IR 64, PR 11 / PR 14 and 100% Broken Rice, in raw, steam and parboiled processing."],
          ["What is the MOQ for Non-Basmati rice?", "One 20' FCL; most buyers ship 40' HC or multi-container programs."],
          ["Do you supply sortex-cleaned rice?", "Yes, double sortex cleaning is standard for all export shipments."]
        ],
        products: [
          {
            id: "sona-masoori",
            photo: IMG + "rice/rice-sona-masoori-raw-white.jpg",
            name: "Sona Masoori Rice",
            short: "Lightweight, aromatic medium-grain rice popular across South India and the global diaspora, supplied raw white or steamed to buyer specification.",
            origin: "India", crop: "November, December", texture: "rice",
            varieties: [
              { name: "Sona Masoori – Raw White", photo: IMG + "rice/rice-sona-masoori-raw-white.jpg" },
              { name: "Sona Masoori – Steam", photo: IMG + "rice/rice-sona-masoori-steam.jpg" }
            ],
            specs: [
              ["Average Length", "5.0 – 5.2 mm"], ["Grade", "Raw White / Steam"], ["Broken", "2% max."], ["Moisture", "13% max."],
              ["Foreign Matter", "NIL"], ["Damaged & Discoloured", "1% max."],
              ["20' Container", "25 MT"], ["40' Container", "27 MT"],
              ["Packaging", "PP Bags, Non Woven Bags, BOPP Bags"], ["Weights", "5kg, 10kg, 25kg, 26kg"]
            ]
          },
          {
            id: "ir64",
            photo: IMG + "rice/rice-ir-36-64-raw-white.jpg",
            name: "IR 36/64 Rice",
            short: "Workhorse long-grain white rice for volume programs, supplied raw white or parboiled (sella) in 5% to 25% broken grades.",
            origin: "India", crop: "October – December", texture: "rice",
            varieties: [
              { name: "IR 36/64 – Raw White", photo: IMG + "rice/rice-ir-36-64-raw-white.jpg" },
              { name: "IR 36/64 – Sella (Parboiled)", photo: IMG + "rice/rice-ir-36-64-sella.jpg" }
            ],
            specs: [
              ["Average Length", "5.8 – 6.0 mm"], ["Grade", "Raw White / Sella"], ["Broken", "5% / 25% as per grade"], ["Moisture", "14% max."],
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

  /* ======================================================== TEA */
  tea: {
    photo: IMG + "tea/assam-orthodox.jpg",
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
            photo: IMG + "tea/assam-ctc-bp.jpg",
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
            photo: IMG + "tea/assam-ctc-bop.jpg",
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
            photo: IMG + "tea/assam-orthodox.jpg",
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
            photo: IMG + "tea/darjeeling-orthodox.jpg",
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
            photo: IMG + "tea/nilgiri-orthodox.jpg",
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
            photo: IMG + "tea/nilgiri-ctc.jpg",
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
            photo: IMG + "tea/green-tea-leaf.jpg",
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

  /* ===================================================== COFFEE */
  coffee: {
    photo: IMG + "coffee/arabica-plantation-aaa.jpg",
    name: "Coffee",
    tagline: "Arabica & Robusta from Indian estates",
    desc: "Shade-grown Indian coffee from the Western Ghats — washed Arabica plantation and natural cherry grades, bold Robusta cherry and parchment, and instant coffee formats for roasters and blenders worldwide.",
    texture: "coffee",
    groups: [
      {
        id: "coffee-all",
        name: "Coffee Grades",
        desc: "Green coffee in Arabica and Robusta — plantation, parchment and cherry grades — plus instant coffee formats, supplied against screen size, defect count and cup-profile specifications.",
        about: [
          "Indian coffee is unique — grown under shade alongside spices, giving a mellow, low-acid cup prized by European and Middle-Eastern roasters.",
          "Magnex supplies Arabica Plantation (washed) and Arabica Cherry (natural) grades, Robusta Cherry and Robusta Parchment grades from AAA down to C and PB, and spray-dried, agglomerated and freeze-dried instant coffee, all against pre-agreed screen, moisture and defect specifications."
        ],
        faqs: [
          ["Which coffee grades do you export?", "Arabica Plantation AAA/AA/A/B/C, Arabica Cherry AAA/AA/A, Robusta Cherry AAA/AA/AB/A/B/C/PB, Robusta Parchment AA/AB/A, and instant coffee (spray-dried, agglomerated and freeze-dried)."],
          ["What is the difference between plantation, parchment and cherry coffee?", "Plantation and parchment are washed (wet-processed) coffees with a cleaner, brighter cup; cherry is natural (sun-dried in the fruit) giving a heavier body and sweeter, earthier notes."],
          ["What is the MOQ for green coffee?", "One 20' FCL (~19.2 MT in 60kg bags)."],
          ["Do you provide pre-shipment samples?", "Yes, type samples and pre-shipment samples are couriered for approval before loading."]
        ],
        products: [
          {
            id: "arabica-plantation",
            photo: IMG + "coffee/arabica-plantation-aaa.jpg",
            name: "Arabica Plantation",
            short: "Washed shade-grown Arabica with a mellow, sweet cup — a signature of Indian coffee estates — graded AAA to C by screen size and defect count.",
            origin: "Chikmagalur / Coorg, India", crop: "November – February", texture: "greencoffee",
            varieties: [
              { name: "Arabica Plantation – AAA", photo: IMG + "coffee/arabica-plantation-aaa.jpg" },
              { name: "Arabica Plantation – AA", photo: IMG + "coffee/arabica-plantation-aa.jpg" },
              { name: "Arabica Plantation – A", photo: IMG + "coffee/arabica-plantation-a.jpg" },
              { name: "Arabica Plantation – B", photo: IMG + "coffee/arabica-plantation-b.jpg" },
              { name: "Arabica Plantation – C", photo: IMG + "coffee/arabica-plantation-c.jpg" }
            ],
            specs: [
              ["Grades", "AAA / AA / A / B / C"],
              ["Screen Size", "AAA: 19+ / AA: 18+ / A: 17+ / B: 15+ / C: below 15"], ["Moisture", "11.5% max."],
              ["Processing", "Fully washed"], ["Cup Profile", "Mellow, sweet, mild acidity"],
              ["20' Container", "19.2 MT (320 × 60kg)"], ["Packaging", "Jute Bags 60kg, Grain-Pro on request"]
            ]
          },
          {
            id: "arabica-cherry",
            photo: IMG + "coffee/arabica-cherry-aaa.jpg",
            name: "Arabica Cherry",
            short: "Natural sun-dried Arabica with fuller body and sweet, fruity notes, graded AAA, AA and A for espresso and filter blends.",
            origin: "Karnataka, India", crop: "November – February", texture: "coffee",
            varieties: [
              { name: "Arabica Cherry – AAA", photo: IMG + "coffee/arabica-cherry-aaa.jpg" },
              { name: "Arabica Cherry – AA", photo: IMG + "coffee/arabica-cherry-aa.jpg" },
              { name: "Arabica Cherry – A", photo: IMG + "coffee/arabica-cherry-a.jpg" }
            ],
            specs: [
              ["Grades", "AAA / AA / A"],
              ["Screen Size", "AAA: 19+ / AA: 18+ / A: 17+"], ["Moisture", "12% max."],
              ["Processing", "Natural (dry)"], ["Cup Profile", "Full body, sweet, fruity"],
              ["20' Container", "19.2 MT (320 × 60kg)"], ["Packaging", "Jute Bags 60kg, Grain-Pro on request"]
            ]
          },
          {
            id: "robusta-cherry",
            photo: IMG + "coffee/robusta-cherry-aaa.jpg",
            name: "Robusta Cherry",
            short: "Bold, full-bodied natural-processed Robusta — the workhorse of espresso blends and instant coffee manufacture — graded AAA to C plus peaberry.",
            origin: "Karnataka, India", crop: "January – March", texture: "coffee",
            varieties: [
              { name: "Robusta Cherry – AAA", photo: IMG + "coffee/robusta-cherry-aaa.jpg" },
              { name: "Robusta Cherry – AA", photo: IMG + "coffee/robusta-cherry-aa.jpg" },
              { name: "Robusta Cherry – AB", photo: IMG + "coffee/robusta-cherry-ab.jpg" },
              { name: "Robusta Cherry – A", photo: IMG + "coffee/robusta-cherry-a.jpg" },
              { name: "Robusta Cherry – B", photo: IMG + "coffee/robusta-cherry-b.jpg" },
              { name: "Robusta Cherry – C", photo: IMG + "coffee/robusta-cherry-c.jpg" },
              { name: "Robusta Cherry – PB (Peaberry)", photo: IMG + "coffee/robusta-cherry-pb.jpg" }
            ],
            specs: [
              ["Grades", "AAA / AA / AB / A / B / C / PB"],
              ["Screen Size", "AAA: 18+ / AA: 17+ / A: 16+ / AB: 15+ / B: 14+ / C: below 14 / PB: peaberry"], ["Moisture", "12.5% max."],
              ["Defects", "As per grade contract"], ["Processing", "Natural (dry)"],
              ["Cup Profile", "Bold body, low acidity, chocolatey"],
              ["20' Container", "19.2 MT (320 × 60kg)"], ["Packaging", "Jute Bags 60kg, Grain-Pro on request"]
            ]
          },
          {
            id: "robusta-parchment",
            photo: IMG + "coffee/robusta-parchment-aa.jpg",
            name: "Robusta Parchment",
            short: "Washed Robusta with a cleaner, neutral cup and bluish-green bean — the premium Robusta format for quality espresso blends.",
            origin: "Karnataka / Kerala, India", crop: "January – March", texture: "greencoffee",
            varieties: [
              { name: "Robusta Parchment – AA", photo: IMG + "coffee/robusta-parchment-aa.jpg" },
              { name: "Robusta Parchment – AB", photo: IMG + "coffee/robusta-parchment-ab.jpg" },
              { name: "Robusta Parchment – A", photo: IMG + "coffee/robusta-parchment-a.jpg" }
            ],
            specs: [
              ["Grades", "AA / AB / A"],
              ["Screen Size", "AA: 17+ / A: 16+ / AB: 15+"], ["Moisture", "12.5% max."],
              ["Processing", "Washed (wet)"], ["Cup Profile", "Clean, neutral, medium body"],
              ["20' Container", "19.2 MT (320 × 60kg)"], ["Packaging", "Jute Bags 60kg, Grain-Pro on request"]
            ]
          },
          {
            id: "instant-coffee",
            photo: IMG + "coffee/freeze-dried.jpg",
            name: "Instant Coffee",
            short: "Spray-dried powder, agglomerated granules and premium freeze-dried instant coffee for retail jars, sachets and private label.",
            origin: "India", crop: "Year-round production", texture: "coffee",
            varieties: [
              { name: "Instant Coffee – Spray Dried", photo: IMG + "coffee/spray-dried.jpg" },
              { name: "Instant Coffee – Agglomerated", photo: IMG + "coffee/agglomerated.jpg" },
              { name: "Instant Coffee – Freeze Dried", photo: IMG + "coffee/freeze-dried.jpg" }
            ],
            specs: [
              ["Formats", "Spray Dried / Agglomerated / Freeze Dried"],
              ["Moisture", "4% max."], ["Solubility", "Complete in hot & cold water"],
              ["Caffeine", "Standard / Decaf on request"], ["Shelf Life", "24 months"],
              ["Packaging", "Bulk cartons 20/25kg, jars, pouches & sachets for private label"]
            ]
          }
        ]
      }
    ]
  },

  /* ===================================================== SPICES */
  spices: {
    photo: IMG + "spices/green-cardamom-8mm.jpg",
    name: "Indian Spices",
    tagline: "Whole & powdered spices",
    desc: "Black pepper, green cardamom, red chilli, dry ginger, cumin and turmeric powder — steam-sterilised, ASTA-clean and packed for retail or bulk, from the spice gardens of India.",
    texture: "spice-red",
    groups: [
      {
        id: "whole-spices",
        name: "Whole Spices",
        desc: "Black pepper, green cardamom, red chilli, dry ginger and cumin supplied whole, graded by size, colour and pungency to ASTA cleanliness standards.",
        about: [
          "India is the world's largest producer and exporter of spices. Magnex sources at origin — black pepper from Wayanad and Idukki, cardamom from the Idukki hills, chilli from Guntur and Byadgi, dry ginger from Kerala and cumin from Unjha — and processes to export cleanliness standards.",
          "Every grade is machine-cleaned, sortexed and graded exactly as the trade names it — MG1 pepper, 8mm cardamom, S17 Teja chilli, Super Delux ginger — so buyers receive the grade they contracted.",
          "Steam sterilisation, ETO-free treatment and full pesticide-residue compliance for EU/US destinations are available on request."
        ],
        faqs: [
          ["Which whole spices do you export?", "Black pepper (MG1, MUG1, MUG2, TGEB, TGSEB, Lights), green cardamom (5mm to 8mm, seeds), red chilli (S17 Teja, S4 Sanam, S273 Wrinkle, Byadgi, Mundu, Tomato, crushed), dry ginger (Super Delux, Delux, A1, Tukdi) and cumin seeds."],
          ["Can you meet EU pesticide residue norms?", "Yes, lots are pre-tested at accredited labs against EU MRL requirements before shipment."],
          ["What packaging options are available?", "Bulk PP/paper/jute bags 10–50kg, corrugated cartons for cardamom, and retail pouches/jars for private label."]
        ],
        products: [
          {
            id: "black-pepper",
            photo: IMG + "spices/black-pepper-tgseb.jpg",
            name: "Black Pepper",
            short: "Malabar and Tellicherry black pepper in all trade grades — MG1, MUG1, MUG2, TGEB, TGSEB and Lights — graded by bulk density and bold size.",
            origin: "Kerala / Karnataka, India", crop: "December – March", texture: "seeds",
            varieties: [
              { name: "Black Pepper – MG1 (Malabar Garbled)", photo: IMG + "spices/black-pepper-mg1.jpg" },
              { name: "Black Pepper – MUG1 (Malabar Ungarbled)", photo: IMG + "spices/black-pepper-mug1.jpg" },
              { name: "Black Pepper – MUG2", photo: IMG + "spices/black-pepper-mug2.jpg" },
              { name: "Black Pepper – TGEB (Tellicherry Garbled Extra Bold)", photo: IMG + "spices/black-pepper-tgeb.jpg" },
              { name: "Black Pepper – TGSEB (Tellicherry Garbled Special Extra Bold)", photo: IMG + "spices/black-pepper-tgseb.jpg" },
              { name: "Black Pepper – Lights", photo: IMG + "spices/black-pepper-lights.jpg" }
            ],
            specs: [
              ["Grades", "MG1 / MUG1 / MUG2 / TGEB / TGSEB / Lights"],
              ["Bulk Density", "MG1: 550 g/l min. · TGEB: 570 g/l min. · TGSEB: 580 g/l min."],
              ["Bold Size", "TGEB: 4.25mm+ · TGSEB: 4.75mm+"],
              ["Moisture", "12% max."], ["Light Berries", "As per grade"], ["Foreign Matter", "0.5% max."],
              ["Piperine", "4% min."], ["Cleanliness", "ASTA / steam sterilised on request"],
              ["20' Container", "13 – 15 MT"], ["Packaging", "PP Bags, Jute Bags, Paper Bags"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "green-cardamom",
            photo: IMG + "spices/green-cardamom-8mm.jpg",
            name: "Green Cardamom",
            short: "Aromatic bold-size green cardamom from the Idukki hills, graded by size from 5mm to 8mm+, plus seeds and sick & split grades.",
            origin: "Kerala, India", crop: "August – February", texture: "seeds",
            varieties: [
              { name: "Green Cardamom – 8mm", photo: IMG + "spices/green-cardamom-8mm.jpg" },
              { name: "Green Cardamom – 7.5–8mm", photo: IMG + "spices/green-cardamom-7.5-8mm.jpg" },
              { name: "Green Cardamom – 7–8mm", photo: IMG + "spices/green-cardamom-7-8mm.jpg" },
              { name: "Green Cardamom – 6–7mm", photo: IMG + "spices/green-cardamom-6-7-mm.jpg" },
              { name: "Green Cardamom – 5.5–6.5mm", photo: IMG + "spices/green-cardamom-5.5-6.5mm.jpg" },
              { name: "Green Cardamom – 5–6mm", photo: IMG + "spices/green-cardamom-5-6mm.jpg" },
              { name: "Green Cardamom – Seeds", photo: IMG + "spices/green-cardamom-seeds.jpg" },
              { name: "Green Cardamom – Sick & Split", photo: IMG + "spices/green-cardamom-sick-and-split.jpg" }
            ],
            specs: [
              ["Size", "5mm – 8mm+ graded"], ["Colour", "Deep green"],
              ["Moisture", "10% max."], ["Volatile Oil", "3.5% min."],
              ["Cleanliness", "Machine + hand sorted"], ["Packaging", "Corrugated boxes with liner, vacuum packs"],
              ["Weights", "5kg, 10kg, 25kg"]
            ]
          },
          {
            id: "red-chilli",
            photo: IMG + "spices/red-chilli-s17-teja-wo-stem.jpg",
            name: "Red Chilli",
            short: "Guntur and Byadgi chillies — S17 Teja, S4 Sanam, S273 Wrinkle, Byadgi, Mundu and Tomato — supplied with or without stem, and crushed, to defined SHU and colour value.",
            origin: "Andhra Pradesh / Karnataka, India", crop: "December – May", texture: "powder-red",
            varieties: [
              { name: "Red Chilli – S17 Teja (without stem)", photo: IMG + "spices/red-chilli-s17-teja-wo-stem.jpg" },
              { name: "Red Chilli – S4 Sanam (without stem)", photo: IMG + "spices/red-chilli-s4-sanam-wo-stem.jpg" },
              { name: "Red Chilli – S273 Wrinkle (without stem)", photo: IMG + "spices/red-chilli-s-273-wrinkle-wo-stem.jpg" },
              { name: "Red Chilli – Byadgi (without stem)", photo: IMG + "spices/red-chilli-byadgi-wo-stem.jpg" },
              { name: "Red Chilli – Mundu (without stem)", photo: IMG + "spices/red-chilli-mundu-wo-stem.jpg" },
              { name: "Red Chilli – Tomato (with stem)", photo: IMG + "spices/red-chilli-tomato-w-stem.jpg" },
              { name: "Red Chilli – Crushed", photo: IMG + "spices/red-chilli-crushed.jpg" }
            ],
            specs: [
              ["Varieties", "S17 Teja / S4 Sanam / S273 Wrinkle / Byadgi / Mundu / Tomato / Crushed"],
              ["Heat", "15,000 – 100,000 SHU as per variety"], ["Colour Value", "60 – 180 ASTA"],
              ["Moisture", "10% max."], ["Stem", "With / without stem as per grade"],
              ["Cleanliness", "ASTA / steam sterilised on request"],
              ["20' Container", "7 – 9 MT (whole)"], ["Packaging", "Jute/PP Bags 25kg, cartons"],
              ["Weights", "10kg, 25kg"]
            ]
          },
          {
            id: "dry-ginger",
            photo: IMG + "spices/dry-ginger-super-delux.jpg",
            name: "Dry Ginger",
            short: "Sun-dried Cochin and Calicut ginger in Super Delux, Delux, A1 and Tukdi (pieces) grades for spice grinders, extractors and pharma.",
            origin: "Kerala / Karnataka, India", crop: "January – April", texture: "spice-yellow",
            varieties: [
              { name: "Dry Ginger – Super Delux", photo: IMG + "spices/dry-ginger-super-delux.jpg" },
              { name: "Dry Ginger – Delux", photo: IMG + "spices/dry-ginger-delux.jpg" },
              { name: "Dry Ginger – A1", photo: IMG + "spices/dry-ginger-a1.jpg" },
              { name: "Dry Ginger – Tukdi (Pieces)", photo: IMG + "spices/dry-ginger-tukdi.jpg" }
            ],
            specs: [
              ["Grades", "Super Delux / Delux / A1 / Tukdi"],
              ["Moisture", "12% max."], ["Volatile Oil", "1.5% min."], ["Total Ash", "8% max."],
              ["Foreign Matter", "1% max."], ["Cleanliness", "Machine cleaned, sun-dried, unbleached"],
              ["20' Container", "12 – 14 MT"], ["Packaging", "PP Bags, Jute Bags"], ["Weights", "25kg, 50kg"]
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
          }
        ]
      },
      {
        id: "powdered-spices",
        name: "Powdered Spices",
        desc: "Turmeric powder in curcumin-graded qualities and buyer-recipe spice blends, milled to mesh specification and steam-sterilised for food-safe export.",
        about: [
          "Ground spices are milled in-house from the same origin-sourced whole spices, so colour, curcumin and pungency are controlled from raw material to finished powder.",
          "Turmeric powder is offered in colour-graded qualities from 222 to 1111 — the higher the grade, the higher the curcumin content and colour value — alongside custom-blended masalas and seasonings under private label."
        ],
        faqs: [
          ["What do the turmeric powder grade numbers mean?", "They are trade quality grades — 222, 333, 555, 777, 999, 1010 and 1111 — indicating rising colour value and curcumin content. 222 is a standard grade; 1111 is the highest colour, premium grade."],
          ["Do you supply ground as well as whole spices?", "Yes, whole, ground and custom-blended formats with mesh size to your specification."],
          ["Are powders steam sterilised?", "Yes, steam sterilisation with ETO-free treatment is available for all powders on request."]
        ],
        products: [
          {
            id: "turmeric-powder",
            photo: IMG + "spices/turmeric-powder-1111.jpg",
            name: "Turmeric Powder",
            short: "High-curcumin turmeric powder milled from Erode and Sangli fingers, offered in colour-graded qualities from 222 to 1111.",
            origin: "Tamil Nadu / Maharashtra, India", crop: "February – May", texture: "spice-yellow",
            varieties: [
              { name: "Turmeric Powder – 222", photo: IMG + "spices/turmeric-powder-222.jpg" },
              { name: "Turmeric Powder – 333", photo: IMG + "spices/turmeric-powder-333.jpg" },
              { name: "Turmeric Powder – 555", photo: IMG + "spices/turmeric-powder-555.jpg" },
              { name: "Turmeric Powder – 777", photo: IMG + "spices/turmeric-powder-777.jpg" },
              { name: "Turmeric Powder – 999", photo: IMG + "spices/turmeric-powder-999.jpg" },
              { name: "Turmeric Powder – 1010", photo: IMG + "spices/turmeric-powder-1010.jpg" },
              { name: "Turmeric Powder – 1111", photo: IMG + "spices/turmeric-powder-1111.jpg" }
            ],
            specs: [
              ["Grades", "222 / 333 / 555 / 777 / 999 / 1010 / 1111"],
              ["Curcumin", "2% – 5% rising with grade"], ["Colour Value", "As per grade"],
              ["Moisture", "10% max."], ["Total Ash", "7% max."], ["Mesh", "60 – 100 as specified"],
              ["Cleanliness", "ASTA / steam sterilised on request"], ["20' Container", "13 – 15 MT"],
              ["Packaging", "PP Bags 25/50kg, Paper Bags, retail pouches"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "custom-blends",
            photo: IMG + "spices/custom-blends.jpg",
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

  /* =================================================== OIL SEEDS */
  oilseeds: {
    photo: IMG + "oilseeds/hulled-sesame.jpg",
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
            photo: IMG + "oilseeds/hulled-sesame.jpg",
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
            photo: IMG + "oilseeds/natural-sesame.jpg",
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
            photo: IMG + "oilseeds/groundnut-bold.jpg",
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
            photo: IMG + "oilseeds/niger-seeds.jpg",
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

  /* ====================================================== PULSES */
  pulses: {
    photo: IMG + "pulses/kabul-chickpeas.jpg",
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
            photo: IMG + "pulses/kabul-chickpeas.jpg",
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
            photo: IMG + "pulses/toor-dal.jpg",
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
            photo: IMG + "pulses/red-lentils.jpg",
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
            photo: IMG + "pulses/green-moong.jpg",
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

  /* ===================================================== CEREALS */
  cereals: {
    photo: IMG + "cereals/wheat-milling.jpg",
    name: "Cereals & Grains",
    tagline: "Corn · Wheat · Millets · Flour",
    desc: "Yellow corn in bold and small grades, milling wheat, ancient millets and wheat flour (atta / maida) supplied in bulk and consumer packs.",
    texture: "wheat",
    groups: [
      {
        id: "cereals-all",
        name: "Cereals & Flour",
        desc: "Grains and milled flour supplied against protein, moisture and gluten specifications.",
        about: [
          "From food-grade yellow corn and milling wheat to the resurging millet family — bajra, jowar, ragi and foxtail — Magnex supplies cereals in bulk and consumer-pack formats with full lab documentation."
        ],
        faqs: [
          ["What grades of yellow corn do you supply?", "Bold (large kernel) and Small (fine kernel) yellow corn, dried and cleaned to 14% max moisture with defined aflatoxin limits, for food processing, starch and milling."],
          ["Do you supply millets?", "Yes — pearl (bajra), sorghum (jowar), finger (ragi), foxtail and barnyard millet in raw and processed formats."],
          ["Can flour be packed for retail?", "Yes, atta and maida in 1–10kg private-label consumer packs."]
        ],
        products: [
          {
            id: "yellow-corn",
            photo: IMG + "cereals/yellow-corn-bold.jpg",
            name: "Yellow Corn",
            short: "Food-grade yellow corn (maize) in Bold and Small kernel grades, dried and cleaned to 14% max moisture with defined aflatoxin limits.",
            origin: "Bihar / Karnataka, India", crop: "October – December, April – May", texture: "pulses-yellow",
            varieties: [
              { name: "Yellow Corn – Bold", photo: IMG + "cereals/yellow-corn-bold.jpg" },
              { name: "Yellow Corn – Small", photo: IMG + "cereals/yellow-corn-small.jpg" }
            ],
            specs: [
              ["Grades", "Bold / Small"],
              ["Moisture", "14% max."], ["Admixture", "1% max."], ["Damaged", "2% max."],
              ["Broken", "2% max."], ["Aflatoxin", "20 ppb max."], ["20' Container", "25 MT"],
              ["Packaging", "PP Bags 25/50kg, Bulk"], ["Weights", "25kg, 50kg"]
            ]
          },
          {
            id: "wheat-milling",
            photo: IMG + "cereals/wheat-milling.jpg",
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
            id: "millets",
            photo: IMG + "cereals/millet-bajra.jpg",
            name: "Millets – Bajra, Jowar, Ragi",
            short: "Ancient-grain millet family cleaned and graded for health-food and staple markets.",
            origin: "Rajasthan / Karnataka, India", crop: "October – December", texture: "seeds",
            varieties: [
              { name: "Pearl Millet (Bajra)", photo: IMG + "cereals/millet-bajra.jpg" },
              { name: "Sorghum (Jowar) – White", photo: IMG + "cereals/millet-jowar.jpg" },
              { name: "Finger Millet (Ragi)", photo: IMG + "cereals/millet-ragi.jpg" },
              { name: "Foxtail Millet", photo: IMG + "cereals/millet-foxtail.jpg" }
            ],
            specs: [
              ["Purity", "99% Sortex"], ["Moisture", "12% max."], ["Admixture", "1% max."],
              ["20' Container", "24 MT"], ["Packaging", "PP Bags 25/50kg, Retail Pouches"],
              ["Weights", "500g – 50kg"]
            ]
          },
          {
            id: "wheat-flour",
            photo: IMG + "cereals/wheat-flour.jpg",
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

  /* ================================================= ANIMAL FEED */
  animalfeed: {
    photo: IMG + "animal-feed/yellow-corn.jpg",
    name: "Animal Feed",
    tagline: "Feed-grade yellow corn",
    desc: "Feed-grade yellow corn for poultry, cattle and aqua feed mills — dried, cleaned and aflatoxin-tested, supplied in bulk and bagged container loads.",
    texture: "pulses-yellow",
    groups: [
      {
        id: "animalfeed-all",
        name: "Animal Feed",
        desc: "Feed ingredients supplied to moisture, admixture and aflatoxin specifications for compound feed manufacturers.",
        about: [
          "Indian yellow corn is a reliable energy ingredient for poultry, cattle and aqua feed formulations. Magnex supplies feed-grade corn from Bihar, Karnataka and Maharashtra, dried to 14% max moisture and lab-tested for aflatoxin before shipment.",
          "Bulk break-bulk and containerised loads are available, bagged in 50kg PP or loose in liner bags, with fumigation and phytosanitary documents for every consignment."
        ],
        faqs: [
          ["What is the aflatoxin limit for feed corn?", "Standard supply is 20 ppb max; stricter limits can be met on request with lot-wise lab reports."],
          ["What is the MOQ for feed corn?", "One 20' FCL (~25 MT); multi-container and break-bulk programs are welcome."],
          ["Do you supply other feed ingredients?", "Rice bran, broken rice, soybean meal and de-oiled cakes can be arranged on request."]
        ],
        products: [
          {
            id: "feed-yellow-corn",
            photo: IMG + "animal-feed/yellow-corn.jpg",
            name: "Yellow Corn – Feed Grade",
            short: "Energy-rich feed-grade yellow maize for poultry, cattle and aqua feed, dried and cleaned to 14% max moisture with 20 ppb max aflatoxin.",
            origin: "Bihar / Karnataka / Maharashtra, India", crop: "October – December, April – May", texture: "pulses-yellow",
            varieties: [
              { name: "Yellow Corn – Feed Grade", photo: IMG + "animal-feed/yellow-corn.jpg" }
            ],
            specs: [
              ["Grade", "Feed Grade"],
              ["Moisture", "14% max."], ["Admixture", "2% max."], ["Damaged", "3% max."],
              ["Broken", "3% max."], ["Aflatoxin", "20 ppb max."], ["Protein", "8% min."],
              ["20' Container", "25 MT"], ["40' Container", "27 MT"],
              ["Packaging", "PP Bags 50kg, Bulk liner bags"], ["Weights", "50kg"]
            ]
          }
        ]
      }
    ]
  },

  /* =================================================== DRY FRUITS */
  dryfruits: {
    photo: IMG + "dryfruits/white-whole-cashews-w-240.jpg",
    name: "Dry Fruits",
    tagline: "Cashews · Raisins · Almonds",
    desc: "Indian cashew kernels in white and scorched whole grades W-180 to W-450, raisins from Nashik vineyards and premium almonds, graded and vacuum-packed for retail and wholesale.",
    texture: "cashew",
    groups: [
      {
        id: "cashews",
        name: "Cashews",
        desc: "White Whole and Scorched Whole cashew kernels in W-180, W-210, W-240, W-320 and W-450 grades, processed under hygienic conditions and vacuum packed.",
        about: [
          "Cashew kernels are graded by colour and count per pound: White Wholes (W) are the premium ivory-coloured kernels, while Scorched Wholes (SW) carry a light brown tint from longer roasting and offer the same size grades at a keener price.",
          "Magnex supplies both in W-180 (largest, ~170–180 kernels/lb) through W-450 (~400–450 kernels/lb), processed in FSSAI-certified units and nitrogen-flushed or vacuum packed for full shelf life across the export chain."
        ],
        faqs: [
          ["What cashew grades do you offer?", "White Whole W-180, W-210, W-240, W-320, W-450 and Scorched Whole in the same grades. Splits and pieces (LWP/SWP) on request."],
          ["What is the difference between White Whole and Scorched Whole?", "Both are whole kernels of the same size grades; Scorched Wholes have a light brown colour from extra heat during processing and are priced below White Wholes."],
          ["How are cashews packed for export?", "Vacuum pouches or nitrogen-flushed tins of 10kg / 11.34kg (25lb) inside export cartons."]
        ],
        products: [
          {
            id: "white-whole-cashews",
            photo: IMG + "dryfruits/white-whole-cashews-w-240.jpg",
            name: "White Whole Cashews",
            short: "Premium ivory-white whole cashew kernels graded W-180 to W-450 by count per pound, processed under hygienic conditions and vacuum packed.",
            origin: "Kerala / Goa / Karnataka, India", crop: "Year-round processing", texture: "cashew",
            varieties: [
              { name: "White Whole Cashews – W-180", photo: IMG + "dryfruits/white-whole-cashews-w-180.jpg" },
              { name: "White Whole Cashews – W-210", photo: IMG + "dryfruits/white-whole-cashews-w-210.jpg" },
              { name: "White Whole Cashews – W-240", photo: IMG + "dryfruits/white-whole-cashews-w-240.jpg" },
              { name: "White Whole Cashews – W-320", photo: IMG + "dryfruits/white-whole-cashews-w-320.jpg" },
              { name: "White Whole Cashews – W-450", photo: IMG + "dryfruits/white-whole-cashews-w-450.jpg" }
            ],
            specs: [
              ["Grades", "W-180 / W-210 / W-240 / W-320 / W-450"],
              ["Count per lb", "W-180: 170–180 · W-210: 200–210 · W-240: 220–240 · W-320: 300–320 · W-450: 400–450"],
              ["Colour", "White / pale ivory"], ["Moisture", "5% max."],
              ["Broken", "As per grade"], ["Packaging", "Vacuum Pouch in Tins/Cartons"],
              ["Weights", "10kg, 11.34kg (25lb)"]
            ]
          },
          {
            id: "scorched-whole-cashews",
            photo: IMG + "dryfruits/scorched-whole-cashews-w-240.jpg",
            name: "Scorched Whole Cashews",
            short: "Light-brown scorched whole cashew kernels graded W-180 to W-450 — the same sizes as White Wholes at a competitive price point.",
            origin: "Kerala / Goa / Karnataka, India", crop: "Year-round processing", texture: "cashew",
            varieties: [
              { name: "Scorched Whole Cashews – W-180", photo: IMG + "dryfruits/scorched-whole-cashews-w-180.jpg" },
              { name: "Scorched Whole Cashews – W-210", photo: IMG + "dryfruits/scorched-whole-cashews-w-210.jpg" },
              { name: "Scorched Whole Cashews – W-240", photo: IMG + "dryfruits/scorched-whole-cashews-w-240.jpg" },
              { name: "Scorched Whole Cashews – W-320", photo: IMG + "dryfruits/scorched-whole-cashews-w-320.jpg" },
              { name: "Scorched Whole Cashews – W-450", photo: IMG + "dryfruits/scorched-whole-cashews-w-450.jpg" }
            ],
            specs: [
              ["Grades", "SW-180 / SW-210 / SW-240 / SW-320 / SW-450"],
              ["Count per lb", "180: 170–180 · 210: 200–210 · 240: 220–240 · 320: 300–320 · 450: 400–450"],
              ["Colour", "Light brown / scorched"], ["Moisture", "5% max."],
              ["Broken", "As per grade"], ["Packaging", "Vacuum Pouch in Tins/Cartons"],
              ["Weights", "10kg, 11.34kg (25lb)"]
            ]
          }
        ]
      },
      {
        id: "raisins-nuts",
        name: "Raisins & Almonds",
        desc: "Nashik raisins in golden, green and black varieties and premium almond kernels, sorted and vacuum-packed for retail and wholesale.",
        about: [
          "Magnex supplies golden and black raisins from Nashik vineyards and almond kernels sorted by size and colour — vacuum or nitrogen-flushed for shelf life."
        ],
        faqs: [
          ["How are dry fruits packed for export?", "Vacuum pouches or nitrogen-flushed tins inside export cartons."]
        ],
        products: [
          {
            id: "raisins",
            photo: IMG + "dryfruits/raisins.jpg",
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
            photo: IMG + "dryfruits/almonds.jpg",
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

  /* =================================================== DEHYDRATED */
  dehydrated: {
    photo: IMG + "dehydrated/red-onion-flakes.jpg",
    name: "Dehydrated & Superfoods",
    tagline: "Onion · Garlic · Tomato · Moringa",
    desc: "Dehydrated onion and garlic in pieces (flakes, chopped, minced, granules) and powder formats, tomato powder, plus moringa and psyllium superfood lines for nutraceutical and food-processing buyers.",
    texture: "powder-red",
    groups: [
      {
        id: "dehydrated-pieces",
        name: "Dehydrated Pieces",
        desc: "Dehydrated white and red onion and garlic in flakes, cloves, chopped, minced and granule cuts at 5–6% moisture with full microbiological documentation.",
        about: [
          "From Mahuva — the dehydration capital of India — Magnex supplies onion and garlic pieces in every standard cut: flakes (kibbled), chopped, minced and granules, plus whole dehydrated garlic cloves.",
          "White and red onion are processed separately to preserve colour and pungency, and every lot ships with moisture, TPC, yeast/mould and pathogen test reports."
        ],
        faqs: [
          ["What cuts are available for dehydrated onion?", "Flakes (kibbled), chopped, minced and granules — in both white and red onion."],
          ["What is the difference between chopped, minced and granules?", "They are progressively finer cuts of the same dehydrated flake: chopped ~3–5mm, minced ~1–3mm, granules 0.5–1mm (8–40 mesh)."],
          ["Are microbiological reports provided?", "Yes, every lot ships with moisture, TPC, yeast/mould, and pathogen test reports."]
        ],
        products: [
          {
            id: "dehydrated-onion",
            photo: IMG + "dehydrated/white-onion-flakes.jpg",
            name: "Dehydrated Onion",
            short: "White and red onion in flakes, chopped, minced and granule cuts at 5–6% moisture for seasoning, ready-meal and food-processing applications.",
            origin: "Gujarat, India", crop: "Processing: February – June", texture: "generic",
            varieties: [
              { name: "White Onion – Flakes", photo: IMG + "dehydrated/white-onion-flakes.jpg" },
              { name: "White Onion – Chopped / Minced / Granules", photo: IMG + "dehydrated/white-onion-chopped-minced-granules.jpg" },
              { name: "Red Onion – Flakes", photo: IMG + "dehydrated/red-onion-flakes.jpg" },
              { name: "Red Onion – Chopped / Minced / Granules", photo: IMG + "dehydrated/red-onion-chopped-minced-granules.jpg" }
            ],
            specs: [
              ["Types", "White Onion / Red Onion"], ["Cuts", "Flakes / Chopped / Minced / Granules"],
              ["Moisture", "5 – 6% max."], ["Hot Water Insolubles", "As per format"],
              ["TPC", "Within destination limits"], ["Shelf Life", "24 months"],
              ["20' Container", "10 – 14 MT by format"], ["Packaging", "Poly-lined cartons 20/25kg, aluminium bags"]
            ]
          },
          {
            id: "dehydrated-garlic",
            photo: IMG + "dehydrated/garlic-cloves.jpg",
            name: "Dehydrated Garlic",
            short: "Pungent Indian garlic as whole dehydrated cloves and in chopped, minced and granule cuts, mesh-graded for seasoning and food processing.",
            origin: "Gujarat / MP, India", crop: "Processing: March – July", texture: "generic",
            varieties: [
              { name: "Garlic – Cloves", photo: IMG + "dehydrated/garlic-cloves.jpg" },
              { name: "Garlic – Chopped / Minced / Granules", photo: IMG + "dehydrated/garlic-chopped-minced-granules.jpg" }
            ],
            specs: [
              ["Cuts", "Cloves / Chopped / Minced / Granules"],
              ["Moisture", "6% max."], ["Mesh", "8 – 40 as per cut"],
              ["Shelf Life", "24 months"], ["Packaging", "Poly-lined cartons 20/25kg, aluminium bags"]
            ]
          }
        ]
      },
      {
        id: "dehydrated-powders",
        name: "Dehydrated Powders",
        desc: "Fine-milled onion, garlic and tomato powders at 100–120 mesh for seasonings, soups, sauces and snack coatings.",
        about: [
          "Powders are milled from the same dehydrated flakes, with anti-caking treatment available, and packed in moisture-proof aluminium bags to hold free-flowing quality through the supply chain."
        ],
        faqs: [
          ["What mesh sizes are available for powders?", "Standard 100–120 mesh; 80 mesh and finer grades on request."],
          ["Is the tomato powder spray-dried or drum-dried?", "Spray-dried from ripe red tomato pulp, with lycopene and colour retained; drum-dried on request."]
        ],
        products: [
          {
            id: "onion-powder",
            photo: IMG + "dehydrated/white-onion-powder.jpg",
            name: "Onion Powder",
            short: "Free-flowing white and red onion powder at 100–120 mesh for seasonings, soups, sauces and snack coatings.",
            origin: "Gujarat, India", crop: "Processing: February – June", texture: "generic",
            varieties: [
              { name: "White Onion – Powder", photo: IMG + "dehydrated/white-onion-powder.jpg" },
              { name: "Red Onion – Powder", photo: IMG + "dehydrated/red-onion-powder.jpg" }
            ],
            specs: [
              ["Types", "White Onion / Red Onion"], ["Mesh", "100 – 120"],
              ["Moisture", "6% max."], ["Anti-caking", "On request"],
              ["Shelf Life", "24 months"], ["Packaging", "Aluminium bags in cartons 20/25kg"]
            ]
          },
          {
            id: "garlic-powder",
            photo: IMG + "dehydrated/garlic-powder.jpg",
            name: "Garlic Powder",
            short: "Pungent garlic powder at 100–120 mesh milled from dehydrated Indian garlic flakes for seasoning blends and food processing.",
            origin: "Gujarat / MP, India", crop: "Processing: March – July", texture: "generic",
            varieties: [
              { name: "Garlic – Powder", photo: IMG + "dehydrated/garlic-powder.jpg" }
            ],
            specs: [
              ["Mesh", "100 – 120"], ["Moisture", "6% max."], ["Anti-caking", "On request"],
              ["Shelf Life", "24 months"], ["Packaging", "Aluminium bags in cartons 20/25kg"]
            ]
          },
          {
            id: "tomato-powder",
            photo: IMG + "dehydrated/tomato-powder.jpg",
            name: "Tomato Powder",
            short: "Spray-dried tomato powder from ripe red tomatoes with natural colour and lycopene retained, for soups, sauces, ketchups and seasonings.",
            origin: "Maharashtra / Karnataka, India", crop: "Processing: January – May", texture: "powder-red",
            varieties: [
              { name: "Tomato Powder", photo: IMG + "dehydrated/tomato-powder.jpg" }
            ],
            specs: [
              ["Process", "Spray dried"], ["Mesh", "80 – 100"], ["Moisture", "5% max."],
              ["Colour", "Natural red, lycopene retained"], ["Shelf Life", "12 – 18 months"],
              ["Packaging", "Aluminium bags in cartons 20/25kg"]
            ]
          }
        ]
      },
      {
        id: "superfoods",
        name: "Superfoods",
        desc: "Nutrient-dense moringa leaf powder and psyllium husk for nutraceutical, dietary-fibre and health-food applications.",
        about: [
          "Magnex's superfoods line covers shade-dried moringa leaf powder from Tamil Nadu and 95–99% pure psyllium husk from Sidhpur, the world's psyllium hub, each lab-tested for nutritional and microbiological parameters."
        ],
        faqs: [
          ["Is organic moringa available?", "Yes, certified organic moringa powder and dried leaf can be supplied with documentation."],
          ["What purity is your psyllium husk?", "95% and 99% purity husk, plus 40/60/80 mesh powder."]
        ],
        products: [
          {
            id: "moringa",
            photo: IMG + "dehydrated/moringa.jpg",
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
            photo: IMG + "dehydrated/psyllium.jpg",
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

const POPULAR = ["basmati-1121","robusta-cherry","arabica-plantation","black-pepper","green-cardamom","turmeric-powder","red-chilli","white-whole-cashews","dehydrated-onion","kabul-chickpeas","hulled-sesame"];
