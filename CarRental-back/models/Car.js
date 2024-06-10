const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  model: {
    type: String,
  },
  mark: {
    type: String,
  },
  year: {
    type: Number,
  },
  door: {
    type: Number,
  },
  ac: {
    type: String,
    enum: ["Yes", "No"],
  },
  transmission: {
    type: String,
  },
  fuel: {
    type: String,
  },
  image: { type: String },
  pricePerDay: { type: Number, required: true },
  available: { type: Boolean, default: true },
});
const Car = mongoose.model("Car", schema);

module.exports = Car;
