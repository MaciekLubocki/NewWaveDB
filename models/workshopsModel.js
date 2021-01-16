const mongoose = require('mongoose')

const workshops = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    concertId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Concerts'
    }
})

const Workshops = mongoose.model('Workshops', workshops)

module.exports = Workshops;