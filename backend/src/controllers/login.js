const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getDb = require("../services/db");

exports.login = async (req, res) => {
  const db = await getDb();
  try {
    const { email, password } = req.body;
    console.log(email);
    const [result] = await db.query(
      "SELECT * FROM Users WHERE Users.email = ?",
      [email]
    );
    if (result) {
      if (bcrypt.compareSync(password, result[0].password)) {
        // res.send(result)
        // Gen JWT and send back
        jwt.sign(
          // user id, name, email in curly brackets
          { id: result[0].id },
          process.env.JWT_SECRET,
          { expiresIn: "1d" },
          (_, token) => {
            res.status(200).json({ token });
          }
        );
      } else {
        res.send({ message: "Wrong Email/Password combination!" });
      }
    } else {
      res.send({ message: "Wrong Email/Password combination!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};
