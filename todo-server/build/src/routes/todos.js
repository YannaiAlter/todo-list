"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
// /api/todos
const express_1 = require("express");
const TodoManager_1 = require("../models/TodoManager");
exports.todos = express_1.Router();
const manager = new TodoManager_1.TodoManager();
exports.todos.get('/todos', (req, res) => {
    res.send(manager.todos);
});
