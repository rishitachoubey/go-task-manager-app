import React from 'react';
import { render, screen } from '@testing-library/react';
import TableView from '../TableView';
import { Provider } from 'react-redux';
import store from '../../store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('renders filter bar and task table', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <TableView />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/Edit Columns/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Filter by assignee/i)).toBeInTheDocument();
});
