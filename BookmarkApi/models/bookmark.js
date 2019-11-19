//BOOKMARK SCHEMA

const mongoose = require('mongoose')

const bookmark = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
})

module.exports = mongoose.model('bookmark', bookmark)