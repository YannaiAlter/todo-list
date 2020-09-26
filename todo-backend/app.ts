import express = require('express')
import bodyParser from 'body-parser'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { TodoEntity } from './src/typeorm/Todo/TodoEntity'

createConnection()
    .then((connection) => {
        const app: express.Application = express()
        const { todos } = require('./src/routes/todos')
        app.use(bodyParser.json())

        //api/todos
        app.use('/api', todos)

        //api
        app.get('/api', function (req, res) {
            res.send('Hello World!')
        })
        app.listen(3000, function () {
            console.log('App is listening on port 3000!')
        })
    })
    .catch((error) => console.log(error))
