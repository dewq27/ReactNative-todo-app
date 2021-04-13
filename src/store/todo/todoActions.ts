import {ITodo} from '../../models/InterfaceTodo';
import * as actionTypes from './todoTypes';

export const addTodo = (text: ITodo['text']) => ({
  type: actionTypes.ADD_TODO,
  text,
});

export const removeTodo = (uuid: ITodo['uuid']) => ({
  type: actionTypes.REMOVE_TODO,
  uuid,
});

export const updateStatusTodo = (
  uuid: ITodo['uuid'],
  status: ITodo['status'],
) => ({
  type: actionTypes.UPDATE_STATUS_TODO,
  uuid,
  status,
});
