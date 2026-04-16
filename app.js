/* ========================================================================PART A1 — Paste this FIRST in your app.js
   Vimel Travels — Destinations & Countries Data======================================================================== */

'use strict';

const destinations = [
  { id:1, name:'Palawan', country:'Philippines', image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop', rating:4.9, price:420, description:"The world's best island — pristine lagoons, underground rivers, and untouched coral reefs in El Nido and Coron.", tags:['Beach','Island','Local'] },
  { id:2, name:'Boracay', country:'Philippines', image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format&fit=crop', rating:4.8, price:380, description:"White Beach, crystal waters, epic sunsets, and vibrant nightlife on one of Asia's most famous islands.", tags:['Beach','Nightlife','Local'] },
  { id:3, name:'Siargao', country:'Philippines', image:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&auto=format&fit=crop', rating:4.8, price:350, description:'The surfing capital of the Philippines — Cloud 9 barrels, palm-lined roads, and island-hopping adventures.', tags:['Surf','Adventure','Local'] },
  { id:4, name:'Cebu', country:'Philippines', image:'https://images.unsplash.com/photo-1608304990132-6f15c8e25f98?w=600&auto=format&fit=crop', rating:4.7, price:320, description:'Whale shark encounters in Oslob, Kawasan Falls canyoneering, and historic Spanish-era landmarks.', tags:['Adventure','Culture','Local'] },
  { id:5, name:'Bohol', country:'Philippines', image:'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600&auto=format&fit=crop', rating:4.7, price:300, description:'Chocolate Hills, tiny tarsiers, white-sand Panglao beaches, and the stunning Loboc River cruise.', tags:['Nature','Culture','Local'] },
  { id:6, name:'Batanes', country:'Philippines', image:'https://images.unsplash.com/photo-1588528402605-1f9b76b1d51c?w=600&auto=format&fit=crop', rating:4.9, price:550, description:'Rolling green hills, stone houses, dramatic cliffs, and the most breathtaking landscapes in the Philippines.', tags:['Nature','Culture','Local'] },
  { id:7, name:'Coron', country:'Philippines', image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600&auto=format&fit=crop', rating:4.8, price:450, description:'WWII shipwreck diving, Kayangan Lake, and hidden lagoons surrounded by towering limestone cliffs.', tags:['Diving','Island','Local'] },
  { id:8, name:'La Union', country:'Philippines', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop', rating:4.5, price:250, description:'Surf town vibes in San Juan — learn to ride waves, chill at beachfront bars, and catch golden sunsets.', tags:['Surf','Beach','Local'] },
  { id:9, name:'Siquijor', country:'Philippines', image:'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&auto=format&fit=crop', rating:4.6, price:280, description:'The mystical island — enchanting waterfalls, centuries-old balete trees, and pristine white-sand beaches.', tags:['Nature','Mystical','Local'] },
  { id:10, name:'Davao', country:'Philippines', image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&auto=format&fit=crop', rating:4.5, price:310, description:'Mount Apo treks, Philippine Eagle Center, durian capital, and the gateway to Mindanao adventures.', tags:['Adventure','Nature','Local'] },
  { id:11, name:'Bangkok', country:'Thailand', image:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&auto=format&fit=crop', rating:4.7, price:480, description:'Glittering temples, chaotic street food markets, rooftop bars, and the pulse of Southeast Asia.', tags:['City','Culture','Food'] },
  { id:12, name:'Phuket', country:'Thailand', image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&auto=format&fit=crop', rating:4.6, price:590, description:'Turquoise waters, limestone karsts, lively night markets, and serene Buddhist temples.', tags:['Beach','Asia','Adventure'] },
  { id:13, name:'Chiang Mai', country:'Thailand', image:'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=600&auto=format&fit=crop', rating:4.8, price:420, description:'Mountain temples, night bazaars, ethical elephant sanctuaries, and the best khao soi in the world.', tags:['Culture','Nature','Food'] },
  { id:14, name:'Krabi', country:'Thailand', image:'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&auto=format&fit=crop', rating:4.7, price:510, description:'Railay Beach rock climbing, Four Islands tour, emerald pools, and dramatic karst scenery.', tags:['Beach','Adventure','Nature'] },
  { id:15, name:'Koh Samui', country:'Thailand', image:'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&auto=format&fit=crop', rating:4.6, price:560, description:'Luxury beach resorts, coconut groves, Ang Thong Marine Park, and full-moon party vibes nearby.', tags:['Beach','Luxury','Island'] },
  { id:16, name:'Ha Long Bay', country:'Vietnam', image:'https://images.unsplash.com/photo-1528127269322-539152f5ae74?w=600&auto=format&fit=crop', rating:4.9, price:520, description:'Thousands of emerald limestone islands rising from the sea — cruise through a UNESCO World Heritage wonder.', tags:['Nature','UNESCO','Cruise'] },
  { id:17, name:'Hanoi', country:'Vietnam', image:'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=600&auto=format&fit=crop', rating:4.7, price:380, description:'Ancient temples, bustling Old Quarter, legendary pho, and the soul of Vietnamese culture.', tags:['City','Culture','Food'] },
  { id:18, name:'Ho Chi Minh City', country:'Vietnam', image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&auto=format&fit=crop', rating:4.6, price:370, description:"Motorbike madness, French colonial charm, Cu Chi Tunnels, and Saigon's legendary street food scene.", tags:['City','History','Food'] },
  { id:19, name:'Da Nang', country:'Vietnam', image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600&auto=format&fit=crop', rating:4.7, price:400, description:'Golden Bridge, Marble Mountains, My Khe Beach, and the gateway to ancient Hoi An.', tags:['Beach','Culture','Adventure'] },
  { id:20, name:'Hoi An', country:'Vietnam', image:'https://images.unsplash.com/photo-1536697246787-1f7ae568714d?w=600&auto=format&fit=crop', rating:4.8, price:350, description:'Lantern-lit ancient town, tailor-made silk, cooking classes, and the most charming streets in Asia.', tags:['Culture','UNESCO','Romantic'] },
  { id:21, name:'Bali', country:'Indonesia', image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop', rating:4.7, price:680, description:'Terraced rice paddies, ancient temples, surf-ready beaches, and a vibrant spiritual culture.', tags:['Culture','Beach','Adventure'] },
  { id:22, name:'Raja Ampat', country:'Indonesia', image:'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600&auto=format&fit=crop', rating:4.9, price:950, description:"The crown jewel of diving — 75% of the world's coral species live in these pristine Papua waters.", tags:['Diving','Nature','Remote'] },
  { id:23, name:'Yogyakarta', country:'Indonesia', image:'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&auto=format&fit=crop', rating:4.7, price:380, description:'Borobudur sunrise, Prambanan temples, batik workshops, and the cultural heart of Java.', tags:['Culture','UNESCO','History'] },
  { id:24, name:'Komodo Island', country:'Indonesia', image:'https://images.unsplash.com/photo-1570789210967-2cac24834d46?w=600&auto=format&fit=crop', rating:4.8, price:720, description:'Face-to-face with the last living dragons, pink sand beaches, and world-class manta ray diving.', tags:['Adventure','Wildlife','Nature'] },
  { id:25, name:'Lombok', country:'Indonesia', image:'https://images.unsplash.com/photo-1570789210967-2cac24834d46?w=600&auto=format&fit=crop', rating:4.6, price:500, description:"Bali's quieter neighbor — Mount Rinjani treks, Gili Islands snorkeling, and empty surf breaks.", tags:['Adventure','Beach','Nature'] },
  { id:26, name:'Kuala Lumpur', country:'Malaysia', image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format&fit=crop', rating:4.6, price:450, description:'Petronas Twin Towers, Batu Caves, incredible street food in Jalan Alor, and mega shopping malls.', tags:['City','Food','Shopping'] },
  { id:27, name:'Langkawi', country:'Malaysia', image:'https://images.unsplash.com/photo-1609946860441-a51ffcf16d76?w=600&auto=format&fit=crop', rating:4.7, price:480, description:'Duty-free island paradise — SkyBridge, mangrove tours, pristine beaches, and eagle watching.', tags:['Beach','Island','Nature'] },
  { id:28, name:'Penang', country:'Malaysia', image:'https://images.unsplash.com/photo-1559592413-7cec4d0cbb28?w=600&auto=format&fit=crop', rating:4.7, price:390, description:'Street art capital, George Town heritage, and arguably the best food city in all of Southeast Asia.', tags:['Food','Culture','UNESCO'] },
  { id:29, name:'Siem Reap', country:'Cambodia', image:'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&auto=format&fit=crop', rating:4.8, price:350, description:'Angkor Wat sunrise — the largest religious monument on Earth, surrounded by jungle-reclaimed temples.', tags:['UNESCO','Culture','History'] },
  { id:30, name:'Phnom Penh', country:'Cambodia', image:'https://images.unsplash.com/photo-1540611025311-01df3cee54b5?w=600&auto=format&fit=crop', rating:4.4, price:280, description:'Royal Palace, riverside promenades, powerful history at the Killing Fields, and a booming food scene.', tags:['City','History','Culture'] },
  { id:31, name:'Singapore', country:'Singapore', image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop', rating:4.8, price:980, description:'Marina Bay Sands, Gardens by the Bay, hawker center heaven, and the cleanest city in Asia.', tags:['City','Luxury','Food'] },
  { id:32, name:'Bagan', country:'Myanmar', image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&auto=format&fit=crop', rating:4.7, price:420, description:'Over 2,000 ancient Buddhist temples spread across dusty plains — best viewed by hot air balloon at sunrise.', tags:['Culture','UNESCO','Adventure'] },
  { id:33, name:'Luang Prabang', country:'Laos', image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&auto=format&fit=crop', rating:4.7, price:340, description:"Monks' morning alms, Kuang Si turquoise waterfalls, French-Lao cuisine, and Mekong River cruises.", tags:['Culture','UNESCO','Nature'] },
  { id:34, name:'Tokyo', country:'Japan', image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop', rating:4.9, price:1050, description:"Ultra-modern tech and ancient tradition — neon-lit Shibuya, zen gardens, and the world's best sushi.", tags:['City','Culture','Food'] },
  { id:35, name:'Kyoto', country:'Japan', image:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format&fit=crop', rating:4.9, price:980, description:"Bamboo groves, thousands of vermillion torii gates, geisha districts, and Japan's spiritual heart.", tags:['Culture','Nature','Romantic'] },
  { id:36, name:'Osaka', country:'Japan', image:'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format&fit=crop', rating:4.8, price:920, description:"Japan's kitchen — Dotonbori street food, Osaka Castle, and the friendliest people in Japan.", tags:['Food','City','Culture'] },
  { id:37, name:'Seoul', country:'South Korea', image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&auto=format&fit=crop', rating:4.8, price:780, description:'K-pop culture, Gyeongbokgung Palace, Myeongdong shopping, and Korean BBQ that changes your life.', tags:['City','Culture','Shopping'] },
  { id:38, name:'Jeju Island', country:'South Korea', image:'https://images.unsplash.com/photo-1527549993586-dff825b37782?w=600&auto=format&fit=crop', rating:4.7, price:680, description:'Volcanic craters, tangerine orchards, haenyeo diving women, and stunning coastal walks.', tags:['Nature','Island','Culture'] },
  { id:39, name:'Maldives', country:'Maldives', image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&auto=format&fit=crop', rating:4.9, price:1200, description:'Crystal-clear lagoons, overwater bungalows, and white-sand beaches — the ultimate dream escape.', tags:['Beach','Luxury','Island'] },
  { id:40, name:'Santorini', country:'Greece', image:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop', rating:4.8, price:950, description:'Blue-domed churches, dramatic clifftop views, and the finest sunsets in the Aegean Sea.', tags:['Europe','Romantic','Culture'] },
  { id:41, name:'Paris', country:'France', image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop', rating:4.8, price:1100, description:'The City of Light — Eiffel Tower, Louvre, world-class cuisine, and timeless romance.', tags:['Europe','Romantic','City'] },
  { id:42, name:'Swiss Alps', country:'Switzerland', image:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop', rating:4.8, price:1400, description:'Snow-capped peaks, charming alpine villages, and world-class skiing and hiking trails.', tags:['Europe','Adventure','Nature'] },
  { id:43, name:'Rome', country:'Italy', image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop', rating:4.8, price:980, description:'The Colosseum, Vatican City, gelato on every corner, and 2,000 years of living history.', tags:['Europe','History','Food'] },
  { id:44, name:'Barcelona', country:'Spain', image:'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&auto=format&fit=crop', rating:4.7, price:870, description:"Gaudi's Sagrada Familia, La Rambla energy, Mediterranean beaches, and world-class tapas.", tags:['Europe','Culture','Beach'] },
  { id:45, name:'London', country:'United Kingdom', image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop', rating:4.7, price:1150, description:'Big Ben, Buckingham Palace, West End shows, world-class museums, and iconic red double-deckers.', tags:['Europe','City','Culture'] },
  { id:46, name:'Istanbul', country:'Turkey', image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&auto=format&fit=crop', rating:4.7, price:650, description:'Where East meets West — Hagia Sophia, Grand Bazaar, Bosphorus cruises, and Turkish tea.', tags:['Culture','History','Food'] },
  { id:47, name:'Cappadocia', country:'Turkey', image:'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=600&auto=format&fit=crop', rating:4.9, price:720, description:'Hot air balloons over fairy chimneys, cave hotels, and one of the most surreal landscapes on Earth.', tags:['Adventure','Nature','Romantic'] },
  { id:48, name:'Dubai', country:'UAE', image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop', rating:4.7, price:1300, description:'Futuristic skylines, world-record attractions, luxury shopping, and golden desert adventures.', tags:['Luxury','City','Desert'] },
  { id:49, name:'New York City', country:'USA', image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600&auto=format&fit=crop', rating:4.7, price:1250, description:'The city that never sleeps — Times Square, Central Park, world-class museums and Broadway shows.', tags:['City','Culture','Shopping'] },
  { id:50, name:'Sydney', country:'Australia', image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop', rating:4.7, price:1100, description:'Opera House, Harbour Bridge, Bondi Beach, and the gateway to the Great Barrier Reef.', tags:['City','Beach','Adventure'] }
];

const countries = [
  { name:'Thailand', flag:'🇹🇭', image:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&auto=format&fit=crop', destinationCount:28, type:'international' },
  { name:'Vietnam', flag:'🇻🇳', image:'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop', destinationCount:22, type:'international' },
  { name:'Indonesia', flag:'🇮🇩', image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop', destinationCount:35, type:'international' },
  { name:'Malaysia', flag:'🇲🇾', image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format&fit=crop', destinationCount:18, type:'international' },
  { name:'Cambodia', flag:'🇰🇭', image:'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&auto=format&fit=crop', destinationCount:10, type:'international' },
  { name:'Singapore', flag:'🇸🇬', image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop', destinationCount:8, type:'international' },
  { name:'Myanmar', flag:'🇲🇲', image:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&auto=format&fit=crop', destinationCount:12, type:'international' },
  { name:'Laos', flag:'🇱🇦', image:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&auto=format&fit=crop', destinationCount:8, type:'international' },
  { name:'Japan', flag:'🇯🇵', image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop', destinationCount:24, type:'international' },
  { name:'South Korea', flag:'🇰🇷', image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&auto=format&fit=crop', destinationCount:19, type:'international' },
  { name:'Maldives', flag:'🇲🇻', image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&auto=format&fit=crop', destinationCount:6, type:'international' },
  { name:'India', flag:'🇮🇳', image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop', destinationCount:30, type:'international' },
  { name:'Sri Lanka', flag:'🇱🇰', image:'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=600&auto=format&fit=crop', destinationCount:14, type:'international' },
  { name:'France', flag:'🇫🇷', image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop', destinationCount:18, type:'international' },
  { name:'Italy', flag:'🇮🇹', image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop', destinationCount:22, type:'international' },
  { name:'Spain', flag:'🇪🇸', image:'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&auto=format&fit=crop', destinationCount:16, type:'international' },
  { name:'Greece', flag:'🇬🇷', image:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop', destinationCount:16, type:'international' },
  { name:'Switzerland', flag:'🇨🇭', image:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop', destinationCount:14, type:'international' },
  { name:'United Kingdom', flag:'🇬🇧', image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop', destinationCount:15, type:'international' },
  { name:'Turkey', flag:'🇹🇷', image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&auto=format&fit=crop', destinationCount:20, type:'international' },
  { name:'UAE', flag:'🇦🇪', image:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop', destinationCount:12, type:'international' },
  { name:'Australia', flag:'🇦🇺', image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop', destinationCount:18, type:'international' },
  { name:'USA', flag:'🇺🇸', image:'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600&auto=format&fit=crop', destinationCount:25, type:'international' },
  { name:'Palawan', flag:'📍', image:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop', destinationCount:15, type:'local' },
  { name:'Cebu', flag:'📍', image:'https://images.unsplash.com/photo-1608304990132-6f15c8e25f98?w=600&auto=format&fit=crop', destinationCount:12, type:'local' },
  { name:'Siargao', flag:'📍', image:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&auto=format&fit=crop', destinationCount:8, type:'local' },
  { name:'Batanes', flag:'📍', image:'https://images.unsplash.com/photo-1597926616299-c049c838a431?w=600&auto=format&fit=crop', destinationCount:6, type:'local' },
  { name:'Boracay', flag:'📍', image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format&fit=crop', destinationCount:10, type:'local' },
  { name:'Bohol', flag:'📍', image:'https://images.unsplash.com/photo-1555217851-6141535bd771?w=600&auto=format&fit=crop', destinationCount:9, type:'local' },
  { name:'La Union', flag:'📍', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop', destinationCount:5, type:'local' },
  { name:'Davao', flag:'📍', image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&auto=format&fit=crop', destinationCount:7, type:'local' },
  { name:'Coron', flag:'📍', image:'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600&auto=format&fit=crop', destinationCount:8, type:'local' },
  { name:'Siquijor', flag:'📍', image:'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&auto=format&fit=crop', destinationCount:4, type:'local' }
];

const hotels = [
  { id:1, name:'Vimel Ocean Suites', image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop', rating:4.9, pricePerNight:4500, amenities:['Pool','Spa','WiFi','Restaurant','Gym'], location:'Boracay, Philippines' },
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
        <a href="#" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
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
  var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxygMtsYdD0A86Ej2hE-9BtPxz31vh3u3lWL5Cc7pIbHNMq99VoZv2GZ0wqm0G0Dfg2/exec';

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
  updateNavbarState();

  // Close any open profile UI
  const dropdown = document.getElementById('profileDropdown');
  if (dropdown) dropdown.classList.remove('open');
  closeModal('profileModal');

  showToast("You've been logged out. Safe travels! 🚪", 'info');
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

/* ========================================================================INITIALISATION — DOMContentLoaded======================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderAllData();
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
  console.log('%c✈ Vimel Travels — app.js loaded successfully', 'color:#1E6FD9;font-weight:bold;font-size:14px;');
});
