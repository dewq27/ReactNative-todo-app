import * as actions from '../../../src/store/todo/todoActions';
import * as types from '../../../src/store/todo/todoTypes';
import reducer from '../../../src/store/todo/todoReducer';
import uuid from 'uuid';

describe('todo actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'new todo item';
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});

describe('todo reducer', () => {
  it('should handle ADD_TODO', () => {
    jest.spyOn(uuid, 'v4').mockReturnValue('uuid');

    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Test todo text',
      }),
    ).toEqual([
      {
        text: 'Test todo text',
        uuid: 'uuid',
        status: 'active',
        created: Date.now(),
      },
    ]);
  });

  it('should handle REMOVE_TODO', () => {
    jest.spyOn(uuid, 'v4').mockReturnValue('uuid');
    expect(
      reducer(
        [
          {
            text: 'Test todo text',
            uuid: 'uuid',
            status: 'active',
            created: Date.now(),
          },
        ],
        {
          type: types.REMOVE_TODO,
          uuid: 'uuid',
        },
      ),
    ).toEqual([]);
  });

  it('should handle UPDATE_STATUS_TODO', () => {
    jest.spyOn(uuid, 'v4').mockReturnValue('uuid');
    expect(
      reducer(
        [
          {
            text: 'Test todo text',
            uuid: 'uuid',
            status: 'active',
            created: Date.now(),
          },
        ],
        {
          type: types.UPDATE_STATUS_TODO,
          uuid: 'uuid',
          status: 'finished',
        },
      ),
    ).toEqual([
      {
        text: 'Test todo text',
        uuid: 'uuid',
        status: 'finished',
        created: Date.now(),
      },
    ]);
  });
});
