const router = require("express").Router();
const Beverage = require("../models/Beverage.model");
const User = require("../models/User.model");
ObjectId = require("mongodb");
const Order = require("../models/Order.model");
const { Error, mongoose } = require("mongoose");
require("mongodb").ObjectId;

router.post("/add", (req, res, next) => {
  const { id, idUser } = req.body;
  User.findByIdAndUpdate(idUser, { $push: { basket: id } })
    .then(() => {
      res.status(200).json;
    })
    .catch((err) => console.log(err));
});

router.get("/basket/:idUser", (req, res, next) => {
  const { idUser } = req.params;
  User.findById(idUser)
    .populate("basket")
    .then((foundUser) => {
      res.status(200).json({ foundUser });
    })
    .catch((err) => console.log(err));
});

router.post("/new-order", (req, res, next) => {
  const { ordersId, idUser, sumTot } = req.body;
  let orderIdArr = [];

  Order.find().then((elem) => {
    elem.map((orderId) => orderIdArr.push(orderId.orderId));

    Order.create({
      orderId: (orderIdArr.length += 1),
      user: idUser,
      products: ordersId,
      totalPrice: sumTot,
    })
      .then((elem) => {
        res.status(200);
      })
      .catch((err) => console.log(err));
  });
});

router.get("/drinks/:id", (req, res, next) => {
  const { id } = req.params;
  Beverage.findById(id).then((drink) => {
    res.status(200).json({ drink });
  });
});

router.get("/account/my-orders/:idUser", (req, res, next) => {
  const { idUser } = req.params;
  const idUserObj = mongoose.Types.ObjectId(idUser);
  Order.find({ user: idUserObj })
    .populate("products")
    .populate("user")
    .then((elem) => {
      res.status(200).json({ elem });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
