import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { Todo } from '../../models';

@Component({
  selector: 'app-todo',
  template: `
    <div
      class="flex mb-4 items-center rounded border border-gray-300 py-2 px-3"
      id="todo"
    >
      <!-- "todo.finished ? 'line-through text-green' : 'text-grey-darkest'" -->
      <p class="w-full">Todo text</p>
      <!-- "todo.finished ? 'text-grey border-grey hover:bg-grey' : 'text-green border-green hover:bg-green'" -->
      <!-- Set button text to done/not done -->
      <button
        class="flex-no-shrink p-2 ml-4 mr-2 rounded text-blue-500 hover:text-white hover:bg-blue-500"
      >
        Done
      </button>
      <button
        class="flex-no-shrink p-2 ml-2 rounded text-red-500 hover:text-white hover:bg-red-500"
      >
        Remove
      </button>
    </div>
  `,
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Output() notifyDone = new EventEmitter<Todo>();
  @Output() notifyDelete = new EventEmitter<Todo>();

  constructor() {}
  ngOnInit() {}

  done(todo) {
    this.notifyDone.emit(todo);
  }

  delete(todo) {
    this.notifyDelete.emit(todo);
  }
}
