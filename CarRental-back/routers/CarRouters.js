const express = require("express");
const router = express.Router();
const carCtrl = require("../controllers/CarController");

router.post("/addCar", carCtrl.addCar);
router.get("/getAllCars", carCtrl.getAllCars);
router.get("/cities", carCtrl.cities);


module.exports = router;
