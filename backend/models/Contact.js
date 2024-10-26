const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    num: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "contact",
  }
);

module.exports = mongoose.model("Contact", contactSchema);
