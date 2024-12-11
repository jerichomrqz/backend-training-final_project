const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
        min: 1
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('Toy', toySchema);
