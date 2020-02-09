import { State, Action, StateContext, Selector } from '@ngxs/store';

import * as models from '../models';
// import * as actions from './actions';

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
}

export const states = [TodoState];
