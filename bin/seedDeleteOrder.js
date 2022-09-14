const mongoose = require("mongoose");
const Order = require("../models/Order.model");

require("../db");

// // DELETE ALL ORDERS
Order.deleteMany()
  .then(() => {
    console.log(`Deleted all orders`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting books from the DB: ${err}`)
  );
