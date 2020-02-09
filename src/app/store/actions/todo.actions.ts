import * as models from '../../models';

export enum ActionsType {
  ADD_TODO = '[Todo] Add todo',
  REMOVE_TODO = '[Todo] Remove todo',
  COMPLETE_TODO = '[Todo] Complete todo'
}

export class AddTodo {
  static readonly type = ActionsType.ADD_TODO;
  constructor(public payload: models.Todo) {}
}

export class RemoveTodo {
  static readonly type = ActionsType.REMOVE_TODO;
  constructor(public payload: models.Todo) {
    console.log('From action', payload);
  }
}

export class CompleteTodo {
  static readonly type = ActionsType.COMPLETE_TODO;
}
