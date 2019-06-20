"use strict"
const jwt = require('jsonwebtoken');
const conf = require('../configurations/config-jwt');

exports.validateToken = (req, resp, next) => {
    if (req.headers['authorization']) {
        const token = req.headers['authorization'].split(" ")[1] || req.headers['x-access-token'];
        console.log(token);
        if (token) {
            jwt.verify(token, conf.key, (err, decoded) => {
                if (err) {
                    resp.status(401).json({ success: 'false', message: err.message });
                } else {
                    console.log(decoded);
                    next();
                }
            });
            return;
        }
    }
    resp.status(401).json({ success: 'false', message: 'token required' });
};
