"use client"

import React from "react"
import KanbanBoard from "../components/KanbanBoard"
import { mockTasks } from "../mockData"

const KanbanPage = () => {
  const [tasks, setTasks] = React.useState(mockTasks)

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Kanban Board</h1>
      <KanbanBoard tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default KanbanPage

