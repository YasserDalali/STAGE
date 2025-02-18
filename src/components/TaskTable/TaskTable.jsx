"use client"

import { useState, useMemo } from "react"
import { useTable, useFilters, useSortBy, useGlobalFilter, usePagination } from "react-table"

const TaskTable = ({ tasks }) => {
  const getUrgencyColor = (urgency) => {
    switch (urgency.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Assigner",
        accessor: "assigner",
      },
      {
        Header: "Assignee(s)",
        accessor: "assignees",
        Cell: ({ value }) => value.join(", "),
      },
      {
        Header: "Created At",
        accessor: "createdAt",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Due",
        accessor: "dueDate",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Urgency",
        accessor: "urgency",
        Cell: ({value}) => <span className={`px-2 py-1 rounded ${getUrgencyColor(value)}`}>{value}</span>,
      },
    ],
    [],
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data: tasks,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  )

  const [filterInput, setFilterInput] = useState("")

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined
    setGlobalFilter(value)
    setFilterInput(value)
  }

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value))
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden font-sans">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder="Search tasks..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="w-full">
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render("Header")}
                    <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
            >
              {"<<"}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
            >
              {"<"}
            </button>
            <span>
              Page{" "}
              <strong>
                {state.pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
            >
              {">"}
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
            >
              {">>"}
            </button>
          </div>
          <div>
            <select
              value={state.pageSize}
              onChange={handlePageSizeChange}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskTable

