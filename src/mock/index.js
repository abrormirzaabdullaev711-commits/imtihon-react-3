 const products = [
  {
    id: 1,
    name: "Xbox Series X 512GB SSD Console with Wireless Controller",
    price: 442,
    image: "ps5.png"
  },
  {
    id: 2,
    name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: 2300,
    image: "drone2.png"
  },
  {
    id: 3,
    name: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: 220,
    image: "phone2.png"
  },
  {
    id: 4,
    name: "4K UHD LED Smart TV with Chromecast Built-in",
    price: 580,
    image: "pads.png"
  },
  {
    id: 5,
    name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 1200,
    image: "phone.png"
  },
  {
    id: 6,
    name: "Portable Washing Machine, 11lbs capacity Model 18NMFIAM",
    price: 299,
    image: "drone.png"
  },
  {
    id: 7,
    name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: 299,
    image: "computer.png"
  },
  {
    id: 8,
    name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: 299,
    image: "camero.png"
  }

];
 
const featuredProducts = [
  {
    id: 7,
    name: "SGIN 15.6 Inch Laptop with Wireless Headphone",
    price: 720,
    image: "phone.png"
  },
  {
    id: 8,
    name: "Samsung Galaxy S21 Ultra 5G Smartphone",
    price: 999,
    image: "phone2.png"
  },
  {
    id: 9,
    name: "Amazon Basics High Speed HDMI Cable 6ft",
    price: 18,
    image: "airconditioner.png"
  },
  {
    id: 10,
    name: "Portable Washing Machine Mini Compact",
    price: 189,
    image: "headphone.png"
  },
  {
    id: 11,
    name: "Wired Bass Ear Gaming Headphones with Mic",
    price: 99,
    image: "drone.png"
  },
  {
    id: 12,
    name: "Polaroid X7 Instant Film Camera",
    price: 150,
    image: "TV.png"
  },
  {
    id: 13,
    name: "Dell Desktop 700 G6 Compact PC",
    price: 1050,
    image: "computer.png"
  },
  {
    id: 14,
    name: "LWG D-Link Smart TV 55 Inch 4K",
    price: 620,
    image: "phone3.png"
  }
];
 
const accessoriesProducts = [
  {
    id: 15,
    name: "Amazon Basics High Speed Headphones",
    price: 34,
    image: "headphone.png"
  },
  {
    id: 16,
    name: "Portable Washing Machine Mini",
    price: 189,
    image: "headphone.png"
  },
  {
    id: 17,
    name: "Redragon S101 Gaming Keyboard and Mouse",
    price: 45,
    image: "keyboard.png"
  },
  {
    id: 18,
    name: "Dell Compact All in One Printer",
    price: 220,
    image: "printer.png"
  },
  {
    id: 19,
    name: "Wireless Security Camera Indoor",
    price: 59,
    image: "camero.png"
  },
  {
    id: 20,
    name: "Logitech HD Webcam for Streaming",
    price: 49,
    image: "camera2.png"
  },
  {
    id: 21,
    name: "HP All in One Printer Scanner",
    price: 130,
    image: "printer2.png"
  },
  {
    id: 22,
    name: "Robot Vacuum Cleaner Smart Home",
    price: 249,
    image: "washer.png"
  }
];
export const categories = [
  {
    id: 1,
    name: "Computer & Laptop",
    image: "computer2.png",
  },
  {
    id: 2,
    name: "SmartPhone",
image: "phone3.png",  },
  {
    id: 3,
    name: "Headphones",
    image: "headphone.png",
  },
  {
    id: 4,
    name: "Accessories",
    image: "keyboard.png",
  },
  {
    id: 5,
    name: "Camera & Photo",
    image: "camera.png",
  },
  {
    id: 6,
    name: "TV & Home",
    image: "TV.png",
  }
];
const newsList = [
  {
    id: 1,
    author: "Kristin",
    date: "19 Dec, 2013",
    comments: 453,
    title: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    text: "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 2,
    author: "Robert",
    date: "28 Nov, 2015",
    comments: 738,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    text: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500"
  },
  {
    id: 3,
    author: "Ariane",
    date: "9 May, 2014",
    comments: 826,
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    text: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta id suscipit mattis, risus augue condimentum purus.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500"
  }
];

const categoryList = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Cosmetics" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Furniture" },
  { id: 5, name: "Watches" },
  { id: 6, name: "Decor" }
];
 
const categoryRows = new Array(6).fill(categoryList);
 
export { categoryList, categoryRows };
 
 const navLinks = [
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home Improvement",
  "Sport, Toys & Luggage"
];
 
export { navLinks };
 const brandList = ["Nike", "Reebok", "Zara", "Gearo", "Indi", "Aei", "Lulu", "Beast"];

const products123 = [
  {
    id: 1,
    name: "ZARA Suit Blazer Midnight Black Cotton",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: true,
    hasGetDeal: true,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400"
  },
  {
    id: 2,
    name: "ZARA Black SunGlasses Anti Dust Resistant",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: true,
    hasGetDeal: true,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
  },
  {
    id: 3,
    name: "Black Boots with Glossy Finishing Travel",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: true,
    hasGetDeal: true,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400"
  },
  {
    id: 4,
    name: "ZARA Suit Blazer Midnight Black Cotton",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: false,
    hasGetDeal: false,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400"
  },
  {
    id: 5,
    name: "ZARA Black SunGlasses Anti Dust Resistant",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: false,
    hasGetDeal: false,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400"
  },
  {
    id: 6,
    name: "Black Boots with Glossy Finishing Travel",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: false,
    hasGetDeal: false,
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400"
  },
  {
    id: 7,
    name: "ZARA Suit Blazer Midnight Black Cotton",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: false,
    hasGetDeal: false,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
  },
  {
    id: 8,
    name: "ZARA Black SunGlasses Anti Dust Resistant",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: false,
    hasGetDeal: false,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
  },
  {
    id: 9,
    name: "Black Boots with Glossy Finishing Travel",
    price: 125,
    rating: 4.7,
    ratingsCount: "21,671",
    flashDeal: false,
    hasGetDeal: false,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
  }
];

export { brandList, products123 };

export {accessoriesProducts,featuredProducts,products,newsList}