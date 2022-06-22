// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

let DB_CONNECTION = "https://cloud.mongodb.com/v2/62af8a44b6528819740a4405#clusters"

// Database Setup
let mongoose = require('mongoose');

module.exports = function() {

    // Connect to the DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;

    mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
    mongoDB.once('open', () => {
        console.log('Connected to MongoDB...');
    })

    return mongoDB;
}