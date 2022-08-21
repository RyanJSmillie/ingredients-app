const getDb = require("../services/db");

exports.create = async (req, res) => {
  const db = await getDb();

  console.log(req.body);

  try {
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
