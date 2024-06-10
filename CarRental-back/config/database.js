const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/carrental")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database failed to connect");
  });

module.exports = mongoose;
