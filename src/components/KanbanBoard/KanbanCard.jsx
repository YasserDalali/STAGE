import { Draggable } from "react-beautiful-dnd"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

const KanbanCard = ({ task, index }) => {
  const { t } = useTranslation();

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

  const formatDate = (dateString) => {
    if (!dateString) return t('common.noDate');
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white rounded-lg shadow-sm p-4 ${snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-400' : ''
            }`}
        >
          <h3 className="font-semibold text-gray-900">{task.title}</h3>
          {task.description && (
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {task.description}
            </p>
          )}
          <div className="mt-3 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">👥</span>
              {task.assignees?.length ? task.assignees.join(", ") : t('tasks.unassigned')}
            </div>
            {task.dueDate && (
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">📅</span>
                {formatDate(task.dueDate)}
              </div>
            )}
            <div className="flex items-center justify-between mt-2">
              <span
                className={`inline-block px-2 py-1 text-xs rounded-full ${getPriorityColor(
                  task.priority
                )}`}
              >
                {t(`tasks.priorities.${task.priority.toLowerCase()}`)}
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

KanbanCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    assignees: PropTypes.arrayOf(PropTypes.string),
    dueDate: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default KanbanCard;

