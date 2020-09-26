// /api/todos
import { Router } from 'express'
import { TodoManager } from '../typeorm/Todo/TodoManager'

export const todos = Router()
const manager = new TodoManager()

todos.get('/todos', async (req, res) => {
    res.send(await manager.all())
})

todos.post('/todos', async (req, res) => {
    if (req.body.content === undefined) {
        res.sendStatus(400)
        return
    }

    res.send(await manager.add(req.body.content))
})

todos.post('/todos/remove', async (req, res) => {
    await manager.removeAll()
    res.sendStatus(200)
})
