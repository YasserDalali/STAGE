import { useMemo } from "react"
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel } from "@tanstack/react-table"
import TaskRow from "./TaskRow"
import TaskTableHeader from "./TaskTableHeader"
import TaskTableSearch from "./TaskTableSearch"

// TaskTable component to display tasks in a table format
const TaskTable = ({ tasks }) => {
  if (!tasks || !Array.isArray(tasks)) {
    console.error("Invalid tasks data:", tasks);
    return <div>No tasks available</div>; // Fallback UI
  }

  // Define the columns for the table
  const columns = useMemo(
    () => [
      {
        header: "Title",
        accessorKey: "title",
      },
      {
        header: "Assigner",
        accessorKey: "assigner",
      },
      {
        header: "Assignee(s)",
        accessorKey: "assignees",
        cell: ({ getValue }) => getValue().join(", "),
      },
      {
        header: "Created At",
        accessorKey: "createdAt",
        cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
      },
      {
        header: "Due",
        accessorKey: "dueDate",
        cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
      },
      {
        header: "Urgency",
        accessorKey: "urgency",
      },
    ],
    [],
  )

  // Create a table instance using the react-table library
  const table = useReactTable({
    data: tasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden font-sans">
      <TaskTableSearch table={table} />
      <div className="overflow-x-auto">
        <table className="w-full">
          <TaskTableHeader headerGroups={table.getHeaderGroups()} />
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <TaskRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskTable
