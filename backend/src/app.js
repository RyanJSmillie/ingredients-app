const express = require("express");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/users", usersRouter),

app.get('/', (req, res) => {
    res.send("Hello User!")
});


module.exports = app;