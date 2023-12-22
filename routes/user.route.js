const express = require('express');
const router = express.Router();
const {verifyJWT} = require("../middlewares/auth.middlware.js");
const { registerUser , loginUser , logoutUser } = require('../controllers/user.controller.js');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(verifyJWT,logoutUser);


module.exports = router;
