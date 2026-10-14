// Chai Bro Handcrafted Cafe Menu
// 100% Pure Vegetarian, Standardized Cafe Menu directly from Chai Bro's.xlsx

export const MENU_CATEGORIES = [
  {
    "id": "all",
    "label": "All Favourites",
    "image": "/assets/menu/chai.png",
    "subtitle": "Explore our full handcrafted pure vegetarian café menu.",
    "itemsCount": 143
  },
  {
    "id": "chai",
    "label": "Chai",
    "subtitle": "Freshly brewed cups with familiar Indian flavours.",
    "image": "/assets/menu/chai.png",
    "itemsCount": 10
  },
  {
    "id": "hot-coffee",
    "label": "Hot Coffee",
    "subtitle": "Smooth coffee cups for a warm, easy break.",
    "image": "/assets/menu/hot-coffee.png",
    "itemsCount": 4
  },
  {
    "id": "cold-coffee",
    "label": "Cold Coffee",
    "subtitle": "Creamy chilled coffee made for long conversations.",
    "image": "/assets/menu/cold-coffee.png",
    "itemsCount": 8
  },
  {
    "id": "shakes",
    "label": "Shakes",
    "subtitle": "Thick, chilled and dessert-style favourites.",
    "image": "/assets/menu/shakes.png",
    "itemsCount": 15
  },
  {
    "id": "mocktails",
    "label": "Mocktails & Mojito",
    "subtitle": "Bright, fizzy and refreshing glasses.",
    "image": "/assets/menu/mocktails.png",
    "itemsCount": 13
  },
  {
    "id": "hot-milk",
    "label": "Hot Milk",
    "subtitle": "Comforting milk drinks with gurh, kesar and elaichi.",
    "image": "/assets/menu/hot-milk.png",
    "itemsCount": 4
  },
  {
    "id": "cold-milk",
    "label": "Cold Milk",
    "subtitle": "Cooling milk blends for a simple refresh.",
    "image": "/assets/menu/cold-milk.png",
    "itemsCount": 4
  },
  {
    "id": "lassi",
    "label": "Lassi",
    "subtitle": "Classic cooling favourites.",
    "image": "/assets/menu/lassi.png",
    "itemsCount": 3
  },
  {
    "id": "burgers",
    "label": "Burgers",
    "subtitle": "Soft buns, crisp fillings and bold vegetarian flavours.",
    "image": "/assets/menu/burgers.png",
    "itemsCount": 7
  },
  {
    "id": "fries",
    "label": "Fries",
    "subtitle": "Golden sides for sharing and dipping.",
    "image": "/assets/menu/fries.png",
    "itemsCount": 5
  },
  {
    "id": "sides",
    "label": "Sides",
    "subtitle": "Small plates that complete a chai break.",
    "image": "/assets/menu/sides.png",
    "itemsCount": 9
  },
  {
    "id": "healthy",
    "label": "Healthy Feast",
    "subtitle": "Lighter choices with corn, poha, chaat and salads.",
    "image": "/assets/menu/healthy.png",
    "itemsCount": 8
  },
  {
    "id": "maggie",
    "label": "Maggie",
    "subtitle": "Hot noodle bowls for quick cravings.",
    "image": "/assets/menu/maggie.png",
    "itemsCount": 7
  },
  {
    "id": "wraps",
    "label": "Wraps",
    "subtitle": "Handheld bites with crisp vegetables and paneer.",
    "image": "/assets/menu/wraps.png",
    "itemsCount": 5
  },
  {
    "id": "pizza",
    "label": "Pizza",
    "subtitle": "Cheesy vegetarian pizzas from classic to loaded.",
    "image": "/assets/menu/pizza.png",
    "itemsCount": 19
  },
  {
    "id": "sandwiches",
    "label": "Sandwiches",
    "subtitle": "Four-slice stacks with familiar fillings.",
    "image": "/assets/menu/sandwiches.png",
    "itemsCount": 9
  },
  {
    "id": "pasta",
    "label": "Pasta",
    "subtitle": "Comforting bowls with red, white and mixed sauces.",
    "image": "/assets/menu/pasta.png",
    "itemsCount": 4
  },
  {
    "id": "garlic-bread",
    "label": "Garlic Bread",
    "subtitle": "Buttery, cheesy and made for sharing.",
    "image": "/assets/menu/garlic-bread.png",
    "itemsCount": 8
  },
  {
    "id": "churi",
    "label": "Signature Desi Ghee Churi",
    "subtitle": "A warm, sweet signature bite with desi ghee richness.",
    "image": "/assets/menu/churi.png",
    "itemsCount": 1
  }
];

