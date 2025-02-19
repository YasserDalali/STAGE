import { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import PropTypes from "prop-types"
import CreateTaskModal from "./CreateTaskModal"
import { useTranslation } from "react-i18next"
import KanbanColumn from "./KanbanBoard/KanbanColumn"

const KanbanBoard = ({ tasks, setTasks }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { t } = useTranslation();

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

    // Create new arrays to avoid mutating state directly
    const sourceColumn = { ...columns[source.droppableId] };
    const destColumn = { ...columns[destination.droppableId] };
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    // Remove from source array
    const [removed] = sourceItems.splice(source.index, 1);

    // If moving to same column, insert at new index
    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
    } else {
      // Moving to different column
      // Update the task's status
      removed.status = destination.droppableId;
      destItems.splice(destination.index, 0, removed);
    }

    // Create updated tasks array
    const updatedTasks = tasks.map(task => {
      if (task.id === removed.id) {
        return { ...task, status: destination.droppableId };
      }
      return task;
    });

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

