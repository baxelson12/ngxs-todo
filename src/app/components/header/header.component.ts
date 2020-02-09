import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  template: `
    <div class="mb-8" id="header">
      <h1 class="text-xl font-semibold">Todo List</h1>
      <form
        [formGroup]="todoForm"
        (ngSubmit)="submit()"
        class="flex mt-4"
        id="todo-input"
      >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          formControlName="text"
        />
        <button
          class="flex-no-shrink p-2 border rounded text-green-500 border-green-500 hover:text-white hover:bg-green-500"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() notifySubmit = new EventEmitter<any>();

  todoForm = new FormGroup({
    text: new FormControl()
  });

  constructor() {}
  ngOnInit() {}

  submit() {
    this.notifySubmit.emit(this.todoForm.value);
    this.todoForm.reset();
  }
}
