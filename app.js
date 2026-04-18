/* ========================================================================PART A1 — Paste this FIRST in your app.js
   Vimel Travels — Destinations & Countries Data======================================================================== */

'use strict';

const destinations = [
  // ═══ PHILIPPINES (20) ═══
  {id:1,name:'Palawan',country:'Philippines',image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600',rating:4.9,price:420,description:'Pristine lagoons, underground rivers, and untouched coral reefs in El Nido and Coron.',tags:['Beach','Island','Local']},
  {id:2,name:'Boracay',country:'Philippines',image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',rating:4.8,price:380,description:'White Beach, crystal waters, epic sunsets, and vibrant nightlife.',tags:['Beach','Nightlife','Local']},
  {id:3,name:'Siargao',country:'Philippines',image:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600',rating:4.8,price:350,description:'Cloud 9 barrels, palm-lined roads, and island-hopping adventures.',tags:['Surf','Adventure','Local']},
  {id:4,name:'Cebu',country:'Philippines',image:'https://images.unsplash.com/photo-1608304990132-6f15c8e25f98?w=600',rating:4.7,price:320,description:'Whale sharks in Oslob, Kawasan Falls, and historic Spanish landmarks.',tags:['Adventure','Culture','Local']},
  {id:5,name:'Bohol',country:'Philippines',image:'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600',rating:4.7,price:300,description:'Chocolate Hills, tiny tarsiers, and Panglao white-sand beaches.',tags:['Nature','Culture','Local']},
  {id:6,name:'Batanes',country:'Philippines',image:'https://images.unsplash.com/photo-1588528402605-1f9b76b1d51c?w=600',rating:4.9,price:550,description:'Rolling green hills, stone houses, and the most breathtaking cliffs.',tags:['Nature','Culture','Local']},
  {id:7,name:'Coron',country:'Philippines',image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600',rating:4.8,price:450,description:'WWII shipwreck diving, Kayangan Lake, and hidden lagoons.',tags:['Diving','Island','Local']},
  {id:8,name:'La Union',country:'Philippines',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',rating:4.5,price:250,description:'Surf town vibes, beachfront bars, and golden sunsets in San Juan.',tags:['Surf','Beach','Local']},
  {id:9,name:'Siquijor',country:'Philippines',image:'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600',rating:4.6,price:280,description:'Enchanting waterfalls, balete trees, and pristine white-sand beaches.',tags:['Nature','Mystical','Local']},
  {id:10,name:'Davao',country:'Philippines',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.5,price:310,description:'Mount Apo treks, Philippine Eagle Center, and durian capital.',tags:['Adventure','Nature','Local']},
  {id:11,name:'Vigan',country:'Philippines',image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600',rating:4.6,price:280,description:'UNESCO cobblestone streets, Spanish colonial architecture, and empanadas.',tags:['Culture','UNESCO','Local']},
  {id:12,name:'Sagada',country:'Philippines',image:'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600',rating:4.7,price:300,description:'Hanging coffins, Sumaguing Cave, and misty mountain sunrise at Kiltepan.',tags:['Adventure','Culture','Local']},
  {id:13,name:'Camiguin',country:'Philippines',image:'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600',rating:4.6,price:320,description:'Island born of fire — volcanic hot springs, white island sandbar, and waterfalls.',tags:['Island','Nature','Local']},
  {id:14,name:'Dumaguete',country:'Philippines',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',rating:4.5,price:260,description:'University town charm, Apo Island turtle diving, and the best silogs.',tags:['Diving','Culture','Local']},
  {id:15,name:'Iloilo',country:'Philippines',image:'https://images.unsplash.com/photo-1608304990132-6f15c8e25f98?w=600',rating:4.5,price:270,description:'City of Love — heritage churches, La Paz Batchoy, and Islas de Gigantes.',tags:['Culture','Food','Local']},
  {id:16,name:'Zambales',country:'Philippines',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',rating:4.4,price:240,description:'Anawangin Cove, Nagsasa Beach, and volcanic ash landscapes.',tags:['Beach','Adventure','Local']},
  {id:17,name:'Puerto Princesa',country:'Philippines',image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600',rating:4.6,price:380,description:'Underground River UNESCO site, Honda Bay island hopping.',tags:['UNESCO','Nature','Local']},
  {id:18,name:'Banaue',country:'Philippines',image:'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600',rating:4.7,price:320,description:'2000-year-old rice terraces carved into mountains — eighth wonder of the world.',tags:['UNESCO','Culture','Local']},
  {id:19,name:'Legazpi',country:'Philippines',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.5,price:290,description:'Perfect Mayon Volcano cone, whale shark encounters, and Bicol Express.',tags:['Nature','Food','Local']},
  {id:20,name:'Panglao',country:'Philippines',image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',rating:4.7,price:350,description:'Alona Beach, dolphin watching, and world-class diving at Balicasag.',tags:['Beach','Diving','Local']},
  {id:484,name:'Apo Island',country:'Philippines',image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',rating:4.7,price:300,description:'Turtle heaven — snorkel with sea turtles at this tiny marine sanctuary.',tags:['Diving','Island','Local']},
  {id:485,name:'El Nido',country:'Philippines',image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600',rating:4.9,price:450,description:'Island hopping paradise — Big Lagoon, Secret Beach, and limestone towers.',tags:['Beach','Island','Local']},
  {id:486,name:'Moalboal',country:'Philippines',image:'https://images.unsplash.com/photo-1608304990132-6f15c8e25f98?w=600',rating:4.7,price:280,description:'Sardine run, Pescador Island, and Kawasan Falls canyoneering.',tags:['Diving','Adventure','Local']},
  {id:487,name:'Bantayan Island',country:'Philippines',image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',rating:4.5,price:250,description:'Sugar Beach, Ogtong Cave pool, and laid-back island living.',tags:['Beach','Island','Local']},
  {id:488,name:'Caramoan',country:'Philippines',image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600',rating:4.6,price:350,description:'Survivor filming location — hidden lagoons, white sand, and limestone.',tags:['Beach','Adventure','Local']},
  {id:489,name:'Hundred Islands',country:'Philippines',image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600',rating:4.5,price:260,description:'124 islands in Pangasinan — island hopping, snorkeling, and ziplines.',tags:['Island','Adventure','Local']},
  {id:490,name:'Malapascua',country:'Philippines',image:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600',rating:4.7,price:320,description:'Only place to see thresher sharks daily — world-class diving.',tags:['Diving','Island','Local']},
  {id:491,name:'Surigao',country:'Philippines',image:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600',rating:4.5,price:300,description:'Enchanted River, Tinuy-an Falls, and Sohoton Cove natural wonders.',tags:['Nature','Adventure','Local']},
  {id:492,name:'Camotes Islands',country:'Philippines',image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',rating:4.4,price:240,description:'Hidden gem near Cebu — Lake Danao, Buho Rock, and Santiago Bay.',tags:['Island','Beach','Local']},
  {id:493,name:'Marinduque',country:'Philippines',image:'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600',rating:4.4,price:260,description:'Heart of Philippines — Moriones Festival, Bathala Caves, and beaches.',tags:['Culture','Beach','Local']},
  {id:494,name:'Romblon',country:'Philippines',image:'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600',rating:4.5,price:280,description:'Marble capital — Bonbon Beach, Cresta de Gallo, and island hopping.',tags:['Beach','Island','Local']},
  {id:495,name:'Bukidnon',country:'Philippines',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.4,price:250,description:'Pineapple country — Dahilayan zipline, waterfalls, and cool highlands.',tags:['Adventure','Nature','Local']},
  {id:496,name:'Oslob',country:'Philippines',image:'https://images.unsplash.com/photo-1608304990132-6f15c8e25f98?w=600',rating:4.5,price:290,description:'Swim with whale sharks, Tumalog Falls, and heritage church ruins.',tags:['Wildlife','Adventure','Local']},
  {id:497,name:'Jomalig Island',country:'Philippines',image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600',rating:4.5,price:300,description:'Golden sand island — Salibungot Beach, no WiFi, pure disconnection.',tags:['Remote','Beach','Local']},
  {id:498,name:'Kalanggaman Island',country:'Philippines',image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',rating:4.8,price:280,description:'Famous sandbar — crystal water, camping under stars, and no buildings.',tags:['Beach','Island','Local']},
  {id:499,name:'Palaui Island',country:'Philippines',image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600',rating:4.7,price:320,description:'CNN\'s #10 most beautiful beach — Cape Engaño lighthouse and raw beauty.',tags:['Beach','Remote','Local']},
  {id:500,name:'Donsol',country:'Philippines',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.6,price:310,description:'Whale shark capital — ethical butanding interaction and firefly river tours.',tags:['Wildlife','Nature','Local']},



  // ═══ THAILAND (15) ═══
  {id:21,name:'Bangkok',country:'Thailand',image:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600',rating:4.7,price:480,description:'Glittering temples, street food markets, and rooftop bars.',tags:['City','Culture','Food']},
  {id:22,name:'Phuket',country:'Thailand',image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600',rating:4.6,price:590,description:'Turquoise waters, limestone karsts, and lively night markets.',tags:['Beach','Asia','Adventure']},
  {id:23,name:'Chiang Mai',country:'Thailand',image:'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=600',rating:4.8,price:420,description:'Mountain temples, night bazaars, and ethical elephant sanctuaries.',tags:['Culture','Nature','Food']},
  {id:24,name:'Krabi',country:'Thailand',image:'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600',rating:4.7,price:510,description:'Railay Beach climbing, Four Islands tour, and emerald pools.',tags:['Beach','Adventure','Nature']},
  {id:25,name:'Koh Samui',country:'Thailand',image:'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600',rating:4.6,price:560,description:'Luxury resorts, coconut groves, and Ang Thong Marine Park.',tags:['Beach','Luxury','Island']},
  {id:26,name:'Koh Phi Phi',country:'Thailand',image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600',rating:4.7,price:520,description:'Maya Bay fame, snorkeling paradise, and legendary beach parties.',tags:['Beach','Nightlife','Island']},
  {id:27,name:'Pai',country:'Thailand',image:'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=600',rating:4.6,price:350,description:'Bohemian mountain town with hot springs, canyons, and night markets.',tags:['Nature','Culture','Adventure']},
  {id:28,name:'Ayutthaya',country:'Thailand',image:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600',rating:4.7,price:390,description:'Ancient capital ruins, Buddha head in tree roots, floating markets.',tags:['UNESCO','History','Culture']},
  {id:29,name:'Koh Lanta',country:'Thailand',image:'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600',rating:4.5,price:440,description:'Laid-back island vibes, mangrove kayaking, and secluded beaches.',tags:['Beach','Nature','Island']},
  {id:30,name:'Chiang Rai',country:'Thailand',image:'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=600',rating:4.6,price:380,description:'White Temple, Blue Temple, Black House, and Golden Triangle.',tags:['Culture','Nature','Adventure']},
  {id:31,name:'Koh Tao',country:'Thailand',image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600',rating:4.7,price:480,description:'Dive capital of Thailand — cheapest PADI certification in the world.',tags:['Diving','Beach','Island']},
  {id:32,name:'Kanchanaburi',country:'Thailand',image:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600',rating:4.5,price:360,description:'Bridge on River Kwai, Erawan Falls, and WWII historical sites.',tags:['History','Nature','Adventure']},
  {id:33,name:'Hua Hin',country:'Thailand',image:'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600',rating:4.4,price:420,description:'Royal beach resort town, night markets, and Khao Sam Roi Yot.',tags:['Beach','Culture','Relaxation']},
  {id:34,name:'Sukhothai',country:'Thailand',image:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600',rating:4.6,price:340,description:'First capital of Siam — UNESCO temple ruins and cycling tours.',tags:['UNESCO','History','Culture']},
  {id:35,name:'Koh Chang',country:'Thailand',image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600',rating:4.5,price:460,description:'Elephant island — jungle waterfalls, snorkeling, and mangroves.',tags:['Island','Nature','Adventure']},

  // ═══ VIETNAM (15) ═══
  {id:36,name:'Ha Long Bay',country:'Vietnam',image:'https://images.unsplash.com/photo-1528127269322-539152f5ae74?w=600',rating:4.9,price:520,description:'Emerald limestone islands — cruise through a UNESCO World Heritage wonder.',tags:['Nature','UNESCO','Cruise']},
  {id:37,name:'Hanoi',country:'Vietnam',image:'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=600',rating:4.7,price:380,description:'Ancient temples, bustling Old Quarter, and legendary pho.',tags:['City','Culture','Food']},
  {id:38,name:'Ho Chi Minh City',country:'Vietnam',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',rating:4.6,price:370,description:'Motorbike madness, Cu Chi Tunnels, and legendary street food.',tags:['City','History','Food']},
  {id:39,name:'Da Nang',country:'Vietnam',image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600',rating:4.7,price:400,description:'Golden Bridge, Marble Mountains, and My Khe Beach.',tags:['Beach','Culture','Adventure']},
  {id:40,name:'Hoi An',country:'Vietnam',image:'https://images.unsplash.com/photo-1536697246787-1f7ae568714d?w=600',rating:4.8,price:350,description:'Lantern-lit ancient town, tailor-made silk, and cooking classes.',tags:['Culture','UNESCO','Romantic']},
  {id:41,name:'Sapa',country:'Vietnam',image:'https://images.unsplash.com/photo-1528127269322-539152f5ae74?w=600',rating:4.7,price:420,description:'Terraced rice fields, ethnic hill tribe villages, and Fansipan peak.',tags:['Nature','Culture','Trekking']},
  {id:42,name:'Nha Trang',country:'Vietnam',image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600',rating:4.5,price:380,description:'Beach resort city, mud baths, island hopping, and fresh seafood.',tags:['Beach','Relaxation','Island']},
  {id:43,name:'Dalat',country:'Vietnam',image:'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=600',rating:4.6,price:340,description:'City of Eternal Spring — pine forests, waterfalls, and flower gardens.',tags:['Nature','Romantic','Culture']},
  {id:44,name:'Phu Quoc',country:'Vietnam',image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600',rating:4.7,price:460,description:'Vietnam\'s largest island — white sand, fish sauce factories, night market.',tags:['Beach','Island','Food']},
  {id:45,name:'Hue',country:'Vietnam',image:'https://images.unsplash.com/photo-1536697246787-1f7ae568714d?w=600',rating:4.6,price:350,description:'Imperial citadel, royal tombs, and the best Bun Bo in Vietnam.',tags:['UNESCO','History','Food']},
  {id:46,name:'Ninh Binh',country:'Vietnam',image:'https://images.unsplash.com/photo-1528127269322-539152f5ae74?w=600',rating:4.7,price:330,description:'Ha Long Bay on land — limestone karsts, river caves, and ancient temples.',tags:['Nature','UNESCO','Adventure']},
  {id:47,name:'Phong Nha',country:'Vietnam',image:'https://images.unsplash.com/photo-1528127269322-539152f5ae74?w=600',rating:4.8,price:400,description:'World\'s largest cave Son Doong, Paradise Cave, and jungle treks.',tags:['Adventure','Nature','UNESCO']},
  {id:48,name:'Mui Ne',country:'Vietnam',image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600',rating:4.5,price:360,description:'Red and white sand dunes, kitesurfing, and fairy stream walks.',tags:['Beach','Adventure','Nature']},
  {id:49,name:'Con Dao',country:'Vietnam',image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600',rating:4.7,price:480,description:'Remote island paradise — pristine diving, turtle nesting, and history.',tags:['Island','Diving','Nature']},
  {id:50,name:'Quy Nhon',country:'Vietnam',image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600',rating:4.5,price:320,description:'Hidden coastal gem — Cham ruins, empty beaches, and seafood feasts.',tags:['Beach','Culture','Food']},

  // ═══ INDONESIA (15) ═══
  {id:51,name:'Bali',country:'Indonesia',image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',rating:4.7,price:680,description:'Rice paddies, ancient temples, surf beaches, and spiritual culture.',tags:['Culture','Beach','Adventure']},
  {id:52,name:'Raja Ampat',country:'Indonesia',image:'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600',rating:4.9,price:950,description:'75% of the world\'s coral species live in these pristine waters.',tags:['Diving','Nature','Remote']},
  {id:53,name:'Yogyakarta',country:'Indonesia',image:'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600',rating:4.7,price:380,description:'Borobudur sunrise, Prambanan temples, and batik workshops.',tags:['Culture','UNESCO','History']},
  {id:54,name:'Komodo Island',country:'Indonesia',image:'https://images.unsplash.com/photo-1570789210967-2cac24834d46?w=600',rating:4.8,price:720,description:'Last living dragons, pink sand beaches, and manta ray diving.',tags:['Adventure','Wildlife','Nature']},
  {id:55,name:'Lombok',country:'Indonesia',image:'https://images.unsplash.com/photo-1570789210967-2cac24834d46?w=600',rating:4.6,price:500,description:'Mount Rinjani treks, Gili Islands snorkeling, and empty surf breaks.',tags:['Adventure','Beach','Nature']},
  {id:56,name:'Ubud',country:'Indonesia',image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',rating:4.8,price:620,description:'Art galleries, Monkey Forest, rice terraces, and yoga retreats.',tags:['Culture','Nature','Wellness']},
  {id:57,name:'Gili Islands',country:'Indonesia',image:'https://images.unsplash.com/photo-1570789210967-2cac24834d46?w=600',rating:4.7,price:480,description:'No cars, no motorbikes — just bikes, beaches, turtles, and sunsets.',tags:['Beach','Diving','Island']},
  {id:58,name:'Nusa Penida',country:'Indonesia',image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',rating:4.7,price:520,description:'Kelingking Beach T-Rex cliff, manta rays, and crystal bay.',tags:['Beach','Adventure','Nature']},
  {id:59,name:'Jakarta',country:'Indonesia',image:'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600',rating:4.3,price:450,description:'Mega capital — Old Town Batavia, street food, and Thousand Islands.',tags:['City','Culture','Food']},
  {id:60,name:'Flores',country:'Indonesia',image:'https://images.unsplash.com/photo-1570789210967-2cac24834d46?w=600',rating:4.7,price:580,description:'Kelimutu tri-color lakes, traditional villages, and Komodo gateway.',tags:['Nature','Culture','Adventure']},
  {id:61,name:'Bandung',country:'Indonesia',image:'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600',rating:4.4,price:350,description:'Paris of Java — tea plantations, volcanic craters, and factory outlets.',tags:['City','Nature','Shopping']},
  {id:62,name:'Sumba',country:'Indonesia',image:'https://images.unsplash.com/photo-1570789210967-2cac24834d46?w=600',rating:4.7,price:650,description:'Untouched paradise — Weekuri Lagoon, traditional villages, and empty beaches.',tags:['Remote','Beach','Culture']},
  {id:63,name:'Borneo Kalimantan',country:'Indonesia',image:'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600',rating:4.6,price:580,description:'Orangutan encounters, river cruises, and dense jungle treks.',tags:['Wildlife','Nature','Adventure']},
  {id:64,name:'Lake Toba',country:'Indonesia',image:'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600',rating:4.6,price:400,description:'World\'s largest volcanic lake — Batak culture, hot springs, and Samosir Island.',tags:['Nature','Culture','Lake']},
  {id:65,name:'Wakatobi',country:'Indonesia',image:'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600',rating:4.8,price:780,description:'UNESCO marine biosphere — pristine coral reefs and untouched diving.',tags:['Diving','UNESCO','Remote']},

  // ═══ MALAYSIA (10) ═══
  {id:66,name:'Kuala Lumpur',country:'Malaysia',image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600',rating:4.6,price:450,description:'Petronas Towers, Batu Caves, and incredible Jalan Alor street food.',tags:['City','Food','Shopping']},
  {id:67,name:'Langkawi',country:'Malaysia',image:'https://images.unsplash.com/photo-1609946860441-a51ffcf16d76?w=600',rating:4.7,price:480,description:'Duty-free island — SkyBridge, mangrove tours, and eagle watching.',tags:['Beach','Island','Nature']},
  {id:68,name:'Penang',country:'Malaysia',image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600',rating:4.7,price:390,description:'Street art capital and arguably the best food city in Southeast Asia.',tags:['Food','Culture','UNESCO']},
  {id:69,name:'Cameron Highlands',country:'Malaysia',image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600',rating:4.5,price:350,description:'Tea plantations, strawberry farms, and cool mountain air.',tags:['Nature','Relaxation','Culture']},
  {id:70,name:'Borneo Sabah',country:'Malaysia',image:'https://images.unsplash.com/photo-1609946860441-a51ffcf16d76?w=600',rating:4.8,price:620,description:'Mount Kinabalu, orangutans, Sipadan diving, and jungle lodges.',tags:['Adventure','Wildlife','Nature']},
  {id:71,name:'Malacca',country:'Malaysia',image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600',rating:4.5,price:320,description:'UNESCO heritage city — Dutch Square, Jonker Street, and nyonya cuisine.',tags:['UNESCO','History','Food']},
  {id:72,name:'Perhentian Islands',country:'Malaysia',image:'https://images.unsplash.com/photo-1609946860441-a51ffcf16d76?w=600',rating:4.7,price:440,description:'Crystal-clear waters, turtle snorkeling, and pristine coral reefs.',tags:['Beach','Diving','Island']},
  {id:73,name:'Ipoh',country:'Malaysia',image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600',rating:4.5,price:300,description:'Hidden foodie gem — white coffee, cave temples, and street art.',tags:['Food','Culture','City']},
  {id:74,name:'Kota Kinabalu',country:'Malaysia',image:'https://images.unsplash.com/photo-1609946860441-a51ffcf16d76?w=600',rating:4.6,price:480,description:'Gateway to Mt. Kinabalu, island hopping, and the best sunsets in Borneo.',tags:['Adventure','Beach','Nature']},
  {id:75,name:'Tioman Island',country:'Malaysia',image:'https://images.unsplash.com/photo-1609946860441-a51ffcf16d76?w=600',rating:4.6,price:420,description:'Duty-free diving paradise — jungle treks, waterfalls, and coral reefs.',tags:['Island','Diving','Nature']},

  // ═══ CAMBODIA (8) ═══
  {id:76,name:'Siem Reap',country:'Cambodia',image:'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600',rating:4.8,price:350,description:'Angkor Wat sunrise — largest religious monument on Earth.',tags:['UNESCO','Culture','History']},
  {id:77,name:'Phnom Penh',country:'Cambodia',image:'https://images.unsplash.com/photo-1540611025311-01df3cee54b5?w=600',rating:4.4,price:280,description:'Royal Palace, Killing Fields history, and booming food scene.',tags:['City','History','Culture']},
  {id:78,name:'Koh Rong',country:'Cambodia',image:'https://images.unsplash.com/photo-1540611025311-01df3cee54b5?w=600',rating:4.6,price:320,description:'Backpacker island paradise — bioluminescent plankton and white sand.',tags:['Beach','Island','Nightlife']},
  {id:79,name:'Kampot',country:'Cambodia',image:'https://images.unsplash.com/photo-1540611025311-01df3cee54b5?w=600',rating:4.5,price:260,description:'Riverside charm, famous pepper plantations, and Bokor Mountain.',tags:['Nature','Food','Culture']},
  {id:80,name:'Battambang',country:'Cambodia',image:'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600',rating:4.4,price:240,description:'Bamboo train, bat caves, colonial architecture, and circus shows.',tags:['Culture','Adventure','History']},
  {id:81,name:'Koh Rong Samloem',country:'Cambodia',image:'https://images.unsplash.com/photo-1540611025311-01df3cee54b5?w=600',rating:4.7,price:350,description:'Quieter sister island — Saracen Bay, jungle walks, and stargazing.',tags:['Beach','Remote','Island']},
  {id:82,name:'Sihanoukville',country:'Cambodia',image:'https://images.unsplash.com/photo-1540611025311-01df3cee54b5?w=600',rating:4.2,price:280,description:'Gateway to islands, Otres Beach, and developing coastal resort town.',tags:['Beach','City','Nightlife']},
  {id:83,name:'Kep',country:'Cambodia',image:'https://images.unsplash.com/photo-1540611025311-01df3cee54b5?w=600',rating:4.5,price:250,description:'Famous crab market, Rabbit Island day trips, and French colonial ruins.',tags:['Food','Beach','Culture']},

  // ═══ SINGAPORE (5) ═══
  {id:84,name:'Singapore',country:'Singapore',image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600',rating:4.8,price:980,description:'Marina Bay Sands, Gardens by the Bay, and hawker center heaven.',tags:['City','Luxury','Food']},
  {id:85,name:'Sentosa Island',country:'Singapore',image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600',rating:4.5,price:850,description:'Universal Studios, S.E.A. Aquarium, and Siloso Beach.',tags:['Family','Beach','Entertainment']},
  {id:86,name:'Chinatown Singapore',country:'Singapore',image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600',rating:4.4,price:780,description:'Buddha Tooth Relic Temple, hawker food, and heritage shophouses.',tags:['Culture','Food','History']},
  {id:87,name:'Little India Singapore',country:'Singapore',image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600',rating:4.4,price:780,description:'Colorful streets, Sri Veeramakaliamman Temple, and Tekka Centre.',tags:['Culture','Food','Shopping']},
  {id:88,name:'Pulau Ubin',country:'Singapore',image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600',rating:4.5,price:750,description:'Last kampong in Singapore — cycling, mangroves, and rustic charm.',tags:['Nature','Adventure','Culture']},

  // ═══ MYANMAR (6) ═══
  {id:89,name:'Bagan',country:'Myanmar',image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',rating:4.7,price:420,description:'2,000+ Buddhist temples on dusty plains — best by hot air balloon.',tags:['Culture','UNESCO','Adventure']},
  {id:90,name:'Yangon',country:'Myanmar',image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',rating:4.5,price:350,description:'Shwedagon Pagoda golden spire, colonial architecture, and tea shops.',tags:['City','Culture','History']},
  {id:91,name:'Inle Lake',country:'Myanmar',image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',rating:4.7,price:400,description:'Leg-rowing fishermen, floating gardens, and stilted villages.',tags:['Nature','Culture','Lake']},
  {id:92,name:'Mandalay',country:'Myanmar',image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',rating:4.5,price:380,description:'U Bein Bridge sunset, royal palace, and hilltop monasteries.',tags:['Culture','History','City']},
  {id:93,name:'Ngapali Beach',country:'Myanmar',image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',rating:4.6,price:450,description:'Myanmar\'s most beautiful beach — palm-fringed, uncrowded, and serene.',tags:['Beach','Relaxation','Remote']},
  {id:94,name:'Golden Rock',country:'Myanmar',image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',rating:4.6,price:360,description:'Gravity-defying boulder pagoda perched on the edge of a cliff.',tags:['Culture','Adventure','Spiritual']},

  // ═══ LAOS (6) ═══
  {id:95,name:'Luang Prabang',country:'Laos',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',rating:4.7,price:340,description:'Monks morning alms, Kuang Si waterfalls, and Mekong River cruises.',tags:['Culture','UNESCO','Nature']},
  {id:96,name:'Vientiane',country:'Laos',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',rating:4.3,price:280,description:'Relaxed capital — Pha That Luang, Buddha Park, and Mekong sunsets.',tags:['City','Culture','Relaxation']},
  {id:97,name:'Vang Vieng',country:'Laos',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',rating:4.6,price:300,description:'Limestone karsts, blue lagoons, river tubing, and cave exploration.',tags:['Adventure','Nature','Backpacker']},
  {id:98,name:'4000 Islands',country:'Laos',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',rating:4.5,price:260,description:'Si Phan Don — hammock life, Mekong dolphins, and Khone Falls.',tags:['Nature','Relaxation','Island']},
  {id:99,name:'Nong Khiaw',country:'Laos',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',rating:4.6,price:280,description:'Hidden gem — dramatic limestone cliffs, river views, and jungle treks.',tags:['Nature','Remote','Adventure']},
  {id:100,name:'Bolaven Plateau',country:'Laos',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',rating:4.5,price:300,description:'Coffee country — waterfalls, ethnic villages, and motorbike loops.',tags:['Nature','Culture','Adventure']},

// ═══ JAPAN (20) ═══
  {id:101,name:'Tokyo',country:'Japan',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',rating:4.9,price:1050,description:'Neon-lit Shibuya, zen gardens, and the world\'s best sushi.',tags:['City','Culture','Food']},
  {id:102,name:'Kyoto',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.9,price:980,description:'Bamboo groves, vermillion torii gates, and geisha districts.',tags:['Culture','Nature','Romantic']},
  {id:103,name:'Osaka',country:'Japan',image:'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600',rating:4.8,price:920,description:'Dotonbori street food, Osaka Castle, and friendliest people in Japan.',tags:['Food','City','Culture']},
  {id:104,name:'Hiroshima',country:'Japan',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',rating:4.7,price:850,description:'Peace Memorial, floating Itsukushima torii gate on Miyajima Island.',tags:['History','Culture','UNESCO']},
  {id:105,name:'Nara',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.7,price:820,description:'Friendly bowing deer, giant Buddha at Todai-ji, and ancient parks.',tags:['Culture','Nature','Family']},
  {id:106,name:'Hakone',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.6,price:900,description:'Mt. Fuji views, hot spring ryokans, and pirate ship lake cruises.',tags:['Nature','Relaxation','Romantic']},
  {id:107,name:'Okinawa',country:'Japan',image:'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600',rating:4.7,price:950,description:'Tropical Japan — turquoise beaches, Shuri Castle, and Churaumi Aquarium.',tags:['Beach','Culture','Island']},
  {id:108,name:'Nikko',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.6,price:800,description:'Ornate Toshogu Shrine, autumn foliage, and Kegon waterfall.',tags:['UNESCO','Nature','Culture']},
  {id:109,name:'Kamakura',country:'Japan',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',rating:4.6,price:780,description:'Giant bronze Buddha, bamboo temple, and coastal hiking trails.',tags:['Culture','Nature','History']},
  {id:110,name:'Kanazawa',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.7,price:860,description:'Kenroku-en garden, samurai districts, and gold leaf everything.',tags:['Culture','Garden','Food']},
  {id:111,name:'Takayama',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.7,price:830,description:'Edo-era old town, morning markets, and Hida beef perfection.',tags:['Culture','Food','History']},
  {id:112,name:'Miyajima',country:'Japan',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',rating:4.8,price:870,description:'Floating torii gate, wild deer, and maple-leaf momiji manju.',tags:['UNESCO','Culture','Island']},
  {id:113,name:'Nagoya',country:'Japan',image:'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600',rating:4.4,price:780,description:'Castle town, miso katsu, and gateway to the Japanese Alps.',tags:['City','Food','Culture']},
  {id:114,name:'Kobe',country:'Japan',image:'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600',rating:4.5,price:820,description:'World-famous beef, harbor views, and Arima onsen hot springs.',tags:['Food','City','Relaxation']},
  {id:115,name:'Sapporo',country:'Japan',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',rating:4.6,price:880,description:'Snow Festival, ramen alley, beer museum, and ski resorts nearby.',tags:['City','Food','Winter']},
  {id:116,name:'Fukuoka',country:'Japan',image:'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600',rating:4.6,price:800,description:'Yatai street food stalls, Hakata ramen, and Canal City shopping.',tags:['Food','City','Culture']},
  {id:117,name:'Naoshima',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.7,price:850,description:'Art island — Yayoi Kusama pumpkins, Chichu Art Museum, and Benesse House.',tags:['Art','Island','Culture']},
  {id:118,name:'Yakushima',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.8,price:920,description:'Ancient cedar forests that inspired Princess Mononoke — UNESCO wilderness.',tags:['Nature','UNESCO','Trekking']},
  {id:119,name:'Shirakawa-go',country:'Japan',image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',rating:4.8,price:860,description:'Fairytale thatched-roof villages in the snow-covered Japanese Alps.',tags:['UNESCO','Culture','Winter']},
  {id:120,name:'Mount Fuji',country:'Japan',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',rating:4.9,price:900,description:'Japan\'s sacred icon — sunrise summit hike and Five Lakes district.',tags:['Nature','Adventure','Spiritual']},

  // ═══ SOUTH KOREA (12) ═══
  {id:121,name:'Seoul',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.8,price:780,description:'K-pop culture, Gyeongbokgung Palace, and Korean BBQ that changes your life.',tags:['City','Culture','Shopping']},
  {id:122,name:'Jeju Island',country:'South Korea',image:'https://images.unsplash.com/photo-1527549993586-dff825b37782?w=600',rating:4.7,price:680,description:'Volcanic craters, tangerine orchards, and haenyeo diving women.',tags:['Nature','Island','Culture']},
  {id:123,name:'Busan',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.7,price:700,description:'Haeundae Beach, Gamcheon Culture Village, and Jagalchi fish market.',tags:['City','Beach','Food']},
  {id:124,name:'Gyeongju',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.6,price:600,description:'Museum without walls — Silla Dynasty tombs, Bulguksa Temple, and lotus ponds.',tags:['UNESCO','History','Culture']},
  {id:125,name:'Jeonju',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.6,price:550,description:'Birthplace of bibimbap, hanok villages, and traditional paper-making.',tags:['Food','Culture','History']},
  {id:126,name:'Sokcho',country:'South Korea',image:'https://images.unsplash.com/photo-1527549993586-dff825b37782?w=600',rating:4.5,price:580,description:'Gateway to Seoraksan National Park — autumn foliage and coastal seafood.',tags:['Nature','Trekking','Food']},
  {id:127,name:'Incheon',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.3,price:520,description:'Chinatown, Wolmido Island, and Songdo futuristic waterfront city.',tags:['City','Culture','Modern']},
  {id:128,name:'Gangneung',country:'South Korea',image:'https://images.unsplash.com/photo-1527549993586-dff825b37782?w=600',rating:4.5,price:560,description:'Coffee capital, Gyeongpo Beach, and BTS filming locations.',tags:['Beach','Culture','Food']},
  {id:129,name:'Andong',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.5,price:480,description:'Hahoe Folk Village UNESCO site, mask dance festivals, and jjimdak.',tags:['UNESCO','Culture','Food']},
  {id:130,name:'Daegu',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.3,price:500,description:'Apple city — Seomun Market night food, herb medicine alley, and temples.',tags:['City','Food','Culture']},
  {id:131,name:'Suwon',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.4,price:520,description:'Hwaseong Fortress UNESCO walls, Korean folk village, and galbi BBQ.',tags:['UNESCO','History','Food']},
  {id:132,name:'DMZ',country:'South Korea',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',rating:4.6,price:450,description:'Most heavily fortified border — JSA, tunnels, and the Bridge of Freedom.',tags:['History','Adventure','Culture']},

  // ═══ INDIA (20) ═══
  {id:133,name:'Taj Mahal Agra',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.9,price:450,description:'Monument of eternal love — white marble masterpiece at sunrise.',tags:['UNESCO','Romantic','History']},
  {id:134,name:'Jaipur',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.7,price:400,description:'Pink City — Hawa Mahal, Amber Fort, and vibrant bazaars.',tags:['Culture','History','Shopping']},
  {id:135,name:'Varanasi',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.7,price:350,description:'World\'s oldest city — Ganges ghats, evening aarti, and spiritual awakening.',tags:['Spiritual','Culture','History']},
  {id:136,name:'Kerala',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.8,price:520,description:'God\'s Own Country — backwater houseboats, tea hills, and Ayurveda.',tags:['Nature','Wellness','Culture']},
  {id:137,name:'Goa',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.6,price:480,description:'Beach paradise — Portuguese churches, trance parties, and seafood shacks.',tags:['Beach','Nightlife','Culture']},
  {id:138,name:'Delhi',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.5,price:420,description:'Old and New Delhi — Red Fort, Qutub Minar, and Chandni Chowk chaos.',tags:['City','History','Food']},
  {id:139,name:'Mumbai',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.5,price:480,description:'City of Dreams — Gateway of India, Bollywood, and street food capital.',tags:['City','Culture','Food']},
  {id:140,name:'Udaipur',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.8,price:450,description:'City of Lakes — floating palaces, sunset boat rides, and royal heritage.',tags:['Romantic','Culture','History']},
  {id:141,name:'Jodhpur',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.6,price:380,description:'Blue City — Mehrangarh Fort, spice markets, and desert sunsets.',tags:['Culture','History','Adventure']},
  {id:142,name:'Ladakh',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.8,price:600,description:'Little Tibet — Pangong Lake, monastery passes, and Himalayan adventure.',tags:['Adventure','Nature','Spiritual']},
  {id:143,name:'Rishikesh',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.6,price:350,description:'Yoga capital of the world — rafting, ashrams, and Beatles ashram ruins.',tags:['Wellness','Adventure','Spiritual']},
  {id:144,name:'Darjeeling',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.6,price:380,description:'Toy train, tea plantations, and Kanchenjunga sunrise views.',tags:['Nature','Culture','Relaxation']},
  {id:145,name:'Hampi',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.7,price:320,description:'Boulder-strewn UNESCO ruins of Vijayanagara Empire — surreal landscape.',tags:['UNESCO','History','Adventure']},
  {id:146,name:'Jaisalmer',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.7,price:400,description:'Golden City — Thar Desert camels, sandcastle fort, and starlit camping.',tags:['Desert','Adventure','Culture']},
  {id:147,name:'Amritsar',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.7,price:340,description:'Golden Temple serenity, Wagah Border ceremony, and Punjabi food.',tags:['Spiritual','Culture','Food']},
  {id:148,name:'Mysore',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.5,price:350,description:'Palace city — Mysore Palace lights, Chamundi Hills, and silk saris.',tags:['Culture','History','Shopping']},
  {id:149,name:'Andaman Islands',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.7,price:580,description:'India\'s tropical paradise — Havelock Beach, scuba diving, and mangroves.',tags:['Beach','Diving','Island']},
  {id:150,name:'Shimla',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.4,price:360,description:'Queen of Hills — colonial architecture, toy train, and mountain views.',tags:['Nature','Culture','Relaxation']},
  {id:151,name:'Manali',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.6,price:400,description:'Himalayan adventure town — Rohtang Pass, rafting, and apple orchards.',tags:['Adventure','Nature','Winter']},
  {id:152,name:'Kolkata',country:'India',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',rating:4.4,price:360,description:'City of Joy — Victoria Memorial, Howrah Bridge, and Bengali sweets.',tags:['City','Culture','Food']},

  // ═══ SRI LANKA (10) ═══
  {id:153,name:'Sigiriya',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.8,price:420,description:'Lion Rock fortress — ancient palace ruins atop a massive rock pillar.',tags:['UNESCO','History','Adventure']},
  {id:154,name:'Kandy',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.6,price:380,description:'Temple of the Tooth, botanical gardens, and cultural dance shows.',tags:['Culture','UNESCO','Nature']},
  {id:155,name:'Ella',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.7,price:350,description:'Nine Arches Bridge, Little Adam\'s Peak, and tea plantation walks.',tags:['Nature','Trekking','Romantic']},
  {id:156,name:'Galle',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.7,price:400,description:'Dutch colonial fort, lighthouse sunsets, and boutique cafes.',tags:['UNESCO','History','Beach']},
  {id:157,name:'Colombo',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.4,price:380,description:'Gangaramaya Temple, Pettah markets, and rooftop cocktail bars.',tags:['City','Culture','Food']},
  {id:158,name:'Trincomalee',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.6,price:360,description:'Whale watching, Pigeon Island snorkeling, and hot springs.',tags:['Beach','Wildlife','Nature']},
  {id:159,name:'Dambulla',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.6,price:340,description:'Cave temples with 150+ Buddha statues and ancient rock paintings.',tags:['UNESCO','Culture','Spiritual']},
  {id:160,name:'Mirissa',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.6,price:380,description:'Blue whale watching, coconut tree hill, and beach party vibes.',tags:['Beach','Wildlife','Nightlife']},
  {id:161,name:'Nuwara Eliya',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.5,price:350,description:'Little England — tea factories, waterfalls, and cool misty climate.',tags:['Nature','Culture','Relaxation']},
  {id:162,name:'Yala National Park',country:'Sri Lanka',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',rating:4.7,price:450,description:'Highest leopard density on earth — safari jeeps, elephants, and birds.',tags:['Wildlife','Nature','Safari']},

  // ═══ MALDIVES (8) ═══
  {id:163,name:'Male Atoll',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.9,price:1200,description:'Crystal lagoons, overwater bungalows, and white-sand dream escape.',tags:['Beach','Luxury','Island']},
  {id:164,name:'Baa Atoll',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.9,price:1400,description:'UNESCO biosphere — manta ray feeding, bioluminescent beaches.',tags:['UNESCO','Diving','Luxury']},
  {id:165,name:'Ari Atoll',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.8,price:1300,description:'Whale shark swimming, pristine house reefs, and sandbank picnics.',tags:['Diving','Wildlife','Luxury']},
  {id:166,name:'Maafushi',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.5,price:600,description:'Budget Maldives — local island guesthouses, bikini beach, and excursions.',tags:['Beach','Budget','Island']},
  {id:167,name:'Raa Atoll',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.8,price:1500,description:'Ultra-luxury overwater villas, private reefs, and sunset dolphin cruises.',tags:['Luxury','Romantic','Island']},
  {id:168,name:'Lhaviyani Atoll',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.7,price:1100,description:'Shipwreck diving, kanduoiy channels, and untouched coral gardens.',tags:['Diving','Adventure','Luxury']},
  {id:169,name:'Addu Atoll',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.6,price:900,description:'Southernmost atoll — WWII history, nature walks, and authentic culture.',tags:['Culture','Nature','Remote']},
  {id:170,name:'Fuvahmulah',country:'Maldives',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',rating:4.7,price:800,description:'Tiger shark diving capital, unique freshwater lakes, and tropical fruits.',tags:['Diving','Adventure','Nature']},

   // ═══ UAE (8) ═══
  {id:258,name:'Dubai',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.7,price:1300,description:'Futuristic skylines, world-record attractions, and golden desert adventures.',tags:['Luxury','City','Desert']},
  {id:259,name:'Abu Dhabi',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.7,price:1200,description:'Sheikh Zayed Mosque, Louvre Abu Dhabi, and Yas Island theme parks.',tags:['Culture','Luxury','City']},
  {id:260,name:'Sharjah',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.4,price:800,description:'Cultural capital — museums, Islamic art, and Blue Souk shopping.',tags:['Culture','Shopping','City']},
  {id:261,name:'Ras Al Khaimah',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.5,price:900,description:'Jebel Jais zipline, desert glamping, and mangrove kayaking.',tags:['Adventure','Nature','Luxury']},
  {id:262,name:'Fujairah',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.4,price:850,description:'East coast beaches, Al Bidyah Mosque, and scuba diving spots.',tags:['Beach','Culture','Diving']},
  {id:263,name:'Al Ain',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.3,price:750,description:'Garden City — oasis UNESCO site, Jebel Hafeet, and camel market.',tags:['UNESCO','Nature','Culture']},
  {id:264,name:'Dubai Desert Safari',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.6,price:1100,description:'Dune bashing, camel rides, belly dancing, and BBQ under the stars.',tags:['Adventure','Desert','Culture']},
  {id:265,name:'Palm Jumeirah',country:'UAE',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',rating:4.6,price:1500,description:'Man-made island icon — Atlantis resort, beach clubs, and luxury living.',tags:['Luxury','Beach','Modern']},

  // ═══ USA (20) ═══
  {id:266,name:'New York City',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.7,price:1250,description:'Times Square, Central Park, world-class museums, and Broadway shows.',tags:['City','Culture','Shopping']},
  {id:267,name:'Los Angeles',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.5,price:1100,description:'Hollywood, Santa Monica Pier, Venice Beach, and Griffith Observatory.',tags:['City','Beach','Entertainment']},
  {id:268,name:'San Francisco',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.6,price:1150,description:'Golden Gate Bridge, Alcatraz, cable cars, and Fisherman\'s Wharf.',tags:['City','Culture','Nature']},
  {id:269,name:'Las Vegas',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.5,price:1000,description:'Entertainment capital — casinos, world shows, and Grand Canyon gateway.',tags:['Nightlife','Entertainment','Desert']},
  {id:270,name:'Grand Canyon',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.9,price:900,description:'Mile-deep natural wonder — South Rim views, rafting, and helicopter tours.',tags:['Nature','UNESCO','Adventure']},
  {id:271,name:'Hawaii',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.8,price:1400,description:'Aloha spirit — Waikiki, Na Pali Coast, volcanoes, and luau feasts.',tags:['Beach','Nature','Island']},
  {id:272,name:'Miami',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.6,price:1050,description:'South Beach art deco, Little Havana, Everglades, and nightlife.',tags:['Beach','Nightlife','Culture']},
  {id:273,name:'Yellowstone',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.9,price:950,description:'Old Faithful, Grand Prismatic Spring, and America\'s first national park.',tags:['Nature','Wildlife','Adventure']},
  {id:274,name:'Washington D.C.',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.6,price:1000,description:'Smithsonian museums, Lincoln Memorial, and cherry blossom season.',tags:['City','History','Culture']},
  {id:275,name:'New Orleans',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.7,price:900,description:'Jazz birthplace — French Quarter, beignets, Mardi Gras, and gumbo.',tags:['Music','Food','Culture']},
  {id:276,name:'Yosemite',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.9,price:880,description:'Half Dome, El Capitan, giant sequoias, and breathtaking valley views.',tags:['Nature','Trekking','Adventure']},
  {id:277,name:'Chicago',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.5,price:950,description:'Deep-dish pizza, architecture boat tours, Millennium Park, and blues.',tags:['City','Food','Culture']},
  {id:278,name:'Boston',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.5,price:980,description:'Freedom Trail, Harvard, clam chowder, and fall foliage beauty.',tags:['History','Culture','Food']},
  {id:279,name:'Sedona',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.7,price:920,description:'Red rock vortexes, desert hiking, and spiritual energy centers.',tags:['Nature','Spiritual','Adventure']},
  {id:280,name:'Alaska',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.8,price:1300,description:'Last frontier — glaciers, grizzly bears, Northern Lights, and cruises.',tags:['Nature','Wildlife','Adventure']},
  {id:281,name:'Nashville',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.5,price:850,description:'Music City — honky-tonks, Country Music Hall of Fame, and hot chicken.',tags:['Music','Food','City']},
  {id:282,name:'Portland Oregon',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.5,price:880,description:'Keep Portland Weird — food trucks, craft beer, and Columbia River Gorge.',tags:['Food','Culture','Nature']},
  {id:283,name:'Zion National Park',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.8,price:850,description:'Angel\'s Landing hike, The Narrows slot canyon, and red cliff paradise.',tags:['Nature','Trekking','Adventure']},
  {id:284,name:'Key West',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.5,price:950,description:'Southernmost point — sunset at Mallory Square, Hemingway cats, and diving.',tags:['Beach','Culture','Island']},
  {id:285,name:'Savannah',country:'USA',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',rating:4.6,price:820,description:'Spanish moss, historic squares, haunted tours, and Southern hospitality.',tags:['History','Culture','Romantic']},

  // ═══ AUSTRALIA (15) ═══
  {id:286,name:'Sydney',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.7,price:1100,description:'Opera House, Harbour Bridge, Bondi Beach, and harbour ferry rides.',tags:['City','Beach','Adventure']},
  {id:287,name:'Melbourne',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.7,price:1050,description:'Coffee capital, street art laneways, MCG, and Great Ocean Road gateway.',tags:['City','Culture','Food']},
  {id:288,name:'Great Barrier Reef',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.9,price:1300,description:'World\'s largest coral reef system — snorkeling, diving, and island stays.',tags:['Diving','Nature','UNESCO']},
  {id:289,name:'Uluru',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.8,price:1100,description:'Sacred red monolith — Field of Light, Aboriginal culture, and desert stars.',tags:['Nature','Spiritual','UNESCO']},
  {id:290,name:'Gold Coast',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.5,price:950,description:'Surfers Paradise, theme parks, hinterland rainforest, and nightlife.',tags:['Beach','Family','Nightlife']},
  {id:291,name:'Cairns',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.6,price:1050,description:'Gateway to reef and rainforest — Daintree, bungee jumping, and barramundi.',tags:['Adventure','Nature','Diving']},
  {id:292,name:'Tasmania',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.7,price:1000,description:'Cradle Mountain, MONA museum, wild coastlines, and gourmet produce.',tags:['Nature','Culture','Food']},
  {id:293,name:'Perth',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.5,price:950,description:'Sunniest city — Kings Park, Rottnest Island quokkas, and Margaret River.',tags:['City','Beach','Nature']},
  {id:294,name:'Great Ocean Road',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.8,price:980,description:'Twelve Apostles, Loch Ard Gorge, and Australia\'s most scenic drive.',tags:['Nature','Adventure','Road Trip']},
  {id:295,name:'Whitsunday Islands',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.8,price:1200,description:'Whitehaven Beach, sailing, and Heart Reef from above.',tags:['Beach','Island','Luxury']},
  {id:296,name:'Byron Bay',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.6,price:950,description:'Lighthouse walks, surf culture, organic markets, and dolphin spotting.',tags:['Beach','Wellness','Culture']},
  {id:297,name:'Kangaroo Island',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.7,price:1050,description:'Wildlife sanctuary — sea lions, koalas, Remarkable Rocks, and honey.',tags:['Wildlife','Nature','Island']},
  {id:298,name:'Adelaide',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.4,price:880,description:'Festival city — Barossa wine, Central Market, and Hahndorf German village.',tags:['Food','Culture','City']},
  {id:299,name:'Kakadu National Park',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.7,price:1000,description:'Aboriginal rock art, crocodile cruises, and Top End wilderness.',tags:['UNESCO','Nature','Culture']},
  {id:300,name:'Blue Mountains',country:'Australia',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',rating:4.6,price:900,description:'Three Sisters, Scenic Railway, eucalyptus haze, and bush walks.',tags:['Nature','Adventure','UNESCO']},
];

const _imagePool = {
  Beach: [
    'photo-1507525428034-b723cf961d3e','photo-1506929562872-bb421503ef21','photo-1520454974749-611b7248ffdb',
    'photo-1509233725247-49e657c54213','photo-1473116763249-2faaef81ccda','photo-1519046904884-53103b34b206',
    'photo-1505228395891-9a51e7e86bf6','photo-1468413253725-0d5181091126','photo-1414609245224-afa02bfb3fda',
    'photo-1531297484001-80022131f5a1','photo-1544550581-5f7ceaf7f992','photo-1528360983277-13d401cdc186',
    'photo-1537956965359-7573183d1f57','photo-1559628233-100c798642d4','photo-1540541338287-41700207dee6'
  ],
  City: [
    'photo-1480714378408-67cf0d13bc1b','photo-1514565131-fce0801e5785','photo-1477959858617-67f85cf4f1df',
    'photo-1449824913935-59a10b8d2000','photo-1517760444937-f6397edcbbcd','photo-1534430480872-3498386e7856',
    'photo-1444723121867-7a241cacace9','photo-1496442226666-8d4d0e62e6e9','photo-1502602898657-3e91760cbb34',
    'photo-1513635269975-59663e0ac1ad','photo-1522083165195-3424ed129620','photo-1508009603885-50cf7c579365',
    'photo-1517154421773-0529f29ea451','photo-1525625293386-3f8f99389edd','photo-1518548419970-58e3b4079ab2'
  ],
  Nature: [
    'photo-1470071459604-3b5ec3a7fe05','photo-1441974231531-c6227db76b6e','photo-1472214103451-9374bd1c798e',
    'photo-1465056836900-8f1e940b3fc8','photo-1482938289607-e9573fc25ebb','photo-1501854140801-50d01698950b',
    'photo-1433086966358-54859d0ed716','photo-1469474968028-56623f02e42e','photo-1418065460487-3e41a6c84dc5',
    'photo-1476514525535-07fb3b4ae5f1','photo-1528127269322-539152f5ae74','photo-1555217851-6141535bd771',
    'photo-1588528402605-1f9b76b1d51c','photo-1504233529578-6d46baba6d34','photo-1531366936337-7c912a4589a7'
  ],
  Culture: [
    'photo-1493976040374-85c8e12f0c0e','photo-1545569341-9eb8b30979d9','photo-1552832230-c0197dd311b5',
    'photo-1569263979104-865ab7cd8d13','photo-1524231757912-21f4fe3a7200','photo-1596402184320-417e7178b2cd',
    'photo-1583422409516-2895a77efded','photo-1570077188670-e3a8d69ac5ff','photo-1524492412937-b28074a5d7da',
    'photo-1612862862126-865765df2ded','photo-1569154941061-e231b4725ef1','photo-1583417319070-4a69db38a482',
    'photo-1585208798174-6cedd86e019a','photo-1560969184-10fe8719e047','photo-1534351590666-13e3e96b5017'
  ],
  Adventure: [
    'photo-1551632811-561732d1e306','photo-1530789253388-582c481c54b0','photo-1504280390367-361c6d9f38f4',
    'photo-1486915309851-b0cc1f8a0084','photo-1519681393784-d120267933ba','photo-1454496522488-7a8e488e8606',
    'photo-1464822759023-fed622ff2c3b','photo-1533130061792-64b345e4a833','photo-1527004013197-933c4bb611b3',
    'photo-1570789210967-2cac24834d46','photo-1641128324972-af3212f0f6bd','photo-1544735716-392fe2489ffa',
    'photo-1526392060635-9d6019884377','photo-1507699622108-4be3abd695ad','photo-1547471080-7cc2caa01a7e'
  ],
  Island: [
    'photo-1559628233-100c798642d4','photo-1518509562904-e7ef99cdcc86','photo-1553603227-2358aabe821e',
    'photo-1516690561799-46d8f74f9abf','photo-1537996194471-e657df975ab4','photo-1609946860441-a51ffcf16d76',
    'photo-1506929562872-bb421503ef21','photo-1544550581-5f7ceaf7f992','photo-1528360983277-13d401cdc186',
    'photo-1540541338287-41700207dee6','photo-1470004914212-05527e49370b','photo-1519021228607-ef780f43d4bb'
  ],
  Food: [
    'photo-1504674900247-0877df9cc836','photo-1414235077428-338989a2e8c0','photo-1555939594-58d7cb561ad1',
    'photo-1567620905732-2d1ec7ab7445','photo-1540189549336-e6e99c3679fe','photo-1476224203421-9ac39bcb3327',
    'photo-1498654896293-37aacf113fd9','photo-1509030450996-dd1a26dda07a','photo-1536697246787-1f7ae568714d',
    'photo-1559592413-7cec4d0cbb28','photo-1596422846543-75c6fc197f07','photo-1590559899731-a382839e5549'
  ],
  History: [
    'photo-1552832230-c0197dd311b5','photo-1569263979104-865ab7cd8d13','photo-1539650116574-8efeb43e2750',
    'photo-1579606032821-4e6161c81571','photo-1555990538-1a0f4b2d0c89','photo-1541849546-216549ae216d',
    'photo-1508804185872-d7badad00f7d','photo-1524231757912-21f4fe3a7200','photo-1596402184320-417e7178b2cd',
    'photo-1489749798305-4fea3ae63d43','photo-1518659526054-190340b32735','photo-1483729558449-99ef09a8c325'
  ],
  Luxury: [
    'photo-1566073771259-6a8506099945','photo-1542314831-068cd1dbfeeb','photo-1520250497591-112f2f40a3f4',
    'photo-1551882547-ff40c63fe5fa','photo-1578683010236-d716f9a3f461','photo-1517840901100-8179e982acb7',
    'photo-1564501049412-61c2a3083791','photo-1445019980597-93fa8acb246c','photo-1571003123894-1f0594d2b5d9',
    'photo-1582719508461-905c673771fd','photo-1596394516093-501ba68a0ba6','photo-1512453979798-5ea266f8880c'
  ],
  Desert: [
    'photo-1509316785289-025f5b846b35','photo-1473580044384-7ba9967e16a0','photo-1542401886-65d6c61db217',
    'photo-1518548419970-58e3b4079ab2','photo-1489749798305-4fea3ae63d43','photo-1579606032821-4e6161c81571'
  ],
  Winter: [
    'photo-1476514525535-07fb3b4ae5f1','photo-1504233529578-6d46baba6d34','photo-1531366936337-7c912a4589a7',
    'photo-1516550893923-42d28e5677af','photo-1559511260-66a68e7c9a43','photo-1545569341-9eb8b30979d9'
  ],
  Diving: [
    'photo-1516690561799-46d8f74f9abf','photo-1544550581-5f7ceaf7f992','photo-1553603227-2358aabe821e',
    'photo-1559628233-100c798642d4','photo-1540541338287-41700207dee6','photo-1518509562904-e7ef99cdcc86'
  ],
  Wildlife: [
    'photo-1547471080-7cc2caa01a7e','photo-1570789210967-2cac24834d46','photo-1580060839134-75a5edca2e99',
    'photo-1516690561799-46d8f74f9abf','photo-1519021228607-ef780f43d4bb','photo-1544735716-392fe2489ffa'
  ]
};

// Fallback pool for tags not in the list
const _fallbackImages = [
  'photo-1488646953014-85cb44e25828','photo-1502602898657-3e91760cbb34','photo-1552733407-5d5c46c3bb3b',
  'photo-1537996194471-e657df975ab4','photo-1506973035872-a4ec16b8e8d9','photo-1483729558449-99ef09a8c325',
  'photo-1533050487297-09b450131914','photo-1589909202802-8f4aadce1849','photo-1559511260-66a68e7c9a43',
  'photo-1507699622108-4be3abd695ad','photo-1470004914212-05527e49370b','photo-1508804185872-d7badad00f7d'
];

function assignUniqueImages() {
  var usedImages = {};
  destinations.forEach(function(dest) {
    var assigned = false;
    // Try each tag to find a unique image
    for (var i = 0; i < dest.tags.length; i++) {
      var tag = dest.tags[i];
      var pool = _imagePool[tag];
      if (!pool) continue;
      // Pick based on destination ID to keep consistent
      var index = (dest.id * 7 + i * 13) % pool.length;
      var photoId = pool[index];
      var url = 'https://images.unsplash.com/' + photoId + '?w=600&auto=format&fit=crop';
      // Try to avoid duplicates nearby
      if (!usedImages[photoId] || usedImages[photoId] < 3) {
        dest.image = url;
        usedImages[photoId] = (usedImages[photoId] || 0) + 1;
        assigned = true;
        break;
      }
    }
    // Fallback if no unique found
    if (!assigned) {
      var fbIndex = dest.id % _fallbackImages.length;
      dest.image = 'https://images.unsplash.com/' + _fallbackImages[fbIndex] + '?w=600&auto=format&fit=crop';
    }
  });
}

const countries = [
  // International
  {name:'Thailand',flag:'🇹🇭',image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600',destinationCount:15,type:'international'},
  {name:'Vietnam',flag:'🇻🇳',image:'https://images.unsplash.com/photo-1528127269322-539801943592?w=600',destinationCount:15,type:'international'},
  {name:'Indonesia',flag:'🇮🇩',image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',destinationCount:15,type:'international'},
  {name:'Malaysia',flag:'🇲🇾',image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600',destinationCount:10,type:'international'},
  {name:'Cambodia',flag:'🇰🇭',image:'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600',destinationCount:8,type:'international'},
  {name:'Singapore',flag:'🇸🇬',image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600',destinationCount:5,type:'international'},
  {name:'Myanmar',flag:'🇲🇲',image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',destinationCount:6,type:'international'},
  {name:'Laos',flag:'🇱🇦',image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',destinationCount:6,type:'international'},
  {name:'Japan',flag:'🇯🇵',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',destinationCount:20,type:'international'},
  {name:'South Korea',flag:'🇰🇷',image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',destinationCount:12,type:'international'},
  {name:'Maldives',flag:'🇲🇻',image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600',destinationCount:8,type:'international'},
  {name:'India',flag:'🇮🇳',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',destinationCount:20,type:'international'},
  {name:'Sri Lanka',flag:'🇱🇰',image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600',destinationCount:10,type:'international'},
  {name:'France',flag:'🇫🇷',image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',destinationCount:13,type:'international'},
  {name:'Italy',flag:'🇮🇹',image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600',destinationCount:15,type:'international'},
  {name:'Spain',flag:'🇪🇸',image:'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600',destinationCount:13,type:'international'},
  {name:'Greece',flag:'🇬🇷',image:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600',destinationCount:12,type:'international'},
  {name:'Switzerland',flag:'🇨🇭',image:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600',destinationCount:10,type:'international'},
  {name:'United Kingdom',flag:'🇬🇧',image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600',destinationCount:12,type:'international'},
  {name:'Turkey',flag:'🇹🇷',image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600',destinationCount:12,type:'international'},
  {name:'UAE',flag:'🇦🇪',image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',destinationCount:8,type:'international'},
  {name:'Australia',flag:'🇦🇺',image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',destinationCount:15,type:'international'},
  {name:'USA',flag:'🇺🇸',image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600',destinationCount:20,type:'international'},

  // Local (Philippines)
  {name:'Palawan',flag:'📍',image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600',destinationCount:3,type:'local'},
  {name:'Cebu',flag:'📍',image:'https://images.unsplash.com/photo-1608304990132-6f15c8e25f98?w=600',destinationCount:2,type:'local'},
  {name:'Siargao',flag:'📍',image:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600',destinationCount:1,type:'local'},
  {name:'Batanes',flag:'📍',image:'https://images.unsplash.com/photo-1597926616299-c049c838a431?w=600',destinationCount:1,type:'local'},
  {name:'Boracay',flag:'📍',image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',destinationCount:1,type:'local'},
  {name:'Bohol',flag:'📍',image:'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600',destinationCount:2,type:'local'},
  {name:'La Union',flag:'📍',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',destinationCount:1,type:'local'},
  {name:'Davao',flag:'📍',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',destinationCount:1,type:'local'},
  {name:'Coron',flag:'📍',image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600',destinationCount:1,type:'local'},
  {name:'Siquijor',flag:'📍',image:'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600',destinationCount:1,type:'local'},
  


 // ═══ PORTUGAL (8) ═══
  {id:301,name:'Lisbon',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.7,price:750,description:'Pastel de nata, tram 28, Alfama fado, and golden hour rooftops.',tags:['City','Culture','Food']},
  {id:302,name:'Porto',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.7,price:700,description:'Port wine cellars, Ribeira riverfront, and blue azulejo tiles everywhere.',tags:['Culture','Food','Romantic']},
  {id:303,name:'Algarve',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.6,price:680,description:'Sea caves, golden cliffs, Benagil grotto, and Europe\'s best beaches.',tags:['Beach','Nature','Adventure']},
  {id:304,name:'Sintra',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.7,price:720,description:'Fairytale Pena Palace, misty forests, and Moorish castle ruins.',tags:['UNESCO','Culture','Romantic']},
  {id:305,name:'Madeira',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.7,price:780,description:'Levada walks, volcanic peaks, flower festivals, and Poncha cocktails.',tags:['Island','Nature','Adventure']},
  {id:306,name:'Azores',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.8,price:820,description:'Mid-Atlantic paradise — crater lakes, whale watching, and hot springs.',tags:['Island','Nature','Remote']},
  {id:307,name:'Coimbra',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.5,price:620,description:'Oldest university in Portugal, baroque library, and student fado.',tags:['Culture','History','Education']},
  {id:308,name:'Évora',country:'Portugal',image:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600',rating:4.5,price:600,description:'Chapel of Bones, Roman temple, and Alentejo wine country.',tags:['UNESCO','History','Food']},

  // ═══ GERMANY (10) ═══
  {id:309,name:'Berlin',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.6,price:820,description:'Brandenburg Gate, Berlin Wall, techno clubs, and kebab culture.',tags:['City','History','Nightlife']},
  {id:310,name:'Munich',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.6,price:880,description:'Oktoberfest, beer gardens, BMW museum, and Bavarian Alps gateway.',tags:['Culture','Food','City']},
  {id:311,name:'Neuschwanstein',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.8,price:850,description:'Disney inspiration castle in the Bavarian Alps — fairytale perfection.',tags:['Culture','Nature','Romantic']},
  {id:312,name:'Hamburg',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.5,price:800,description:'Elbphilharmonie, Speicherstadt, Reeperbahn, and harbor city vibes.',tags:['City','Culture','Music']},
  {id:313,name:'Cologne',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.5,price:780,description:'Gothic cathedral, Kölsch beer, Rhine riverfront, and Christmas markets.',tags:['Culture','City','Food']},
  {id:314,name:'Black Forest',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.7,price:820,description:'Cuckoo clocks, cherry cake, fairy-tale villages, and hiking trails.',tags:['Nature','Culture','Adventure']},
  {id:315,name:'Heidelberg',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.6,price:780,description:'Romantic castle ruins, old bridge, and Germany\'s oldest university.',tags:['Romantic','History','Culture']},
  {id:316,name:'Dresden',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.5,price:720,description:'Florence of the Elbe — rebuilt baroque splendor and Green Vault treasures.',tags:['Culture','History','Art']},
  {id:317,name:'Rhine Valley',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.6,price:800,description:'Castle-studded river cruise, Riesling vineyards, and Lorelei rock.',tags:['UNESCO','Nature','Cruise']},
  {id:318,name:'Rothenburg ob der Tauber',country:'Germany',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600',rating:4.7,price:760,description:'Best-preserved medieval town — timber frames, night watchman tours.',tags:['History','Culture','Romantic']},

  // ═══ NETHERLANDS (5) ═══
  {id:319,name:'Amsterdam',country:'Netherlands',image:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600',rating:4.6,price:900,description:'Canal rings, Van Gogh Museum, Anne Frank House, and cycling culture.',tags:['City','Culture','Art']},
  {id:320,name:'Rotterdam',country:'Netherlands',image:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600',rating:4.4,price:800,description:'Cube houses, Markthal, and Europe\'s most innovative architecture.',tags:['City','Modern','Culture']},
  {id:321,name:'Keukenhof',country:'Netherlands',image:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600',rating:4.7,price:780,description:'Garden of Europe — 7 million tulips blooming in spring spectacle.',tags:['Nature','Culture','Seasonal']},
  {id:322,name:'The Hague',country:'Netherlands',image:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600',rating:4.4,price:820,description:'International Court, Mauritshuis, and Scheveningen beach resort.',tags:['City','Culture','Beach']},
  {id:323,name:'Utrecht',country:'Netherlands',image:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600',rating:4.5,price:780,description:'Sunken canals, Dom Tower, and cozy cafés without the Amsterdam crowds.',tags:['City','Culture','Food']},

  // ═══ CROATIA (8) ═══
  {id:324,name:'Dubrovnik',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.8,price:850,description:'King\'s Landing — ancient walls, Adriatic views, and Game of Thrones fame.',tags:['UNESCO','Culture','Beach']},
  {id:325,name:'Split',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.6,price:720,description:'Diocletian\'s Palace, Riva promenade, and island-hopping gateway.',tags:['History','Beach','Culture']},
  {id:326,name:'Plitvice Lakes',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.9,price:680,description:'16 terraced turquoise lakes connected by waterfalls — pure magic.',tags:['UNESCO','Nature','Adventure']},
  {id:327,name:'Hvar',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.6,price:780,description:'Lavender island — yacht clubs, beach bars, and medieval old town.',tags:['Island','Nightlife','Beach']},
  {id:328,name:'Zagreb',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.4,price:600,description:'Upper Town charm, Museum of Broken Relationships, and café culture.',tags:['City','Culture','Food']},
  {id:329,name:'Zadar',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.6,price:650,description:'Sea Organ, Sun Salutation, and Hitchcock\'s most beautiful sunset.',tags:['Culture','Beach','Art']},
  {id:330,name:'Korčula',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.5,price:700,description:'Marco Polo\'s birthplace — wine, sword dance, and pine-forested coves.',tags:['Island','Culture','Beach']},
  {id:331,name:'Rovinj',country:'Croatia',image:'https://images.unsplash.com/photo-1555990538-1a0f4b2d0c89?w=600',rating:4.6,price:720,description:'Istrian fishing town — truffle hunts, colorful harbor, and Italian vibes.',tags:['Food','Romantic','Beach']},

  // ═══ MOROCCO (6) ═══
  {id:332,name:'Marrakech',country:'Morocco',image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',rating:4.7,price:550,description:'Jemaa el-Fnaa, riads, souks, and Majorelle Garden blue.',tags:['Culture','Shopping','Food']},
  {id:333,name:'Fes',country:'Morocco',image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',rating:4.6,price:480,description:'World\'s largest car-free medina — tanneries, mosaics, and ancient university.',tags:['UNESCO','Culture','History']},
  {id:334,name:'Chefchaouen',country:'Morocco',image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',rating:4.7,price:450,description:'Blue Pearl — every wall painted blue in the Rif Mountains.',tags:['Culture','Nature','Photography']},
  {id:335,name:'Sahara Desert',country:'Morocco',image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',rating:4.8,price:580,description:'Merzouga dunes, camel treks, starlit camping, and Berber drums.',tags:['Desert','Adventure','Culture']},
  {id:336,name:'Essaouira',country:'Morocco',image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',rating:4.5,price:450,description:'Windy Atlantic port — Gnawa music, fresh fish, and Game of Thrones walls.',tags:['Beach','Culture','Food']},
  {id:337,name:'Casablanca',country:'Morocco',image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',rating:4.3,price:500,description:'Hassan II Mosque on the sea, art deco downtown, and Rick\'s Café.',tags:['City','Culture','History']},

  // ═══ EGYPT (8) ═══
  {id:338,name:'Cairo & Pyramids',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.7,price:600,description:'Great Pyramids, Sphinx, Egyptian Museum, and Khan el-Khalili bazaar.',tags:['UNESCO','History','Culture']},
  {id:339,name:'Luxor',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.8,price:550,description:'Valley of the Kings, Karnak Temple, and hot air balloons over tombs.',tags:['UNESCO','History','Adventure']},
  {id:340,name:'Aswan',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.6,price:500,description:'Philae Temple, felucca sailing, and gateway to Abu Simbel.',tags:['History','Nature','Culture']},
  {id:341,name:'Sharm El Sheikh',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.5,price:580,description:'Red Sea diving paradise — coral reefs, Ras Mohammed, and beach resorts.',tags:['Beach','Diving','Relaxation']},
  {id:342,name:'Abu Simbel',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.8,price:620,description:'Ramesses II colossal temples — relocated stone by stone to avoid floods.',tags:['UNESCO','History','Adventure']},
  {id:343,name:'Alexandria',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.4,price:480,description:'Mediterranean port — Bibliotheca Alexandrina, Qaitbay Citadel, and seafood.',tags:['History','Culture','Food']},
  {id:344,name:'Dahab',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.6,price:420,description:'Backpacker Sinai paradise — Blue Hole diving, windsurfing, and Bedouin camps.',tags:['Diving','Beach','Adventure']},
  {id:345,name:'Hurghada',country:'Egypt',image:'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',rating:4.4,price:500,description:'Red Sea resort town — snorkeling, Giftun Island, and desert quad biking.',tags:['Beach','Diving','Relaxation']},

  // ═══ SOUTH AFRICA (8) ═══
  {id:346,name:'Cape Town',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.8,price:850,description:'Table Mountain, Cape Point, Robben Island, and world-class wine.',tags:['City','Nature','Culture']},
  {id:347,name:'Kruger National Park',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.9,price:950,description:'Big Five safari — lions, elephants, rhinos, leopards, and buffalo.',tags:['Safari','Wildlife','Nature']},
  {id:348,name:'Johannesburg',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.4,price:700,description:'Apartheid Museum, Maboneng Precinct, and Soweto history tours.',tags:['City','History','Culture']},
  {id:349,name:'Garden Route',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.7,price:880,description:'Coastal road trip — Tsitsikamma, Knysna lagoon, and bungee jumping.',tags:['Nature','Adventure','Road Trip']},
  {id:350,name:'Stellenbosch',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.6,price:780,description:'Cape Winelands — wine tasting, oak-lined streets, and gourmet dining.',tags:['Food','Culture','Romantic']},
  {id:351,name:'Drakensberg',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.7,price:750,description:'Dragon Mountains — hiking, San rock art, and Amphitheatre views.',tags:['Nature','UNESCO','Trekking']},
  {id:352,name:'Durban',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.4,price:650,description:'Golden Mile beaches, bunny chow, and uShaka Marine World.',tags:['Beach','Food','City']},
  {id:353,name:'Hermanus',country:'South Africa',image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',rating:4.6,price:800,description:'Best land-based whale watching in the world — June to November season.',tags:['Wildlife','Nature','Beach']},

  // ═══ BRAZIL (10) ═══
  {id:354,name:'Rio de Janeiro',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.7,price:900,description:'Christ the Redeemer, Copacabana, Sugarloaf, and Carnival madness.',tags:['City','Beach','Culture']},
  {id:355,name:'São Paulo',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.4,price:800,description:'Mega city — world-class restaurants, street art, and Japanese quarter.',tags:['City','Food','Culture']},
  {id:356,name:'Iguazu Falls',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.9,price:750,description:'275 waterfalls on the Argentina border — Devil\'s Throat is breathtaking.',tags:['UNESCO','Nature','Adventure']},
  {id:357,name:'Amazon Rainforest',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.8,price:950,description:'Lungs of Earth — jungle lodges, piranha fishing, and pink dolphins.',tags:['Nature','Adventure','Wildlife']},
  {id:358,name:'Salvador',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.6,price:700,description:'Afro-Brazilian soul — Pelourinho, capoeira, acarajé, and drum circles.',tags:['Culture','Food','Music']},
  {id:359,name:'Fernando de Noronha',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.9,price:1100,description:'UNESCO marine paradise — limited visitors, dolphins, and pristine diving.',tags:['Island','Diving','UNESCO']},
  {id:360,name:'Florianópolis',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.5,price:680,description:'Island city — 42 beaches, surfing, lagoons, and oyster farms.',tags:['Beach','Surf','Nature']},
  {id:361,name:'Pantanal',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.7,price:850,description:'World\'s largest wetland — jaguar spotting, caimans, and toucans.',tags:['Wildlife','Nature','Safari']},
  {id:362,name:'Lençóis Maranhenses',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.8,price:780,description:'White sand dunes with turquoise rain lagoons — alien landscape.',tags:['Nature','Adventure','Remote']},
  {id:363,name:'Paraty',country:'Brazil',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600',rating:4.6,price:650,description:'Colonial cobblestone town, cachaça distilleries, and island boat trips.',tags:['Culture','Beach','History']},

  // ═══ MEXICO (10) ═══
  {id:364,name:'Mexico City',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.7,price:700,description:'Frida Kahlo, Teotihuacán pyramids, tacos al pastor, and Zócalo.',tags:['City','Culture','Food']},
  {id:365,name:'Cancún',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.5,price:850,description:'Caribbean beaches, cenote swimming, and Chichén Itzá day trips.',tags:['Beach','Nightlife','Adventure']},
  {id:366,name:'Tulum',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.7,price:800,description:'Cliffside Mayan ruins, cenotes, eco-chic hotels, and beach clubs.',tags:['Beach','Culture','Wellness']},
  {id:367,name:'Oaxaca',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.8,price:600,description:'Mezcal capital — mole, Monte Albán, and Day of the Dead celebrations.',tags:['Culture','Food','History']},
  {id:368,name:'Guanajuato',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.7,price:550,description:'Colorful hillside city — underground streets, mummy museum, and mariachi.',tags:['Culture','City','Art']},
  {id:369,name:'Playa del Carmen',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.5,price:780,description:'Quinta Avenida, Cozumel ferry, cenotes, and Riviera Maya beaches.',tags:['Beach','Nightlife','Diving']},
  {id:370,name:'San Miguel de Allende',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.7,price:650,description:'Best city in the world — colonial charm, art galleries, and hot springs.',tags:['Culture','Art','Romantic']},
  {id:371,name:'Puerto Vallarta',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.5,price:750,description:'Pacific coast — Malecón boardwalk, whale watching, and taco stands.',tags:['Beach','Food','City']},
  {id:372,name:'Chichén Itzá',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.8,price:600,description:'New Wonder of the World — Kukulcán pyramid and sacred cenote.',tags:['UNESCO','History','Culture']},
  {id:373,name:'Copper Canyon',country:'Mexico',image:'https://images.unsplash.com/photo-1518659526054-190340b32735?w=600',rating:4.7,price:700,description:'Bigger than Grand Canyon — El Chepe train, Tarahumara culture, and ziplines.',tags:['Nature','Adventure','Culture']},

  // ═══ PERU (6) ═══
  {id:374,name:'Machu Picchu',country:'Peru',image:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600',rating:4.9,price:850,description:'Lost city of the Incas — cloud-wrapped ruins and Inca Trail trek.',tags:['UNESCO','History','Adventure']},
  {id:375,name:'Cusco',country:'Peru',image:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600',rating:4.7,price:700,description:'Navel of the world — Inca walls, Plaza de Armas, and altitude cocoa tea.',tags:['Culture','History','City']},
  {id:376,name:'Lima',country:'Peru',image:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600',rating:4.5,price:650,description:'South America\'s food capital — ceviche, Miraflores, and Barranco art.',tags:['Food','City','Culture']},
  {id:377,name:'Sacred Valley',country:'Peru',image:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600',rating:4.7,price:750,description:'Ollantaytambo, Pisac markets, and Moray circular terraces.',tags:['Culture','Nature','History']},
  {id:378,name:'Lake Titicaca',country:'Peru',image:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600',rating:4.6,price:680,description:'World\'s highest navigable lake — Uros floating islands and Taquile.',tags:['Nature','Culture','Adventure']},
  {id:379,name:'Rainbow Mountain',country:'Peru',image:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600',rating:4.7,price:720,description:'Vinicunca — striped mineral mountain at 5,200m altitude. Mind-blowing.',tags:['Nature','Trekking','Adventure']},

  // ═══ ARGENTINA (8) ═══
  {id:380,name:'Buenos Aires',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.7,price:800,description:'Paris of South America — tango, steak, La Boca, and Recoleta Cemetery.',tags:['City','Culture','Food']},
  {id:381,name:'Patagonia',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.9,price:1100,description:'End of the world — Perito Moreno glacier, Torres del Paine, and penguins.',tags:['Nature','Adventure','Remote']},
  {id:382,name:'Iguazú Falls',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.9,price:780,description:'Argentina side — walkways through mist, Devil\'s Throat, and rainbows.',tags:['UNESCO','Nature','Adventure']},
  {id:383,name:'Mendoza',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.6,price:750,description:'Malbec wine country — Andes views, vineyard cycling, and steak.',tags:['Food','Nature','Culture']},
  {id:384,name:'Bariloche',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.7,price:850,description:'South American Switzerland — chocolate, lakes, skiing, and Circuito Chico.',tags:['Nature','Winter','Food']},
  {id:385,name:'Ushuaia',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.7,price:950,description:'World\'s southernmost city — Beagle Channel, Tierra del Fuego, and Antarctica gateway.',tags:['Adventure','Nature','Remote']},
  {id:386,name:'Salta',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.5,price:650,description:'Colonial beauty — Train to the Clouds, Quebrada de Humahuaca, and empanadas.',tags:['Culture','Nature','Adventure']},
  {id:387,name:'El Calafate',country:'Argentina',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600',rating:4.8,price:900,description:'Glacier capital — watch Perito Moreno calve ice into turquoise water.',tags:['Nature','Adventure','UNESCO']},

  // ═══ CANADA (10) ═══
  {id:388,name:'Vancouver',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.7,price:1050,description:'Mountains meet ocean — Stanley Park, Granville Island, and sushi scene.',tags:['City','Nature','Food']},
  {id:389,name:'Banff',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.9,price:1100,description:'Turquoise Lake Louise, Moraine Lake, and Rocky Mountain wilderness.',tags:['Nature','Adventure','Winter']},
  {id:390,name:'Toronto',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.5,price:950,description:'CN Tower, Kensington Market, Niagara Falls day trip, and multiculture.',tags:['City','Culture','Food']},
  {id:391,name:'Montreal',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.6,price:900,description:'French Canada — smoked meat, Old Montreal, jazz festivals, and bagels.',tags:['Culture','Food','City']},
  {id:392,name:'Niagara Falls',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.7,price:850,description:'Thundering horseshoe falls, Maid of the Mist, and wine country.',tags:['Nature','Adventure','Romantic']},
  {id:393,name:'Quebec City',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.7,price:880,description:'Only walled city in North America — Château Frontenac and Old Town charm.',tags:['UNESCO','Culture','History']},
  {id:394,name:'Whistler',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.7,price:1200,description:'World-class ski resort, Peak 2 Peak gondola, and mountain biking.',tags:['Winter','Adventure','Nature']},
  {id:395,name:'Victoria BC',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.6,price:950,description:'Butchart Gardens, whale watching, afternoon tea, and harbor walks.',tags:['Nature','Culture','Relaxation']},
  {id:396,name:'Jasper',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.8,price:1000,description:'Dark sky preserve — Maligne Lake, Icefields Parkway, and elk everywhere.',tags:['Nature','Adventure','Wildlife']},
  {id:397,name:'Churchill',country:'Canada',image:'https://images.unsplash.com/photo-1559511260-66a68e7c9a43?w=600',rating:4.7,price:1300,description:'Polar bear capital of the world — Northern Lights and beluga whales.',tags:['Wildlife','Nature','Remote']},

  // ═══ NEW ZEALAND (10) ═══
  {id:398,name:'Queenstown',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.8,price:1050,description:'Adventure capital — bungee, skydiving, Milford Sound, and LOTR scenery.',tags:['Adventure','Nature','City']},
  {id:399,name:'Auckland',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.5,price:950,description:'City of Sails — Sky Tower, Waiheke Island wine, and volcanic hikes.',tags:['City','Nature','Food']},
  {id:400,name:'Milford Sound',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.9,price:1100,description:'Eighth wonder of the world — fjord cruise, waterfalls, and dolphins.',tags:['Nature','UNESCO','Cruise']},
  {id:401,name:'Rotorua',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.6,price:850,description:'Geothermal wonderland — mud pools, geysers, and Māori cultural shows.',tags:['Nature','Culture','Adventure']},
  {id:402,name:'Hobbiton',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.7,price:900,description:'The Shire brought to life — hobbit holes, Green Dragon Inn, and movie magic.',tags:['Culture','Nature','Family']},
  {id:403,name:'Wanaka',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.7,price:950,description:'That Wanaka Tree, Roy\'s Peak hike, and peaceful alpine lake living.',tags:['Nature','Adventure','Romantic']},
  {id:404,name:'Franz Josef Glacier',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.7,price:980,description:'Heli-hike on ancient ice, hot pools, and temperate rainforest.',tags:['Nature','Adventure','UNESCO']},
  {id:405,name:'Wellington',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.5,price:880,description:'Coolest little capital — Te Papa, craft coffee, cable car, and Weta Workshop.',tags:['City','Culture','Food']},
  {id:406,name:'Abel Tasman',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.7,price:920,description:'Golden beaches, kayaking, and coastal track — NZ\'s sunniest national park.',tags:['Beach','Nature','Adventure']},
  {id:407,name:'Tongariro',country:'New Zealand',image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',rating:4.8,price:880,description:'Alpine Crossing — Mordor\'s Mt. Doom, emerald lakes, and volcanic terrain.',tags:['Trekking','Nature','UNESCO']},

  // ═══ NEPAL (6) ═══
  {id:408,name:'Kathmandu',country:'Nepal',image:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600',rating:4.6,price:400,description:'Temple-studded capital — Durbar Square, Swayambhunath, and Thamel bazaar.',tags:['Culture','Spiritual','City']},
  {id:409,name:'Everest Base Camp',country:'Nepal',image:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600',rating:4.9,price:800,description:'Ultimate trek — 12 days to the foot of the world\'s highest peak.',tags:['Trekking','Adventure','Nature']},
  {id:410,name:'Pokhara',country:'Nepal',image:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600',rating:4.7,price:380,description:'Lakeside chill town — Annapurna views, paragliding, and Phewa Lake.',tags:['Nature','Adventure','Relaxation']},
  {id:411,name:'Annapurna Circuit',country:'Nepal',image:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600',rating:4.8,price:750,description:'Classic Himalayan trek — Thorong La pass at 5,416m and Muktinath temple.',tags:['Trekking','Adventure','Nature']},
  {id:412,name:'Chitwan',country:'Nepal',image:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600',rating:4.6,price:450,description:'Jungle safari — one-horned rhinos, Bengal tigers, and canoe rides.',tags:['Safari','Wildlife','Nature']},
  {id:413,name:'Lumbini',country:'Nepal',image:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600',rating:4.5,price:350,description:'Birthplace of Buddha — sacred garden, monasteries from every nation.',tags:['UNESCO','Spiritual','Culture']},

  // ═══ CHINA (15) ═══
  {id:414,name:'Beijing',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.7,price:750,description:'Great Wall, Forbidden City, Temple of Heaven, and Peking duck.',tags:['History','Culture','UNESCO']},
  {id:415,name:'Shanghai',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.6,price:800,description:'The Bund skyline, Yu Garden, French Concession, and xiaolongbao.',tags:['City','Modern','Food']},
  {id:416,name:'Guilin',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.8,price:580,description:'Li River karst landscapes — bamboo rafting through Chinese paintings.',tags:['Nature','Cruise','Photography']},
  {id:417,name:'Chengdu',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.7,price:600,description:'Giant panda base, Sichuan hotpot, and tea house culture.',tags:['Wildlife','Food','Culture']},
  {id:418,name:'Xi\'an',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.7,price:620,description:'Terracotta Warriors, ancient city walls cycling, and Muslim Quarter food.',tags:['UNESCO','History','Food']},
  {id:419,name:'Zhangjiajie',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.8,price:650,description:'Avatar floating mountains — glass bridge, pillar peaks, and cable cars.',tags:['Nature','Adventure','Film']},
  {id:420,name:'Hong Kong',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.7,price:900,description:'Victoria Peak, dim sum, Star Ferry, and neon-lit street markets.',tags:['City','Food','Shopping']},
  {id:421,name:'Lijiang',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.6,price:550,description:'UNESCO old town, Jade Dragon Snow Mountain, and Naxi culture.',tags:['UNESCO','Culture','Nature']},
  {id:422,name:'Hangzhou',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.6,price:620,description:'West Lake beauty, Longjing tea plantations, and ancient pagodas.',tags:['Nature','Culture','Relaxation']},
  {id:423,name:'Great Wall Mutianyu',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.9,price:700,description:'Best-restored Great Wall section — toboggan down, fewer crowds.',tags:['UNESCO','History','Adventure']},
  {id:424,name:'Jiuzhaigou',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.8,price:680,description:'Fairyland valley — multi-colored lakes, waterfalls, and snow peaks.',tags:['Nature','UNESCO','Photography']},
  {id:425,name:'Yangshuo',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.7,price:520,description:'Rock climbing, rice paddies cycling, and karst peak river rafting.',tags:['Adventure','Nature','Culture']},
  {id:426,name:'Lhasa Tibet',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.8,price:850,description:'Potala Palace, Jokhang Temple, and rooftop of the world spirituality.',tags:['Spiritual','Culture','Adventure']},
  {id:427,name:'Harbin',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.6,price:600,description:'Ice Festival — massive illuminated ice sculptures and Russian architecture.',tags:['Winter','Culture','Art']},
  {id:428,name:'Macau',country:'China',image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',rating:4.5,price:780,description:'Vegas of Asia — Portuguese egg tarts, casinos, and Ruins of St. Paul\'s.',tags:['City','Food','Entertainment']},

  // ═══ TAIWAN (6) ═══
  {id:429,name:'Taipei',country:'Taiwan',image:'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600',rating:4.7,price:680,description:'Taipei 101, night markets, Din Tai Fung, and hot spring culture.',tags:['City','Food','Culture']},
  {id:430,name:'Jiufen',country:'Taiwan',image:'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600',rating:4.6,price:600,description:'Spirited Away inspiration — lantern-lit alleys and mountain tea houses.',tags:['Culture','Food','Film']},
  {id:431,name:'Taroko Gorge',country:'Taiwan',image:'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600',rating:4.8,price:620,description:'Marble canyon — Swallow Grotto trail, suspension bridges, and blue water.',tags:['Nature','Adventure','UNESCO']},
  {id:432,name:'Sun Moon Lake',country:'Taiwan',image:'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600',rating:4.6,price:580,description:'Taiwan\'s largest lake — cycling path, Thao culture, and misty pagodas.',tags:['Nature','Culture','Relaxation']},
  {id:433,name:'Kenting',country:'Taiwan',image:'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600',rating:4.5,price:550,description:'Southern tropical beaches, national park, and night market seafood.',tags:['Beach','Nature','Food']},
  {id:434,name:'Alishan',country:'Taiwan',image:'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600',rating:4.7,price:580,description:'Sea of clouds sunrise, ancient cypress forest, and mountain railway.',tags:['Nature','Adventure','Culture']},

  // ═══ COLOMBIA (6) ═══
  {id:435,name:'Cartagena',country:'Colombia',image:'https://images.unsplash.com/photo-1533050487297-09b450131914?w=600',rating:4.7,price:650,description:'Walled colonial city — colorful streets, rooftop bars, and Caribbean vibes.',tags:['Culture','Beach','City']},
  {id:436,name:'Medellín',country:'Colombia',image:'https://images.unsplash.com/photo-1533050487297-09b450131914?w=600',rating:4.6,price:550,description:'City of eternal spring — Comuna 13 graffiti, cable cars, and nightlife.',tags:['City','Culture','Nightlife']},
  {id:437,name:'Bogotá',country:'Colombia',image:'https://images.unsplash.com/photo-1533050487297-09b450131914?w=600',rating:4.5,price:500,description:'La Candelaria, Gold Museum, Monserrate, and emerging food scene.',tags:['City','Culture','Food']},
  {id:438,name:'Cocora Valley',country:'Colombia',image:'https://images.unsplash.com/photo-1533050487297-09b450131914?w=600',rating:4.8,price:480,description:'World\'s tallest palm trees towering through cloud forest mist.',tags:['Nature','Trekking','Photography']},
  {id:439,name:'Tayrona Park',country:'Colombia',image:'https://images.unsplash.com/photo-1533050487297-09b450131914?w=600',rating:4.7,price:520,description:'Jungle meets Caribbean — hammock camping, beaches, and Lost City trek.',tags:['Beach','Nature','Adventure']},
  {id:440,name:'San Andrés',country:'Colombia',image:'https://images.unsplash.com/photo-1533050487297-09b450131914?w=600',rating:4.5,price:580,description:'Seven-color sea — Caribbean island, Johnny Cay, and reggae culture.',tags:['Beach','Island','Culture']},

  // ═══ COSTA RICA (6) ═══
  {id:441,name:'Arenal',country:'Costa Rica',image:'https://images.unsplash.com/photo-1519021228607-ef780f43d4bb?w=600',rating:4.7,price:720,description:'Volcano hot springs, hanging bridges, and jungle zip-lining.',tags:['Nature','Adventure','Wellness']},
  {id:442,name:'Manuel Antonio',country:'Costa Rica',image:'https://images.unsplash.com/photo-1519021228607-ef780f43d4bb?w=600',rating:4.6,price:680,description:'Monkeys on the beach, national park trails, and Pacific sunsets.',tags:['Beach','Wildlife','Nature']},
  {id:443,name:'Monteverde',country:'Costa Rica',image:'https://images.unsplash.com/photo-1519021228607-ef780f43d4bb?w=600',rating:4.7,price:650,description:'Cloud forest reserve — quetzal birds, canopy walks, and coffee tours.',tags:['Nature','Wildlife','Adventure']},
  {id:444,name:'Tortuguero',country:'Costa Rica',image:'https://images.unsplash.com/photo-1519021228607-ef780f43d4bb?w=600',rating:4.6,price:600,description:'Little Amazon — sea turtle nesting, canal boats, and jungle wildlife.',tags:['Wildlife','Nature','Remote']},
  {id:445,name:'Corcovado',country:'Costa Rica',image:'https://images.unsplash.com/photo-1519021228607-ef780f43d4bb?w=600',rating:4.8,price:750,description:'Most biodiverse place on Earth — scarlet macaws, tapirs, and jaguars.',tags:['Nature','Wildlife','Adventure']},
  {id:446,name:'Tamarindo',country:'Costa Rica',image:'https://images.unsplash.com/photo-1519021228607-ef780f43d4bb?w=600',rating:4.5,price:620,description:'Surf town — beginner waves, leatherback turtles, and pura vida sunsets.',tags:['Beach','Surf','Nightlife']},

  // ═══ ICELAND (6) ═══
  {id:447,name:'Reykjavik',country:'Iceland',image:'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600',rating:4.6,price:1100,description:'Colorful capital — Hallgrímskirkja, Northern Lights, and hot dog stands.',tags:['City','Culture','Nature']},
  {id:448,name:'Golden Circle',country:'Iceland',image:'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600',rating:4.8,price:1050,description:'Geysir, Gullfoss waterfall, and Þingvellir tectonic plate rift.',tags:['Nature','UNESCO','Adventure']},
  {id:449,name:'Blue Lagoon',country:'Iceland',image:'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600',rating:4.7,price:1200,description:'Milky-blue geothermal spa surrounded by black lava fields.',tags:['Wellness','Nature','Luxury']},
  {id:450,name:'Jökulsárlón',country:'Iceland',image:'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600',rating:4.9,price:1100,description:'Glacier lagoon — floating icebergs, Diamond Beach, and seal watching.',tags:['Nature','Adventure','Photography']},
  {id:451,name:'Vik',country:'Iceland',image:'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600',rating:4.7,price:1000,description:'Black sand Reynisfjara Beach, basalt columns, and puffin cliffs.',tags:['Nature','Beach','Adventure']},
  {id:452,name:'Snæfellsnes',country:'Iceland',image:'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600',rating:4.7,price:1050,description:'Iceland in miniature — Kirkjufell mountain, lava caves, and glacier.',tags:['Nature','Adventure','Photography']},

  // ═══ NORWAY (6) ═══
  {id:453,name:'Bergen',country:'Norway',image:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',rating:4.6,price:1100,description:'Bryggen wharf, fjord gateway, fish market, and funicular views.',tags:['UNESCO','City','Nature']},
  {id:454,name:'Tromsø',country:'Norway',image:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',rating:4.7,price:1200,description:'Arctic capital — Northern Lights, midnight sun, and whale safaris.',tags:['Nature','Adventure','Winter']},
  {id:455,name:'Lofoten Islands',country:'Norway',image:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',rating:4.9,price:1300,description:'Dramatic peaks, red fishing cabins, midnight sun, and Arctic surfing.',tags:['Nature','Adventure','Photography']},
  {id:456,name:'Oslo',country:'Norway',image:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',rating:4.5,price:1050,description:'Munch Museum, Viking ships, opera roof walks, and fjord city.',tags:['City','Culture','Art']},
  {id:457,name:'Geirangerfjord',country:'Norway',image:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',rating:4.9,price:1150,description:'UNESCO fjord — Seven Sisters waterfall, eagle road, and cruise paradise.',tags:['UNESCO','Nature','Cruise']},
  {id:458,name:'Trolltunga',country:'Norway',image:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',rating:4.8,price:1100,description:'Troll\'s Tongue rock — epic cliff ledge photo spot after 10-hour hike.',tags:['Trekking','Nature','Adventure']},

  // ═══ AUSTRIA (6) ═══
  {id:459,name:'Vienna',country:'Austria',image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600',rating:4.7,price:900,description:'Schönbrunn Palace, Sachertorte, opera houses, and coffee culture.',tags:['Culture','History','Food']},
  {id:460,name:'Salzburg',country:'Austria',image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600',rating:4.7,price:880,description:'Sound of Music, Mozart\'s birthplace, fortress, and Alpine scenery.',tags:['Culture','Music','Nature']},
  {id:461,name:'Hallstatt',country:'Austria',image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600',rating:4.8,price:920,description:'Most photographed village — lakeside charm and salt mine history.',tags:['UNESCO','Nature','Romantic']},
  {id:462,name:'Innsbruck',country:'Austria',image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600',rating:4.6,price:900,description:'Alpine capital — Golden Roof, Nordkette cable car, and Olympic slopes.',tags:['Winter','Nature','Culture']},
  {id:463,name:'Wachau Valley',country:'Austria',image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600',rating:4.6,price:820,description:'Danube wine region — apricot orchards, castles, and river cruises.',tags:['UNESCO','Food','Nature']},
  {id:464,name:'Graz',country:'Austria',image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600',rating:4.4,price:780,description:'City of Design — Kunsthaus alien blob, clock tower, and pumpkin seed oil.',tags:['Culture','Food','City']},

  // ═══ CZECH REPUBLIC (4) ═══
  {id:465,name:'Prague',country:'Czech Republic',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.7,price:700,description:'Charles Bridge, astronomical clock, cheap beer, and Gothic spires.',tags:['City','Culture','History']},
  {id:466,name:'Český Krumlov',country:'Czech Republic',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.7,price:600,description:'Fairytale medieval town — castle, river rafting, and tiny cobblestone streets.',tags:['UNESCO','Culture','Romantic']},
  {id:467,name:'Karlovy Vary',country:'Czech Republic',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.5,price:580,description:'Elegant spa town — colonnades, hot springs, and Becherovka liqueur.',tags:['Wellness','Culture','Relaxation']},
  {id:468,name:'Kutná Hora',country:'Czech Republic',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.5,price:520,description:'Sedlec Ossuary bone church — 40,000 human skeletons as decoration.',tags:['History','UNESCO','Culture']},

  // ═══ HUNGARY (4) ═══
  {id:469,name:'Budapest',country:'Hungary',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.7,price:650,description:'Thermal baths, ruin bars, Parliament, and Danube night cruise.',tags:['City','Culture','Nightlife']},
  {id:470,name:'Eger',country:'Hungary',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.5,price:480,description:'Bull\'s Blood wine, Ottoman minaret, baroque old town, and thermal baths.',tags:['Food','History','Culture']},
  {id:471,name:'Lake Balaton',country:'Hungary',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.4,price:500,description:'Hungarian sea — lakeside villages, lavender fields, and wine cellars.',tags:['Nature','Beach','Relaxation']},
  {id:472,name:'Pécs',country:'Hungary',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600',rating:4.4,price:460,description:'Mediterranean vibes — Zsolnay cultural quarter and early Christian tombs.',tags:['UNESCO','Culture','Art']},

  // ═══ JORDAN (5) ═══
  {id:473,name:'Petra',country:'Jordan',image:'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600',rating:4.9,price:700,description:'Rose-red city — Treasury facade, Monastery hike, and Petra by Night.',tags:['UNESCO','History','Adventure']},
  {id:474,name:'Wadi Rum',country:'Jordan',image:'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600',rating:4.8,price:600,description:'Mars on Earth — red desert, Bedouin camps, and Lawrence of Arabia dunes.',tags:['Desert','Adventure','Culture']},
  {id:475,name:'Dead Sea',country:'Jordan',image:'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600',rating:4.6,price:550,description:'Lowest point on Earth — float effortlessly, mud masks, and sunset views.',tags:['Nature','Wellness','Unique']},
  {id:476,name:'Amman',country:'Jordan',image:'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600',rating:4.4,price:500,description:'Citadel hilltop, Roman theatre, and best hummus and mansaf in the world.',tags:['City','Culture','Food']},
  {id:477,name:'Jerash',country:'Jordan',image:'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600',rating:4.6,price:480,description:'Best-preserved Roman city outside Italy — columns, arches, and chariots.',tags:['History','UNESCO','Culture']},

  // ═══ KENYA (6) ═══
  {id:478,name:'Maasai Mara',country:'Kenya',image:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',rating:4.9,price:950,description:'Great Migration — millions of wildebeest, Big Five, and Maasai culture.',tags:['Safari','Wildlife','Nature']},
  {id:479,name:'Nairobi',country:'Kenya',image:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',rating:4.4,price:700,description:'Giraffe Centre, elephant orphanage, national park, and Karen Blixen museum.',tags:['City','Wildlife','Culture']},
  {id:480,name:'Amboseli',country:'Kenya',image:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',rating:4.7,price:850,description:'Kilimanjaro backdrop — elephant herds, flamingo lakes, and Maasai villages.',tags:['Safari','Wildlife','Nature']},
  {id:481,name:'Diani Beach',country:'Kenya',image:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',rating:4.6,price:750,description:'Indian Ocean paradise — white sand, kite surfing, and colobus monkeys.',tags:['Beach','Adventure','Nature']},
  {id:482,name:'Lake Nakuru',country:'Kenya',image:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',rating:4.6,price:780,description:'Flamingo lake turned rhino sanctuary — pink shores and leopard sightings.',tags:['Wildlife','Nature','Safari']},
  {id:483,name:'Lamu Island',country:'Kenya',image:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',rating:4.6,price:680,description:'UNESCO Swahili town — donkey transport, dhow sailing, and no cars.',tags:['UNESCO','Culture','Island']},
];

const hotels = [
  { id:1, name:'Ocean Suites', image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:4500, amenities:['Pool','Spa','WiFi','Restaurant','Gym'], location:'Boracay, Philippines' },
  { id:2, name:'Palawan Treehouse Inn', image:'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=600&auto=format&fit=crop', rating:4.8, pricePerNight:1800, amenities:['WiFi','Kayak','Snorkel Gear','Breakfast'], location:'El Nido, Palawan' },
  { id:3, name:'The Manila Grand', image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop', rating:4.6, pricePerNight:2800, amenities:['WiFi','Restaurant','Business Center','Gym','Parking'], location:'Manila, Philippines' },
  { id:4, name:'Siargao Surf Lodge', image:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop', rating:4.7, pricePerNight:1500, amenities:['WiFi','Surf Boards','Breakfast','Pool'], location:'General Luna, Siargao' },
  { id:5, name:'Cebu Heritage Hotel', image:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&fit=crop', rating:4.5, pricePerNight:2200, amenities:['WiFi','Restaurant','Pool','Spa','Airport Shuttle'], location:'Cebu City, Philippines' },
  { id:6, name:'Bohol Bee Farm Resort', image:'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&auto=format&fit=crop', rating:4.7, pricePerNight:1900, amenities:['Pool','Organic Restaurant','WiFi','Garden Tours'], location:'Panglao, Bohol' },
  { id:7, name:'Coron Bay Resort', image:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&auto=format&fit=crop', rating:4.6, pricePerNight:2100, amenities:['Beachfront','WiFi','Restaurant','Dive Center'], location:'Coron, Palawan' },
  { id:8, name:'Bangkok Riverside Lux', image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop', rating:4.8, pricePerNight:5200, amenities:['Infinity Pool','Spa','WiFi','River View','Restaurant','Gym'], location:'Bangkok, Thailand' },
  { id:9, name:'Phuket Pearl Beach Resort', image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop', rating:4.7, pricePerNight:3800, amenities:['Pool','Beachfront','WiFi','Bar','Spa'], location:'Patong, Phuket' },
  { id:10, name:'Chiang Mai Mountain Lodge', image:'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop', rating:4.8, pricePerNight:2400, amenities:['Mountain View','WiFi','Restaurant','Yoga Studio','Pool'], location:'Chiang Mai, Thailand' },
  { id:11, name:'Ha Long Bay Cruiser', image:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:6800, amenities:['Cruise','All-Inclusive','Kayak','Cave Tours','Fine Dining'], location:'Ha Long Bay, Vietnam' },
  { id:12, name:'Hoi An Lantern Villa', image:'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&auto=format&fit=crop', rating:4.8, pricePerNight:1600, amenities:['WiFi','Bicycle Rental','Breakfast','Pool','Garden'], location:'Hoi An, Vietnam' },
  { id:13, name:'Hanoi Old Quarter Hotel', image:'https://images.unsplash.com/photo-1609412058473-c199497c3c5d?w=600&auto=format&fit=crop', rating:4.5, pricePerNight:1200, amenities:['WiFi','Restaurant','Rooftop Bar','Airport Transfer'], location:'Hanoi, Vietnam' },
  { id:14, name:'Bali Ubud Cliff Villa', image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:5500, amenities:['Infinity Pool','Spa','WiFi','Rice Terrace View','Butler'], location:'Ubud, Bali' },
  { id:15, name:'Seminyak Beach Hotel', image:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop', rating:4.6, pricePerNight:3200, amenities:['Beachfront','Pool','WiFi','Bar','Restaurant'], location:'Seminyak, Bali' },
  { id:16, name:'Raja Ampat Eco Resort', image:'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:8500, amenities:['Dive Center','Snorkel','All-Inclusive','Kayak','Nature Walks'], location:'Raja Ampat, Papua' },
  { id:17, name:'KL Towers Suites', image:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&fit=crop', rating:4.7, pricePerNight:3800, amenities:['Skyline View','Pool','WiFi','Gym','Restaurant','Concierge'], location:'Kuala Lumpur, Malaysia' },
  { id:18, name:'Marina Bay Grand', image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:12000, amenities:['Infinity Pool','Sky Bar','Spa','WiFi','Casino','Fine Dining'], location:'Singapore' },
  { id:19, name:'Sakura Tower Hotel', image:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&auto=format&fit=crop', rating:4.8, pricePerNight:6000, amenities:['Spa','Pool','WiFi','Restaurant','Gym','Concierge'], location:'Tokyo, Japan' },
  { id:20, name:'Kyoto Zen Ryokan', image:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:7500, amenities:['Onsen','Tatami Rooms','Kaiseki Dinner','Garden','Tea Ceremony'], location:'Kyoto, Japan' },
  { id:21, name:'Azure Cliff Resort', image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop', rating:4.7, pricePerNight:3200, amenities:['Pool','WiFi','Beachfront','Bar'], location:'Santorini, Greece' },
  { id:22, name:'Parisian Boutique Hotel', image:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop', rating:4.7, pricePerNight:8200, amenities:['City View','WiFi','Restaurant','Concierge','Room Service'], location:'Paris, France' },
  { id:23, name:'Cappadocia Cave Suites', image:'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:4800, amenities:['Cave Room','Terrace','WiFi','Breakfast','Balloon Tour Booking'], location:'Cappadocia, Turkey' },
  { id:24, name:'Desert Palace Dubai', image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:9500, amenities:['Infinity Pool','Helicopter Pad','Spa','Butler','Gym','Restaurant'], location:'Dubai, UAE' },
  { id:25, name:'Maldives Overwater Paradise', image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:15000, amenities:['Overwater Villa','Glass Floor','Private Pool','Butler','Spa','All-Inclusive'], location:'Male Atoll, Maldives' }
];

const drivers = [
  { id:1, name:'Miguel Santos', photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&face', rating:4.9, trips:1243, price:850, vehicleType:'sedan', vehicle:'Toyota Camry 2023', verified:true },
  { id:2, name:'Andres Reyes', photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&face', rating:4.8, trips:987, price:1100, vehicleType:'suv', vehicle:'Honda CR-V 2023', verified:true },
  { id:3, name:'Carlo Fernandez', photo:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&face', rating:4.7, trips:764, price:1800, vehicleType:'van', vehicle:'Toyota HiAce 2022', verified:true },
  { id:4, name:'Rafael Cruz', photo:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&face', rating:4.9, trips:2100, price:2500, vehicleType:'luxury', vehicle:'Mercedes E-Class 2024', verified:true },
  { id:5, name:'Jose Villanueva', photo:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&face', rating:4.6, trips:512, price:900, vehicleType:'sedan', vehicle:'Nissan Almera 2022', verified:true },
  { id:6, name:'Marco Diaz', photo:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&auto=format&fit=crop&face', rating:4.8, trips:1560, price:1250, vehicleType:'suv', vehicle:'Ford Everest 2023', verified:true },
  { id:7, name:'Luis Garcia', photo:'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&auto=format&fit=crop&face', rating:4.5, trips:380, price:1600, vehicleType:'van', vehicle:'Hyundai H350 2022', verified:false },
  { id:8, name:'Paolo Mendoza', photo:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&face', rating:4.9, trips:1890, price:3200, vehicleType:'luxury', vehicle:'BMW 5 Series 2024', verified:true },
  { id:9, name:'Ricardo Bautista', photo:'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=200&auto=format&fit=crop&face', rating:4.7, trips:940, price:2000, vehicleType:'van', vehicle:'Toyota Grandia 2023', verified:true },
  { id:10, name:'Emilio Tan', photo:'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&face', rating:4.8, trips:1100, price:950, vehicleType:'sedan', vehicle:'Toyota Vios 2024', verified:true }
];

const blogPosts = [
  { id:1, title:'10 Hidden Gems in the Philippines You Must Visit in 2026', image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop', date:'March 28, 2026', readTime:'7 min read', excerpt:'Beyond Boracay and Palawan lie dozens of undiscovered islands, secret waterfalls, and breathtaking landscapes waiting for the adventurous traveler.', category:'Destinations' },
  { id:2, title:'How to Travel Japan on a Budget: The Complete 2026 Guide', image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop', date:'April 2, 2026', readTime:'12 min read', excerpt:"Japan is more affordable than you think. From JR passes to capsule hotels, here's how to experience the Land of the Rising Sun without breaking the bank.", category:'Tips & Tricks' },
  { id:3, title:'Santorini vs. Mykonos: Which Greek Island Is Right for You?', image:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop', date:'April 7, 2026', readTime:'9 min read', excerpt:'Both islands are spectacular, but they cater to very different types of travelers. We break down everything you need to know.', category:'Comparisons' },
  { id:4, title:'Solo Travel Safety: How Vimel Travels Keeps You Protected', image:'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop', date:'April 10, 2026', readTime:'6 min read', excerpt:"Solo travel is liberating — but it comes with risks. Here's how Vimel's verified driver system, certified tickets, and 24/7 support keep solo travelers safe.", category:'Safety' },
  { id:5, title:'Ultimate Southeast Asia Backpacking Route: 30 Days, 5 Countries', image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&auto=format&fit=crop', date:'April 12, 2026', readTime:'15 min read', excerpt:"Thailand to Cambodia to Vietnam to Laos to Philippines. The classic SEA route with Vimel's insider tips, costs, and must-do experiences.", category:'Itinerary' },
  { id:6, title:'Top 5 Romantic Destinations for Couples in Southeast Asia', image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop', date:'April 14, 2026', readTime:'8 min read', excerpt:'From candlelit dinners in Bali to private lagoon tours in Palawan, these destinations will take your relationship to new heights.', category:'Romance' },
  { id:7, title:'Vietnam Street Food Guide: What to Eat in Every City', image:'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=600&auto=format&fit=crop', date:'April 16, 2026', readTime:'11 min read', excerpt:'Pho in Hanoi, banh mi in Hoi An, bun cha on every corner. Your definitive guide to eating your way through Vietnam for under $10/day.', category:'Food' },
  { id:8, title:'Island Hopping Philippines: Palawan vs. Siargao vs. Cebu', image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600&auto=format&fit=crop', date:'April 18, 2026', readTime:'10 min read', excerpt:'Three islands, three completely different vibes. Lagoons, surf breaks, or whale sharks — which Filipino island paradise is calling your name?', category:'Comparisons' }
];

const searchSuggestions = [
  'Palawan','Boracay','Siargao','Cebu','Bohol','Batanes','Coron','El Nido','La Union','Siquijor','Davao','Vigan','Sagada','Camiguin',
  'Bangkok','Phuket','Chiang Mai','Krabi','Koh Samui','Koh Phi Phi','Pai','Ayutthaya',
  'Hanoi','Ho Chi Minh City','Ha Long Bay','Da Nang','Hoi An','Sapa','Nha Trang','Dalat',
  'Bali','Ubud','Seminyak','Raja Ampat','Yogyakarta','Komodo','Lombok','Nusa Penida','Jakarta',
  'Kuala Lumpur','Langkawi','Penang','Borneo','Cameron Highlands',
  'Siem Reap','Phnom Penh','Singapore','Luang Prabang','Bagan',
  'Tokyo','Kyoto','Osaka','Seoul','Jeju Island',
  'Maldives','Paris','Santorini','Rome','Barcelona','London','Swiss Alps','Istanbul','Cappadocia',
  'Dubai','New York City','Sydney'
];

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    '<i class="fas fa-star"></i>'.repeat(full) +
    (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
    '<i class="far fa-star"></i>'.repeat(empty)
  );
}

function renderDestinations() {
  const container = document.getElementById('recommendationsRow');
  if (!container) return;
  container.innerHTML = destinations.map(dest => `
    <div class="dest-card reveal" data-id="${dest.id}">
      <div class="dest-img-wrap">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy" class="dest-img">
        <div class="dest-tags">
          ${dest.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="dest-price-badge">from $${dest.price.toLocaleString()}</div>
      </div>
      <div class="dest-body">
        <div class="dest-meta">
          <span class="dest-location"><i class="fas fa-map-marker-alt"></i> ${dest.country}</span>
          <span class="dest-rating">${renderStars(dest.rating)} ${dest.rating}</span>
        </div>
        <h3 class="dest-name">${dest.name}</h3>
        <p class="dest-desc">${dest.description}</p>
        <button class="btn btn-accent btn-sm dest-book-btn" onclick="openBookingModal('destination', ${dest.id})">
          Book Now <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderCountries(filterType = 'international') {
  const container = document.getElementById('countryGrid');
  if (!container) return;
  const filtered = countries.filter(c => c.type === filterType);
  container.innerHTML = filtered.map(c => `
    <div class="country-card reveal" data-type="${c.type}">
      <div class="country-img-wrap">
        <img src="${c.image}" alt="${c.name}" loading="lazy" class="country-img">
        <div class="country-overlay">
          <span class="country-flag">${c.flag}</span>
          <span class="country-dest-count">${c.destinationCount} Destinations</span>
        </div>
      </div>
      <div class="country-body">
        <h3 class="country-name">${c.name}</h3>
        <button class="btn btn-ghost btn-sm" onclick="exploreCountry('${c.name}')">
          Explore <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderDrivers(vehicleType = 'all', sortBy = 'rating') {
  const container = document.getElementById('driverGrid');
  if (!container) return;
  let filtered = vehicleType === 'all' ? [...drivers] : drivers.filter(d => d.vehicleType === vehicleType);
  filtered.sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });
  container.innerHTML = filtered.map(d => `
    <div class="driver-card reveal" data-vehicle="${d.vehicleType}">
      <div class="driver-header">
        <img src="${d.photo}" alt="${d.name}" loading="lazy" class="driver-photo">
        <div class="driver-info">
          <h4 class="driver-name">
            ${d.name}
            ${d.verified ? '<span class="verified-badge"><i class="fas fa-shield-alt"></i> Verified</span>' : ''}
          </h4>
          <span class="driver-vehicle"><i class="fas fa-car"></i> ${d.vehicle}</span>
          <div class="driver-rating">${renderStars(d.rating)} <span>${d.rating}</span></div>
        </div>
      </div>
      <div class="driver-stats">
        <div class="driver-stat"><i class="fas fa-road"></i><span>${d.trips.toLocaleString()} trips</span></div>
        <div class="driver-stat"><i class="fas fa-tag"></i><span>₱${d.price.toLocaleString()}/day</span></div>
        <div class="driver-stat"><i class="fas fa-car-alt"></i><span>${d.vehicleType.charAt(0).toUpperCase() + d.vehicleType.slice(1)}</span></div>
      </div>
      <button class="btn btn-accent btn-block" onclick="openModal('loginModal')">
        <i class="fas fa-calendar-check"></i> Book This Driver
      </button>
    </div>
  `).join('');
}

function renderHotels() {
  const container = document.getElementById('hotelGrid');
  if (!container) return;
  container.innerHTML = hotels.map(h => `
    <div class="hotel-card reveal">
      <div class="hotel-img-wrap">
        <img src="${h.image}" alt="${h.name}" loading="lazy" class="hotel-img">
        <div class="hotel-price-badge">₱${h.pricePerNight.toLocaleString()}/night</div>
      </div>
      <div class="hotel-body">
        <div class="hotel-meta">
          <span class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${h.location}</span>
          <span class="hotel-rating">${renderStars(h.rating)} ${h.rating}</span>
        </div>
        <h3 class="hotel-name">${h.name}</h3>
        <div class="hotel-amenities">
          ${h.amenities.map(a => `<span class="amenity-tag"><i class="fas fa-check"></i> ${a}</span>`).join('')}
        </div>
        <button class="btn btn-accent btn-block" onclick="openModal('loginModal')">
          <i class="fas fa-concierge-bell"></i> Book Now
        </button>
      </div>
    </div>
  `).join('');
}


function renderBlogPosts() {
  const container = document.getElementById('blogGrid');
  if (!container) return;
  container.innerHTML = blogPosts.map(post => `
    <article class="blog-card reveal">
      <div class="blog-img-wrap">
        <img src="${post.image}" alt="${post.title}" loading="lazy" class="blog-img">
        <span class="blog-category">${post.category}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
          <span><i class="fas fa-clock"></i> ${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="javascript:void(0)" onclick="openBlogPost(${post.id})" class="blog-read-more">Read More<i class="fas fa-arrow-right"></i></a>
      </div>
    </article>
  `).join('');
}

function renderAllData() {
  renderDestinations();
  renderCountries('international');
  renderDrivers();
  renderHotels();
  renderBlogPosts();
}

/* ========================================================================3–21. ALL FUNCTIONS (Navbar, Mobile, Modals, Search, Chat, etc.)======================================================================== */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => { navbar.classList.toggle('scrolled', window.scrollY > 50); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileClose = document.getElementById('mobileClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
}

function openMobileMenu() {
  document.getElementById('mobileMenu')?.classList.add('open');
  document.getElementById('mobileOverlay')?.classList.add('open');
  document.body.classList.add('no-scroll');
}

window.closeMobileMenu = function () {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.getElementById('mobileOverlay')?.classList.remove('open');
  document.body.classList.remove('no-scroll');
};

window.openModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('active');
  document.body.classList.add('no-scroll');
  modal.addEventListener('click', handleModalOverlayClick);
};

window.closeModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
  modal.removeEventListener('click', handleModalOverlayClick);
};

window.switchModal = function (fromId, toId) {
  closeModal(fromId);
  setTimeout(() => openModal(toId), 200);
};

function handleModalOverlayClick(e) {
  if (e.target === e.currentTarget) closeModal(e.currentTarget.id);
}

function initModalEscapeKey() {
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
  });
}

function initSearchAutocomplete() {
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchSuggestions');
  if (!input || !dropdown) return;
  let debounceTimer = null;
  input.addEventListener('keyup', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value.trim().toLowerCase();
      if (!query) { closeSuggestions(); return; }
      const matches = searchSuggestions.filter(s => s.toLowerCase().includes(query)).slice(0, 6);
      if (!matches.length) { closeSuggestions(); return; }
      dropdown.innerHTML = matches.map(s => `<div class="suggestion-item" tabindex="0"><i class="fas fa-map-marker-alt"></i> ${s}</div>`).join('');
      dropdown.classList.add('open');
      dropdown.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => { input.value = item.textContent.trim(); closeSuggestions(); input.focus(); });
        item.addEventListener('keydown', e => { if (e.key === 'Enter') item.click(); });
      });
    }, 300);
  });
  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) closeSuggestions();
  });
  function closeSuggestions() { dropdown.classList.remove('open'); dropdown.innerHTML = ''; }
}

function initScrollControls() {
  document.querySelectorAll('.scroll-left, .scroll-right').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = document.getElementById(btn.dataset.target);
      if (!container) return;
      container.scrollBy({ left: btn.classList.contains('scroll-right') ? 320 : -320, behavior: 'smooth' });
    });
  });
}

function initCountryFilterTabs() {
  const tabs = document.querySelectorAll('.toggle-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCountries(tab.dataset.filter);
      initScrollReveal();
    });
  });
}

function initVehicleFilters() {
  const typeFilter = document.getElementById('vehicleTypeFilter');
  const sortFilter = document.getElementById('vehicleSortFilter');
  if (!typeFilter || !sortFilter) return;
  const applyFilters = () => { renderDrivers(typeFilter.value, sortFilter.value); initScrollReveal(); };
  typeFilter.addEventListener('change', applyFilters);
  sortFilter.addEventListener('change', applyFilters);
}

function initHotelViewToggle() {
  const viewBtns = document.querySelectorAll('.view-btn');
  const hotelGrid = document.getElementById('hotelGrid');
  const hotelMap = document.getElementById('hotelMap');
  if (!hotelGrid || !hotelMap) return;
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.view === 'map') { hotelGrid.style.display = 'none'; hotelMap.style.display = 'block'; }
      else { hotelGrid.style.display = ''; hotelMap.style.display = 'none'; }
    });
  });
}

window.toggleChat = function () {
  const panel = document.getElementById('chatPanel');
  const badge = document.querySelector('.chat-badge');
  if (!panel) return;
  const isOpen = panel.classList.toggle('open');
  if (isOpen && badge) badge.style.display = 'none';
};

window.toggleTranslate = function () {
  const bar = document.getElementById('translateBar');
  if (!bar) return;
  bar.style.display = bar.style.display === 'none' ? 'flex' : 'none';
};

const botResponses = [
  "Hi there! I'd be happy to help you plan your next adventure. Where are you thinking of going? 🌍",
  "Great choice! Vimel Travels has verified drivers and hotels in that destination. Want me to check availability?",
  "Absolutely! Our 24/7 support team is here for you. I'll connect you with a travel specialist right away.",
  "That's a fantastic destination! I recommend booking at least 2 weeks in advance for the best rates. 🏨",
  "Of course! All our drivers are ID-verified and background-checked. Your safety is our priority. 🛡️",
  "Let me check our latest deals for you. We often have exclusive discounts for early bookings! ✈️",
  "You can download your certified e-ticket directly from your dashboard after booking. 📱",
];
let botResponseIndex = 0;

function initChatWidget() {
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  if (!chatForm || !chatMessages) return;
  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    appendChatMessage(text, 'user');
    chatInput.value = '';
    setTimeout(() => { appendChatMessage(botResponses[botResponseIndex++ % botResponses.length], 'bot'); }, 900);
  });
}

function appendChatMessage(text, sender) {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) return;
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = `chat-msg ${sender}`;
  div.innerHTML = `<div class="msg-bubble"><p>${escapeHtml(text)}</p><span class="msg-time">${time}</span></div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => { btn.classList.toggle('visible', window.scrollY > 500); }, { passive: true });
  btn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  // PASTE YOUR GOOGLE APPS SCRIPT URL HERE ↓↓↓
  var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3JIkD8ZoQ4XL5Pyp_mXLV_PQ5hJdDfITMlWTZ_fcGgnjCylt83Zv9S7KT-d1kXWcY/exec';

  form.addEventListener('submit', function(e) {
    e.preventDefault();

var name    = document.getElementById('contactName')  ? document.getElementById('contactName').value.trim()  : '';
var email   = document.getElementById('contactEmail') ? document.getElementById('contactEmail').value.trim() : '';
var subject = document.getElementById('contactSubject') ? document.getElementById('contactSubject').value.trim() : 'General Inquiry';
var message = document.getElementById('contactMessage') ? document.getElementById('contactMessage').value.trim() : '';

if (!name || !email || !message) {
  showToast('Please fill in all required fields.', 'error');
  return;
}
if (!isValidEmail(email)) {
  showToast('Please enter a valid email address.', 'error');
  return;
}

var submitBtn = form.querySelector('button[type="submit"]');
var originalText = submitBtn ? submitBtn.innerHTML : '';
if (submitBtn) {
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
}

fetch(SCRIPT_URL, {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name:    name,
    email:   email,
    subject: subject,
    message: message
  })
})
.then(function() {
  showToast('Thanks, ' + name + '! Your message has been sent. We will reply within 24 hours. ✈️', 'success');
  form.reset();
})
.catch(function(error) {
  showToast('Oops! Something went wrong. Please try again.', 'error');
  console.error('Contact form error:', error);
})
.finally(function() {
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
});

  });
}

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]')?.value.trim();
    if (!email || !isValidEmail(email)) { showToast('Please enter a valid email address.', 'error'); return; }
    showToast("You're subscribed! Get ready for amazing travel deals. 🌍", 'success');
    form.reset();
  });
}

window.showToast = function (message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fas ${icons[type]||icons.info} toast-icon"></i><span class="toast-msg">${escapeHtml(message)}</span><button class="toast-close" aria-label="Close"><i class="fas fa-times"></i></button>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  const dismiss = () => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); };
  const autoTimer = setTimeout(dismiss, 4000);
  toast.querySelector('.toast-close').addEventListener('click', () => { clearTimeout(autoTimer); dismiss(); });
};

window.handleLogin = function (event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;
  if (!email || !password) { showToast('Please fill in all fields.', 'error'); return; }
  if (!isValidEmail(email)) { showToast('Please enter a valid email address.', 'error'); return; }
  if (password.length < 6) { showToast('Password must be at least 6 characters.', 'error'); return; }
  showToast('Welcome back! Logging you in... ✈️', 'success');
  setTimeout(() => closeModal('loginModal'), 1200);
};

window.handleRegister = function (event) {
  event.preventDefault();
  const firstName = document.getElementById('regFirstName')?.value.trim();
  const lastName = document.getElementById('regLastName')?.value.trim();
  const email = document.getElementById('regEmail')?.value.trim();
  const password = document.getElementById('regPassword')?.value;
  const confirm = document.getElementById('regConfirmPassword')?.value;
  if (!firstName || !lastName || !email || !password || !confirm) { showToast('Please fill in all required fields.', 'error'); return; }
  if (!isValidEmail(email)) { showToast('Please enter a valid email address.', 'error'); return; }
  if (password.length < 8) { showToast('Password must be at least 8 characters.', 'error'); return; }
  if (password !== confirm) { showToast('Passwords do not match.', 'error'); return; }
  showToast(`Welcome to Vimel Travels, ${firstName}! 🎉`, 'success');
  setTimeout(() => closeModal('registerModal'), 1200);
};

window.togglePassword = function (fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  const isPassword = field.type === 'password';
  field.type = isPassword ? 'text' : 'password';
  const toggleBtn = field.closest('.password-field')?.querySelector('.toggle-pass i');
  if (toggleBtn) toggleBtn.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
};

function initPasswordStrengthMeter() {
  const regPassword = document.getElementById('regPassword');
  const strengthBar = document.getElementById('passwordStrength');
  if (!regPassword || !strengthBar) return;
  regPassword.addEventListener('input', () => {
    const val = regPassword.value;
    const score = calcPasswordStrength(val);
    strengthBar.className = 'password-strength';
    if (!val) { strengthBar.innerHTML = ''; return; }
    if (score < 40) { strengthBar.classList.add('strength-weak'); strengthBar.innerHTML = '<div class="strength-bar"></div><span>Weak</span>'; }
    else if (score < 70) { strengthBar.classList.add('strength-medium'); strengthBar.innerHTML = '<div class="strength-bar"></div><span>Medium</span>'; }
    else { strengthBar.classList.add('strength-strong'); strengthBar.innerHTML = '<div class="strength-bar"></div><span>Strong</span>'; }
  });
}

function calcPasswordStrength(password) {
  let score = 0;
  if (!password) return score;
  if (password.length >= 8) score += 20;
  if (password.length >= 12) score += 15;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[a-z]/.test(password)) score += 10;
  if (/[0-9]/.test(password)) score += 20;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;
  return Math.min(score, 100);
}

function initHeroParallax() {
  const items = document.querySelectorAll('.masonry-item[data-speed]');
  if (!items.length) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    items.forEach(item => { item.style.transform = `translateY(${scrollY * (parseFloat(item.dataset.speed) || 0.3)}px)`; });
  }, { passive: true });
}

function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return;
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px 0px' });
  document.querySelectorAll('img[loading="lazy"]').forEach(img => imgObserver.observe(img));
}

window.downloadTicket = function () { showToast('Preparing your certified e-ticket PDF... 📄', 'info'); setTimeout(() => window.print(), 800); };
window.printTicket = function () { window.print(); };

function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

/* ── Internal State ────────────────────────────────────────────────── */
const _booking = {
  type: null,       // 'destination' | 'hotel' | 'driver'
  item: null,       // the looked-up object
  adults: 1,
  children: 0,
};

/* ── openBookingModal(type, id) ─────────────────────────────────────── */
window.openBookingModal = function (type, id) {
  // 1. Look up item from correct data array
  let item = null;
  if (type === 'destination') {
    item = destinations.find(d => d.id === id);
  } else if (type === 'hotel') {
    item = hotels.find(h => h.id === id);
  } else if (type === 'driver') {
    item = drivers.find(d => d.id === id);
  }

  if (!item) {
    showToast('Item not found. Please try again.', 'error');
    return;
  }

  // 2. Save state
  _booking.type = type;
  _booking.item = item;
  _booking.adults = 1;
  _booking.children = 0;

  // 3. Fill modal fields
  _fillBookingModal(type, item);

  // 4. Reset form fields
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const checkIn  = document.getElementById('bookingCheckIn');
  const checkOut = document.getElementById('bookingCheckOut');

  if (checkIn)  { checkIn.value  = todayStr; checkIn.min = todayStr; }
  if (checkOut) {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    checkOut.value = tomorrow.toISOString().split('T')[0];
    checkOut.min   = todayStr;
  }

  // Reset counters
  const adultsEl   = document.getElementById('adultsCount');
  const childrenEl = document.getElementById('childrenCount');
  if (adultsEl)   adultsEl.textContent   = '1';
  if (childrenEl) childrenEl.textContent = '0';

  // Reset textarea & char counter
  const textarea  = document.getElementById('bookingSpecialRequests');
  const charCount = document.getElementById('charCount');
  if (textarea)  textarea.value = '';
  if (charCount) charCount.textContent = '0 / 500';

  // Reset payment to credit card
  const creditCard = document.querySelector('input[name="bookingPayment"][value="credit_card"]');
  if (creditCard) creditCard.checked = true;

  // Clear errors
  const checkInErr  = document.getElementById('checkInError');
  const checkOutErr = document.getElementById('checkOutError');
  if (checkInErr)  checkInErr.textContent  = '';
  if (checkOutErr) checkOutErr.textContent = '';

  // 5. Update price summary
  updateBookingPrice();

  // 6. Open modal using existing pattern
  openModal('bookingModal');
};

/* ── _fillBookingModal — Populates preview card fields ─────────────── */
function _fillBookingModal(type, item) {
  // Determine correct field names per type
  let image, name, location, rating, price, priceUnit, badgeLabel;

  if (type === 'destination') {
    image      = item.image;
    name       = item.name;
    location   = item.country;
    rating     = item.rating;
    price      = item.price;
    priceUnit  = '/ person';
    badgeLabel = 'Destination';
  } else if (type === 'hotel') {
    image      = item.image;
    name       = item.name;
    location   = item.location;
    rating     = item.rating;
    price      = item.pricePerNight;
    priceUnit  = '/ night';
    badgeLabel = 'Hotel';
  } else if (type === 'driver') {
    image      = item.photo;
    name       = item.name;
    location   = `${item.vehicle} · ${item.vehicleType.charAt(0).toUpperCase() + item.vehicleType.slice(1)}`;
    rating     = item.rating;
    price      = item.price;
    priceUnit  = '/ day';
    badgeLabel = 'Driver';
  }

  // Set DOM elements
  const imgEl       = document.getElementById('bookingItemImage');
  const nameEl      = document.getElementById('bookingItemName');
  const locationEl  = document.getElementById('bookingItemLocation');
  const ratingEl    = document.getElementById('bookingItemRating');
  const priceEl     = document.getElementById('bookingItemPriceDisplay');
  const priceUnitEl = document.getElementById('bookingPriceUnit');
  const badgeEl     = document.getElementById('bookingTypeBadge');

  if (imgEl)       { imgEl.src = image; imgEl.alt = name; }
  if (nameEl)      nameEl.textContent = name;
  if (locationEl)  locationEl.textContent = location;
  if (ratingEl)    ratingEl.textContent = rating;
  if (badgeEl)     badgeEl.textContent = badgeLabel;

  if (priceEl) {
    if (type === 'hotel') {
      priceEl.textContent = `₱${price.toLocaleString()}`;
    } else if (type === 'driver') {
      priceEl.textContent = `₱${price.toLocaleString()}`;
    } else {
      priceEl.textContent = `$${price.toLocaleString()}`;
    }
  }
  if (priceUnitEl) priceUnitEl.textContent = priceUnit;

  // Update price summary labels
  const baseLabel     = document.getElementById('priceBaseLabel');
  const durationLabel = document.getElementById('priceDurationLabel');

  if (baseLabel) {
    if (type === 'destination') baseLabel.textContent = 'Base price (per person)';
    else if (type === 'hotel')  baseLabel.textContent = 'Price per night';
    else if (type === 'driver') baseLabel.textContent = 'Price per day';
  }
  if (durationLabel) {
    if (type === 'destination') durationLabel.textContent = 'Duration';
    else if (type === 'hotel')  durationLabel.textContent = 'Nights';
    else if (type === 'driver') durationLabel.textContent = 'Days';
  }
}

/* ── adjustTraveler(type, delta) ───────────────────────────────────── */
window.adjustTraveler = function (type, delta) {
  if (type === 'adults') {
    _booking.adults = Math.max(1, Math.min(10, _booking.adults + delta));
    const el = document.getElementById('adultsCount');
    if (el) el.textContent = _booking.adults;
  } else if (type === 'children') {
    _booking.children = Math.max(0, Math.min(8, _booking.children + delta));
    const el = document.getElementById('childrenCount');
    if (el) el.textContent = _booking.children;
  }
  updateBookingPrice();
};

/* ── updateBookingPrice() — Real-time price calculation ────────────── */
window.updateBookingPrice = function () {
  const item      = _booking.item;
  const type      = _booking.type;
  if (!item) return;

  const checkIn   = document.getElementById('bookingCheckIn')?.value;
  const checkOut  = document.getElementById('bookingCheckOut')?.value;

  let duration = 1;
  let durationLabel = '1 day';

  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    if (diff > 0) {
      duration = diff;
      if (type === 'hotel') {
        durationLabel = `${diff} night${diff !== 1 ? 's' : ''}`;
      } else {
        durationLabel = `${diff} day${diff !== 1 ? 's' : ''}`;
      }
    }
  }

  const basePrice    = type === 'hotel' ? item.pricePerNight : item.price;
  const totalTravelers = _booking.adults + (_booking.children * 0.5);
  let total;

  // Drivers: no per-traveler multiplier (it's a vehicle)
  if (type === 'driver') {
    total = basePrice * duration;
  } else {
    total = basePrice * duration * totalTravelers;
  }

  // Currency symbol
  const sym = (type === 'hotel' || type === 'driver') ? '₱' : '$';

  // Update DOM
  const baseVal     = document.getElementById('priceBaseValue');
  const durationVal = document.getElementById('priceDurationValue');
  const travelersV  = document.getElementById('priceTravelersValue');
  const totalVal    = document.getElementById('priceTotalValue');

  if (baseVal)    baseVal.textContent     = `${sym}${basePrice.toLocaleString()}`;
  if (durationVal) durationVal.textContent = durationLabel;
  if (travelersV) {
    if (type === 'driver') {
      travelersV.textContent = `${_booking.adults} adult${_booking.adults !== 1 ? 's' : ''}${_booking.children > 0 ? ` + ${_booking.children} child${_booking.children !== 1 ? 'ren' : ''}` : ''}`;
    } else {
      travelersV.textContent = `${_booking.adults} adult${_booking.adults !== 1 ? 's' : ''}${_booking.children > 0 ? ` + ${_booking.children} child${_booking.children !== 1 ? 'ren' : ''} (×0.5)` : ''}`;
    }
  }
  if (totalVal) totalVal.textContent = `${sym}${Math.round(total).toLocaleString()}`;
};

/* ── _validateBookingDates() — Returns true if valid ───────────────── */
function _validateBookingDates() {
  const checkIn  = document.getElementById('bookingCheckIn')?.value;
  const checkOut = document.getElementById('bookingCheckOut')?.value;
  const checkInErr  = document.getElementById('checkInError');
  const checkOutErr = document.getElementById('checkOutError');

  let valid = true;

  if (checkInErr)  checkInErr.textContent  = '';
  if (checkOutErr) checkOutErr.textContent = '';

  if (!checkIn) {
    if (checkInErr) checkInErr.textContent = 'Please select a check-in date.';
    valid = false;
  }
  if (!checkOut) {
    if (checkOutErr) checkOutErr.textContent = 'Please select a check-out date.';
    valid = false;
  }

  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    if (d2 <= d1) {
      if (checkOutErr) checkOutErr.textContent = 'Check-out must be after check-in.';
      valid = false;
    }
  }

  return valid;
}

/* ── confirmBooking() ───────────────────────────────────────────────── */
window.confirmBooking = function () {
  const item = _booking.item;
  const type = _booking.type;

  if (!item) {
    showToast('No booking item selected.', 'error');
    return;
  }

  // Validate dates
  if (!_validateBookingDates()) {
    showToast('Please fix the date errors before confirming.', 'error');
    return;
  }

  // Collect form values
  const checkIn    = document.getElementById('bookingCheckIn')?.value;
  const checkOut   = document.getElementById('bookingCheckOut')?.value;
  const requests   = document.getElementById('bookingSpecialRequests')?.value.trim();
  const payment    = document.querySelector('input[name="bookingPayment"]:checked')?.value || 'credit_card';

  // Build ticket details
  const itemName   = type === 'destination' ? item.name
                   : type === 'hotel'       ? item.name
                   : item.name;

  const destination = type === 'destination' ? `${item.name}, ${item.country}`
                    : type === 'hotel'        ? item.location
                    : `${item.vehicle} — with ${item.name}`;

  const travelers  = _booking.adults + _booking.children;
  const bookingRef = `VT-${Date.now().toString(36).toUpperCase().slice(-8)}`;
  const flightCode = `VM-${Math.floor(1000 + Math.random() * 9000)}`;

  // Format dates for ticket
  const checkInDate  = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const formatDate   = d => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const paymentLabels = {
    credit_card:   'Credit Card',
    gcash:         'GCash',
    paymaya:       'PayMaya',
    bank_transfer: 'Bank Transfer',
  };

  // Show success toast
  showToast(`🎉 Booking confirmed for ${escapeHtml(itemName)}! Your e-ticket is ready.`, 'success');

  // Close booking modal
  closeModal('bookingModal');

  // Populate & open ticket modal
  setTimeout(() => {
    const ticketPassenger = document.getElementById('ticketPassenger');
    const ticketDate      = document.getElementById('ticketDate');
    const ticketFlight    = document.getElementById('ticketFlight');
    const ticketSeat      = document.getElementById('ticketSeat');
    const ticketGate      = document.getElementById('ticketGate');
    const ticketRef       = document.getElementById('ticketRef');

    if (ticketPassenger) ticketPassenger.textContent = `${travelers} Traveler${travelers !== 1 ? 's' : ''} — ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    if (ticketDate)      ticketDate.textContent      = `${formatDate(checkInDate)} → ${formatDate(checkOutDate)}`;
    if (ticketFlight)    ticketFlight.textContent    = flightCode;
    if (ticketSeat)      ticketSeat.textContent      = destination;
    if (ticketGate)      ticketGate.textContent      = paymentLabels[payment] || payment;
    if (ticketRef)       ticketRef.textContent       = bookingRef;

    openModal('ticketModal');
  }, 400);
};

/* ── Character counter for Special Requests ─────────────────────────── */
(function initBookingCharCounter() {
  document.addEventListener('DOMContentLoaded', () => {
    const textarea  = document.getElementById('bookingSpecialRequests');
    const charCount = document.getElementById('charCount');
    if (!textarea || !charCount) return;
    textarea.addEventListener('input', () => {
      charCount.textContent = `${textarea.value.length} / 500`;
    });
  });
})();

/* ── Updated render functions with openBookingModal handlers ─────────
   Replace the onclick handlers in existing render functions.
   Paste these UPDATED render functions BELOW the originals in app.js,
   or REPLACE the onclick="openModal('loginModal')" calls directly.

   DESTINATION CARDS — replace onclick in renderDestinations():
     onclick="openBookingModal('destination', ${dest.id})"

   HOTEL CARDS — replace onclick in renderHotels():
     onclick="openBookingModal('hotel', ${h.id})"

   DRIVER CARDS — replace onclick in renderDrivers():
     onclick="openBookingModal('driver', ${d.id})"

   Full updated render functions are provided below for copy-paste.
──────────────────────────────────────────────────────────────────── */

/* UPDATED: renderDestinations — replaces original in app.js */
function renderDestinations() {
  const container = document.getElementById('recommendationsRow');
  if (!container) return;
  container.innerHTML = destinations.map(dest =>
    `<div class="dest-card reveal" data-id="${dest.id}">
       <div class="dest-img-wrap">
         <img src="${dest.image}" alt="${dest.name}" loading="lazy" class="dest-img">
         <div class="dest-tags">
           ${dest.tags.map(t => `<span class="dest-tag">${t}</span>`).join('')}
         </div>
         <div class="dest-price-badge">from $${dest.price.toLocaleString()}</div>
       </div>
       <div class="dest-body">
         <div class="dest-meta">
           <span class="dest-location"><i class="fas fa-map-marker-alt"></i> ${dest.country}</span>
           <span class="dest-rating">${renderStars(dest.rating)} ${dest.rating}</span>
         </div>
         <h3 class="dest-name">${dest.name}</h3>
         <p class="dest-desc">${dest.description}</p>
         <button class="btn btn-accent btn-sm dest-book-btn" onclick="openBookingModal('destination', ${dest.id})">
           Book Now <i class="fas fa-arrow-right"></i>
         </button>
       </div>
     </div>`
  ).join('');
}

/* UPDATED: renderDrivers — replaces original in app.js */
function renderDrivers(vehicleType = 'all', sortBy = 'rating') {
  const container = document.getElementById('driverGrid');
  if (!container) return;
  let filtered = vehicleType === 'all' ? [...drivers] : drivers.filter(d => d.vehicleType === vehicleType);
  filtered.sort((a, b) => {
    if (sortBy === 'rating')      return b.rating - a.rating;
    if (sortBy === 'price-low')   return a.price - b.price;
    if (sortBy === 'price-high')  return b.price - a.price;
    return 0;
  });
  container.innerHTML = filtered.map(d =>
    `<div class="driver-card reveal" data-vehicle="${d.vehicleType}">
       <div class="driver-header">
         <img src="${d.photo}" alt="${d.name}" loading="lazy" class="driver-photo">
         <div class="driver-info">
           <h4 class="driver-name">
             ${d.name}
             ${d.verified ? '<span class="verified-badge"><i class="fas fa-shield-alt"></i> Verified</span>' : ''}
           </h4>
           <span class="driver-vehicle"><i class="fas fa-car"></i> ${d.vehicle}</span>
           <div class="driver-rating">${renderStars(d.rating)} <span>${d.rating}</span></div>
         </div>
       </div>
       <div class="driver-stats">
         <div class="driver-stat"><i class="fas fa-road"></i><span>${d.trips.toLocaleString()} trips</span></div>
         <div class="driver-stat"><i class="fas fa-tag"></i><span>₱${d.price.toLocaleString()}/day</span></div>
         <div class="driver-stat"><i class="fas fa-car-alt"></i><span>${d.vehicleType.charAt(0).toUpperCase() + d.vehicleType.slice(1)}</span></div>
       </div>
       <button class="btn btn-accent btn-block" onclick="openBookingModal('driver', ${d.id})">
         <i class="fas fa-calendar-check"></i> Book This Driver
       </button>
     </div>`
  ).join('');
}

/* UPDATED: renderHotels — replaces original in app.js */
function renderHotels() {
  const container = document.getElementById('hotelGrid');
  if (!container) return;
  container.innerHTML = hotels.map(h =>
    `<div class="hotel-card reveal">
       <div class="hotel-img-wrap">
         <img src="${h.image}" alt="${h.name}" loading="lazy" class="hotel-img">
         <div class="hotel-price-badge">₱${h.pricePerNight.toLocaleString()}/night</div>
       </div>
       <div class="hotel-body">
         <div class="hotel-meta">
           <span class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${h.location}</span>
           <span class="hotel-rating">${renderStars(h.rating)} ${h.rating}</span>
         </div>
         <h3 class="hotel-name">${h.name}</h3>
         <div class="hotel-amenities">
           ${h.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
         </div>
         <button class="btn btn-accent btn-block" onclick="openBookingModal('hotel', ${h.id})">
           <i class="fas fa-concierge-bell"></i> Book Now
         </button>
       </div>
     </div>`
  ).join('');
}

/* ── User State ──────────────────────────────────────────────────────── */
let currentUser = null;

/* ── Mock Bookings Data ─────────────────────────────────────────────── */
const mockBookings = [
  {
    id: 1,
    destination: 'Palawan, Philippines',
    type: 'destination',
    icon: '✈️',
    date: 'May 10 – May 17, 2026',
    status: 'confirmed',
    ref: 'VT-20260510-PL7X',
    price: '₱2,940',
  },
  {
    id: 2,
    destination: 'Kyoto Zen Ryokan',
    type: 'hotel',
    icon: '🏨',
    date: 'June 3 – June 8, 2026',
    status: 'pending',
    ref: 'VT-20260603-KY2M',
    price: '₱37,500',
  },
  {
    id: 3,
    destination: 'Miguel Santos — Toyota Camry',
    type: 'vehicle',
    icon: '🚗',
    date: 'April 20, 2026',
    status: 'confirmed',
    ref: 'VT-20260420-MC9R',
    price: '₱850',
  },
  {
    id: 4,
    destination: 'Bali, Indonesia',
    type: 'destination',
    icon: '🌴',
    date: 'February 14 – February 21, 2026',
    status: 'completed',
    ref: 'VT-20260214-BL5K',
    price: '₱4,760',
  },
];

/* ── Navbar State ────────────────────────────────────────────────────── */
window.updateNavbarState = function () {
  const navAuth    = document.querySelector('.nav-auth');
  const navProfile = document.getElementById('navProfile');
  const mobileAuth = document.querySelector('.mobile-auth');
  const mobileProfSection = document.getElementById('mobileProfileSection');

  if (currentUser) {
    // Desktop navbar
    if (navAuth)    navAuth.style.display    = 'none';
    if (navProfile) navProfile.style.display = 'flex';

    // Mobile menu
    if (mobileAuth)       mobileAuth.style.display        = 'none';
    if (mobileProfSection) mobileProfSection.style.display = 'block';

    // Update avatar initials everywhere
    const initial = currentUser.firstName ? currentUser.firstName.charAt(0).toUpperCase() : '?';
    const fullName = `${currentUser.firstName} ${currentUser.lastName}`.trim();

    _setTextSafe('navAvatarCircle',      initial);
    _setTextSafe('dropdownAvatarCircle', initial);
    _setTextSafe('dropdownName',         fullName);
    _setTextSafe('dropdownEmail',        currentUser.email || '');

    _setTextSafe('mobileAvatarCircle',   initial);
    _setTextSafe('mobileProfileName',    fullName);
    _setTextSafe('mobileProfileEmail',   currentUser.email || '');

    _setTextSafe('sidebarAvatarCircle',  initial);
    _setTextSafe('sidebarName',          fullName);
    _setTextSafe('sidebarEmail',         currentUser.email || '');

    _setTextSafe('profileDisplayAvatar', initial);
    _setTextSafe('profileDisplayName',   fullName);
    _setTextSafe('profileDisplayEmail',  currentUser.email || '');
    _setTextSafe('profileDisplayPhone',  currentUser.phone  ? `📞 ${currentUser.phone}` : '📞 Not set');

    // Pre-fill account settings form
    _setValueSafe('profileFirstName', currentUser.firstName || '');
    _setValueSafe('profileLastName',  currentUser.lastName  || '');
    _setValueSafe('profileEmail',     currentUser.email     || '');
    _setValueSafe('profilePhone',     currentUser.phone     || '');

  } else {
    // Guest state
    if (navAuth)          navAuth.style.display           = '';
    if (navProfile)       navProfile.style.display        = 'none';
    if (mobileAuth)       mobileAuth.style.display        = '';
    if (mobileProfSection) mobileProfSection.style.display = 'none';
  }
};

function _setTextSafe(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function _setValueSafe(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

/* ── Login Override ─────────────────────────────────────────────────── */
window.handleLogin = function (event) {
  event.preventDefault();
  const email    = document.getElementById('loginEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;

  if (!email || !password) { showToast('Please fill in all fields.', 'error'); return; }
  if (!/^[^\s@]+@[^\s@]+[^\s@]+$/.test(email)) { showToast('Please enter a valid email address.', 'error'); return; }
  if (password.length < 6) { showToast('Password must be at least 6 characters.', 'error'); return; }

  // Derive a friendly first/last name from email for demo purposes
  const namePart  = email.split('@')[0];
  const nameParts = namePart.split(/[\.\-\_]/);
  const firstName = _capitalize(nameParts[0] || 'Traveler');
  const lastName  = _capitalize(nameParts[1] || 'Vimel');

  currentUser = { firstName, lastName, email, phone: '' };

  updateNavbarState();
  showToast(`Welcome back, ${firstName}! ✈️`, 'success');
  setTimeout(() => closeModal('loginModal'), 900);
};

/* ── Register Override ──────────────────────────────────────────────── */
window.handleRegister = function (event) {
  event.preventDefault();
  const firstName = document.getElementById('regFirstName')?.value.trim();
  const lastName  = document.getElementById('regLastName')?.value.trim();
  const email     = document.getElementById('regEmail')?.value.trim();
  const phone     = document.getElementById('regPhone')?.value.trim();
  const password  = document.getElementById('regPassword')?.value;
  const confirm   = document.getElementById('regConfirmPassword')?.value;

  if (!firstName || !lastName || !email || !password || !confirm) {
    showToast('Please fill in all required fields.', 'error'); return;
  }
  if (!/^[^\s@]+@[^\s@]+[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address.', 'error'); return;
  }
  if (password.length < 8) {
    showToast('Password must be at least 8 characters.', 'error'); return;
  }
  if (password !== confirm) {
    showToast('Passwords do not match.', 'error'); return;
  }

  currentUser = { firstName, lastName, email, phone };

  updateNavbarState();
  showToast(`Welcome to Vimel Travels, ${firstName}! 🎉`, 'success');
  setTimeout(() => closeModal('registerModal'), 900);
};

/* ── Dropdown Toggle ────────────────────────────────────────────────── */
window.toggleProfileDropdown = function () {
  const dropdown  = document.getElementById('profileDropdown');
  const avatarBtn = document.getElementById('profileAvatarBtn');
  if (!dropdown) return;

  const isOpen = dropdown.classList.toggle('open');
  if (avatarBtn) avatarBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

// Close dropdown on outside click
document.addEventListener('click', function (e) {
  const dropdown  = document.getElementById('profileDropdown');
  const avatarBtn = document.getElementById('profileAvatarBtn');
  if (!dropdown || !dropdown.classList.contains('open')) return;
  if (!avatarBtn?.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    avatarBtn?.setAttribute('aria-expanded', 'false');
  }
});

/* ── Open Profile Modal ─────────────────────────────────────────────── */
window.openProfileModal = function (tab) {
  // Close dropdown first
  const dropdown  = document.getElementById('profileDropdown');
  const avatarBtn = document.getElementById('profileAvatarBtn');
  if (dropdown) { dropdown.classList.remove('open'); }
  if (avatarBtn) avatarBtn.setAttribute('aria-expanded', 'false');

  openModal('profileModal');
  switchProfileTab(tab || 'myProfile');
};

/* ── Switch Profile Tab ─────────────────────────────────────────────── */
window.switchProfileTab = function (tabName) {
  // Hide all panels
  document.querySelectorAll('.profile-tab-panel').forEach(p => p.classList.remove('active'));
  // Deactivate all sidebar items
  document.querySelectorAll('.profile-sidebar-item').forEach(btn => btn.classList.remove('active'));

  // Show target panel
  const panel = document.getElementById(`tab-${tabName}`);
  if (panel) panel.classList.add('active');

  // Activate sidebar button
  const sidebarBtn = document.querySelector(`.profile-sidebar-item[data-tab="${tabName}"]`);
  if (sidebarBtn) sidebarBtn.classList.add('active');

  // Render dynamic content
  if (tabName === 'myBookings') _renderBookings();
  if (tabName === 'passwordSettings') _initProfilePasswordMeter();
};

/* ── Render Bookings ────────────────────────────────────────────────── */
function _renderBookings() {
  const container = document.getElementById('profileBookingsList');
  if (!container) return;

  if (!mockBookings.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px;color:var(--profile-text-muted);">
        <p style="font-size:40px;margin-bottom:12px;">📋</p>
        <p>No bookings yet. Start exploring!</p>
        <button class="btn btn-accent" onclick="closeModal('profileModal')">Explore Destinations</button>
      </div>`;
    return;
  }

  container.innerHTML = mockBookings.map(b => `
    <div class="profile-booking-card">
      <div class="profile-booking-left">
        <div class="profile-booking-icon">${b.icon}</div>
        <div class="profile-booking-info">
          <h4>${b.destination}</h4>
          <p><i class="fas fa-calendar-alt"></i> ${b.date}</p>
          <p class="profile-booking-ref">${b.ref}</p>
        </div>
      </div>
      <div class="profile-booking-right">
        <span class="profile-booking-status ${b.status}">${b.status}</span>
        <span class="profile-booking-price">${b.price}</span>
      </div>
    </div>
  `).join('');

  // Update stat count
  _setTextSafe('profileTotalBookings', mockBookings.length);
}

/* ── Account Update ─────────────────────────────────────────────────── */
window.handleAccountUpdate = function (event) {
  event.preventDefault();
  const firstName = document.getElementById('profileFirstName')?.value.trim();
  const lastName  = document.getElementById('profileLastName')?.value.trim();
  const email     = document.getElementById('profileEmail')?.value.trim();
  const phone     = document.getElementById('profilePhone')?.value.trim();

  if (!firstName || !lastName || !email) {
    showToast('First name, last name, and email are required.', 'error'); return;
  }
  if (!/^[^\s@]+@[^\s@]+[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address.', 'error'); return;
  }

  if (currentUser) {
    currentUser.firstName = firstName;
    currentUser.lastName  = lastName;
    currentUser.email     = email;
    currentUser.phone     = phone;
    updateNavbarState();
  }

  showToast('Profile updated successfully! ✅', 'success');
};

/* ── Password Change ────────────────────────────────────────────────── */
window.handlePasswordChange = function (event) {
  event.preventDefault();
  const current  = document.getElementById('currentPassword')?.value;
  const newPass  = document.getElementById('newPassword')?.value;
  const confirm  = document.getElementById('confirmNewPassword')?.value;

  if (!current || !newPass || !confirm) {
    showToast('Please fill in all password fields.', 'error'); return;
  }
  if (current.length < 6) {
    showToast('Current password is incorrect.', 'error'); return;
  }
  if (newPass.length < 8) {
    showToast('New password must be at least 8 characters.', 'error'); return;
  }
  if (newPass !== confirm) {
    showToast('Passwords do not match.', 'error'); return;
  }

  // Reset fields
  document.getElementById('currentPassword').value    = '';
  document.getElementById('newPassword').value        = '';
  document.getElementById('confirmNewPassword').value = '';

  const strengthBar = document.getElementById('profilePasswordStrength');
  if (strengthBar) { strengthBar.className = 'profile-password-strength'; strengthBar.innerHTML = ''; }
  _resetPasswordRules();

  showToast('Password updated successfully! 🔒', 'success');
};

/* ── Password Strength Meter (Profile) ─────────────────────────────── */
function _initProfilePasswordMeter() {
  const field       = document.getElementById('newPassword');
  const strengthBar = document.getElementById('profilePasswordStrength');
  if (!field || !strengthBar || field.dataset.profileMeterBound) return;
  field.dataset.profileMeterBound = '1';

  field.addEventListener('input', () => {
    const val   = field.value;
    const score = _calcStrength(val);

    strengthBar.className = 'profile-password-strength';
    if (!val) { strengthBar.style.setProperty('--bar', '0%'); return; }
    if (score < 40) strengthBar.classList.add('strength-weak');
    else if (score < 70) strengthBar.classList.add('strength-medium');
    else strengthBar.classList.add('strength-strong');

    // Rule highlights
    _setRulePass('rule-length',  val.length >= 8);
    _setRulePass('rule-upper',   /[A-Z]/.test(val));
    _setRulePass('rule-number',  /[0-9]/.test(val));
    _setRulePass('rule-special', /[^A-Za-z0-9]/.test(val));
  });
}

function _setRulePass(id, pass) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('rule-pass', pass);
}

function _resetPasswordRules() {
  ['rule-length','rule-upper','rule-number','rule-special'].forEach(id => _setRulePass(id, false));
}

function _calcStrength(pw) {
  let s = 0;
  if (!pw) return 0;
  if (pw.length >= 8)  s += 20;
  if (pw.length >= 12) s += 15;
  if (/[A-Z]/.test(pw)) s += 15;
  if (/[a-z]/.test(pw)) s += 10;
  if (/[0-9]/.test(pw)) s += 20;
  if (/[^A-Za-z0-9]/.test(pw)) s += 20;
  return Math.min(s, 100);
}

/* ── Save Preferences ───────────────────────────────────────────────── */
window.handleSavePreferences = function () {
  showToast('Travel preferences saved! 🌍', 'success');
};

/* ── Logout ─────────────────────────────────────────────────────────── */
window.handleLogout = function () {
  currentUser = null;
  localStorage.removeItem('vimelUser');
  updateNavbarState();

  var dropdown = document.getElementById('profileDropdown');
  if (dropdown) dropdown.style.display = 'none';
  closeModal('profileModal');

  showToast("You've been logged out. Safe travels! 🚪", 'info');
  setTimeout(function() { location.reload(); }, 1000);
};

/* ── Utilities ──────────────────────────────────────────────────────── */
function _capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/* ── Init on DOMContentLoaded ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  updateNavbarState();
  console.log('%c✈ Vimel Travels — profile-dashboard.js loaded', 'color:#1E6FD9;font-weight:bold;font-size:13px;');
});

var monthNames = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

function initCustomDatePickers() {
  var pickers = document.querySelectorAll('.custom-date-picker');
  pickers.forEach(function(picker) {
    var yearSelect = picker.querySelector('.date-year');
    var daySelect = picker.querySelector('.date-day');
    if (!yearSelect || !daySelect) return;
    var currentYear = new Date().getFullYear();
    for (var y = currentYear; y <= currentYear + 4; y++) {
      var opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      yearSelect.appendChild(opt);
    }
    for (var d = 1; d <= 31; d++) {
      var opt = document.createElement('option');
      opt.value = d < 10 ? '0' + d : d;
      opt.textContent = d;
      daySelect.appendChild(opt);
    }
    var monthSelect = picker.querySelector('.date-month');
    monthSelect.addEventListener('change', function() { adjustDays(picker); });
    yearSelect.addEventListener('change', function() { adjustDays(picker); });
  });
}

function adjustDays(picker) {
  var month = parseInt(picker.querySelector('.date-month').value);
  var year = parseInt(picker.querySelector('.date-year').value);
  var daySelect = picker.querySelector('.date-day');
  var currentDay = daySelect.value;
  if (!month || !year) return;
  var daysInMonth = new Date(year, month, 0).getDate();
  daySelect.innerHTML = '<option value="">--</option>';
  for (var d = 1; d <= daysInMonth; d++) {
    var opt = document.createElement('option');
    opt.value = d < 10 ? '0' + d : d;
    opt.textContent = d;
    daySelect.appendChild(opt);
  }
  if (parseInt(currentDay) <= daysInMonth) { daySelect.value = currentDay; }
  updateDateDisplay(picker.id);
}

window.toggleDatePicker = function(pickerId) {
  var picker = document.getElementById(pickerId);
  if (!picker) return;
  document.querySelectorAll('.custom-date-picker.open').forEach(function(p) {
    if (p.id !== pickerId) p.classList.remove('open');
  });
  picker.classList.toggle('open');
};

window.closeDatePicker = function(pickerId) {
  var picker = document.getElementById(pickerId);
  if (picker) picker.classList.remove('open');
};

window.updateDateDisplay = function(pickerId) {
  var picker = document.getElementById(pickerId);
  if (!picker) return;
  var month = picker.querySelector('.date-month').value;
  var day = picker.querySelector('.date-day').value;
  var year = picker.querySelector('.date-year').value;
  var displayId = pickerId === 'checkInPicker' ? 'checkInDisplay' : 'checkOutDisplay';
  var inputId = pickerId === 'checkInPicker' ? 'bookingCheckIn' : 'bookingCheckOut';
  var displayEl = document.getElementById(displayId);
  var inputEl = document.getElementById(inputId);
  if (month && day && year) {
    var monthName = monthNames[parseInt(month) - 1];
    displayEl.textContent = monthName + ' / ' + parseInt(day) + ' / ' + year;
    displayEl.style.color = 'var(--text-dark)';
    inputEl.value = year + '-' + month + '-' + day;
    if (typeof updateBookingPrice === 'function') { updateBookingPrice(); }
  } else {
    displayEl.textContent = 'Select date';
    displayEl.style.color = 'var(--text-muted)';
    inputEl.value = '';
  }
};

document.addEventListener('click', function(e) {
  document.querySelectorAll('.custom-date-picker.open').forEach(function(picker) {
    if (!picker.contains(e.target)) { picker.classList.remove('open'); }
  });
});

window.exploreCountry = function(countryName) {
  var destSection = document.getElementById('recommendations');
  if (destSection) destSection.scrollIntoView({ behavior: 'smooth' });
  var container = document.getElementById('recommendationsRow');
  if (!container) return;
  var filtered = destinations.filter(function(d) { return d.country.toLowerCase() === countryName.toLowerCase(); });
  if (filtered.length === 0) { showToast('Showing all destinations for ' + countryName, 'info'); filtered = destinations; }
  container.innerHTML = filtered.map(function(dest) {
    return '<div class="dest-card reveal" data-id="' + dest.id + '"><div class="dest-img-wrap"><img src="' + dest.image + '" alt="' + dest.name + '" loading="lazy" class="dest-img" onerror="handleImgError(this)"><div class="dest-tags">' + dest.tags.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div><div class="dest-price-badge">from $' + dest.price.toLocaleString() + '</div></div><div class="dest-body"><div class="dest-meta"><span class="dest-location"><i class="fas fa-map-marker-alt"></i> ' + dest.country + '</span><span class="dest-rating">' + renderStars(dest.rating) + ' ' + dest.rating + '</span></div><h3 class="dest-name">' + dest.name + '</h3><p class="dest-desc">' + dest.description + '</p><button class="btn btn-accent btn-sm dest-book-btn" onclick="openBookingModal(\'destination\', ' + dest.id + ')">Book Now <i class="fas fa-arrow-right"></i></button></div></div>';
  }).join('');
  initScrollReveal();
  showToast('Showing destinations in ' + countryName, 'info');
};

window.handleImgError = function(img) { img.onerror = null; img.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop'; };

function initImageFallbacks() { document.querySelectorAll('img').forEach(function(img) { if (!img.hasAttribute('onerror')) { img.onerror = function() { handleImgError(this); }; } }); }

window.toggleSOS = function() { var p = document.getElementById('sosPanel'); if (p) p.classList.toggle('open'); };

window.shareEmergencyLocation = function() {
  if (!navigator.geolocation) { showToast('Geolocation not supported.', 'error'); return; }
  navigator.geolocation.getCurrentPosition(function(pos) {
    var lat = pos.coords.latitude.toFixed(6);
    var lng = pos.coords.longitude.toFixed(6);
    navigator.clipboard.writeText('https://www.google.com/maps?q=' + lat + ',' + lng);
    showToast('Location copied! Lat:' + lat + ', Lng:' + lng, 'success');
  }, function() { showToast('Could not detect location.', 'error'); });
};

window.detectIncidentLocation = function() {
  var el = document.getElementById('incidentLocation');
  if (!navigator.geolocation || !el) return;
  el.value = 'Detecting...';
  navigator.geolocation.getCurrentPosition(function(p) {
    el.value = 'Lat ' + p.coords.latitude.toFixed(6) + ', Lng ' + p.coords.longitude.toFixed(6);
  }, function() { el.value = 'Could not detect'; });
};

window.submitIncidentReport = function(event) {
  event.preventDefault();
  var t = document.getElementById('incidentType').value;
  var d = document.getElementById('incidentDesc').value.trim();
  var p = document.getElementById('incidentPhone').value.trim();
  if (!t || !d || !p) { showToast('Please fill in all required fields.', 'error'); return; }
  var sp = document.getElementById('sosPanel'); if (sp) sp.classList.remove('open');
  closeModal('incidentModal');
  showToast('Incident report submitted! Safety team will contact you within 5 minutes.', 'success');
};

var vimelMap = null;
var mapMarkers = [];
var locationCoords = {'Palawan':[9.8349,118.7384],'Boracay':[11.9674,121.9248],'Siargao':[9.8482,126.0458],'Cebu':[10.3157,123.8854],'Bohol':[9.85,124.015],'Batanes':[20.4487,121.9702],'Coron':[12.0075,120.204],'La Union':[16.6159,120.321],'Siquijor':[9.1985,123.595],'Davao':[7.1907,125.4553],'Bangkok':[13.7563,100.5018],'Phuket':[7.8804,98.3923],'Chiang Mai':[18.7883,98.9853],'Krabi':[8.0863,98.9063],'Koh Samui':[9.512,100.0137],'Ha Long Bay':[20.9101,107.1839],'Hanoi':[21.0278,105.8342],'Ho Chi Minh City':[10.8231,106.6297],'Da Nang':[16.0544,108.2022],'Hoi An':[15.8801,108.338],'Bali':[-8.3405,115.092],'Raja Ampat':[-1.0863,130.878],'Yogyakarta':[-7.7956,110.3695],'Komodo Island':[-8.55,119.4833],'Lombok':[-8.65,116.3249],'Kuala Lumpur':[3.139,101.6869],'Langkawi':[6.35,99.8],'Penang':[5.4164,100.3327],'Siem Reap':[13.3671,103.8448],'Phnom Penh':[11.5564,104.9282],'Singapore':[1.3521,103.8198],'Bagan':[21.1717,94.8585],'Luang Prabang':[19.8856,102.1347],'Tokyo':[35.6762,139.6503],'Kyoto':[35.0116,135.7681],'Osaka':[34.6937,135.5023],'Seoul':[37.5665,126.978],'Jeju Island':[33.489,126.4983],'Maldives':[3.2028,73.2207],'Santorini':[36.3932,25.4615],'Paris':[48.8566,2.3522],'Swiss Alps':[46.8182,8.2275],'Rome':[41.9028,12.4964],'Barcelona':[41.3874,2.1686],'London':[51.5074,-0.1278],'Istanbul':[41.0082,28.9784],'Cappadocia':[38.6431,34.8289],'Dubai':[25.2048,55.2708],'New York City':[40.7128,-74.006],'Sydney':[-33.8688,151.2093]};

function initVimelMap() {
  var mapEl = document.getElementById('vimelMap');
  if (!mapEl || typeof L === 'undefined') return;
  vimelMap = L.map('vimelMap').setView([13.0, 110.0], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'OpenStreetMap',maxZoom:18}).addTo(vimelMap);
  var blueIcon = L.divIcon({className:'',html:'<div style="background:#1E6FD9;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>'});
  var redIcon = L.divIcon({className:'',html:'<div style="background:#E74C3C;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>'});
  var greenIcon = L.divIcon({className:'',html:'<div style="background:#27AE60;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>'});
  destinations.forEach(function(dest){var c=locationCoords[dest.name];if(!c)return;var m=L.marker(c,{icon:blueIcon}).addTo(vimelMap);m.bindPopup('<b>'+dest.name+'</b><br>'+dest.country+'<br>from $'+dest.price);m.vimelType='destination';mapMarkers.push(m);});
  hotels.forEach(function(h){var n=h.location.split(',')[0].trim();var c=locationCoords[n];if(!c){for(var k in locationCoords){if(h.location.toLowerCase().includes(k.toLowerCase())){c=[locationCoords[k][0]+0.02,locationCoords[k][1]+0.02];break;}}}if(!c)return;var m=L.marker(c,{icon:redIcon}).addTo(vimelMap);m.bindPopup('<b>'+h.name+'</b><br>'+h.location+'<br>₱'+h.pricePerNight.toLocaleString()+'/night');m.vimelType='hotel';mapMarkers.push(m);});
  var mb=[14.5995,120.9842];drivers.forEach(function(d){var c=[mb[0]+(Math.random()-0.5)*0.1,mb[1]+(Math.random()-0.5)*0.1];var m=L.marker(c,{icon:greenIcon}).addTo(vimelMap);m.bindPopup('<b>'+d.name+'</b><br>'+d.vehicle+'<br>₱'+d.price.toLocaleString()+'/day');m.vimelType='driver';mapMarkers.push(m);});
}

window.filterMapMarkers = function(type) {
  if (!vimelMap) return;
  document.querySelectorAll('.map-filter-btn').forEach(function(b){b.classList.toggle('active',b.dataset.filter===type);});
  mapMarkers.forEach(function(m){if(type==='all'||m.vimelType===type){m.addTo(vimelMap);}else{vimelMap.removeLayer(m);}});
};

window.handleHeroSearch = function() {
  var input = document.getElementById('searchInput');
  if (!input) return;
  var query = input.value.trim().toLowerCase();
  if (!query) { showToast('Please enter a destination to search.', 'info'); return; }
  var filtered = destinations.filter(function(d) {
    return d.name.toLowerCase().includes(query) || 
           d.country.toLowerCase().includes(query) ||
           d.tags.some(function(t) { return t.toLowerCase().includes(query); });
  });
  var destSection = document.getElementById('recommendations');
  if (destSection) destSection.scrollIntoView({ behavior: 'smooth' });
  var container = document.getElementById('recommendationsRow');
  if (!container) return;
  if (filtered.length === 0) {
    showToast('No destinations found for "' + query + '". Showing all.', 'info');
    renderDestinations();
  } else {
    container.innerHTML = filtered.map(function(dest) {
      return '<div class="dest-card reveal" data-id="' + dest.id + '"><div class="dest-img-wrap"><img src="' + dest.image + '" alt="' + dest.name + '" loading="lazy" class="dest-img" onerror="handleImgError(this)"><div class="dest-tags">' + dest.tags.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div><div class="dest-price-badge">from $' + dest.price.toLocaleString() + '</div></div><div class="dest-body"><div class="dest-meta"><span class="dest-location"><i class="fas fa-map-marker-alt"></i> ' + dest.country + '</span><span class="dest-rating">' + renderStars(dest.rating) + ' ' + dest.rating + '</span></div><h3 class="dest-name">' + dest.name + '</h3><p class="dest-desc">' + dest.description + '</p><button class="btn btn-accent btn-sm dest-book-btn" onclick="openBookingModal(\'destination\', ' + dest.id + ')">Book Now <i class="fas fa-arrow-right"></i></button></div></div>';
    }).join('');
    showToast('Found ' + filtered.length + ' destination' + (filtered.length > 1 ? 's' : '') + ' for "' + query + '"', 'success');
    initScrollReveal();
  }
};

/* ========================================================================INITIALISATION — DOMContentLoaded======================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderAllData();
  // === LOAD USER FROM LOCALSTORAGE ===
  var savedUser = localStorage.getItem('vimelUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateNavbarState();
  }
  // === PROFILE AVATAR DROPDOWN TOGGLE ===
  document.addEventListener('click', function(e) {
    var avatarBtn = e.target.closest('#profileAvatarBtn');
    var dd = document.getElementById('profileDropdown');
    if (!dd) return;
    
    if (avatarBtn) {
      e.stopPropagation();
      if (dd.style.display === 'block') {
        dd.style.display = 'none';
      } else {
        dd.style.display = 'block';
        dd.style.position = 'absolute';
        dd.style.top = '100%';
        dd.style.right = '0';
        dd.style.background = 'white';
        dd.style.borderRadius = '12px';
        dd.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
        dd.style.padding = '16px';
        dd.style.zIndex = '9999';
        dd.style.minWidth = '280px';
      }
      return;
    }
    
    if (!dd.contains(e.target)) {
      dd.style.display = 'none';
    }
  });
  document.addEventListener('click', function(e) {
    var link = e.target.closest('.blog-read-more');
    if (!link) return;
    e.preventDefault();
    var idMatch = link.getAttribute('onclick');
    if (!idMatch) return;
    var id = parseInt(idMatch.replace(/\D/g, ''));
    var post = null;
    for (var i = 0; i < blogPosts.length; i++) {
      if (blogPosts[i].id === id) { post = blogPosts[i]; break; }
    }
    if (!post) return;
    var fc = {1:'The Philippines has 7000+ islands. Kalanggaman Island has stunning sandbars. Caramoan is a Survivor location. Palaui Island is CNN top 10 beach. Siquijor is mystical. Batanes is the Scotland of Asia.',2:'Japan Rail Pass $260 for 7 days unlimited Shinkansen. Capsule hotels $25-40. Convenience stores $3-5 meals. Ramen $7-9. Many temples free.',3:'Santorini for romance and caldera sunsets. Mykonos for beach clubs and nightlife. Both a short ferry apart!',4:'Verified drivers with background checks. SOS button with GPS. Incident reports within 5 minutes.',5:'Week 1 Thailand. Week 2 Cambodia. Week 3 Vietnam. Week 4 Laos and Philippines. Budget $1500-2500.',6:'Bali private villas. Palawan lagoons. Koh Samui luxury resorts. Hoi An lantern streets.',7:'Hanoi Pho $1.50, Bun Cha $2. Hoi An Banh Mi $0.75. HCMC Banh Xeo $2, Com Tam $1.50.',8:'Palawan for lagoons. Siargao for surfing. Cebu for whale sharks and falls.'};
    var content = fc[id] || post.excerpt;
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
    overlay.innerHTML = '<div style="background:white;max-width:700px;width:100%;max-height:85vh;overflow-y:auto;border-radius:16px;padding:32px;position:relative;"><button style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.5);color:white;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:20px;" id="closeBlogPop">&times;</button><img src="' + post.image + '" style="width:100%;height:280px;object-fit:cover;border-radius:12px;margin-bottom:16px;"><span style="display:inline-block;padding:4px 14px;border-radius:50px;background:#1E6FD9;color:white;font-size:0.78rem;font-weight:600;margin-bottom:10px;">' + post.category + '</span><h2 style="font-size:1.4rem;font-weight:800;margin-bottom:6px;">' + post.title + '</h2><div style="display:flex;gap:16px;color:gray;font-size:0.82rem;margin-bottom:16px;"><span>' + post.date + '</span><span>' + post.readTime + '</span></div><p style="font-size:0.95rem;line-height:1.8;color:#333;">' + content + '</p></div>';
    document.body.appendChild(overlay);
    document.getElementById('closeBlogPop').onclick = function() { overlay.remove(); };
    overlay.onclick = function(ev) { if (ev.target === overlay) overlay.remove(); };
  });

  // === SOCIAL LOGIN (GOOGLE/FACEBOOK) ===
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-social');
    if (!btn) return;
    var isGoogle = btn.querySelector('.fa-google');
    var isFacebook = btn.querySelector('.fa-facebook-f');
    if (isGoogle) {
      currentUser = { firstName: 'Google', lastName: 'User', email: 'user@gmail.com', phone: '' };
      localStorage.setItem('vimelUser', JSON.stringify(currentUser));
      updateNavbarState();
      showToast('Signed in with Google! Welcome! 🎉', 'success');
    } else if (isFacebook) {
      currentUser = { firstName: 'Facebook', lastName: 'User', email: 'user@facebook.com', phone: '' };
      localStorage.setItem('vimelUser', JSON.stringify(currentUser));
      updateNavbarState();
      showToast('Signed in with Facebook! Welcome! 🎉', 'success');
}
    closeModal('loginModal');
    closeModal('registerModal');
  });

  // === PROFILE DROPDOWN POPUP ===
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.profile-dropdown-list button, .mobile-profile-links button, .profile-logout-btn');
    if (!btn) return;
    e.preventDefault();
    var text = btn.textContent.trim();
    if (text.includes('Logout')) { currentUser = null; localStorage.removeItem('vimelUser'); showToast("Logged out! 🚪", 'info'); setTimeout(function(){ location.reload(); }, 1000); return; }
    var dd = document.getElementById('profileDropdown');
    if (dd) dd.style.display = 'none';
    var tab = '';
    if (text.includes('My Profile')) tab = 'profile';
    else if (text.includes('Bookings')) tab = 'bookings';
    else if (text.includes('Account')) tab = 'account';
    else if (text.includes('Password')) tab = 'password';
    else if (text.includes('Payment')) tab = 'payment';
    else if (text.includes('Preferences')) tab = 'preferences';
    var name = currentUser ? currentUser.firstName + ' ' + currentUser.lastName : 'Traveler';
    var email = currentUser ? currentUser.email : 'user@email.com';
    var initial = currentUser ? currentUser.firstName.charAt(0) : 'U';
    var phone = currentUser && currentUser.phone ? currentUser.phone : 'Not set';
    var html = '';
    if (tab === 'profile') {
      html = '<div style="text-align:center;"><div style="width:80px;height:80px;border-radius:50%;background:#1E6FD9;color:white;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700;margin:0 auto 12px;">' + initial + '</div><h3 style="font-weight:700;font-size:1.3rem;">' + name + '</h3><p style="color:gray;">' + email + '</p><p style="color:gray;">📞 ' + phone + '</p><div style="margin-top:20px;padding:16px;background:#f0f7ff;border-radius:12px;"><p style="font-size:1.5rem;font-weight:800;color:#1E6FD9;">4</p><p style="color:gray;font-size:0.85rem;">Total Bookings</p></div></div>';
    } else if (tab === 'bookings') {
      html = '<h3 style="font-weight:700;margin-bottom:16px;">My Bookings</h3><div style="border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:12px;">✈️ <strong>Palawan, Philippines</strong><br><small style="color:gray;">May 10-17, 2026 • Confirmed • ₱2,940</small></div><div style="border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:12px;">🏨 <strong>Kyoto Zen Ryokan</strong><br><small style="color:gray;">June 3-8, 2026 • Pending • ₱37,500</small></div><div style="border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:12px;">🚗 <strong>Miguel Santos — Toyota Camry</strong><br><small style="color:gray;">April 20, 2026 • Confirmed • ₱850</small></div><div style="border:1px solid #eee;border-radius:12px;padding:16px;">🌴 <strong>Bali, Indonesia</strong><br><small style="color:gray;">Feb 14-21, 2026 • Completed • ₱4,760</small></div>';
    } else if (tab === 'account') {
      html = '<h3 style="font-weight:700;margin-bottom:16px;">Account Settings</h3><form onsubmit="event.preventDefault(); if(currentUser){currentUser.firstName=document.getElementById(\'pf\').value;currentUser.lastName=document.getElementById(\'pl\').value;currentUser.email=document.getElementById(\'pe\').value;currentUser.phone=document.getElementById(\'pp\').value;updateNavbarState();} showToast(\'Profile updated! ✅\',\'success\');"><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;"><div><label style="font-size:0.85rem;font-weight:600;">First Name</label><input id="pf" type="text" value="' + (currentUser?currentUser.firstName:'') + '" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-top:4px;"></div><div><label style="font-size:0.85rem;font-weight:600;">Last Name</label><input id="pl" type="text" value="' + (currentUser?currentUser.lastName:'') + '" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-top:4px;"></div></div><div style="margin-bottom:12px;"><label style="font-size:0.85rem;font-weight:600;">Email</label><input id="pe" type="email" value="' + email + '" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-top:4px;"></div><div style="margin-bottom:16px;"><label style="font-size:0.85rem;font-weight:600;">Phone</label><input id="pp" type="tel" value="' + phone + '" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-top:4px;"></div><button type="submit" style="padding:10px 24px;background:#1E6FD9;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">Save Changes</button></form>';
    } else if (tab === 'password') {
      html = '<h3 style="font-weight:700;margin-bottom:16px;">Change Password</h3><div style="margin-bottom:12px;"><label style="font-size:0.85rem;font-weight:600;">Current Password</label><input type="password" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-top:4px;"></div><div style="margin-bottom:12px;"><label style="font-size:0.85rem;font-weight:600;">New Password</label><input type="password" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-top:4px;"></div><div style="margin-bottom:16px;"><label style="font-size:0.85rem;font-weight:600;">Confirm Password</label><input type="password" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-top:4px;"></div><button onclick="showToast(\'Password updated! 🔒\',\'success\')" style="padding:10px 24px;background:#1E6FD9;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">Update Password</button>';
    } else if (tab === 'payment') {
      html = '<h3 style="font-weight:700;margin-bottom:16px;">Payment Methods</h3><div style="border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:12px;">💳 <strong>Visa ending in 4242</strong><br><small style="color:gray;">Expires 12/2027 • Default</small></div><div style="border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:12px;">📱 <strong>GCash</strong><br><small style="color:gray;">+63 917 *** 1234</small></div><button onclick="showToast(\'Add payment coming soon!\',\'info\')" style="padding:10px 24px;background:#1E6FD9;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">+ Add Payment Method</button>';
    } else if (tab === 'preferences') {
      html = '<h3 style="font-weight:700;margin-bottom:16px;">Travel Preferences</h3><p style="color:gray;margin-bottom:16px;">Select your interests:</p><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;"><span onclick="this.style.background=this.style.background?\'\':\'\#1E6FD9\';this.style.color=this.style.color===\'white\'?\'\':\' white\';" style="padding:8px 16px;border:2px solid #1E6FD9;border-radius:50px;cursor:pointer;">🏖️ Beach</span><span onclick="this.style.background=this.style.background?\'\':\'\#1E6FD9\';this.style.color=this.style.color===\'white\'?\'\':\' white\';" style="padding:8px 16px;border:2px solid #1E6FD9;border-radius:50px;cursor:pointer;">🏔️ Mountains</span><span onclick="this.style.background=this.style.background?\'\':\'\#1E6FD9\';this.style.color=this.style.color===\'white\'?\'\':\' white\';" style="padding:8px 16px;border:2px solid #1E6FD9;border-radius:50px;cursor:pointer;">🍜 Food</span><span onclick="this.style.background=this.style.background?\'\':\'\#1E6FD9\';this.style.color=this.style.color===\'white\'?\'\':\' white\';" style="padding:8px 16px;border:2px solid #1E6FD9;border-radius:50px;cursor:pointer;">🤿 Diving</span></div><button onclick="showToast(\'Preferences saved! 🌍\',\'success\')" style="padding:10px 24px;background:#1E6FD9;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">Save Preferences</button>';
    }
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
    overlay.innerHTML = '<div style="background:white;max-width:600px;width:100%;max-height:85vh;overflow-y:auto;border-radius:16px;padding:32px;position:relative;"><button style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.5);color:white;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:20px;" id="closeProfilePop">&times;</button>' + html + '</div>';
    document.body.appendChild(overlay);
    document.getElementById('closeProfilePop').onclick = function() { overlay.remove(); };
    overlay.onclick = function(ev) { if (ev.target === overlay) overlay.remove(); };
  });

  initCustomDatePickers();
  initNavbar();
  initMobileMenu();
  initModalEscapeKey();
  initSearchAutocomplete();
  initScrollControls();
  initCountryFilterTabs();
  initVehicleFilters();
  initHotelViewToggle();
  initChatWidget();
  initScrollReveal();
  initBackToTop();
  initContactForm();
  initNewsletterForm();
  initPasswordStrengthMeter();
  initHeroParallax();
  initLazyImages();
  initVimelMap();
  initImageFallbacks();
  assignUniqueImages();
  console.log('%c✈ Vimel Travels — app.js loaded successfully', 'color:#1E6FD9;font-weight:bold;font-size:14px;');
});