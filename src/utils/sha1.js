"use strict"
const crypto = require('crypto');

module.exports = (text) => {
    const generator = crypto.createHash('sha1');
    generator.update(text);
    return generator.digest('hex');
};