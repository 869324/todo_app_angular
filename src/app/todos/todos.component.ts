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
  editId = '';

  showPopup = false;

  data = {
    id: '',
    title: '',
    text: '',
    icon: '',
    showOk: false,
    showCancel: false,
    okText: '',
    cancelText: '',
  };

  onChange = (todo: Todo) => {
    this.storeService.updateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  onDelete = (id: string) => {
    this.data = {
      ...this.data,
      id: id,
      title: 'Confirm',
      icon: 'warning',
      text: 'Are you sure you want to delete this item?',
      showOk: true,
      showCancel: true,
    };

    this.showPopup = true;
  };

  okay(id: string) {
    this.storeService.deleteTodo(id);

    this.data = {
      ...this.data,
      title: 'Success',
      icon: 'success',
      text: 'Todo has been deleted',
      showOk: true,
      showCancel: false,
    };

    //this.showPopup = true;
    //console.log(this.showPopup);
  }

  changeEditor = (id = '') => {
    this.editId = id;
  };

  closePopup() {
    this.showPopup = false;
  }

  ngOnInit(): void {}
}
