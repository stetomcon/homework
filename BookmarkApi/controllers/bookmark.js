const express = require('express')
const bookmark = express.Router()
const bookmarks = require('../models/bookmark.js')

bookmark.get('/', (req, res) => {
    bookmarks.find({}, (err, foundbookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundbookmark)
    })
})


//CREATE
bookmark.post('/', (req, res) => {
    bookmarks.create(req.body, (error, createdbookmark) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdbookmark)
    })
})

//DELETE
bookmark.delete('/:id', (req, res) => {
    bookmarks.findByIdAndRemove(req.params.id, (err, deletedbookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedbookmark)
    })
})

//UPDATE
bookmark.put('/:id', (req, res) => {
    bookmarks.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedbookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedbookmark)
    })
})

module.exports = bookmark