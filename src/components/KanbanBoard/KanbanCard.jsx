import { Draggable } from "react-beautiful-dnd"

const KanbanCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
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
            <span className={`px-2 py-1 rounded ${getUrgencyColor(task.urgency)}`}>{task.urgency}</span>
          </div>
        </div>
      )}
    </Draggable>
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

export default KanbanCard

