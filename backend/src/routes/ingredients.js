const express = require("express");
const ingredientsController = require("../controllers/ingredients");
// const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", ingredientsController.create);
router.get("/", ingredientsController.get);

module.exports = router;
