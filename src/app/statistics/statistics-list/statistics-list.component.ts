import {Component} from '@angular/core';
import {TodosService} from "../../todos.service";

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.css']
})
export class StatisticsListComponent {
  constructor(public todosService: TodosService) {
  }
}
