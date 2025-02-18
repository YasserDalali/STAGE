import TaskTable from "../components/TaskTable"
import { mockTasks } from "../mockData"

const TablePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Task Table</h1>
      <TaskTable tasks={mockTasks} />
    </div>
  )
}

export default TablePage

