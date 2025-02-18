import { useSelector } from "react-redux"
import TaskTable from "../components/TaskTable"

const MyTasksPage = () => {
  const { tasks, loading, error } = useSelector((state) => state.tasks)

  // Filter tasks for current user
  const myTasks = tasks.filter((task) => task.assignees.includes("Current User"))

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading tasks...</div>
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Tasks</h1>
      <TaskTable tasks={myTasks} />
    </div>
  )
}

export default MyTasksPage

