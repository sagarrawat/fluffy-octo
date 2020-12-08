const { request } = require('express');
const model= require('../models/user-model');

module.exports = {
    adduser:  model.create({
        userName: request.body.username,
        firstName: request.body.firstname,
        lastName: request.body.lastName,
        email: request.body.email,
        mobileNo: request.body.mobileNo,
        nationality: request.body.nationality,
        Age: request.body.Age
    }).then(function (users) {
        if (users) {
            response.send(users);
        } else {
            response.status(400).send('Error in insert new record');
        }
    }),

    getuser: 
}