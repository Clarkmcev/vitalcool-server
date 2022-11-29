const mongoose = require("mongoose");
const Beverage = require("../models/Beverage.model");

require("../db");

const beverages = [
  {
    name: "Cuba Libre",
    price: 1,
    quantity: 33.0,
    mainAlcohol: "Rum",
    ingredients: ["2/3 oz White rum", "1/3 oz Fresh lime", "4 oz Cola"],
    description:
      "Rum and Coke, or the Cuba libre, is a highball cocktail consisting of cola, rum, and in many recipes lime juice on ice.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0011_Layer-12_msf29p.png",
  },
  {
    name: "Moscow Mule",
    price: 7.5,
    quantity: 33.0,
    mainAlcohol: "Vodka",
    ingredients: ["1/2 oz Vodka", "1/6 oz Lime juice", "4 oz Ginger beer"],
    description:
      "A Moscow mule is a cocktail made with vodka, ginger beer and lime juice, garnished with a slice or wedge of lime. The drink is a type of buck and is sometimes called a vodka buck. The Moscow mule is popularly served in a copper mug, which takes on the cold temperature of the liquid",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709484/movie-gallery/Untitled-4-Recovered_0012_Layer-1_tjrtqt.png",
  },
  {
    name: "Blue Lagoon",
    price: 8.5,
    quantity: 75.0,
    mainAlcohol: "Vodka",
    ingredients: ["1 part Curacao", "1 part Vodka", "4 parts lemonade"],
    description:
      "Blue Lagoon is a cocktail featuring blue Curaçao mixed with vodka and lemonade. It is typically garnished with an orange slice or a lemon slice. Blue Lagoon is typically served in a highball glass. One variation adds a dash of lime cordial to the mix.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0010_Layer-13_chcb6w.png",
  },
  {
    name: "Strawberry Margarita",
    price: 4,
    quantity: 25.0,
    mainAlcohol: "Tequila",
    ingredients: ["1 oz Cointreau", "1 oz Lime juice", "4 oz Tequila"],
    description:
      "A margarita is a cocktail consisting of Tequila, triple sec, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice. The drink is generally served in a stepped-diameter variant of a cocktail glass or champagne coupe called a margarita glass.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0008_Layer-9_oh3wv5.png",
  },
  {
    name: "Tequila Sunrise",
    price: 5,
    quantity: 75.0,
    mainAlcohol: "Tequila",
    ingredients: [
      "1/2 oz (3 parts) Tequila",
      "1/2 oz (1 part)",
      "Grenadine syrup",
      "3 oz Orange juice",
    ],
    description:
      "The tequila sunrise is a cocktail made of tequila, orange juice, and grenadine syrup. The drink is served unmixed in a tall glass. The modern drink originates from Sausalito, California, in the early 1970s after an earlier iteration created in the 1930s in Phoenix, Arizona.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0007_Layer-10_csixtt.png",
  },
  {
    name: "Dirty Martini",
    price: 6,
    quantity: 125.0,
    mainAlcohol: "Gin",
    ingredients: ["1/2 oz (1 part) Dry vermouth", "3 oz (6 parts) Gin"],
    description:
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0006_Layer-11_kpdcik.png",
  },
  {
    name: "Manhattan",
    price: 7,
    quantity: 100.0,
    mainAlcohol: "Whiskey",
    ingredients: [
      "2 oz Rye or Canadian whisky",
      "3/4 oz Sweet red vermouth",
      "Dash Angostura bitters",
      "Maraschino cherry (Garnish)",
    ],
    description:
      "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. While rye is the traditional whiskey of choice, other commonly used whiskies include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0005_Layer-3_xzftbk.png",
  },
  {
    name: "Long Island",
    price: 8,
    quantity: 120.0,
    mainAlcohol: "Vodka",
    ingredients: ["1 oz Gomme Syrup", "1 oz Lemon juice", "1/2 oz Gin"],
    description:
      "A Long Island iced tea or Long Island ice tea is a type of cocktail typically made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same amber hue as iced tea.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0003_Layer-5_opauyi.png",
  },
  {
    name: "Sex on the beach",
    price: 9,
    quantity: 75.0,
    mainAlcohol: "Vodka",
    ingredients: [
      "1/3 oz Cranberry juice",
      "1/3 oz Orange juice",
      "1/3 oz Vodka",
      "2/3 oz Peach schnapps",
    ],
    description:
      "A Sex on the Beach is an alcoholic cocktail containing vodka, peach schnapps, orange juice and cranberry juice. It is an International Bartenders Association Official Cocktail.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709481/movie-gallery/3_s36fwx.png",
  },
  {
    name: "Tom Collins",
    price: 10,
    quantity: 75.0,
    mainAlcohol: "Gin",
    ingredients: ["1/2 oz (3 parts) Old Tom Gin"],
    description:
      'The Tom Collins is a Collins cocktail made from gin, lemon juice, sugar, and carbonated water. First memorialized in writing in 1876 by Jerry Thomas, "the father of American mixology", this "gin and sparkling lemonade" drink is typically served in a Collins glass over ice.',
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0004_Layer-4_ydwkoi.png",
  },
  {
    name: "Piña Colada",
    price: 11,
    quantity: 75.0,
    mainAlcohol: "Rum",
    ingredients: [
      "1 oz (one part) Coconut cream",
      "1 oz (one part) White rum",
      "3 oz (3 parts) Pineapple juice",
    ],
    description:
      "The piña colada is a cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice. It may be garnished with either a pineapple wedge, maraschino cherry, or both. There are two versions of the drink, both originating in Puerto Rico.",
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709481/movie-gallery/2_u4sni9.png",
  },
  {
    name: "Grey Hound",
    price: 12,
    quantity: 75.0,
    mainAlcohol: "Gin",
    ingredients: ["5 cl (1 parts) gin", "20 cl (4 parts) Grapefruit juice"],
    description:
      "A greyhound is a cocktail consisting of grapefruit juice and gin mixed and served over ice. If the rim of the glass has been salted, the drink is instead called a salty dog.",

    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709481/movie-gallery/1_l0e8yx.png",
  },
];

// SEED BEVERAGES
Beverage.create(beverages)
  .then((bev) => {
    console.log(`Created ${bev.length} beverages!`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting books from the DB: ${err}`)
  );
