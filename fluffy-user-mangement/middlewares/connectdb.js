const mysql = require("../database");

let connectDB = async(req, res, next) =>{
    let connection = await mysql();
    req.database = connection;
    req.models = require('../models');
    next();
}

module.exports = connectDB;
