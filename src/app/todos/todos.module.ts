import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosListComponent} from './todos-list/todos-list.component';
import {TodosRoutingModule} from './todos-routing.module';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TodosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TodosListComponent]
})
export class TodosModule {
}
