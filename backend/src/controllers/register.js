const bcrypt = require("bcryptjs");
const getDb = require("../services/db");

// eslint-disable-next-line consistent-return
exports.create = async (req, res) => {
  const db = await getDb();

  console.log("in register controller");

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const { name, email } = req.body;
    const [results] = await db.query(
      "SELECT email FROM Users WHERE email = ?",
      [email]
    );
    if (results.length === 0) {
      db.query("INSERT INTO Users (name, email, password) VALUES (?, ?, ?)", [
        name,
        email,
        hashedPassword,
      ]);
      res.status(201).send("New user created!");
    } else {
      return res.status(400).send("Email already in use!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};
