//BOOKMARK SCHEMA

const mongoose = require('mongoose')

const bookmark = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: Boolean, default: false },
})

module.exports = mongoose.model('bookmark', bookmark)