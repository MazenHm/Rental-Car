const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  rentalStartDate: { type: Date, required: true },
  rentalEndDate: { type: Date, required: true },
  totalCost: { type: Number, required: true },
  rentalStatus: {
    type: String,
    enum: ["ongoing", "completed", "canceled"],
    default: "ongoing",
  },
});

const Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;
