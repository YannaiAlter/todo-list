import { Todo } from './Todo'

export class TodoManager {
    todos: Todo[]
    id: number
    constructor() {
        this.todos = []
        this.id = 0
    }

    add(content: string): Todo {
        const todo = new Todo(content, ++this.id)
        this.todos.push(todo)
        return todo
    }

    remove(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }

    removeAll() {
        this.todos = []
        this.id = 0
    }
}
