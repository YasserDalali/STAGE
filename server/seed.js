require('dotenv').config();
const mongoose = require('mongoose');
const Task = require('./models/Task');

const seedTasks = [
    {
        title: 'Complete Project Proposal',
        description: 'Draft and submit the project proposal for client review',
        status: 'TODO',
        priority: 'HIGH',
        assignees: ['John Doe'],
        dueDate: new Date('2024-03-01')
    },
    {
        title: 'Design Database Schema',
        description: 'Create ERD and define database structure',
        status: 'IN_PROGRESS',
        priority: 'MEDIUM',
        assignees: ['Jane Smith'],
        dueDate: new Date('2024-02-28')
    },
    {
        title: 'Setup Development Environment',
        description: 'Install and configure all necessary tools',
        status: 'DONE',
        priority: 'LOW',
        assignees: ['John Doe', 'Jane Smith'],
        dueDate: new Date('2024-02-20')
    }
];

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager');
        console.log('Connected to MongoDB');

        // Clear existing tasks
        await Task.deleteMany({});
        console.log('Cleared existing tasks');

        // Insert seed tasks
        await Task.insertMany(seedTasks);
        console.log('Inserted seed tasks');

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 