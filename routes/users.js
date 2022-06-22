// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

// GET users listing.
router.get('/', userController.user);

// Sign-up
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

// Sign-in
router.get('/signin', userController.renderSignin);
router.post('/signin', userController.signin);

// Sign out
router.get('/signout', userController.signout);

module.exports = router;