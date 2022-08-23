const express = require("express");
const ingredientsController = require("../controllers/ingredients");
const auth = require("../middleware/auth");

const router = express.Router();


router.post("/", auth, ingredientsController.create);

router.post("/ingredients", ingredientsController.create);


module.exports = router;
