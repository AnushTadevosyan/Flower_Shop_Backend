const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10

const hashPassword = (password, saltRounds) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
          reject(err);
        } else {
          resolve(hashedPassword);
        }
      });
    });
  };

  
  const sign_up = async (req, res) => {
    try {
      const user_data = req.body;
      const saltRounds = 10; // Number of salt rounds (adjust as needed)
  
      // Hash the user's password
      const hashedPassword = await hashPassword(user_data.password, saltRounds);
  
      // Replace the plain password with the hashed one
      user_data.password = hashedPassword;
  
      // Create the user in the database
      const user = await User.create(user_data);
  
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };



  const login = async (req, res) => {
    try {
      const user_data = req.body;
      const user_entered_password = user_data.password;
      const user_data_from_db = await User.findOne({ email: user_data.email }); // Use findOne instead of find
  
      if (!user_data_from_db) {
        // If user not found in the database
        return res.status(401).json({ success: false });
      }
  
      const hashed_password_from_db = user_data_from_db.password;
      const passwordsMatch = await bcrypt.compare(
        user_entered_password,
        hashed_password_from_db
      );
  
      if (passwordsMatch) {
        res.status(200).json({ user_data_from_db, success: true }); // Use 200 OK for successful login
      } else {
        res.status(401).json({ success: false }); // Use 401 Unauthorized for failed login
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };


module.exports = {sign_up, login}
