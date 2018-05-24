import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {TodosService} from "../../todos.service";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  todoForm = new FormGroup({
    todo: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(64)]),
  });

  constructor(public todosService: TodosService) {

  }
}
