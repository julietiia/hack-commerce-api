
const { Product } = require("../models");

module.exports = async () => {
  const products = [{
    name: "Alexia Chair",
    price: "245",
    description: "Elevate your reading nooks with this chair featuring a scalloped back rest for a fresh twist on seating essentials. Cushy lounge chair finished with luxuriously plush fabrics. This custom piece of furniture will be made to order just for you. Available exclusively at Urban Outfitters. Dimensions: 35l x 33w x 31h",
    stock: "10",
    image: "https://images.urbndata.com/is/image/UrbanOutfitters/85791887_040_d?$redesign-zoom-5x$",
    highlight: false, 
    code: 10,
   

    
  },
  {
    name: "Panton Chair",
    price: "590",
    description: "Elevate your reading nooks with this chair featuring a scalloped back rest for a fresh twist on seating essentials. Cushy lounge chair finished with luxuriously plush fabrics. This custom piece of furniture will be made to order just for you. Available exclusively at Urban Outfitters. Dimensions: 35l x 33w x 31h",
    stock: "20",
    image: "https://www.urbanoutfitters.com/shop/lennon-chair?category=floor-pillows-cushions&color=111&type=REGULAR&size=ONE%20SIZE&quantity=1",
    highlight: true,
    code: 10,
    
  },
  {
    name: "Felix Chair",
    price: "380",
    description: "Elevate your reading nooks with this chair featuring a scalloped back rest for a fresh twist on seating essentials. Cushy lounge chair finished with luxuriously plush fabrics. This custom piece of furniture will be made to order just for you. Available exclusively at Urban Outfitters. Dimensions: 35l x 33w x 31h",
    stock: "16",
    image: "https://images.urbndata.com/is/image/UrbanOutfitters/82877119_034_b?$redesign-zoom-5x$",
    highlight: false,
    code:10,

  },
  {
    name: "Benji Chair",
    price: "600",
    description: "Elevate your reading nooks with this chair featuring a scalloped back rest for a fresh twist on seating essentials. Cushy lounge chair finished with luxuriously plush fabrics. This custom piece of furniture will be made to order just for you. Available exclusively at Urban Outfitters. Dimensions: 35l x 33w x 31h",
    stock: "40",
    image: "https://images.urbndata.com/is/image/UrbanOutfitters/82995226_011_b?$redesign-zoom-5x$",
    highlight: true,
    code: 10,
   
  },
  {
<<<<<<< Updated upstream

  }
=======
    name: "Benji Sofa",
    price: "600",
    description: "Elevate your reading nooks with this chair featuring a scalloped back rest for a fresh twist on seating essentials. Cushy lounge chair finished with luxuriously plush fabrics. This custom piece of furniture will be made to order just for you. Available exclusively at Urban Outfitters. Dimensions: 35l x 33w x 31h",
    stock: "40",
    image: "https://images.urbndata.com/is/image/UrbanOutfitters/82995226_011_b?$redesign-zoom-5x$",
    highlight: true,
    
  },
>>>>>>> Stashed changes
  
];


  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
