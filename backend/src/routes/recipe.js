const express = require('express');
const recipeController = require('../controllers/recipe');
const auth = require('../middleware/auth')

const router = express.Router();

router.post('/', auth, recipeController.create);

module.exports = router;