import { useState } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import TaskTable from "../components/TaskTable"
import CreateTaskModal from "../components/CreateTaskModal"

const TablePage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { t } = useTranslation();
  const { tasks, loading, error } = useSelector((state) => state.tasks)

  if (loading) {
    return <div className="flex justify-center items-center h-full">{t('common.loading')}</div>
  }

  if (error) {
    return <div className="text-red-500">{t('common.error', { message: error })}</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">{t('navigation.table')}</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t('tasks.createTask')}
        </button>
      </div>

      <TaskTable tasks={tasks} />

      <CreateTaskModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  )
}

export default TablePage

