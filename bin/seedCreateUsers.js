const mongoose = require("mongoose");
const User = require("../models/User.model");

require("../db");

const userAdmin = [
  {
    firstName: "Admin",
    lastName: "1",
    address: "dummyAddress",
    town: "dummyTown",
    email: "admin@vitalcool.com",
    password: "Tetrisdisney68!",
    isAdmin: true,
  },
];

// SEED ADMIN
User.create(userAdmin)
  .then((bev) => {
    console.log(`Created ${bev.length} admin!`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting books from the DB: ${err}`)
  );
