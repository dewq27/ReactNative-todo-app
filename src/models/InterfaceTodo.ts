import {IAction} from './InterfaceActions';

export interface ITodo {
  uuid: string;
  created: number;
  text: string;
  status: 'active' | 'finished';
}

export interface AddTodoAction extends IAction {
  text: ITodo['text'];
  status?: ITodo['status'];
}
export interface RemoveTodoAction extends IAction {
  uuid: ITodo['uuid'];
}
export interface UpdateStatusTodoAction extends IAction {
  uuid: ITodo['uuid'];
  status: ITodo['status'];
}

export type TodoActions =
  | AddTodoAction
  | RemoveTodoAction
  | UpdateStatusTodoAction;
