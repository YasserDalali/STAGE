import { Draggable } from "react-beautiful-dnd"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { updateTaskAsync } from "../../store/tasksThunks"
import getPriorityColor from "../../utils/getPriorityColor"
import formatDate from "../../utils/formatDate"

const KanbanCard = ({ task, index }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user.user);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    dispatch(updateTaskAsync({ ...task, status: newStatus }));
  };

  const canEditStatus = task.assignees?.includes(username);

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
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900">{task.title}</h3>
          </div>
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
                {formatDate(task.dueDate, t('common.noDate'))}
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

              {canEditStatus && (
                <select
                  value={task.status}
                  onChange={handleStatusChange}
                  className="text-xs border rounded-md px-1 py-0.5 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={(e) => e.stopPropagation()} // Prevent drag when clicking dropdown
                >
                  <option value="TODO">{t('tasks.statuses.todo')}</option>
                  <option value="IN_PROGRESS">{t('tasks.statuses.inProgress')}</option>
                  <option value="DONE">{t('tasks.statuses.done')}</option>
                </select>
              )}
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

