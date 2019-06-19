"use strict"
const users = require('../models/user-model');
const sha1 = require('../utils/sha1');

// GET /
exports.getAllUsers = (req, resp) => {
    users.find({}, (err, data) => {
        resp.json(extractData(err, data));
    });
};

// GET /:id
exports.getUserById = (req, resp) => {
    console.log(`ID: ${req.params.id}`);
    users.findById(req.params.id, (err, data) => {
        resp.json(extractData(err, data));
    });
};

// POST /
exports.createUser = (req, resp) => {
    let obj = new users(req.body);
    let regexp = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;
    if (regexp.test(obj.password)) {
        obj.password = sha1(obj.password);
        obj.save((err, data) => resp.json(extractData(err, data)));
    } else {
        resp.status(400).json({ success: false, message: 'password failed' });
    }
};

//DELETE /:id
exports.deleteUser = (req, resp) => {
    users.remove({ _id: req.params.id }, (err, data) => {
        if (err)
            resp.json(err);
        resp.json({ 'message': 'User successfully deleted' });
    })
};

function extractData(err, data) {
    if (err)
        return err;
    return data;
}
