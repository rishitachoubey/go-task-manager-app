global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  
  import React from 'react';
  import { render } from '@testing-library/react';
  import CompletedTasksChart from '../dashboard/CompletedTasksChart';
  import { Provider } from 'react-redux';
  import store from '../../store';
  
  test('renders CompletedTasksChart', () => {
    render(
      <Provider store={store}>
        <CompletedTasksChart />
      </Provider>
    );
  });
  