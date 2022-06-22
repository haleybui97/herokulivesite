// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

let mongoose = require('mongoose');
let crypto = require('crypto');

//create a model class
let UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail"]
    },
    //every user name is unique
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        //cut off the space in front of the name and end of the name
        trim: true

    },
    password: {
        type: String,
        validate: [(password) => {
            //the password have to be more than 6 digits
            return password && password.length > 6;
        }, 'Password should be longer']
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "user"
});

UserSchema.virtual('fullName')
    .get(function() {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function(fullName) {
        let splitName = fullName.split(' ');
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    });

// before the save action, run the following code
UserSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

// after the save action, run the following code
UserSchema.post('save', function(next) {
    console.log('The user "' + this.username + '" details were saved.');
});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

module.exports = mongoose.model('user', UserSchema);

//Source: https://stackoverflow.com/questions/14588032/mongoose-password-hashing. From: Stackoverflow. Author: Jnovack and Noah.