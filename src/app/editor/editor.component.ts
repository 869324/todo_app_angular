import { UtilsService } from './../utils.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreService } from '../store.service';

import { Todo } from 'src/Interfaces/interfaces';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() changeEditor!: Function;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private utilsService: UtilsService
  ) {}

  editForm = this.formBuilder.group({
    description: '',
    date: '',
    time: '',
  });

  onSubmit = (todo: Todo) => {
    this.storeService.updateTodo({
      ...todo,
      ...this.editForm.value,
    });

    this.changeEditor(false);
  };

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      description: this.todo.description,
      date: this.todo.date,
      time: this.todo.time,
    });
  }
}
