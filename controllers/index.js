// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

exports.home = function(req, res, next) {
    res.render('home', {
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
}

exports.about = function(req, res, next) {
    res.render('about', {
        title: 'about',
        userName: req.user ? req.user.username : ''
    }); //respond render
}

exports.project = function(req, res, next) {
    res.render('projects', {
        title: 'Projects',
        userName: req.user ? req.user.username : ''
    });
}

exports.services = function(req, res, next) {
    res.render('services', {
        title: 'services',
        userName: req.user ? req.user.username : ''
    }); //respond render
}

exports.contactMe = function(req, res, next) {
    res.render('contactMe', {
        title: 'contactMe',
        userName: req.user ? req.user.username : ''
    }); //respond render
}