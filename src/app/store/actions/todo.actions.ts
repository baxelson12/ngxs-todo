export enum ActionsType {
  ADD_TODO = '[Todo] Add todo',
  REMOVE_TODO = '[Todo] Remove todo',
  COMPLETE_TODO = '[Todo] Complete todo'
}

export class AddTodo {
  static readonly type = ActionsType.ADD_TODO;
  constructor(payload: any) {}
}

export class RemoveTodo {
  static readonly type = ActionsType.REMOVE_TODO;
}

export class CompleteTodo {
  static readonly type = ActionsType.COMPLETE_TODO;
}
