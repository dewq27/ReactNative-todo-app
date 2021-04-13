/**
 * @format
 */

import React from 'react';
import 'react-native';
import { Alert, Share } from 'react-native';
import { Provider } from 'react-redux';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import TrashIcon from '../../src/components/Icons/Trash';
import AddModal from '../../src/components/Modals/addModal';
import Todo from '../../src/components/Todo';
import { ITodo } from '../../src/models';
import { addTodo, removeTodo } from '../../src/store/todo/todoActions';
import List from '../../src/views/List/';

const mockStore = configureStore();

describe('List component', () => {
  let store: any;

  let todos: ITodo[] = [
    {
      uuid: '1',
      created: Date.now(),
      text: 'sample',
      status: 'active',
    },
    {
      uuid: '2',
      created: Date.now(),
      text: 'sample 2',
      status: 'finished',
    },
  ];
  beforeEach(() => {
    store = mockStore({
      todos,
    });
  });
  it('renders todo list', () => {
    const {root} = renderer.create(
      <Provider store={store}>
        <List />
      </Provider>,
    );
    expect(root.findByType(List).findAllByType(Todo)).toHaveLength(
      todos.length,
    );
  });
  it('User removes todo element', () => {
    store.dispatch = jest.fn();
    const spyAlert = jest.spyOn(Alert, 'alert');
    const {root} = renderer.create(
      <Provider store={store}>
        <List />
      </Provider>,
    );

    renderer.act(() => {
      root
        .findByType(List)
        .findAllByType(Todo)[0]
        .findByType(TrashIcon)
        .parent?.props.onClick();
    });

    // @ts-ignore
    spyAlert.mock.calls[0][2][0].onPress();

    expect(Alert.alert).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeTodo('1'));
  });
  it('User add new todo element', () => {
    store.dispatch = jest.fn();
    const {root} = renderer.create(
      <Provider store={store}>
        <List />
      </Provider>,
    );

    renderer.act(() => {
      root.findByProps({testID: 'AddButton'}).props.onPress();
    });

    renderer.act(() => {
      root.findByType(AddModal).props.handleConfirm('New todo item');
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(addTodo('New todo item'));
  });
  it('User share todo list', () => {
    store.dispatch = jest.fn();
    jest.spyOn(Share, 'share');
    const {root} = renderer.create(
      <Provider store={store}>
        <List />
      </Provider>,
    );

    console.log(root.findByProps({testID: 'ShareButton'}).props.onPress);
    renderer.act(() => {
      root.findByProps({testID: 'ShareButton'}).props.onPress();
    });

    expect(Share.share).toHaveBeenCalledTimes(1);
  });
});
