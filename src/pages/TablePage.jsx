import { useSelector } from "react-redux"
import TaskTable from "../components/TaskTable"

const TablePage = () => {
  const { tasks, loading, error } = useSelector((state) => state.tasks)

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading tasks...</div>
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Task Table</h1>
      <TaskTable tasks={tasks} />
    </div>
  )
}

export default TablePage

