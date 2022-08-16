const express = require("express");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const recipeRouter = require("./routes/recipe");
const ingredientsRouter = require("./routes/ingredients");

const app = express();

app.use(express.json());

app.use("/register", registerRouter),

app.use("/login", loginRouter),

app.use("/recipe", recipeRouter),

app.use("/ingredients", ingredientsRouter),

app.get('/', (req, res) => {
    res.send("Hello User!")
});


module.exports = app;