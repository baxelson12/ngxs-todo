import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
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
      <p
        class="flex-grow"
        [ngClass]="
          todo.completed ? 'line-through italic text-gray-500' : ''
        "
      >
        {{ todo.text }}
      </p>
      <!-- "todo.finished ? 'text-grey border-grey hover:bg-grey' : 'text-green border-green hover:bg-green'" -->
      <!-- Set button text to done/not done -->
      <button
        [ngClass]="
          todo.completed
            ? 'text-gray-500 hover:bg-gray-500 hover:text-white'
            : 'text-blue-500 hover:text-white hover:bg-blue-500'
        "
        class="flex-no-shrink p-2 ml-4 mr-2 rounded"
        (click)="done(todo)"
      >
        {{ todo.completed ? 'Not done' : 'Done' }}
      </button>
      <button
        class="flex-no-shrink p-2 ml-2 rounded text-red-500 hover:text-white hover:bg-red-500"
        (click)="delete(todo)"
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
  @Input() todo: Todo;

  constructor() {}
  ngOnInit() {}

  done(todo: Todo) {
    this.notifyDone.emit(todo);
  }

  delete(todo: Todo) {
    this.notifyDelete.emit(todo);
  }
}
