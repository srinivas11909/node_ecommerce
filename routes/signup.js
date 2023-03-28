const signupController = require('../controllers/signUpController');
const router = require('express').Router();

router
   .route('/')
   .post(signupController.signup)
   

   module.exports = router;   