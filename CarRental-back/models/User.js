const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    phone: { type: Number },
    age: { type: Number },
    address: { type: String },
    city: { type: String },
    zipcode: { type: Number },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  },
  { timestamps: true }
);
const User = mongoose.model("User", schema);
module.exports = User;
