import '@testing-library/jest-dom'; // ✅ Required for toBeInTheDocument
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import EditColumnsModal from '../common/EditColumnsModal';

const defaultProps = {
  onClose: jest.fn(),
};

test('renders EditColumnsModal with checkboxes', () => {
  render(
    <Provider store={store}>
      <EditColumnsModal {...defaultProps} />
    </Provider>
  );
  expect(screen.getByText(/Edit Columns/i)).toBeInTheDocument();
});

test('calls onSave with updated columns', () => {
  render(
    <Provider store={store}>
      <EditColumnsModal {...defaultProps} />
    </Provider>
  );
  fireEvent.click(screen.getByLabelText(/Name/i)); // checkbox toggle
  fireEvent.click(screen.getByText(/Save/i));
});
