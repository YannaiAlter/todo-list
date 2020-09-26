import express = require('express')
import { todos } from './src/routes/todos'
import bodyParser from 'body-parser'

// Create a new express app instance
const app: express.Application = express()
app.use(bodyParser.json())

//  Connect all our routes to our application
app.use('/api', todos)

app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.listen(3000, function () {
    console.log('App is listening on port 3000!')
})
