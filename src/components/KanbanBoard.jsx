import { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import PropTypes from "prop-types"
import CreateTaskModal from "./CreateTaskModal"
import { useTranslation } from "react-i18next"
import KanbanColumn from "./KanbanBoard/KanbanColumn"
import { useDispatch } from "react-redux"
import { updateTaskAsync } from "../store/tasksThunks"

const KanbanBoard = ({ tasks, setTasks }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const columns = {
    TODO: {
      title: t('tasks.statuses.todo'),
      items: tasks.filter((task) => task.status === "TODO")
    },
    IN_PROGRESS: {
      title: t('tasks.statuses.inProgress'),
      items: tasks.filter((task) => task.status === "IN_PROGRESS")
    },
    DONE: {
      title: t('tasks.statuses.done'),
      items: tasks.filter((task) => task.status === "DONE")
    },
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Don't do anything if dropped in the same place
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Find the task that was dragged
    const sourceColumn = columns[source.droppableId];
    const draggedTask = sourceColumn.items[source.index];

    // Create updated task with new status
    const updatedTask = {
      ...draggedTask,
      status: destination.droppableId
    };

    // Update the task in the backend
    dispatch(updateTaskAsync(updatedTask));

    // Update local state to reflect the change immediately
    const updatedTasks = tasks.map(task =>
      task.id === draggedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">{t('navigation.kanban')}</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t('tasks.createTask')}
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {Object.entries(columns).map(([columnId, column]) => (
            <KanbanColumn
              key={columnId}
              columnId={columnId}
              column={column}
            />
          ))}
        </div>
      </DragDropContext>

      <CreateTaskModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
};

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

KanbanBoard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      status: PropTypes.oneOf(['TODO', 'IN_PROGRESS', 'DONE']).isRequired,
      priority: PropTypes.oneOf(['LOW', 'MEDIUM', 'HIGH']).isRequired,
      assignees: PropTypes.arrayOf(PropTypes.string),
      dueDate: PropTypes.string,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default KanbanBoard;

