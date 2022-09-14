const mongoose = require("mongoose");
const Beverage = require("../models/Beverage.model");

require("../db");

// DELETE ALL BEVERAGES
Beverage.deleteMany()
  .then(() => {
    console.log(`Deleted all beverages`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting books from the DB: ${err}`)
  );
