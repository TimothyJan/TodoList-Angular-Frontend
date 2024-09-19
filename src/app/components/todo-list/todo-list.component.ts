import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todo-list.service';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    TodoListItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  @Input() completedList: boolean = false;
  todoList: TodoItem[] = [];

  constructor(
    private _todoListService: TodoListService
  ) {}

  ngOnInit(): void {
    this.loadTodoList();
  }

  /** Get todoList */
  loadTodoList(): void {
    this.todoList = this._todoListService.todoList;
  }

}
