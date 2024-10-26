const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let cartSchema = new Schema(
  {
    _id: {
      type: Number,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    collection: "cart",
  }
);
module.exports = mongoose.model("Cart", cartSchema);
