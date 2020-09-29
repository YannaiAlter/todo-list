import { getRepository } from "typeorm";
import { TodoEntity } from "./TodoEntity";

export class TodoManager {
  private todoRepository = getRepository(TodoEntity);

  async add(todo: TodoEntity) {
    return await this.todoRepository.save(todo);
  }

  async update(todo: TodoEntity) {
    return await this.todoRepository.update(todo.id, todo);
  }

  async all() {
    return await this.todoRepository.find();
  }

  async remove(id: number) {
    const findId = await this.todoRepository.findOne(id);
    return await this.todoRepository.remove(findId!);
  }

  async removeAll() {
    return await this.todoRepository.clear();
  }
}
