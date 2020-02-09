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
    <div class="todo">
      <p
        class="todo-text"
        [ngClass]="todo.completed ? 'completed' : ''"
      >
        {{ todo.text }}
      </p>
      <button
        [ngClass]="todo.completed ? 'btn completed' : 'btn std'"
        (click)="done(todo)"
      >
        {{ todo.completed ? 'Not done' : 'Done' }}
      </button>
      <button class="btn remove" (click)="delete(todo)">
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
