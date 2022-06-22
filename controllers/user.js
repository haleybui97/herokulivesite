// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

let User = require('../models/user');
let passport = require('passport');

exports.user = function(req, res, next) {
    res.render('user', {
        title: 'Users',
        name: 'Student'
    });
}

exports.thihonghanhbui = function(req, res, next) {
    res.render('user', {
        title: 'User',
        name: 'Thi Hong Hanh Bui'
    });
}

function getErrorMessage(err) {
    console.log("===> Error: " + err);
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

module.exports.renderSignup = function(req, res, next) {
    //if don't have a user, will create a empty new user object
    if (!req.user) {

        // creates a empty new user object.
        let newUser = User();

        res.render('login/signup', {
            title: 'Sign-up Form',
            messages: req.flash('error'),
            user: newUser
        });
        //otherwise, redirect to the home page
    } else {
        return res.redirect('/');
    }
};

module.exports.signup = function(req, res, next) {
    //check if it already has a user, if it does not has it, execute the following code
    if (!req.user) {
        console.log(req.body);

        let user = new User(req.body);

        console.log(user);

        user.save((err) => {
            if (err) {
                let message = getErrorMessage(err);

                req.flash('error', message);
                // return res.redirect('/users/signup');
                return res.render('login/signup', {
                    title: 'Sign-up Form',
                    messages: req.flash('error'),
                    user: user
                });
            }
            req.login(user, (err) => {
                if (err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

module.exports.renderSignin = function(req, res, next) {
    if (!req.user) {
        res.render('login/signin', {
            title: 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        console.log(req.user);
        return res.redirect('/');
    }
};

module.exports.signin = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: req.session.url || '/businessList/businessContactList',
        failureRedirect: '/users/signin',
        failureFlash: true
    })(req, res, next);
    delete req.session.url;
}

module.exports.signout = function(req, res, next) {
    req.logout();
    res.redirect('/');
};