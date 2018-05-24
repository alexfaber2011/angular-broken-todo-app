import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  todos = [
    'Buy bread',
    'Learn Angular 6',
    'Read about Ivy',
    'Pick up the kids'
  ];

  todoForm = new FormGroup({
    todo: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(64)]),
  });


  addNewTodo(todo: string) {
    if (todo && todo.trim() !== '') {
      this.todos.push(todo);
    }
  }

  removeTodo(todo: string) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
