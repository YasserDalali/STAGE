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
            console.log('Starting to fetch tasks...');
            dispatch(fetchTasksStart());

            const tasks = await tasksService.fetchTasks();
            console.log('Successfully fetched tasks:', tasks);

            dispatch(fetchTasksSuccess(tasks));
            return tasks;
        } catch (error) {
            console.error('Error in fetchTasks thunk:', error);
            dispatch(fetchTasksFailure(error.message));
            throw error;
        }
    }
);

// Setup periodic fetch
let fetchInterval = null;

export const startPeriodicFetch = () => (dispatch) => {
    console.log('Starting periodic fetch...');
    // Initial fetch
    dispatch(fetchTasks());

    // Setup interval for subsequent fetches
    if (!fetchInterval) {
        fetchInterval = setInterval(() => {
            console.log('Running periodic fetch...');
            dispatch(fetchTasks());
        }, 50000); // Fetch every 50 seconds
    }
};

export const stopPeriodicFetch = () => {
    console.log('Stopping periodic fetch...');
    if (fetchInterval) {
        clearInterval(fetchInterval);
        fetchInterval = null;
    }
};

// Other task-related thunks
export const updateTaskAsync = createAsyncThunk(
    'tasks/updateTask',
    async (task, { dispatch }) => {
        try {
            console.log('Updating task:', task);
            const updatedTask = await tasksService.updateTask(task);
            console.log('Task updated successfully:', updatedTask);
            dispatch(updateTask(updatedTask));
            return updatedTask;
        } catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    }
);

export const createTaskAsync = createAsyncThunk(
    'tasks/createTask',
    async (task, { dispatch }) => {
        try {
            console.log('Creating new task:', task);
            const newTask = await tasksService.createTask(task);
            console.log('Task created successfully:', newTask);
            dispatch(addTask(newTask));
            return newTask;
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    }
);

export const deleteTaskAsync = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, { dispatch }) => {
        try {
            console.log('Deleting task:', taskId);
            await tasksService.deleteTask(taskId);
            console.log('Task deleted successfully:', taskId);
            dispatch(deleteTask(taskId));
            return taskId;
        } catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    }
); 