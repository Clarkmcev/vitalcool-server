const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName: { type: String, unique: true, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    town: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    basket: [{ type: Schema.Types.ObjectId, ref: "Beverage" }],
    isAdmin: { type: Boolean, default: false },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
