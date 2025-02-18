const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to transform MongoDB document to frontend task
const transformTask = (task) => ({
    ...task,
    id: task._id, // Ensure we have an id field for frontend compatibility
    // Ensure dates are properly formatted
    dueDate: task.dueDate ? new Date(task.dueDate).toISOString() : null,
    createdAt: task.createdAt ? new Date(task.createdAt).toISOString() : null,
    updatedAt: task.updatedAt ? new Date(task.updatedAt).toISOString() : null,
});

// This is a placeholder API service that you can replace with your actual API implementation
export const tasksService = {
    // Fetch all tasks
    async fetchTasks() {
        try {
            console.log('Fetching tasks from:', `${API_BASE_URL}/tasks`);
            const response = await fetch(`${API_BASE_URL}/tasks`);
            console.log('Response status:', response.status);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Error response:', errorData);
                throw new Error(`Failed to fetch tasks: ${errorData.message || response.statusText}`);
            }

            const tasks = await response.json();
            console.log('Received tasks:', tasks);

            const transformedTasks = tasks.map(transformTask);
            console.log('Transformed tasks:', transformedTasks);

            return transformedTasks;
        } catch (error) {
            console.error('Error in fetchTasks:', error);
            throw error;
        }
    },

    // Update a task
    async updateTask(task) {
        try {
            console.log('Updating task:', task);
            const response = await fetch(`${API_BASE_URL}/tasks/${task.id || task._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    priority: task.priority,
                    assignees: task.assignees,
                    dueDate: task.dueDate
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`Failed to update task: ${errorData.message || response.statusText}`);
            }

            const updatedTask = await response.json();
            return transformTask(updatedTask);
        } catch (error) {
            console.error('Error in updateTask:', error);
            throw error;
        }
    },

    // Create a new task
    async createTask(task) {
        try {
            console.log('Creating task:', task);
            const response = await fetch(`${API_BASE_URL}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: task.title,
                    description: task.description,
                    status: task.status || 'TODO',
                    priority: task.priority || 'MEDIUM',
                    assignees: task.assignees || [],
                    dueDate: task.dueDate
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`Failed to create task: ${errorData.message || response.statusText}`);
            }

            const newTask = await response.json();
            return transformTask(newTask);
        } catch (error) {
            console.error('Error in createTask:', error);
            throw error;
        }
    },

    // Delete a task
    async deleteTask(taskId) {
        try {
            console.log('Deleting task:', taskId);
            const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`Failed to delete task: ${errorData.message || response.statusText}`);
            }

            return taskId;
        } catch (error) {
            console.error('Error in deleteTask:', error);
            throw error;
        }
    }
}; 