import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

fetch = jest.fn();



it('renders without crashing', () => {
  const tree = renderer(<App />);
  fetch.returnMockValue({

  })
  expect(tree.toJSON()).toMatchSnapshot();
});
