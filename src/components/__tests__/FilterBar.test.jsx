import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../table/FilterBar';
import { Provider } from 'react-redux';
import store from '../../store';

test('updates status filter', () => {
  render(
    <Provider store={store}>
      <FilterBar />
    </Provider>
  );

  const selects = screen.getAllByRole('combobox');
  const statusSelect = selects.find(select => select.getAttribute('name') === 'status');
  expect(statusSelect).toBeTruthy(); // ensures we found it

  fireEvent.change(statusSelect, { target: { value: 'Completed' } });

  expect(statusSelect.value).toBe('Completed');
});
