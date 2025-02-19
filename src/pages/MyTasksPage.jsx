import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import TaskTable from "../components/TaskTable"

const MyTasksPage = () => {
  const { t } = useTranslation();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const { username } = useSelector((state) => state.user.user);

  // Filter tasks for current user
  const myTasks = tasks.filter((task) => task.assignees.includes(username));

  if (loading) {
    return <div className="flex justify-center items-center h-full">{t('common.loading')}</div>
  }

  if (error) {
    return <div className="text-red-500">{t('common.error', { message: error })}</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">{t('navigation.myTasks')}</h1>
      <TaskTable tasks={myTasks} />
    </div>
  )
}

export default MyTasksPage