export const MENU_ITEMS = [
  {
    "id": "adrak-chai",
    "name": "Adrak Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/adrak-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 25
      },
      {
        "size": "Medium",
        "price": 40
      },
      {
        "size": "Large",
        "price": 50
      }
    ],
    "isVeg": true
  },
  {
    "id": "gurh-chai",
    "name": "Gurh Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/gurh-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 35
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "chocolate-chai",
    "name": "Chocolate Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/chocolate-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 35
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "gurh-elaichi-chai",
    "name": "Gurh + Elaichi Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/gurh-elaichi-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 35
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "adrak-elaichi-chai",
    "name": "Adrak + Elaichi Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/adrak-elaichi-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 35
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "elaichi-chai",
    "name": "Elaichi Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/elaichi-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 30
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "rose-chai",
    "name": "Rose Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/rose-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 35
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "paan-chai",
    "name": "Paan Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/paan-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 35
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "gurh-masala-chai",
    "name": "Gurh + Masala Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/gurh-masala-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 35
      },
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 60
      }
    ],
    "isVeg": true
  },
  {
    "id": "kesar-chai",
    "name": "Kesar Chai",
    "category": "chai",
    "categoryLabel": "Chai",
    "image": "/assets/menu/items/kesar-chai.png",
    "variants": [
      {
        "size": "Normal",
        "price": 40
      },
      {
        "size": "Medium",
        "price": 55
      },
      {
        "size": "Large",
        "price": 65
      }
    ],
    "isVeg": true
  },
  {
    "id": "black-hot-coffee",
    "name": "Black Hot Coffee",
    "category": "hot-coffee",
    "categoryLabel": "Hot Coffee",
    "image": "/assets/menu/items/black-hot-coffee.png",
    "variants": [
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 70
      }
    ],
    "isVeg": true
  },
  {
    "id": "choco-hot-coffee",
    "name": "Choco Hot Coffee",
    "category": "hot-coffee",
    "categoryLabel": "Hot Coffee",
    "image": "/assets/menu/items/choco-hot-coffee.png",
    "variants": [
      {
        "size": "Medium",
        "price": 60
      },
      {
        "size": "Large",
        "price": 75
      }
    ],
    "isVeg": true
  },
  {
    "id": "hot-coffee",
    "name": "Hot Coffee",
    "category": "hot-coffee",
    "categoryLabel": "Hot Coffee",
    "image": "/assets/menu/items/hot-coffee.png",
    "variants": [
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 70
      }
    ],
    "isVeg": true
  },
  {
    "id": "caramel-coffee",
    "name": "Caramel Coffee",
    "category": "hot-coffee",
    "categoryLabel": "Hot Coffee",
    "image": "/assets/menu/items/caramel-coffee.png",
    "variants": [
      {
        "size": "Medium",
        "price": 60
      },
      {
        "size": "Large",
        "price": 75
      }
    ],
    "isVeg": true
  },
  {
    "id": "classic-cold-coffee",
    "name": "Classic Cold Coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/classic-cold-coffee.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "caramel-cold-coffee",
    "name": "Caramel Cold Coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/caramel-cold-coffee.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "hazelnut-cold-coffee",
    "name": "Hazelnut Cold Coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/hazelnut-cold-coffee.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "cold-coffee-with-ice-cream",
    "name": "Cold Coffee with Ice Cream",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/cold-coffee-with-ice-cream.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "choco-cold-coffee",
    "name": "Choco Cold Coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/choco-cold-coffee.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "brownie-cold-coffee",
    "name": "Brownie Cold Coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/brownie-cold-coffee.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "biscoff-cold-coffee",
    "name": "Biscoff Cold Coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/biscoff-cold-coffee.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "cb-special-coffee",
    "name": "CB Special Coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "image": "/assets/menu/items/cb-special-coffee.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "strawberry-shake",
    "name": "Strawberry Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/strawberry-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "vanilla-shake",
    "name": "Vanilla Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/vanilla-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "blueberry-shake",
    "name": "Blueberry Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/blueberry-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "kitkat-shake",
    "name": "Kitkat Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/kitkat-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "caramel-shake",
    "name": "Caramel Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/caramel-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "biscoff-shake",
    "name": "Biscoff Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/biscoff-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "rasmalai-shake",
    "name": "Rasmalai Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/rasmalai-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 149
      }
    ],
    "isVeg": true
  },
  {
    "id": "banana-shake",
    "name": "Banana Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/banana-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 149
      }
    ],
    "isVeg": true
  },
  {
    "id": "butterscotch-shake",
    "name": "Butterscotch Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/butterscotch-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "black-currant-shake",
    "name": "Black Currant Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/black-currant-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "oreo-milk-shake",
    "name": "Oreo Milk Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/oreo-milk-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "brownie-shake",
    "name": "Brownie Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/brownie-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "brownie-shake-2",
    "name": "Brownie Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/brownie-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "nutella-shake",
    "name": "Nutella Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/nutella-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "mango-shake",
    "name": "Mango Shake",
    "category": "shakes",
    "categoryLabel": "Shakes",
    "image": "/assets/menu/items/mango-shake.png",
    "variants": [
      {
        "size": "Regular",
        "price": 149
      }
    ],
    "isVeg": true
  },
  {
    "id": "nimbu-pani",
    "name": "Nimbu Pani",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/nimbu-pani.png",
    "variants": [
      {
        "size": "Regular",
        "price": 70
      }
    ],
    "isVeg": true
  },
  {
    "id": "fresh-lime-soda",
    "name": "Fresh Lime Soda",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/fresh-lime-soda.png",
    "variants": [
      {
        "size": "Regular",
        "price": 89
      }
    ],
    "isVeg": true
  },
  {
    "id": "masala-lemonade",
    "name": "Masala Lemonade",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/masala-lemonade.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "watermelon-mojito",
    "name": "Watermelon Mojito",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/watermelon-mojito.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "peach-ice-tea",
    "name": "Peach Ice Tea",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/peach-ice-tea.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "jamun-mojito",
    "name": "Jamun Mojito",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/jamun-mojito.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "chilli-guava",
    "name": "Chilli Guava",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/chilli-guava.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "lemon-ice-tea",
    "name": "Lemon Ice Tea",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/lemon-ice-tea.png",
    "variants": [
      {
        "size": "Regular",
        "price": 89
      }
    ],
    "isVeg": true
  },
  {
    "id": "lemonade",
    "name": "Lemonade",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/lemonade.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "virgin-mojito",
    "name": "Virgin Mojito",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/virgin-mojito.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "blueberry-mojito",
    "name": "Blueberry Mojito",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/blueberry-mojito.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "green-apple",
    "name": "Green Apple",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/green-apple.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "peach-mojito",
    "name": "Peach Mojito",
    "category": "mocktails",
    "categoryLabel": "Mocktails & Mojito",
    "image": "/assets/menu/items/peach-mojito.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "gurh-doodh",
    "name": "Gurh Doodh",
    "category": "hot-milk",
    "categoryLabel": "Hot Milk",
    "image": "/assets/menu/items/gurh-doodh.png",
    "variants": [
      {
        "size": "Medium",
        "price": 50
      },
      {
        "size": "Large",
        "price": 65
      }
    ],
    "isVeg": true
  },
  {
    "id": "elaichi-doodh",
    "name": "Elaichi Doodh",
    "category": "hot-milk",
    "categoryLabel": "Hot Milk",
    "image": "/assets/menu/items/elaichi-doodh.png",
    "variants": [
      {
        "size": "Medium",
        "price": 55
      },
      {
        "size": "Large",
        "price": 70
      }
    ],
    "isVeg": true
  },
  {
    "id": "kesar-doodh",
    "name": "Kesar Doodh",
    "category": "hot-milk",
    "categoryLabel": "Hot Milk",
    "image": "/assets/menu/items/kesar-doodh.png",
    "variants": [
      {
        "size": "Medium",
        "price": 55
      },
      {
        "size": "Large",
        "price": 70
      }
    ],
    "isVeg": true
  },
  {
    "id": "gurh-elaichi-doodh",
    "name": "Gurh + Elaichi Doodh",
    "category": "hot-milk",
    "categoryLabel": "Hot Milk",
    "image": "/assets/menu/items/gurh-elaichi-doodh.png",
    "variants": [
      {
        "size": "Medium",
        "price": 60
      },
      {
        "size": "Large",
        "price": 75
      }
    ],
    "isVeg": true
  },
  {
    "id": "gurh-cold-doodh",
    "name": "Gurh Cold Doodh",
    "category": "cold-milk",
    "categoryLabel": "Cold Milk",
    "image": "/assets/menu/items/gurh-cold-doodh.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "elaichi-cold-doodh",
    "name": "Elaichi Cold Doodh",
    "category": "cold-milk",
    "categoryLabel": "Cold Milk",
    "image": "/assets/menu/items/elaichi-cold-doodh.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "kesar-cold-doodh",
    "name": "Kesar Cold Doodh",
    "category": "cold-milk",
    "categoryLabel": "Cold Milk",
    "image": "/assets/menu/items/kesar-cold-doodh.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "gurh-elaichi-cold-doodh",
    "name": "Gurh + Elaichi Cold Doodh",
    "category": "cold-milk",
    "categoryLabel": "Cold Milk",
    "image": "/assets/menu/items/gurh-elaichi-cold-doodh.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "meethi-lassi",
    "name": "Meethi Lassi",
    "category": "lassi",
    "categoryLabel": "Lassi",
    "image": "/assets/menu/items/meethi-lassi.png",
    "variants": [
      {
        "size": "Regular",
        "price": 69
      }
    ],
    "isVeg": true
  },
  {
    "id": "namkeen-lassi",
    "name": "Namkeen Lassi",
    "category": "lassi",
    "categoryLabel": "Lassi",
    "image": "/assets/menu/items/namkeen-lassi.png",
    "variants": [
      {
        "size": "Regular",
        "price": 69
      }
    ],
    "isVeg": true
  },
  {
    "id": "mango-lassi",
    "name": "Mango Lassi",
    "category": "lassi",
    "categoryLabel": "Lassi",
    "image": "/assets/menu/items/mango-lassi.png",
    "variants": [
      {
        "size": "Regular",
        "price": 89
      }
    ],
    "isVeg": true
  },
  {
    "id": "aloo-tikki-burger",
    "name": "Aloo Tikki Burger",
    "category": "burgers",
    "categoryLabel": "Burgers",
    "image": "/assets/menu/items/aloo-tikki-burger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 59
      }
    ],
    "isVeg": true
  },
  {
    "id": "veg-cheese-burger",
    "name": "Veg. Cheese Burger",
    "category": "burgers",
    "categoryLabel": "Burgers",
    "image": "/assets/menu/items/veg-cheese-burger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "veg-paneer-burger",
    "name": "Veg. Paneer Burger",
    "category": "burgers",
    "categoryLabel": "Burgers",
    "image": "/assets/menu/items/veg-paneer-burger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "cb-special-burger",
    "name": "CB Special Burger",
    "category": "burgers",
    "categoryLabel": "Burgers",
    "image": "/assets/menu/items/cb-special-burger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "crispy-veg-burger",
    "name": "Crispy Veg Burger",
    "category": "burgers",
    "categoryLabel": "Burgers",
    "image": "/assets/menu/items/crispy-veg-burger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 79
      }
    ],
    "isVeg": true
  },
  {
    "id": "mexican-burger",
    "name": "Mexican Burger",
    "category": "burgers",
    "categoryLabel": "Burgers",
    "image": "/assets/menu/items/mexican-burger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "korean-spicy-paneer-burger",
    "name": "Korean Spicy Paneer Burger",
    "category": "burgers",
    "categoryLabel": "Burgers",
    "image": "/assets/menu/items/korean-spicy-paneer-burger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "plain-fries",
    "name": "Plain Fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "image": "/assets/menu/items/plain-fries.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "peri-peri-fries",
    "name": "Peri Peri Fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "image": "/assets/menu/items/peri-peri-fries.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-fries",
    "name": "Cheese Fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "image": "/assets/menu/items/cheese-fries.png",
    "variants": [
      {
        "size": "Regular",
        "price": 149
      }
    ],
    "isVeg": true
  },
  {
    "id": "masala-fries",
    "name": "Masala Fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "image": "/assets/menu/items/masala-fries.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "mix-loaded-fries",
    "name": "Mix Loaded Fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "image": "/assets/menu/items/mix-loaded-fries.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "maska-bun",
    "name": "Maska Bun",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/maska-bun.png",
    "variants": [
      {
        "size": "Regular",
        "price": 29
      }
    ],
    "isVeg": true
  },
  {
    "id": "garlic-bun",
    "name": "Garlic Bun",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/garlic-bun.png",
    "variants": [
      {
        "size": "Regular",
        "price": 39
      }
    ],
    "isVeg": true
  },
  {
    "id": "garlic-bun-2",
    "name": "Garlic Bun",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/garlic-bun.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-shots",
    "name": "Cheese Shots",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/cheese-shots.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "hara-bhara-kabab",
    "name": "Hara Bhara Kabab",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/hara-bhara-kabab.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "veggie-finger",
    "name": "Veggie Finger",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/veggie-finger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-finger",
    "name": "Cheese Finger",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/cheese-finger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "paneer-finger",
    "name": "Paneer Finger",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/paneer-finger.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "cigar-cheese-roll",
    "name": "Cigar Cheese Roll",
    "category": "sides",
    "categoryLabel": "Sides",
    "image": "/assets/menu/items/cigar-cheese-roll.png",
    "variants": [
      {
        "size": "Regular",
        "price": 149
      }
    ],
    "isVeg": true
  },
  {
    "id": "sweet-corn",
    "name": "Sweet Corn",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/sweet-corn.png",
    "variants": [
      {
        "size": "Regular",
        "price": 49
      },
      {
        "size": "Large",
        "price": 69
      }
    ],
    "isVeg": true
  },
  {
    "id": "masala-sweet-corn",
    "name": "Masala Sweet Corn",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/masala-sweet-corn.png",
    "variants": [
      {
        "size": "Regular",
        "price": 59
      },
      {
        "size": "Large",
        "price": 79
      }
    ],
    "isVeg": true
  },
  {
    "id": "onion-sweet-corn",
    "name": "Onion Sweet Corn",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/onion-sweet-corn.png",
    "variants": [
      {
        "size": "Regular",
        "price": 59
      },
      {
        "size": "Large",
        "price": 79
      }
    ],
    "isVeg": true
  },
  {
    "id": "peanut-chaat",
    "name": "Peanut Chaat",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/peanut-chaat.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "poha",
    "name": "Poha",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/poha.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "peanut-corn-chaat",
    "name": "Peanut Corn Chaat",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/peanut-corn-chaat.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "gym-salad",
    "name": "Gym Salad",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/gym-salad.png",
    "variants": [
      {
        "size": "Regular",
        "price": 169
      }
    ],
    "isVeg": true
  },
  {
    "id": "virat-kohali-salad",
    "name": "Virat Kohali Salad",
    "category": "healthy",
    "categoryLabel": "Healthy Feast",
    "image": "/assets/menu/items/virat-kohali-salad.png",
    "variants": [
      {
        "size": "Regular",
        "price": 199
      }
    ],
    "isVeg": true
  },
  {
    "id": "plain-maggie",
    "name": "Plain Maggie",
    "category": "maggie",
    "categoryLabel": "Maggie",
    "image": "/assets/menu/items/plain-maggie.png",
    "variants": [
      {
        "size": "Regular",
        "price": 69
      }
    ],
    "isVeg": true
  },
  {
    "id": "double-masala-maggie",
    "name": "Double Masala Maggie",
    "category": "maggie",
    "categoryLabel": "Maggie",
    "image": "/assets/menu/items/double-masala-maggie.png",
    "variants": [
      {
        "size": "Regular",
        "price": 79
      }
    ],
    "isVeg": true
  },
  {
    "id": "vegetable-maggie",
    "name": "Vegetable Maggie",
    "category": "maggie",
    "categoryLabel": "Maggie",
    "image": "/assets/menu/items/vegetable-maggie.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "schezwan-maggie",
    "name": "Schezwan Maggie",
    "category": "maggie",
    "categoryLabel": "Maggie",
    "image": "/assets/menu/items/schezwan-maggie.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-butter-maggie",
    "name": "Cheese & Butter Maggie",
    "category": "maggie",
    "categoryLabel": "Maggie",
    "image": "/assets/menu/items/cheese-butter-maggie.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "corn-cheese-maggie",
    "name": "Corn Cheese Maggie",
    "category": "maggie",
    "categoryLabel": "Maggie",
    "image": "/assets/menu/items/corn-cheese-maggie.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "cb-special-maggie",
    "name": "CB Special Maggie",
    "category": "maggie",
    "categoryLabel": "Maggie",
    "image": "/assets/menu/items/cb-special-maggie.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "aloo-wrap",
    "name": "Aloo Wrap",
    "category": "wraps",
    "categoryLabel": "Wraps",
    "image": "/assets/menu/items/aloo-wrap.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "crunchy-veg-wrap",
    "name": "Crunchy Veg Wrap",
    "category": "wraps",
    "categoryLabel": "Wraps",
    "image": "/assets/menu/items/crunchy-veg-wrap.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "peri-peri-wrap",
    "name": "Peri Peri Wrap",
    "category": "wraps",
    "categoryLabel": "Wraps",
    "image": "/assets/menu/items/peri-peri-wrap.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "mexican-wrap",
    "name": "Mexican Wrap",
    "category": "wraps",
    "categoryLabel": "Wraps",
    "image": "/assets/menu/items/mexican-wrap.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "desi-paneer-wrap",
    "name": "Desi Paneer Wrap",
    "category": "wraps",
    "categoryLabel": "Wraps",
    "image": "/assets/menu/items/desi-paneer-wrap.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-onion-pizza-7",
    "name": "Cheese Onion Pizza 7”",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/cheese-onion-pizza-7.png",
    "variants": [
      {
        "size": "7”",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-mushroom-pizza-7",
    "name": "Cheese Mushroom Pizza 7”",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/cheese-mushroom-pizza-7.png",
    "variants": [
      {
        "size": "7”",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-pizza-7",
    "name": "Cheese Pizza 7”",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/cheese-pizza-7.png",
    "variants": [
      {
        "size": "7”",
        "price": 100
      }
    ],
    "isVeg": true
  },
  {
    "id": "capsicum-pizza-7",
    "name": "Capsicum Pizza 7”",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/capsicum-pizza-7.png",
    "variants": [
      {
        "size": "7”",
        "price": 101
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-paneer-pizza-7",
    "name": "Cheese Paneer Pizza 7”",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/cheese-paneer-pizza-7.png",
    "variants": [
      {
        "size": "7”",
        "price": 102
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-margarita-pizza-7",
    "name": "Cheese Margarita Pizza 7”",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/cheese-margarita-pizza-7.png",
    "variants": [
      {
        "size": "7”",
        "price": 103
      }
    ],
    "isVeg": true
  },
  {
    "id": "onion-paneer-pizza",
    "name": "Onion + Paneer Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/onion-paneer-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "onion-capsicum-pizza",
    "name": "Onion + Capsicum Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/onion-capsicum-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 120
      }
    ],
    "isVeg": true
  },
  {
    "id": "onion-corn-pizza",
    "name": "Onion + Corn Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/onion-corn-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 121
      }
    ],
    "isVeg": true
  },
  {
    "id": "capsicum-corn-pizza",
    "name": "Capsicum + Corn Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/capsicum-corn-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 122
      }
    ],
    "isVeg": true
  },
  {
    "id": "classic-veg-pizza",
    "name": "Classic Veg Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/classic-veg-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 123
      },
      {
        "size": "Regular",
        "price": 124
      }
    ],
    "isVeg": true
  },
  {
    "id": "popular-veg-pizza",
    "name": "Popular Veg Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/popular-veg-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 125
      },
      {
        "size": "Regular",
        "price": 126
      }
    ],
    "isVeg": true
  },
  {
    "id": "veggie-feast-pizza",
    "name": "Veggie Feast Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/veggie-feast-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 127
      },
      {
        "size": "Regular",
        "price": 128
      }
    ],
    "isVeg": true
  },
  {
    "id": "multi-topping-pizza",
    "name": "Multi Topping Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/multi-topping-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "farmer-pizza",
    "name": "Farmer Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/farmer-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 130
      },
      {
        "size": "Regular",
        "price": 131
      }
    ],
    "isVeg": true
  },
  {
    "id": "double-paneer-makhni-pizza",
    "name": "Double Paneer Makhni Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/double-paneer-makhni-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 132
      },
      {
        "size": "Regular",
        "price": 133
      }
    ],
    "isVeg": true
  },
  {
    "id": "veg-delight-pizza",
    "name": "Veg Delight Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/veg-delight-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 134
      },
      {
        "size": "Regular",
        "price": 135
      },
      {
        "size": "Regular",
        "price": 136
      }
    ],
    "isVeg": true
  },
  {
    "id": "veggie-supreme-pizza",
    "name": "Veggie Supreme Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/veggie-supreme-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 137
      },
      {
        "size": "Regular",
        "price": 138
      }
    ],
    "isVeg": true
  },
  {
    "id": "peppy-paneer-pizza",
    "name": "Peppy Paneer Pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "image": "/assets/menu/items/peppy-paneer-pizza.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      },
      {
        "size": "Regular",
        "price": 140
      }
    ],
    "isVeg": true
  },
  {
    "id": "aloo-toast-sandwich",
    "name": "Aloo Toast Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/aloo-toast-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "corn-masala-sandwich",
    "name": "Corn Masala Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/corn-masala-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "paneer-takatak-sandwich",
    "name": "Paneer Takatak Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/paneer-takatak-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "paneer-special-sandwich",
    "name": "Paneer Special Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/paneer-special-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "cb-special-sandwich",
    "name": "CB Special Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/cb-special-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "cb-special-sandwich-2",
    "name": "CB Special Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/cb-special-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "veggie-grill-sandwich",
    "name": "Veggie Grill Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/veggie-grill-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 109
      }
    ],
    "isVeg": true
  },
  {
    "id": "diet-sandwich",
    "name": "Diet Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/diet-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "hara-bhara-sandwich",
    "name": "Hara Bhara Sandwich",
    "category": "sandwiches",
    "categoryLabel": "Sandwiches",
    "image": "/assets/menu/items/hara-bhara-sandwich.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "home-style-pasta",
    "name": "Home Style Pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "image": "/assets/menu/items/home-style-pasta.png",
    "variants": [
      {
        "size": "Regular",
        "price": 129
      }
    ],
    "isVeg": true
  },
  {
    "id": "white-sauce-pasta",
    "name": "White Sauce Pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "image": "/assets/menu/items/white-sauce-pasta.png",
    "variants": [
      {
        "size": "Regular",
        "price": 169
      }
    ],
    "isVeg": true
  },
  {
    "id": "mix-sauce-pasta",
    "name": "Mix Sauce Pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "image": "/assets/menu/items/mix-sauce-pasta.png",
    "variants": [
      {
        "size": "Regular",
        "price": 189
      }
    ],
    "isVeg": true
  },
  {
    "id": "red-sauce-pasta",
    "name": "Red Sauce Pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "image": "/assets/menu/items/red-sauce-pasta.png",
    "variants": [
      {
        "size": "Regular",
        "price": 139
      }
    ],
    "isVeg": true
  },
  {
    "id": "plain-garlic-toast",
    "name": "Plain Garlic Toast",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/plain-garlic-toast.png",
    "variants": [
      {
        "size": "Regular",
        "price": 69
      }
    ],
    "isVeg": true
  },
  {
    "id": "round-cheese-garlic",
    "name": "Round Cheese Garlic",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/round-cheese-garlic.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "exotic-garlic-bread",
    "name": "Exotic Garlic Bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/exotic-garlic-bread.png",
    "variants": [
      {
        "size": "Regular",
        "price": 119
      }
    ],
    "isVeg": true
  },
  {
    "id": "paneer-stuffed-garlic-bread",
    "name": "Paneer Stuffed Garlic Bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/paneer-stuffed-garlic-bread.png",
    "variants": [
      {
        "size": "Regular",
        "price": 169
      }
    ],
    "isVeg": true
  },
  {
    "id": "plain-garlic-sticks",
    "name": "Plain Garlic Sticks",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/plain-garlic-sticks.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "garlic-shots",
    "name": "Garlic Shots",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/garlic-shots.png",
    "variants": [
      {
        "size": "Regular",
        "price": 99
      }
    ],
    "isVeg": true
  },
  {
    "id": "stuffed-garlic-bread",
    "name": "Stuffed Garlic Bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/stuffed-garlic-bread.png",
    "variants": [
      {
        "size": "Regular",
        "price": 169
      }
    ],
    "isVeg": true
  },
  {
    "id": "cheese-calzone",
    "name": "Cheese Calzone",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "image": "/assets/menu/items/cheese-calzone.png",
    "variants": [
      {
        "size": "Regular",
        "price": 179
      }
    ],
    "isVeg": true
  },
  {
    "id": "desi-ghee-churi",
    "name": "Desi Ghee Churi",
    "category": "churi",
    "categoryLabel": "Signature Desi Ghee Churi",
    "image": "/assets/menu/items/desi-ghee-churi.png",
    "variants": [
      {
        "size": "Regular",
        "price": 60
      }
    ],
    "isVeg": true
  }
];
