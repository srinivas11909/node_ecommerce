const User = require('../models/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();


exports.signup = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    const oldUser = await User.findOne({ email });
    
    // Validate if user exist in our database
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,{
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    // return new user
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
  }
}