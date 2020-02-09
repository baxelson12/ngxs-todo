import { State } from '@ngxs/store';

// export * from './actions';
// export * from './selectors';

export interface TodoStateModel {
  todos: [];
}

@State<TodoStateModel>({
  name: 'todoStore',
  defaults: {
    todos: []
  }
})
export class TodoState {}

export const states = [TodoState];
