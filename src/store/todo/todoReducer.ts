import uuid4 from 'uuid';
import { IActionTypes } from '../../models/InterfaceActions';
import {
  AddTodoAction,
  ITodo,
  RemoveTodoAction,
  UpdateStatusTodoAction
} from '../../models/InterfaceTodo';
import * as actionTypes from './todoTypes';

export type TodoState = ITodo[];

const initialState: TodoState = [];

const todoReducer = (
  state: TodoState = initialState,
  action: IActionTypes,
): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      const {text} = action as AddTodoAction;
      const newTodo: ITodo = {
        uuid: uuid4.v4(),
        created: Date.now(),
        text,
        status: 'active',
      };
      return [...state, newTodo];
    }
    case actionTypes.REMOVE_TODO: {
      const {uuid} = action as RemoveTodoAction;
      return state.filter(todo => todo.uuid !== uuid);
    }
    case actionTypes.UPDATE_STATUS_TODO: {
      const {status, uuid} = action as UpdateStatusTodoAction;
      return state.map(todo =>
        todo.uuid === uuid
          ? {
              ...todo,
              status,
            }
          : todo,
      );
    }
  }
  return state;
};

export default todoReducer;
