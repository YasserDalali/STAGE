"use client"

import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const KanbanBoard = ({ tasks }) => {
  const [columns, setColumns] = useState({
    todo: { title: "To Do", items: [] },
    inProgress: { title: "In Progress", items: [] },
    done: { title: "Done", items: [] },
  })

  useEffect(() => {
    const newColumns = {
      todo: { title: "To Do", items: [] },
      inProgress: { title: "In Progress", items: [] },
      done: { title: "Done", items: [] },
    }

    tasks.forEach((task) => {
      if (task.status === "done") {
        newColumns.done.items.push(task)
      } else if (task.status === "inProgress") {
        newColumns.inProgress.items.push(task)
      } else {
        newColumns.todo.items.push(task)
      }
    })

    setColumns(newColumns)
  }, [tasks])

  const onDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    })
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-sora font-bold text-white mb-4">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId} className="bg-white rounded-lg shadow-lg p-4 min-w-[300px]">
              <h3 className="text-lg font-sora font-semibold mb-4">{column.title}</h3>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                    {column.items.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-50 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h4 className="font-semibold mb-2">{task.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">Assignee(s): {task.assignees.join(", ")}</p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                              <span className={`px-2 py-1 rounded ${getUrgencyColor(task.urgency)}`}>
                                {task.urgency}
                              </span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

const getUrgencyColor = (urgency) => {
  switch (urgency.toLowerCase()) {
    case "high":
      return "bg-red-100 text-red-800"
    case "medium":
      return "bg-yellow-100 text-yellow-800"
    case "low":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default KanbanBoard

