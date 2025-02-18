import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const KanbanBoard = ({ tasks, setTasks }) => {
  const columns = {
    TODO: { title: "To Do", items: tasks.filter((task) => task.status === "TODO") },
    IN_PROGRESS: { title: "In Progress", items: tasks.filter((task) => task.status === "IN_PROGRESS") },
    DONE: { title: "Done", items: tasks.filter((task) => task.status === "DONE") },
  }

  const onDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const [removed] = sourceColumn.items.splice(source.index, 1)
    destColumn.items.splice(destination.index, 0, removed)

    const updatedTasks = tasks.map((task) => {
      if (task.id === removed.id) {
        return { ...task, status: destination.droppableId }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId} className="bg-gray-100 p-4 rounded-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
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
                          className="bg-white p-4 rounded-md shadow-sm"
                        >
                          <h3 className="font-semibold">{task.title}</h3>
                          <p className="text-sm text-gray-600">
                            {task.description && (
                              <span className="block mb-2">{task.description}</span>
                            )}
                          </p>
                          <p className="text-sm text-gray-600">
                            Assignee(s): {task.assignees?.join(", ") || "Unassigned"}
                          </p>
                          <p className="text-sm text-gray-600">
                            Due: {formatDate(task.dueDate)}
                          </p>
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}
                          >
                            {task.priority}
                          </span>
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
  )
}

const getPriorityColor = (priority) => {
  switch (priority) {
    case "HIGH":
      return "bg-red-100 text-red-800"
    case "MEDIUM":
      return "bg-yellow-100 text-yellow-800"
    case "LOW":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default KanbanBoard

