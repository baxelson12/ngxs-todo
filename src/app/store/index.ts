import { State, Action, StateContext, Selector } from '@ngxs/store';
import { append } from '@ngxs/store/operators';

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
    const state = ctx.getState();
    const todos: models.Todo[] = [...state.todos, payload];
    ctx.setState({
      ...state,
      todos
    });
  }
}

export const states = [TodoState];
