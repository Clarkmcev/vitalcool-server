const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const orderSchema = new Schema(
  {
    orderId: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Beverage" }],
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
