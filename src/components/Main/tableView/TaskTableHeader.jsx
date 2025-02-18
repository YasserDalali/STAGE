import { flexRender } from "@tanstack/react-table"

const TaskTableHeader = ({ headerGroups }) => {
  // Check if headerGroups is defined and is an array
  if (!headerGroups || !Array.isArray(headerGroups)) {
    console.error("Invalid headerGroups:", headerGroups);
    return null; // Return null or a fallback UI if headerGroups is invalid
  }

  return (
    <thead className="bg-gray-50">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header.isPlaceholder ? null : (
                <div
                  {...{
                    className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()] ?? null}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default TaskTableHeader

