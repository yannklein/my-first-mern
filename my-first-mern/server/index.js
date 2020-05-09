const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// require db connection
require('./models');

const movieRouter = require('./routes/movie-router');

const app = express()
const apiPort = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
