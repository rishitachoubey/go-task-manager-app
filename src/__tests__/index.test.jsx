import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from '../App';
import store from '../store';
import '@testing-library/jest-dom';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders App component without crashing', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Edit Columns/i)).toBeInTheDocument();
});
