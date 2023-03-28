const User = require('../models/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();




exports.login = async (req, res) => {
    console.log(req.body);
    try{
        const {email, password} = req.body;
        if(!email && password){
            res.status(400).send('Must enter values for all fields')
        }
        const user = await User.findOne({email});
        if(user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({
              user_id: user._id,
              email
            },process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            });
            
            user.token = token;
            res.status(201).send(user);
        }else{
            res.status(400).send("Invalid Credentials");
        }
       
    }catch(err) {
        console.log(err)
    }

}