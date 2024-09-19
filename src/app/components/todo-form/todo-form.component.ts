import { Component, OnInit } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../models/todoItem';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {
  initialTodoItem: TodoItem | undefined;

  todoItemForm: FormGroup = new FormGroup({
    // dateAndTime: new FormControl("", Validators.required),
    isCompleted: new FormControl(false, Validators.required),
    name: new FormControl("", Validators.required),
  })

  constructor(
    private _todoListService: TodoListService
  ) {}

  ngOnInit(): void {
    this.initialTodoItem = this.todoItemForm.value;
  }

  /** Submit form and add todoItem to todoList */
  onSubmit(): void {
    if (this.todoItemForm.valid) {
      this._todoListService.createTodoItem(this.todoItemForm.value);
    }
    this.todoItemForm.reset(this.initialTodoItem);
  }
}

