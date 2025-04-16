import reducer, { setFilters, setColumns } from '../taskSlice';

describe('taskSlice reducer', () => {
  const initialState = {
    list: [],
    loading: false,
    error: null,
    filters: {
      status: '',
      priority: '',
      assignee: '',
      search: ''
    },
    columns: {
      visible: ['id', 'name', 'status', 'priority', 'assignee', 'dueDate'],
      order: ['id', 'name', 'status', 'priority', 'assignee', 'dueDate']
    }
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setFilters', () => {
    const filters = { status: 'Completed' };
    const expectedState = {
      ...initialState,
      filters: { ...initialState.filters, ...filters }
    };
    expect(reducer(initialState, setFilters(filters))).toEqual(expectedState);
  });

  it('should handle setColumns', () => {
    const columns = {
      visible: ['id', 'name'],
      order: ['id', 'name']
    };
    const expectedState = {
      ...initialState,
      columns
    };
    expect(reducer(initialState, setColumns(columns))).toEqual(expectedState);
  });
});
