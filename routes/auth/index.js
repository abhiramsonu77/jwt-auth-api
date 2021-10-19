var express = require("express");

var router = express.Router();
const controller = require("./auth.controller");

//Register and Login users for Authorization
router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
module.exports = router;