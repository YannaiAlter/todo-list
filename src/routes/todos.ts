// /api/todos
import { Router } from "express";
import { TodoManager } from "../typeorm/Todo/TodoManager";

export const todos = Router();
const manager = new TodoManager();

todos.get("/todos", async (req, res) => {
  res.send(await manager.all());
});

todos.post("/todos", async (req, res) => {
  if (req.body.todo === undefined) {
    res.sendStatus(400);
    return;
  }

  res.send(await manager.add(req.body.todo));
});

todos.post("/todos/update", async (req, res) => {
  if (req.body.todo === undefined) {
    res.sendStatus(400);
    return;
  }

  res.send(await manager.update(req.body.todo));
});

todos.post("/todos/remove", async (req, res) => {
  if (req.body.id === undefined) {
    res.sendStatus(400);
    return;
  }

  res.send(await manager.remove(req.body.id));
});

todos.post("/todos/removeAll", async (req, res) => {
  await manager.removeAll();
  res.sendStatus(200);
});
