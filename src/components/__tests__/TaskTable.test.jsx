import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskTable from '../table/TaskTable';
import { Provider } from 'react-redux';
import store from '../../store';

test('renders TaskTable and displays tasks', async () => {
  render(
    <Provider store={store}>
      <TaskTable />
    </Provider>
  );

  const taskCell = await screen.findByText('Fix login bug');
  expect(taskCell).toBeInTheDocument();
});
