const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// require db connection
require('./models');

const routes = require('./routes');

const app = express()
const apiPort = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// ADD THIS LINE
app.use(express.static('client/build'));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/', routes)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
