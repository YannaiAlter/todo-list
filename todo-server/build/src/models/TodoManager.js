"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoManager = void 0;
class TodoManager {
    constructor() {
        this.todos = [];
    }
    add(todo) {
        this.todos.push(todo);
    }
    remove(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    removeAll() {
        this.todos = [];
    }
}
exports.TodoManager = TodoManager;
