import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Todo} from '../todo';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe(next => {
      this.todos = next;
    });
  }

  toggleTodo(id: number) {
    let todo: Todo = {};
    this.todoService.getTodoById(id).subscribe(next => {
      todo = next;
      todo.complete = true;
      this.todoService.toggleTodo(id, todo).subscribe(next => {
        this.getAll();
      });
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.addTodo(todo).subscribe(next => {
        this.getAll();
      });
      this.content.reset();
    }
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(todo => {
      this.getAll();
    })
  }
}
