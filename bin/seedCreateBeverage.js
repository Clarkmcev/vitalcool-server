const mongoose = require("mongoose");
const Beverage = require("../models/Beverage.model");

require("../db");

const beverages = [
  {
    name: "Cuba Libre",
    price: 1,
    quantity: 33.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0011_Layer-12_msf29p.png",
  },
  {
    name: "Moscow Mule",
    price: 2,
    quantity: 33.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709484/movie-gallery/Untitled-4-Recovered_0012_Layer-1_tjrtqt.png",
  },
  {
    name: "Blue Lagoon",
    price: 3,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0010_Layer-13_chcb6w.png",
  },
  {
    name: "Strawberry Margarita",
    price: 4,
    quantity: 25.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0008_Layer-9_oh3wv5.png",
  },
  {
    name: "Tequila Sunrise",
    price: 5,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709483/movie-gallery/Untitled-4-Recovered_0007_Layer-10_csixtt.png",
  },
  {
    name: "Dirty Martini",
    price: 6,
    quantity: 125.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0006_Layer-11_kpdcik.png",
  },
  {
    name: "Manhattan",
    price: 7,
    quantity: 100.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0005_Layer-3_xzftbk.png",
  },
  {
    name: "Long Island",
    price: 8,
    quantity: 120.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0003_Layer-5_opauyi.png",
  },
  {
    name: "Sex on the beach",
    price: 9,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709481/movie-gallery/3_s36fwx.png",
  },
  {
    name: "Tom Collins",
    price: 10,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709482/movie-gallery/Untitled-4-Recovered_0004_Layer-4_ydwkoi.png",
  },
  {
    name: "Pina Colada",
    price: 11,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1669709481/movie-gallery/2_u4sni9.png",
  },
  {
    name: "Grey Hound",
    price: 12,
    quantity: 75.0,
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
