# TicketFlow Enterprise - Task Management System

A comprehensive task management system built with React, Node.js, and MongoDB, featuring Kanban board, table view, and internationalization support.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Frontend Documentation](#frontend-documentation)
- [Backend Documentation](#backend-documentation)
- [State Management](#state-management)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Internationalization](#internationalization)
- [Component Structure](#component-structure)

## Architecture Overview

### Tech Stack

- **Frontend**: React, Redux Toolkit, TailwindCSS, React Beautiful DnD
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: Redux with Redux Toolkit
- **Internationalization**: i18next
- **Styling**: TailwindCSS
- **Database**: MongoDB with Mongoose ODM

### Project Structure

```
project-root/
├── src/                      # Frontend source code
│   ├── components/           # React components
│   ├── pages/               # Page components
│   ├── store/               # Redux store configuration
│   ├── services/            # API services
│   ├── i18n/                # Internationalization
│   └── ...
└── server/                  # Backend source code
    ├── models/              # MongoDB models
    ├── routes/              # API routes
    ├── config/             # Configuration files
    └── ...
```

## Frontend Documentation

### Component Architecture

#### Core Components

1. **KanbanBoard**

```javascript
// Purpose: Main Kanban board component
// Location: src/components/KanbanBoard.jsx
// Features:
// - Drag and drop functionality
// - Real-time status updates
// - Column organization
// - Task creation integration
```

2. **TaskTable**

```javascript
// Purpose: Table view of tasks
// Location: src/components/TaskTable.jsx
// Features:
// - Sorting and filtering
// - Pagination
// - Status updates
// - Search functionality
```

3. **CreateTaskModal**

```javascript
// Purpose: Task creation interface
// Location: src/components/CreateTaskModal.jsx
// Features:
// - Form validation
// - Multi-field input
// - Status and priority selection
// - Assignee management
```

### State Management

#### Redux Store Structure

```javascript
{
  tasks: {
    tasks: [],           // Array of task objects
    loading: false,      // Loading state
    error: null,        // Error state
    lastUpdated: null   // Last update timestamp
  }
}
```

#### Task Actions

1. **Fetch Tasks**

```javascript
// Action: fetchTasks
// Type: Async Thunk
// Purpose: Retrieves tasks from backend
// Location: src/store/tasksThunks.js
```

2. **Update Task**

```javascript
// Action: updateTaskAsync
// Type: Async Thunk
// Purpose: Updates task status and details
// Location: src/store/tasksThunks.js
```

3. **Create Task**

```javascript
// Action: createTaskAsync
// Type: Async Thunk
// Purpose: Creates new task
// Location: src/store/tasksThunks.js
```

### Internationalization

#### Configuration

```javascript
// Location: src/i18n/config.js
// Supported Languages: English, French
// Implementation: i18next with language detection
```

#### Translation Structure

```javascript
{
  "common": {
    // Common translations
  },
  "navigation": {
    // Navigation-related translations
  },
  "tasks": {
    // Task-related translations
  }
}
```

## Backend Documentation

### Database Schema

#### Task Model

```javascript
// Location: server/models/Task.js
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["TODO", "IN_PROGRESS", "DONE"],
    default: "TODO",
  },
  priority: {
    type: String,
    required: true,
    enum: ["LOW", "MEDIUM", "HIGH"],
    default: "MEDIUM",
  },
  assignees: [
    {
      type: String,
      trim: true,
    },
  ],
  dueDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
```

### API Endpoints

#### Tasks API

1. **GET /api/tasks**

   - Purpose: Retrieve all tasks
   - Response: Array of task objects
   - Sorting: Descending by createdAt

2. **POST /api/tasks**

   - Purpose: Create new task
   - Body: Task object
   - Validation: Required fields check

3. **PATCH /api/tasks/:id**

   - Purpose: Update task
   - Parameters: Task ID
   - Body: Updated fields

4. **DELETE /api/tasks/:id**
   - Purpose: Delete task
   - Parameters: Task ID

### Server Configuration

#### Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task_manager
```

#### Middleware Stack

```javascript
// Location: server/server.js
app.use(cors()); // CORS support
app.use(express.json()); // Body parsing
app.use("/api/tasks", taskRoutes); // Routes
```

## Features

### 1. Task Management

- Create, read, update, delete tasks
- Status tracking
- Priority levels
- Assignee management
- Due date tracking

### 2. Views

- Kanban board with drag-and-drop
- Table view with sorting and filtering
- My Tasks view for personal tasks

### 3. User Interface

- Responsive design
- Modern styling with TailwindCSS
- Interactive components
- Loading states
- Error handling

### 4. Internationalization

- Multi-language support
- Language detection
- Dynamic content translation
- Date formatting

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Database Setup

```bash
# Seed database
cd server
npm run seed
```

## Development

### Code Style

- ESLint configuration
- Prettier formatting
- React best practices
- Component-based architecture

### Testing

- Unit tests with Jest
- Component testing with React Testing Library
- API testing with Supertest

### Performance Considerations

- Redux state optimization
- React memo and useMemo usage
- Efficient database queries
- Proper indexing

## Troubleshooting

### Common Issues

1. **MongoDB Connection**

   - Check MongoDB service
   - Verify connection string
   - Check network access

2. **API Errors**

   - Validate request format
   - Check server logs
   - Verify endpoint URLs

3. **Frontend Issues**
   - Clear browser cache
   - Check console errors
   - Verify Redux state

## Security

### Implementation

- Input validation
- Error handling
- CORS configuration
- Environment variables
- Request validation

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

MIT License
