import { Droppable } from "react-beautiful-dnd"
import KanbanCard from "./KanbanCard"

const KanbanColumn = ({ columnId, column }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[300px]">
      <h3 className="text-lg font-sora font-semibold mb-4">{column.title}</h3>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
            {column.items.map((task, index) => (
              <KanbanCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default KanbanColumn

