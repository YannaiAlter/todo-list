// /api/todos
import { Router } from 'express'
import { TodoManager } from '../models/TodoManager'
import { Todo } from '../models/Todo'

export const todos = Router()
const manager = new TodoManager()

todos.get('/todos', (req, res) => {
    res.send(manager.todos)
})

todos.post('/todos', (req, res) => {
    if (req.body.content === undefined) {
        res.sendStatus(400)
        return
    }

    res.send(manager.add(req.body.content))
})

todos.post('/todos/remove', (req, res) => {
    manager.removeAll()
    res.sendStatus(200)
})
