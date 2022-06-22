// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

// GET home page. 
router.get('/', indexController.home);

// about page
router.get('/about', indexController.about);

//projects page
router.get('/projects', indexController.project);

// services page
router.get('/services', indexController.services);

// Contact page
router.get('/contactMe', indexController.contactMe);

module.exports = router;