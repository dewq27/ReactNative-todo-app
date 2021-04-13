/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Todo from '../../src/components/Todo/';
import uuid from 'uuid';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Todo component', () => {
  it('renders correctly', () => {
    renderer.create(
      <Provider store={mockStore()}>
        <Todo
          todo={{
            uuid: uuid.v4(),
            created: Date.now(),
            text: 'test',
            status: 'active',
          }}
        />
      </Provider>,
    );
  });
});
