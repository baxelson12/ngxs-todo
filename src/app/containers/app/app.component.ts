import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models';
import { TodoState } from '../../store';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Create basic selector to extract todos from state
  @Select(TodoState.getTodos) todos$: Observable<Todo[]>;

  constructor(private store: Store) {}

  // Create data model, then dispatch data
  onSubmit(todo) {
    const modeled: Todo = {
      text: todo.text,
      id: Symbol(),
      completed: false
    };
    this.store.dispatch(new actions.AddTodo(modeled));
  }

  onRemove(todo: Todo) {
    this.store.dispatch(new actions.RemoveTodo(todo));
  }

  onDone(todo: Todo) {
    this.store.dispatch(new actions.CompleteTodo(todo));
  }
}
