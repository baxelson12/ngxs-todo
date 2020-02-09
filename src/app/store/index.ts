import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch, removeItem, append } from '@ngxs/store/operators';

import * as models from '../models';
import * as action from './actions';

export interface TodoStateModel {
  todos: models.Todo[];
}

@State<TodoStateModel>({
  name: 'todoStore',
  defaults: {
    todos: []
  }
})
export class TodoState {
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(action.AddTodo)
  addTodo(
    ctx: StateContext<TodoStateModel>,
    { payload }: action.AddTodo
  ) {
    ctx.setState(
      patch({
        todos: append([payload])
      })
    );
  }

  @Action(action.RemoveTodo)
  removeTodo(
    ctx: StateContext<TodoStateModel>,
    { payload }: action.RemoveTodo
  ) {
    ctx.setState(
      patch<TodoStateModel>({
        todos: removeItem(todo => todo.id === payload.id)
      })
    );
  }
}

export const states = [TodoState];
