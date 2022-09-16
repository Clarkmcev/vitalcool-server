const router = require("express").Router();
const express = require("express");
const bcrypt = require("bcryptjs"); // used for encrypting the passwords before saving them in the database
const jwt = require("jsonwebtoken"); // used to create and sign new JSON Web Tokens,
const User = require("../models/User.model");

const saltRounds = 10;

const { isAuthenticated } = require("./../middleware/jwt.middleware.js");
const Beverage = require("../models/Beverage.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/signup", (req, res, next) => {
  const { firstName, lastName, address, town, email, password } = req.body;

  if (
    email === "" ||
    password === "" ||
    firstName === "" ||
    lastName === "" ||
    address === ""
  ) {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: "Provide a valid email address." });
    return;
  }

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({
      message:
        "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "User already exists." });
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      return User.create({
        firstName,
        lastName,
        address,
        town,
        email,
        password: hashedPassword,
      });
    })
    .then((createdUser) => {
      const { firstName, lastName, address, town, email } = createdUser;
      const user = { firstName, lastName, address, town, email };

      res.status(201).json({ user: user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

// POST  /auth/login
router.post("/login", (req, res, next) => {
  console.log("hey");
  const { email, password } = req.body;
  if (email === "" || password === "") {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(401).json({ message: "User not found." });
        return;
      }
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
      if (passwordCorrect) {
        const { _id, firstName, lastName, address, town, email, basket } =
          foundUser;
        const payload = {
          _id,
          firstName,
          lastName,
          address,
          town,
          email,
          isAdmin: true,
        };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });
        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

router.get("/verify", isAuthenticated, (req, res, next) => {
  res.status(200).json(req.payload);
});

router.get("/drinks", (req, res, next) => {
  Beverage.find()
    .then((foundBeverage) => {
      res.status(200).json(foundBeverage);
    })
    .catch((err) => console.log(err));
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
