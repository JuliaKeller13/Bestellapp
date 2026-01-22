const articles = [
  // Kuchen
  {
    "title": "Saftiger Schokoladenkuchen",
    "img": "./assets/imgs/schokokuchen.jpg",
    "price": 4.50,
    "category": "Kuchen",
    "amount": 0,
    "description": "Extra saftiger Schoko-Genuss mit vollmundigem Aroma und einer feinen Schicht edler Zartbitter-Ganache."
  },
  {
    "title": "Zitronenkuchen",
    "img": "./assets/imgs/zitronenkuchen.webp",
    "price": 4.20,
    "category": "Kuchen",
    "amount": 0,
    "description": "Frisch, leicht und zitronig, ein fluffiger Kuchen mit feiner Glasur."
  },
  {
    "title": "Marmorkuchen",
    "img": "./assets/imgs/marmorkuchen.png",
    "price": 4.30,
    "category": "Kuchen",
    "amount": 0,
    "description": "Klassischer Marmorkuchen mit harmonischem Wechsel aus Vanille- und Schokoteig."
  },
  {
    "title": "Nusskuchen",
    "img": "./assets/imgs/nusskuchen.png",
    "price": 4.60,
    "category": "Kuchen",
    "amount": 0,
    "description": "Saftiger Kuchen mit gerösteten Nüssen und einem warmen, aromatischen Geschmack."
  },
  {
    "title": "Apfelkuchen",
    "img": "./assets/imgs/applecake.jpg",
    "price": 4.40,
    "category": "Kuchen",
    "amount": 0,
    "description": "Hausgemachter Apfelkuchen mit süß-säuerlichen Äpfeln und zarter Zimtnote."
  },

  // Käsekuchen
  {
    "title": "Klassischer Käsekuchen",
    "img": "./assets/imgs/cheesecake-classic.png",
    "price": 4.80,
    "category": "Käsekuchen",
    "amount": 0,
    "description": "Cremiger, traditioneller Käsekuchen mit buttrigem Boden und mildem Aroma."
  },
  {
    "title": "New York Käsekuchen",
    "img": "./assets/imgs/newyork-cheescake.jpg",
    "price": 5.20,
    "category": "Käsekuchen",
    "amount": 0,
    "description": "Dichter, luxuriöser Cheesecake im amerikanischen Stil, samtig und reichhaltig."
  },
  {
    "title": "Himbeer-Käsekuchen",
    "img": "./assets/imgs/himbeer-cheesecake.jpg",
    "price": 5.00,
    "category": "Käsekuchen",
    "amount": 0,
    "description": "Cremiger Käsekuchen mit fruchtigem Himbeertopping für eine perfekte Balance."
  },
  {
    "title": "Blaubeer-Käsekuchen",
    "img": "./assets/imgs/berry-cheescake.jpg",
    "price": 5.10,
    "category": "Käsekuchen",
    "amount": 0,
    "description": "Eine Kombination aus zartem Käsekuchen und frischen Blaubeeren."
  },
  {
    "title": "Karamell-Käsekuchen",
    "img": "./assets/imgs/caramell-cheescake.png",
    "price": 5.30,
    "category": "Käsekuchen",
    "amount": 0,
    "description": "Cremiger Cheesecake mit feiner Karamellschicht und leicht salziger Note."
  },

  // Donuts
  {
    "title": "Schoko Donut",
    "img": "./assets/imgs/schokodonut.png",
    "price": 2.20,
    "category": "Donuts",
    "amount": 0,
    "description": "Weicher Donut mit glänzender Schokoglasur und intensivem Kakaogeschmack."
  },
  {
    "title": "Zucker Donut",
    "img": "./assets/imgs/sugardonut.png",
    "price": 2.00,
    "category": "Donuts",
    "amount": 0,
    "description": "Klassischer Donut, frisch gebacken und in feinem Kristallzucker gewälzt."
  },
  {
    "title": "Erdbeer Donut",
    "img": "./assets/imgs/erdbeerdonut.png",
    "price": 2.30,
    "category": "Donuts",
    "amount": 0,
    "description": "Luftiger Donut mit süßer Erdbeerglasur und fruchtigem Aroma."
  },
  {
    "title": "Vanille Donut",
    "img": "./assets/imgs/vanilledonut.png",
    "price": 2.40,
    "category": "Donuts",
    "amount": 0,
    "description": "Zarter Donut mit cremiger Vanilleglasur und leichter Süße."
  },
  {
    "title": "Karamell Donut",
    "img": "./assets/imgs/karamelldonut.png",
    "price": 2.50,
    "category": "Donuts",
    "amount": 0,
    "description": "Fluffiger Donut mit reichhaltiger Karamellglasur und sanfter Butternote."
  },

  // Muffins
  {
    "title": "Schoko Muffin",
    "img": "./assets/imgs/schokomuffin.jpg",
    "price": 2.80,
    "category": "Muffins",
    "amount": 0,
    "description": "Saftiger Muffin mit dunkler Schokolade und weichem Kern."
  },
  {
    "title": "Blaubeer Muffin",
    "img": "./assets/imgs/blaubeermuffin.jpg",
    "price": 2.90,
    "category": "Muffins",
    "amount": 0,
    "description": "Fluffiger Muffin voller saftiger Blaubeeren und leichter Süße."
  },
  {
    "title": "Vanille Muffin",
    "img": "./assets/imgs/vanillemuffin.jpg",
    "price": 2.70,
    "category": "Muffins",
    "amount": 0,
    "description": "Weicher Vanillemuffin mit feinem Aroma und goldener Kruste."
  },
  {
    "title": "Banane-Schoko Muffin",
    "img": "./assets/imgs/bananeschokomuffin.jpg",
    "price": 3.00,
    "category": "Muffins",
    "amount": 0,
    "description": "Aromatische Mischung aus reifer Banane und zarter Schokolade."
  },
  {
    "title": "Zimt Muffin",
    "img": "./assets/imgs/zimtmuffin.jpg",
    "price": 2.60,
    "category": "Muffins",
    "amount": 0,
    "description": "Würziger Muffin mit warmem Zimtaroma und weicher Textur."
  },
];