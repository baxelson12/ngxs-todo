import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <h1 class="heading">Todo List</h1>
      <form [formGroup]="todoForm" (ngSubmit)="submit()" class="form">
        <input
          class="todo-input"
          placeholder="Add Todo"
          formControlName="text"
        />
        <button class="btn submit" type="submit">
          Add
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Notify container of submission
  @Output() notifySubmit = new EventEmitter<any>();

  // Basic form to collect input
  todoForm = new FormGroup({
    text: new FormControl()
  });

  // Notify container of submission
  submit() {
    this.notifySubmit.emit(this.todoForm.value);
    this.todoForm.reset();
  }
}
