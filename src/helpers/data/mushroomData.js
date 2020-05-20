/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
const mushrooms = [
  {
    id: 'shroom1',
    name: 'Cep',
    imgUrl: 'https://www.first-nature.com/fungi/images/boletaceae/boletus-edulis1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom2',
    name: 'Suillus',
    imgUrl: 'https://www.first-nature.com/fungi/images/suillaceae/suillus-grevillei1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom3',
    name: 'Porcini',
    imgUrl: 'https://www.almagourmet.com/store/images/fresh-porcini-s.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom4',
    name: 'Puffball',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51GpBfQT29L._AC_SX425_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom5',
    name: 'Coral Milky Cap',
    imgUrl: 'https://previews.123rf.com/images/pali/pali1111/pali111100241/11217341-mushroom-a-coral-milky-cap-lactarius-.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom6',
    name: 'Chantrelle',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81MGFbXKZLL._SL1500_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom7',
    name: 'Russula',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mushroom-IMG_3300.JPG/1200px-Mushroom-IMG_3300.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom8',
    name: 'Shiitake',
    imgUrl: 'https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-Library/default/dw48eaa06c/images/content/shiitake-mushrooms-recipes-and-uses.jpg?sw=660&strip=false',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom9',
    name: 'Honey Fungus',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Armillaria_mellea%2C_Honey_Fungus%2C_UK_1.jpg/1024px-Armillaria_mellea%2C_Honey_Fungus%2C_UK_1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom10',
    name: 'Lactarius',
    imgUrl: 'https://i1.wp.com/foragerchef.com/wp-content/uploads/2018/09/Lactifluus-thyinos-6.jpg?fit=1000%2C667&ssl=1',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom11',
    name: 'Pink Oyster',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0048/3383/7154/products/FWF_Products-0342_300x.jpg?v=1542329107',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom12',
    name: 'Morel',
    imgUrl: 'https://scx2.b-cdn.net/gfx/news/hires/2019/triggeringmo.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom13',
    name: 'Amanita Caesarea',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Oronges.jpg/1200px-Oronges.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom14',
    name: 'Truffle',
    imgUrl: 'https://www.artisanalfoods.com/wp-content/uploads/2017/10/whitetruffle-1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom15',
    name: 'Lactarius Indigo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lactarius_indigo_48568_edit.jpg/1280px-Lactarius_indigo_48568_edit.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom16',
    name: 'Magic Mushroom',
    imgUrl: 'https://d.newsweek.com/en/full/1552893/magic-mushrooms-psilocybin-psychedelics-stock-getty.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom17',
    name: 'Amanita Phalloides',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Amanita_phalloides_1.JPG/576px-Amanita_phalloides_1.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
    inBasket: false,
  },
  {
    id: 'shroom18',
    name: 'Omphalotus Olearius',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Omphalotus_olearius_Mallorca.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom19',
    name: 'Amanita Muscaria',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2006-10-25_Amanita_muscaria_crop.jpg/1280px-2006-10-25_Amanita_muscaria_crop.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
    inBasket: false,
  },
  {
    id: 'shroom20',
    name: 'Turbinellus Floccosus',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Gomphus_floccosus_6051.JPG',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
    inBasket: false,
  },
];

const basket = [];

const getBasket = () => basket;
const getMushrooms = () => mushrooms;

const addShroomBGText = (shroom) => {
  if (shroom.isPoisonous) {
    shroom.BG = 'card bg-warning';
    shroom.text = "Uh oh, you're poisoned-o";
  } else if (shroom.isDeadly) {
    shroom.BG = 'card bg-dark';
    shroom.text = 'Darwinism going to work on you';
  } else if (shroom.isMagic) {
    shroom.BG = 'card bg-info';
    shroom.text = 'Are the walls breathing like a dragon?';
  } else {
    shroom.BG = 'card';
    shroom.text = 'safe for now, just a regular mushroom';
  }
};

const basketCount = (newShroom) => {
  const names = [];
  const counts = {};
  basket.forEach((shroom) => { if (shroom) names.push(shroom.name); });
  names.forEach((shroom) => { counts[shroom] = (counts[shroom] || 0) + 1; });
  const countArray = Object.entries(counts);
  countArray.forEach((countArr) => {
    if (newShroom.name === countArr[0]) { newShroom.count = countArr[1] + 1; }
  });
};

const addAllOtherMushrooms = () => {
  mushrooms.forEach((shroom) => {
    if (!shroom.isPoisonous && !shroom.isDeadly && !shroom.isMagic) basket.push(shroom);
    console.error('you win');
  });
};

const statusResponse = (shroom) => {
  if (shroom.isPoisonous) {
    console.error('Poison');
    basket.splice(shroom, 2);
  } else if (shroom.isDeadly) {
    console.error('YOU DIED');
    basket.splice(shroom, basket.length);
  } else if (shroom.isMagic) {
    addAllOtherMushrooms();
    
  }
  return basket;
};

const winChecker = () => {
  if (basket.length > 17) {
    basket.forEach((shroom) => {
      if (!shroom.isPoisonous && !shroom.isDeadly && !shroom.isMagic) console.error('you win!');
    });
  }
};

const pickShroom = (shroomId) => {
  const randInt = Math.ceil(Math.random() * 1500);
  mushrooms.forEach((response) => {
    if (response.id === shroomId) {
      const newShroom = {
        id: `basket${basket.length + randInt}`,
        name: response.name,
        imgUrl: response.imgUrl,
        isMagic: response.isMagic,
        isPoisonous: response.isPoisonous,
        isDeadly: response.isDeadly,
        inBasket: true,
        BG: '',
        text: '',
      };
      newShroom.count = basketCount(response);
      addShroomBGText(newShroom);
      basket.push(newShroom);
      statusResponse(newShroom);
      winChecker();
    }
  });
};

export default { getBasket, getMushrooms, pickShroom };
