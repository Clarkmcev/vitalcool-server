const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const beverageSchema = new Schema(
  {
    name: { type: String, required: true },
    softType: {
      type: String,
      enum: ["Juice", "Soda"],
    },
    alcoholType: {
      type: String,
      enum: ["Gin", "Brandy", "Whiskey", "Rum", "Vodka", "Absinthe"],
    },
    undistilledType: {
      type: String,
      enum: ["Beer", "Wine", "Cider", "Mead", "Sake"],
    },
    price: { type: Number },
    imageUrl: { type: String },
    quantity: { type: Number, required: true },
    alcoholPercentage: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Beverage = model("Beverage", beverageSchema);

module.exports = Beverage;
