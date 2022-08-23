const express = require("express");
const loginController = require("../controllers/login");

const router = express.Router();

router.post("/register", loginController.login);

module.exports = router;
