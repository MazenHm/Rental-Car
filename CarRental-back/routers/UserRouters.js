const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/UserController");

router.post("/registre", userCtrl.addUser);

module.exports = router;
