const mongoose = require('mongoose');
const Workshops = require('./workshopsModel');

const concerts = new mongoose.Schema({
    performer: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


concerts.virtual('workshops', {
    ref: 'Workshops',
    localField: '_id',
    foreignField: 'concertId'
})

concerts.set('toObject', { virtuals: true });
concerts.set('toJSON', { virtuals: true });

const Concerts = mongoose.model('Concerts', concerts)

module.exports = Concerts;