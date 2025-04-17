import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const andhra = [
  {
    title: 'Andhra Meals',
    price: '$56',
    tags: 'Rice | Sambar | Rasam | Pappu | Raitha | Gun Powder',
  },
  {
    title: 'Dum Biryani',
    price: '$59',
    tags: 'Chicken | Mutton | Fish | Prawns | Egg | Vegetable',
  },
  {
    title: 'The King of Eden',
    price: '$44',
    tags: 'Chicken | Lamb | Seafood | Andhra Spices',
  },
  {
    title: 'Chicken',
    price: '$31',
    tags: 'Guntur | Chilli | Kebab | Fry',
  },
  {
    title: 'Ghee Roast',
    price: '$26',
    tags: 'Chicken | Prawns | Mutton',
  },
];
const north = [
  {
    title: 'Dal Masala',
    price: '$56',
    tags: 'Palak | Tadka | Makhani',
  },
  {
    title: 'Paneer Masala',
    price: '$59',
    tags: 'Palak | Tikka | Butter',
  },
  {
    title: 'Chicken Masala',
    price: '$44',
    tags: 'Vindaloo | Butter | Saagwala | Do Pyaaza',
  },
  {
    title: 'Choice of Breads',
    price: '$31',
    tags: 'Roti | Kulcha | Naan | Paratha',
  },
  {
    title: 'Tandoori',
    price: '$26',
    tags: 'Haryali | Kalimirch | Malai | Achari | Reshmi',
  },
];


export default { wines, cocktails, awards, andhra, north };
