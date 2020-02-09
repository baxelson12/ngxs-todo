import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  patch,
  removeItem,
  append,
  updateItem
} from '@ngxs/store/operators';

import * as models from '../models';
import * as action from './actions';

// Create interface for store
export interface TodoStateModel {
  todos: models.Todo[];
}

// Implement interface, create store
@State<TodoStateModel>({
  name: 'todoStore',
  defaults: {
    todos: []
  }
})
export class TodoState {
  // Create selector to get todos array
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }
  // Create todo, Patch store, append new todo
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

  // Remove todo, Look for todo with matching id
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

  // Find matching id, switch flag for completion on todo object.
  @Action(action.CompleteTodo)
  completeTodo(
    ctx: StateContext<TodoStateModel>,
    { payload }: action.CompleteTodo
  ) {
    ctx.setState(
      patch<TodoStateModel>({
        todos: updateItem<models.Todo>(
          todo => todo.id === payload.id,
          patch<models.Todo>({ completed: !payload.completed })
        )
      })
    );
  }
}

// For module imports
export const states = [TodoState];
