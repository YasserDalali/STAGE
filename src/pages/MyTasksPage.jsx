import TaskTable from "../components/TaskTable"
import { mockTasks } from "../mockData"

const MyTasksPage = () => {
  // In a real application, you would filter tasks based on the current user
  const myTasks = mockTasks.filter((task) => task.assignees.includes("Current User"))

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Tasks</h1>
      <TaskTable tasks={myTasks} />
    </div>
  )
}

export default MyTasksPage

