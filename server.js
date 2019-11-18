const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.send('Hello World')
})


app.listen(PORT, (req, res) => console.log('listening on PORT 3000!'))