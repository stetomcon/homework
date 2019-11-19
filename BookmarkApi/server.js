const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')

//CONTROLLERS
const bookmarkController = require('./controllers/bookmark.js')

app.use('/', (req, res) => {
    res.send('go to /bookmark')
})

const whitelist = ['http://localhost:3000', '']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

//MIDDLEWARE
app.use(cors(corsOptions))

//JSON
app.use(express.json());

app.use('/bookmark', bookmarkController)

//MONGOOSE CONNECTION ERRORS
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


// MONGOOSE  CONNECTION
mongoose.connect('mongodb://localhost:27017/bookmark', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

app.listen(PORT, () => {
    console.log('📕📚Bookmark lets Bookmark', PORT)
}) 