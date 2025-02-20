"use client"

import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import KanbanBoard from "../components/KanbanBoard"
import { updateTaskAsync } from "../store/tasksThunks"

const KanbanPage = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { tasks, loading, error } = useSelector((state) => state.tasks)

  // Handler for updating tasks that will dispatch to Redux
  const handleTasksUpdate = (updatedTasks) => {
    // Find the changed task and dispatch update
    const changedTask = updatedTasks.find((newTask) => {
      const oldTask = tasks.find((t) => t.id === newTask.id)
      return oldTask && JSON.stringify(oldTask) !== JSON.stringify(newTask)
    })

    if (changedTask) {
      dispatch(updateTaskAsync(changedTask))
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-full">{t('common.loading')}</div>
  }

  if (error) {
    return <div className="text-red-500">{t('common.error', { message: error })}</div>
  }

  return (
    <div>
      <KanbanBoard tasks={tasks} setTasks={handleTasksUpdate} />
    </div>
  )
}

export default KanbanPage

