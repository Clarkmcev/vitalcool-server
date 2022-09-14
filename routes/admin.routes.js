const router = require("express").Router();
const Beverage = require("../models/Beverage.model");
const Order = require("../models/Order.model");
const fileUploader = require("../config/cloudinary.config");

router.post("/new", (req, res, next) => {
  let { price } = req.body;
  const { name, type, quantity, imageUrl } = req.body;

  let { softType, alcoholType, undistilledType } = req.body;
  if (softType !== "") {
    Beverage.create({
      name,
      type,
      softType,
      quantity,
      price,
      imageUrl,
    })
      .then(() => {
        res.status(201).json("Success");
      })
      .catch((err) => console.log(err));
  } else if (alcoholType !== "") {
    Beverage.create({ name, type, alcoholType, quantity, price, imageUrl })
      .then(() => {
        res.status(201).json("Success");
      })
      .catch((err) => console.log(err));
  } else if (undistilledType !== "") {
    Beverage.create({ name, type, undistilledType, quantity, price, imageUrl })
      .then(() => {
        res.status(201).json("Success");
      })
      .catch((err) => console.log(err));
  }
});

router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  res.json({ fileUrl: req.file.path });
});

router.get("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Beverage.findByIdAndDelete(id).then(() =>
    Beverage.find()
      .then((beverageList) => res.status(200).json({ beverageList }))
      .catch((err) => console.log(err))
  );
});

router.get("/orders", (req, res, next) => {
  Order.find()
    .populate("user")
    .populate("products")
    .then((found) => res.status(200).json({ found }))
    .catch((err) => console.log(err));
});

module.exports = router;
