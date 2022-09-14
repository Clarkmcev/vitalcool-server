const mongoose = require("mongoose");
const Beverage = require("../models/Beverage.model");

require("../db");

const beverages = [
  {
    name: "Coca-cola",
    type: "Undistilled",
    softType: "Soda",
    price: 2.0,
    quantity: 33.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "1664 White",
    type: "Undistilled",
    undistilledType: "Beer",
    price: 2.5,
    quantity: 33.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Jack-Daniels ",
    type: "Liquor",
    alcoholType: "Whiskey",
    price: 24.99,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Sun magic",
    type: "Soft",
    softType: "Juice",
    price: 3.0,
    quantity: 25.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Absolute Vodka",
    type: "Liquor",
    alcoholType: "Vodka",
    price: 17.99,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Best Vodka",
    type: "Liquor",
    alcoholType: "Vodka",
    price: 20.0,
    quantity: 150.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Pastis",
    type: "Liquor",
    alcoholType: "Vodka",
    price: 22.0,
    quantity: 125.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Sprite",
    type: "Soft",
    softType: "Soda",
    price: 10.0,
    quantity: 100.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Fanta Orange",
    type: "Soft",
    softType: "Soda",
    price: 24.0,
    quantity: 120.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Lemon Juice",
    type: "Soft",
    softType: "Juice",
    price: 7.0,
    quantity: 75.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
  },
  {
    name: "Pineapple Juice",
    type: "Soft",
    softType: "Juice",
    price: 11.0,
    quantity: 79.0,
    imageUrl:
      "https://res.cloudinary.com/societe-generale/image/upload/v1662988212/movie-gallery/Pngtree_drink_icon_4690686_kwcpw3.png",
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
