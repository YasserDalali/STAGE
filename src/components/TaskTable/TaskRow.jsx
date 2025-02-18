import { flexRender } from "@tanstack/react-table"

const TaskRow = ({ row }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  )
}

export default TaskRow

