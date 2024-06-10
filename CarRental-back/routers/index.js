const userRouters = require("./UserRouters");
const carRouters = require("./CarRouters");
const express = require("express");
module.exports = (app) => {
  app.use(express.json());
  app.use("/v1/api", userRouters);
  app.use("/v1/api", carRouters);
};
