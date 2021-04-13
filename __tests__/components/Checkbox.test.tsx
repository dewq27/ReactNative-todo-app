/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Checkbox from '../../src/components/Checkbox/';

describe('Checbox component', () => {
  it('renders correctly', () => {
    const mockFunc = jest.fn();

    renderer.create(<Checkbox checked={false} onChange={mockFunc} />);
  });
});
