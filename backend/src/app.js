const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  port: 3308,
  host: "localhost",
  user: "root",
  password: "password",
  database: "ingredients_library_mysql",
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL Connected...");
  }
});

app.get("/", (req, res) => {
  res.send("Hello User!");
});

module.exports = app;
