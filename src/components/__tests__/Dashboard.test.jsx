import { render, screen } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';
import { Provider } from 'react-redux';
import store from '../../store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders dashboard charts', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByTestId('completed-chart')).toBeInTheDocument();
  expect(screen.getByTestId('due-chart')).toBeInTheDocument();
  expect(screen.getByTestId('estimation-chart')).toBeInTheDocument();
});
