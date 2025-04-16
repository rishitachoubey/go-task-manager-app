import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasksAPI } from '../api/tasks';

// Load saved config from localStorage if available
const savedConfig = localStorage.getItem('columnConfig');
const parsedConfig = savedConfig ? JSON.parse(savedConfig) : null;

// Initial state
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
  columns: parsedConfig || {
    visible: ['id', 'name', 'status', 'priority', 'assignee', 'dueDate'],
    order: ['id', 'name', 'status', 'priority', 'assignee', 'dueDate']
  }
};

// Async thunk for fetching tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetchTasksAPI();
  return response;
});

// Create slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
      localStorage.setItem('columnConfig', JSON.stringify(action.payload)); // persist
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      });
  }
});

export const { setFilters, setColumns } = taskSlice.actions;
export default taskSlice.reducer;
