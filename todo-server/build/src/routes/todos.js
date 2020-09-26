"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
// /api/todos
const express_1 = require("express");
const TodoManager_1 = require("../typeorm/Todo/TodoManager");
exports.todos = express_1.Router();
const manager = new TodoManager_1.TodoManager();
exports.todos.get('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield manager.all());
}));
exports.todos.post('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.content === undefined) {
        res.sendStatus(400);
        return;
    }
    res.send(yield manager.add(req.body.content));
}));
exports.todos.post('/todos/remove', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield manager.removeAll();
    res.sendStatus(200);
}));
