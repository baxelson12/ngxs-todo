import { Component } from '@angular/core';
import { Todo } from '../../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onSubmit(todo) {
    const modeled: Todo = {
      text: todo.text,
      id: Math.floor(Math.random() * 10),
      completed: false
    };
    console.log(modeled);
  }
}
