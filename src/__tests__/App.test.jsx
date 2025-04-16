import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';

// ✅ Fix ResizeObserver not defined
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

const renderAppWithRoute = (route) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe('App routing', () => {
  test('redirects from / to /table', () => {
    renderAppWithRoute('/');
    expect(screen.getByText(/Edit Columns/i)).toBeInTheDocument();
  });

  test('renders TableView at /table', () => {
    renderAppWithRoute('/table');
    expect(screen.getByText(/Edit Columns/i)).toBeInTheDocument();
  });

  test('renders Dashboard at /dashboard', () => {
    renderAppWithRoute('/dashboard');
    expect(screen.getByText(/Dashboard Overview/i)).toBeInTheDocument();
  });

  test('renders 404 page for unknown route', () => {
    renderAppWithRoute('/does-not-exist');
    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
  });
});
