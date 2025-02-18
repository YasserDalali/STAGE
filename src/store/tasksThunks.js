import { createAsyncThunk } from '@reduxjs/toolkit';
import { tasksService } from '../services/tasksService';
import {
    fetchTasksStart,
    fetchTasksSuccess,
    fetchTasksFailure,
    updateTask,
    addTask,
    deleteTask
} from './tasksSlice';

// Thunk for fetching tasks
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, { dispatch }) => {
        try {
            dispatch(fetchTasksStart());
            const tasks = await tasksService.fetchTasks();
            dispatch(fetchTasksSuccess(tasks));
        } catch (error) {
            dispatch(fetchTasksFailure(error.message));
            throw error;
        }
    }
);

// Setup periodic fetch
let fetchInterval = null;

export const startPeriodicFetch = () => (dispatch) => {
    // Initial fetch
    dispatch(fetchTasks());

    // Setup interval for subsequent fetches
    if (!fetchInterval) {
        fetchInterval = setInterval(() => {
            dispatch(fetchTasks());
        }, 5000); // Fetch every 5 seconds
    }
};

export const stopPeriodicFetch = () => {
    if (fetchInterval) {
        clearInterval(fetchInterval);
        fetchInterval = null;
    }
};

// Other task-related thunks
export const updateTaskAsync = createAsyncThunk(
    'tasks/updateTask',
    async (task, { dispatch }) => {
        const updatedTask = await tasksService.updateTask(task);
        dispatch(updateTask(updatedTask));
        return updatedTask;
    }
);

export const createTaskAsync = createAsyncThunk(
    'tasks/createTask',
    async (task, { dispatch }) => {
        const newTask = await tasksService.createTask(task);
        dispatch(addTask(newTask));
        return newTask;
    }
);

export const deleteTaskAsync = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, { dispatch }) => {
        await tasksService.deleteTask(taskId);
        dispatch(deleteTask(taskId));
        return taskId;
    }
); 