// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

let mongoose = require('mongoose');

//create a model class
let businessListModel = mongoose.Schema({
        contactName: String,
        contactNumber: Number,
        emailAddress: String
    }, {
        collection: "businessList"
    }
);

module.exports = mongoose.model('businessList', businessListModel);