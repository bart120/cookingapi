let mongoose = require('mongoose')
let Schema = mongoose.Schema;

module.exports = mongoose.model('Recipe', new Schema({
    name: {
        type: String,
        required: 'Nom obligatoire'
    },
    duration: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: 'Date de création obligatoire'
    },
    difficulty: {
        type: [{
            type: String,
            enum: ['easy', 'medium', 'hard']
        }],
        default: 'medium'
    }
}));
