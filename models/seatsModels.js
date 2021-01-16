const mongoose = require('mongoose')

const seats = new mongoose.Schema({
    day: {
        type: Number,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Seats = mongoose.model('Seats', seats)

module.exports = Seats;