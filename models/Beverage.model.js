const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const beverageSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number },
    imageUrl: { type: String },
    quantity: { type: Number, required: true },
    mainAlcohol: { type: String },
    alcoholPercentage: { type: Number },
    description: { type: String },
    ingredients: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Beverage = model("Beverage", beverageSchema);

module.exports = Beverage;
