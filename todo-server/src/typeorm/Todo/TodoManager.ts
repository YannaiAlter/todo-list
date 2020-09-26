import { getRepository } from 'typeorm'
import { TodoEntity } from './TodoEntity'

export class TodoManager {
    private todoRepository = getRepository(TodoEntity)
    async add(content: string) {
        const newTodo = new TodoEntity()
        newTodo.content = content
        return await this.todoRepository.save(newTodo)
    }

    async all() {
        return await this.todoRepository.find()
    }

    async remove(id: number) {
        const findId = await this.todoRepository.findOne(id)
        return await this.todoRepository.remove(findId!)
    }

    async removeAll() {
        return await this.todoRepository.clear()
    }
}
