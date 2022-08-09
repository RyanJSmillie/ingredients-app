const getDb = require('../../services/db');
const bcrypt = require("bcryptjs");

exports.create = async (req, res) => {
  const db = await getDb();
   
    
    try {
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      console.log(salt);
      console.log(hashedPassword)
      const user = { name: req.body.name, email: req.body.email, password: hashedPassword } 
      
      // await db.query('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [
        //   name,
        //   email,
        //   password
        // ]);

        res.status(201).send();
      } catch (err) {
        res.status(500).json(err);
      }
    
      db.close();
};