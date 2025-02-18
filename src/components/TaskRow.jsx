const TaskRow = ({ row }) => {
  return (
    <tr {...row.getRowProps()} className="hover:bg-gray-50">
      {row.cells.map((cell, index) => (
        <td
          key={index} // Added key prop
          {...cell.getCellProps()}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {cell.render("Cell")}
        </td>
      ))}
    </tr>
  )
}

export default TaskRow

