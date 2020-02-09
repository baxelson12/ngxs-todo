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
  @Select(TodoState.getTodos) todos$: Observable<Todo[]>;

  constructor(private store: Store) {}

  onSubmit(todo) {
    const modeled: Todo = {
      text: todo.text,
      id: Math.floor(Math.random() * 10),
      completed: false
    };
    this.store.dispatch(new actions.AddTodo(modeled));
  }

  onRemove(todo: Todo) {
    console.log('From container', todo);
    this.store.dispatch(new actions.RemoveTodo(todo));
  }
}
