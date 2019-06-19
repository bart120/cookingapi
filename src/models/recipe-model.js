let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const schema = new Schema({
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
});

schema.pre('findOneAndUpdate', function (next) {

    const update = this.getUpdate();
    // console.log(update);
    if (update.__v != null) {
        delete update.__v;
    }
    const keys = ['$set', '$setOnInsert'];
    for (const key of keys) {
        if (update[key] != null && update[key].__v != null) {
            delete update[key].__v;
            if (Object.keys(update[key]).length === 0) {
                delete update[key];
            }
        }
    }
    update.$inc = update.$inc || {};
    update.$inc.__v += 1;

    next();
});

module.exports = mongoose.model('Recipe', schema);
