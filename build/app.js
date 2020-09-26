"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then((connection) => {
    const app = express();
    const { todos } = require('./src/routes/todos');
    app.use(body_parser_1.default.json());
    //api/todos
    app.use('/api', todos);
    //api
    app.get('/api', function (req, res) {
        res.send('Hello World!');
    });
    app.listen(3000, function () {
        console.log('App is listening on port 3000!');
    });
})
    .catch((error) => console.log(error));
