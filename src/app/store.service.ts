import { Injectable } from '@angular/core';

import { Todo } from 'src/Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}
  todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex((todo) => todo.id == id);
    this.todos.splice(index, 1);
  }

  updateTodo(newTodo: Todo) {
    const index = this.todos.findIndex((todo) => todo.id == newTodo.id);
    this.todos[index] = newTodo;
  }
}
