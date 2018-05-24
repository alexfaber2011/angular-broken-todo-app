import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest} from "rxjs";
import {map, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos = new BehaviorSubject([
    {value: 'Buy bread', isCompleted: false, isDeleted: false},
    {value: 'Learn Angular 6', isCompleted: false, isDeleted: false},
    {value: 'Read about Ivy', isCompleted: false, isDeleted: false},
    {value: 'Pick up the kids', isCompleted: false, isDeleted: false}
  ]);

  nonDeletedTodos$ = this.todos.pipe(
    tap(todos => console.log(todos)),
    map(todos => todos.filter(t => !t.isDeleted))
  );

  totalNumberOfTodos$ = this.todos.pipe(map(todos => todos.length));
  numberOfCompletedTodos$ = this.todos.pipe(map(todos => {
    return todos.reduce((sum, t) => t.isCompleted ? sum + 1 : sum, 0);
  }));
  numberOfIncompleteTodos$ = this.todos.pipe(map(todos => {
    return todos.reduce((sum, t) => !t.isCompleted ? sum + 1 : sum, 0);
  }));
  numberOfDeletedTodos$ = this.todos.pipe(map(todos => {
    return todos.reduce((sum, t) => t.isDeleted ? sum + 1 : sum, 0);
  }));

  constructor() { }

  addNewTodo(todo: string) {
    if (todo && todo.trim() !== '') {
      this.todos.next(this.todos.getValue().concat([{value: todo, isCompleted: false, isDeleted: false}]));
    }
  }

  toggleTodoCompletion(todo) {
    this.todos.next(this.todos.getValue().map(t => {
      if (t === todo) {
        return Object.assign({}, todo, {isCompleted: !todo.isCompleted});
      }
      return t;
    }));
  }

  toggleTodoDeletion(todo) {
    this.todos.next(this.todos.getValue().map(t => {
      if (t === todo) {
        return Object.assign({}, todo, {isDeleted: !todo.isDeleted});
      }
      return t;
    }));
  }
}
