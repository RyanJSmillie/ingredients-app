const getDb = require('../services/db');
const bcrypt = require("bcryptjs");

exports.create = async (req, res) => {
  // const db = await getDb();
   
    
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log(hashedPassword);
      const name = req.body.name, email = req.body.email, password = hashedPassword;
        res.status(201).send();
      } catch (err) {
        res.status(500).json(err);
      }
    
      // db.close();
};