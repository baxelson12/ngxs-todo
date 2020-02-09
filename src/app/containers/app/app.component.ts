import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models';
import { TodoState } from '../../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(TodoState.getTodos) todos$: Observable<Todo[]>;

  onSubmit(todo) {
    const modeled: Todo = {
      text: todo.text,
      id: Math.floor(Math.random() * 10),
      completed: false
    };
    console.log(modeled);
  }
}
