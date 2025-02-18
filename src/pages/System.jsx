import React from 'react'
import TaskTable from '../components/main/tableView/TaskTable'

function System() {
  const mockTasks = [
    {
      id: 1,
      title: "Implement new feature",
      assigner: "John Doe",
      assignees: ["Alice", "Bob"],
      createdAt: "2023-05-01",
      dueDate: "2023-05-15",
      urgency: "High",
    },
    // Add more mock tasks here...
  ]

  return (
    <div><TaskTable tasks={mockTasks} /></div>
  )
}

export default System