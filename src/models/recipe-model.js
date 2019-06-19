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

schema.pre('findByIdAndUpdate', () => {
    const update = this.getUpdate();
    console.log(this);
});

module.exports = mongoose.model('Recipe', schema);
