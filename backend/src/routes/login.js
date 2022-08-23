const express = require("express");
const loginController = require("../controllers/login");

const router = express.Router();


router.post("/register", loginController.login);

router.post("/", loginController.login);


module.exports = router;
