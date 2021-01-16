const mongoose = require('mongoose')

const testimonials = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const Testimonials = mongoose.model('Testimonials', testimonials)

module.exports = Testimonials;