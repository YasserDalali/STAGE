import { Droppable } from "react-beautiful-dnd"
import KanbanCard from "./KanbanCard"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

const KanbanColumn = ({ columnId, column }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[300px] flex flex-col">
      <h3 className="text-lg font-semibold mb-4">
        {t(`tasks.statuses.${columnId.toLowerCase()}`)}
        <span className="ml-2 text-sm text-gray-500">({column.items.length})</span>
      </h3>
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`flex-1 min-h-[500px] transition-colors ${snapshot.isDraggingOver ? 'bg-blue-50' : 'bg-gray-50'
              } rounded-md p-2`}
          >
            <div className="space-y-3">
              {column.items.map((task, index) => (
                <KanbanCard key={task.id} task={task} index={index} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

KanbanColumn.propTypes = {
  columnId: PropTypes.string.isRequired,
  column: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        assignees: PropTypes.arrayOf(PropTypes.string),
        dueDate: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default KanbanColumn

