import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todoForm = this.formBuilder.group({
    description: '',
    date: '',
    time: '',
  });

  getId() {
    return Math.random().toString(36).substr(2, 5);
  }

  onSubmit(): void {
    this.storeService.addTodo({
      ...this.todoForm.value,
      completed: false,
      id: this.getId(),
    });

    // swal({
    //   icon: 'success',
    //   text: 'Todo added',
    // });

    this.todoForm.reset();
  }

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {}
  ngOnInit(): void {}
}
