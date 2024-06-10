const Car = require("../models/Car");
const fs = require("fs");
const axios = require("axios");

module.exports = {
  addCar: async function (req, res) {
    const {
      model,
      mark,
      year,
      door,
      ac,
      transmission,
      fuel,
      image,
      pricePerDay,
      available,
    } = req.body;
    if (
      (!model,
      !mark,
      !year,
      !door,
      !ac,
      !transmission,
      !fuel,
      !image,
      !pricePerDay)
    ) {
      res
        .status(400)
        .json({ status: 400, message: "All fields are required!" });
      return;
    }
    let imageURL;
    if (image) {
      try {
        let images = new Buffer.from(
          image.substring(image.indexOf(",") + 1),
          "base64"
        );
        let imgExtension = image.substring(
          image.indexOf("/") + 1,
          image.indexOf(";")
        );
        fs.writeFile(`images/${model}.${imgExtension}`, images, (err) => {
          if (err) {
            res.status(400).json({
              status: 400,
              message: "error saving the image",
            });
            return;
          }
        });
        imageURL = `/images/${model}.${imgExtension}`;
      } catch {
        res.status(400).json({
          status: 400,
          message: "error saving the image",
        });
      }
    }
    let data = { ...req.body };
    data.image = imageURL;
    const car = new Car(data);
    const result = await car.save();
    if (car) {
      res.send({ car });
    } else {
      res.send({ message: "car is required !!" });
    }
  },
  getAllCars: async function (req, res) {
    try {
      car = await Car.find();
      res.send(car);
    } catch (err) {
      res.send(err);
    }
  },
  cities: async function (req, res) {
    try {
      const response = await axios.get("http://api.geonames.org/searchJSON", {
        params: {
          q: "tunisia",
          maxRows: 1000,
          username: "mazen.hammouda", // Replace with your actual GeoNames username
        },
      });

      const cities = response.data.geonames.map((city) => city.name);
      res.json(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
      res.status(500).json({ error: "Failed to fetch cities" });
    }
  },
};
