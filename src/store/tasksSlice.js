import { createSlice } from '@reduxjs/toolkit';

// Initial state for our tasks
const initialState = {
    tasks: [],
    loading: false,
    error: null,
    lastUpdated: null
};

// Create the tasks slice
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // Start loading tasks
        fetchTasksStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        // Successfully fetched tasks
        fetchTasksSuccess: (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
            state.lastUpdated = new Date().toISOString();
        },
        // Failed to fetch tasks
        fetchTasksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // Update a single task
        updateTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        // Add a new task
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        // Delete a task
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    },
});

// Export actions
export const {
    fetchTasksStart,
    fetchTasksSuccess,
    fetchTasksFailure,
    updateTask,
    addTask,
    deleteTask
} = tasksSlice.actions;

// Export reducer
export default tasksSlice.reducer; 