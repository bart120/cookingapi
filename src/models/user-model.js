const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: 'name required'
    },
    firstname: String,
    mail: {
        type: String,
        required: 'mail required'
    },
    password: {
        type: String,
        required: 'password required'
    },
    admin: Boolean,
    status: {
        type: [{
            type: String,
            enum: ['actived', 'closed', 'pending']
        }],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.Now
    }

});

module.exports = mongoose.model('User', schema);