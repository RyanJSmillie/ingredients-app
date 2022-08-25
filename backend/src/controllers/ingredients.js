const getDb = require("../services/db");

exports.create = async (req, res) => {
  const db = await getDb();

  try {
    console.log(req.body);
    const { name, measures, unit, storage } = req.body;
    db.query(
      "INSERT INTO Ingredients (name, measures, unit, storage) VALUES (?, ?, ?, ?)",
      [name, measures, unit, storage]
    );
    res.status(201).send("Item added to inventory");
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};

exports.get = async (req, res) => {
  const db = await getDb();

  try {
    const result = await db.query("SELECT * FROM Ingredients");
    if (result) {
      res.status(201).send({ result });
    } else {
      res.send({ message: "No ingredients present!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};
