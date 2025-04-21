import images from "./images";

const wines = [
  {
    title: "Champagne",
    price: "$56",
    tags: "Moet et Chandon, brut imperial - France",
  },
  {
    title: "Sparkling Wine",
    price: "$59",
    tags: "Fratelli Gran Cuvee Brut - India",
  },
  {
    title: "Rose Wine",
    price: "$44",
    tags: "Sula Zinfandel",
  },
  {
    title: "Draught Beer",
    price: "$31",
    tags: "Kingfisher | Budweiser | Hoegaarden | Kolsch-Ale-Wit",
  },
  {
    title: "Danzante",
    price: "$26",
    tags: "Merlot - Italy",
  },
];

const cocktails = [
  {
    title: "LIIT",
    price: "₹250", // Assuming price in Indian Rupees
    tags: "Vodka | Gin | White Rum | Tequila | Triple Sec | Lime Juice | Cola",
  },
  {
    title: "Margarita",
    price: "₹220", // Assuming price in Indian Rupees
    tags: "Tequila | Lime Juice | Cointreau (or Triple Sec) | Salt Rim",
  },
  {
    title: "Tequilla Sunrise",
    price: "₹200", // Assuming price in Indian Rupees
    tags: "Tequila | Orange Juice | Grenadine",
  },
  {
    title: "Singapore Sling",
    price: "₹280", // Assuming price in Indian Rupees
    tags: "Gin | Cherry Brandy | Cointreau | Benedictine | Pineapple Juice | Lime Juice | Grenadine | Angostura Bitters",
  },
  {
    title: "Blue Lagoon",
    price: "₹180", // Assuming price in Indian Rupees
    tags: "Vodka | Blue Curaçao | Lemonade | Lime wedge",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Eden Park, Cunningham Road",
    subtitle: "Andhra | Chinese | North Indian | Italian | Indian Wok | Alcohol*",
  },
  {
    imgUrl: images.award02,
    title: "Guntoor Mirchi, Nexus Shantiniketan Mall",
    subtitle: "Andhra | North Indian | Chinese",
  },
  {
    imgUrl: images.award03,
    title: "Kaaram Koruku, Nexus Shantiniketan Mall",
    subtitle: "South Indian | Andhra",
  },
];

const andhra = [
  {
    title: "Andhra Meals",
    price: "$56",
    tags: "Rice | Sambar | Rasam | Pappu | Raitha | Gun Powder",
  },
  {
    title: "Dum Biryani",
    price: "$59",
    tags: "Chicken | Mutton | Fish | Prawns | Egg | Vegetable",
  },
  {
    title: "The King of Eden",
    price: "$44",
    tags: "Chicken | Lamb | Seafood | Andhra Spices",
  },
  {
    title: "Chicken",
    price: "$31",
    tags: "Guntur | Chilli | Kebab | Fry",
  },
  {
    title: "Ghee Roast",
    price: "$26",
    tags: "Chicken | Prawns | Mutton",
  },
];
const north = [
  {
    title: "Dal Masala",
    price: "$56",
    tags: "Palak | Tadka | Makhani",
  },
  {
    title: "Paneer Masala",
    price: "$59",
    tags: "Palak | Tikka | Butter",
  },
  {
    title: "Chicken Masala",
    price: "$44",
    tags: "Vindaloo | Butter | Saagwala | Do Pyaaza",
  },
  {
    title: "Choice of Breads",
    price: "$31",
    tags: "Roti | Kulcha | Naan | Paratha",
  },
  {
    title: "Tandoori",
    price: "$26",
    tags: "Haryali | Kalimirch | Malai | Achari | Reshmi",
  },
];

export default { wines, cocktails, awards, andhra, north };
