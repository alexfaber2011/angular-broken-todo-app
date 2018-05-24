import {Component} from '@angular/core';

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

  addNewTodo(todo: string) {
    if (todo && todo.trim() !== '') {
      this.todos.push(todo);
    }
  }
}
