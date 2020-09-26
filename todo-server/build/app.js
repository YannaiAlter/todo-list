"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todos_1 = require("./src/routes/todos");
// Create a new express app instance
const app = express();
//  Connect all our routes to our application
app.use('/api', todos_1.todos);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
