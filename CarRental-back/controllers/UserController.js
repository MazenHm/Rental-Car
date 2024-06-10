const User = require("../models/User");

module.exports = {
  addUser: async function (req, res) {
    const { username, email, phone, age, address, city, zipcode } = req.body;
    console.log("Request Body:", req.body);
    if (
      !username ||
      !email ||
      !phone ||
      !age ||
      !address ||
      !city ||
      !zipcode
    ) {
      res.status(400).json({
        status: 400,
        message: "All fields are required!",
      });
      return;
    }

    try {
      const user = await User.findOne({ email });
      if (user) {
        res.status(400).json({
          status: 400,
          message: "Email already exist!",
        });
        return;
      }

      const usr = new User(req.body);
      await usr.save();
      res.status(200).json({
        status: 200,
        message: "User added successfully!",
      });
    } catch {
      res.status(500).json({
        status: 500,
        message: "Error server!",
      });
    }
  },
};
