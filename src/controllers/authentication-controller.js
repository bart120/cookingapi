"use strict"
const express = require('express');
const user = require('../models/user-model');
const jwt = require('jsonwebtoken');
const sha1 = require('../utils/sha1');
const conf = require('../configurations/config-jwt');

module.exports = (req, resp) => {
    const login = req.body.login;
    const password = sha1(req.body.password);
    user.findOne({ mail: login, password: password })
        .then((data) => {
            if (data) {
                if ('activated' == data.status) {
                    const token = jwt.sign({ id: data._id, login: data.mail, admin: data.admin }, conf.key, { expiresIn: 1440 });
                    resp.json({ success: true, message: 'login OK', token: token });
                } else {
                    resp.status(400).json({ success: false, message: `Account is ${data.status}` });
                }
            } else {
                resp.status(400).json({ success: false, message: `login/password invalid` });
            }
        }).catch((err) => {
            resp.status(400).json({ success: false, message: `login/password invalid` });
        });
};