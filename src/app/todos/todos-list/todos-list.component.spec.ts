import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListComponent} from './todos-list.component';
import {By} from '@angular/platform-browser';
import {MaterialModule} from '../../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialModule, ReactiveFormsModule],
      declarations: [TodosListComponent]
    }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list item for each default todo', async(() => {
    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item .mat-checkbox-label'))
      .map(listItem => listItem.nativeElement.innerText.trim());

    expect(listItems).toEqual([
      'Buy bread',
      'Learn Angular 6',
      'Read about Ivy',
      'Pick up the kids'
    ]);
  }));

  it('should be able to add a new todo to the list', async(() => {
    component.addNewTodo('Test TODO');

    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item .mat-checkbox-label'))
      .map(listItem => listItem.nativeElement.innerText.trim());

    expect(listItems).toEqual([
      'Buy bread',
      'Learn Angular 6',
      'Read about Ivy',
      'Pick up the kids',
      'Test TODO'
    ]);
  }));

  it('should not add a blank todo', async(() => {
    component.addNewTodo('');

    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item .mat-checkbox-label'))
      .map(listItem => listItem.nativeElement.innerText.trim());

    expect(listItems).toEqual([
      'Buy bread',
      'Learn Angular 6',
      'Read about Ivy',
      'Pick up the kids',
    ]);
  }));

  it('the "add" button should be disabled when the input is blank', async(() => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBe(true);
    component.todoForm.setValue({todo: 'foo'});
    fixture.detectChanges();
    expect(button.nativeElement.disabled).toBe(false);
  }));

  it('should disable the "add" button when the input is less than 3 characters', async(() => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBe(true);
    component.todoForm.setValue({todo: 'fo'});
    fixture.detectChanges();
    expect(button.nativeElement.disabled).toBe(true);
  }));

  it('should disable the "add" button when the input is more than 64 characters', async(() => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBe(true);
    component.todoForm.setValue({todo: 'as;dlkfjasdl;kfjas;dlkfjas;dlkfjas;dlkfjas;ldkfjasl;dkjfas;ldkfja;sldkfj;asldkjfa;sldkfjsdkalsjdf'});
    fixture.detectChanges();
    expect(button.nativeElement.disabled).toBe(true);
  }));

  it('removeTodo should remove a todo', async(() => {
    component.removeTodo('Learn Angular 6');
    expect(component.todos).toEqual([
      'Buy bread',
      'Read about Ivy',
      'Pick up the kids',
    ]);
  }));

  it('should remove a todo if the delete button is clicked', async(() => {
    const button = fixture.debugElement.query(By.css('mat-icon'));
    button.nativeElement.click();
    fixture.detectChanges();
    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item .mat-checkbox-label'))
      .map(listItem => listItem.nativeElement.innerText.trim());

    expect(listItems).toEqual([
      'Learn Angular 6',
      'Read about Ivy',
      'Pick up the kids',
    ]);
  }));
});
