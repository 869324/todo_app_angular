import { UtilsService } from './../utils.service';
import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/Interfaces/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private utilsService: UtilsService
  ) {}

  todos = this.storeService.getTodos();
  showEditor = false;

  onChange = (todo: Todo) => {
    this.storeService.updateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  onDelete = (id: string) => {
    this.storeService.deleteTodo(id);
  };

  changeEditor = (status: boolean) => {
    this.showEditor = status;
  };

  ngOnInit(): void {}
}
