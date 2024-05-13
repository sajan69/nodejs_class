const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validate');
const {registerValidate, loginValidate,updateValidate} = require('../validations/auth.validation');



router.post('/register', validate(registerValidate), authController.register);
router.post('/login', validate(loginValidate), authController.login);
router.put('/update', validate(updateValidate), authController.update);



module.exports = router;