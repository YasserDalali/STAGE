"use client"

import { useState, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { useTable, useFilters, useSortBy, useGlobalFilter, usePagination } from "react-table"
import PropTypes from "prop-types"
import { updateTaskAsync } from "../store/tasksThunks"
import getPriorityColor from "../utils/getPriorityColor" 
const TaskTable = ({ tasks }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user.user);

  const handleStatusChange = (task, newStatus) => {
    dispatch(updateTaskAsync({ ...task, status: newStatus }));
  };

  

  const formatDate = (dateString) => {
    if (!dateString) return t('common.noDate');
    return new Date(dateString).toLocaleDateString();
  };

  const columns = useMemo(
    () => [
      {
        Header: t('tasks.title'),
        accessor: "title",
      },
      {
        Header: t('tasks.description'),
        accessor: "description",
        Cell: ({ value }) => value || t('tasks.noDescription'),
      },
      {
        Header: t('tasks.status'),
        accessor: "status",
        Cell: ({ value, row }) => {
          const { assignees } = row.original;
          return assignees.includes(username) ? (
            <select
              value={value}
              onChange={(e) => handleStatusChange(row.original, e.target.value)}
              className="text-sm border rounded-md px-2 py-1 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="TODO">{t('tasks.statuses.todo')}</option>
              <option value="IN_PROGRESS">{t('tasks.statuses.in_progress')}</option>
              <option value="DONE">{t('tasks.statuses.done')}</option>
            </select>
          ) : (
            <p className="text-sm px-2 py-1 bg-gray-50">{value}</p>
          );
        }
      },

      {
        Header: t('tasks.assignees'),
        accessor: "assignees",
        Cell: ({ value }) => value?.join(", ") || t('tasks.unassigned'),
      },
      {
        Header: t('tasks.createdAt'),
        accessor: "createdAt",
        Cell: ({ value }) => formatDate(value),
      },
      {
        Header: t('tasks.dueDate'),
        accessor: "dueDate",
        Cell: ({ value }) => formatDate(value),
      },
      {
        Header: t('tasks.priority'),
        accessor: "priority",
        Cell: ({ value }) => (
          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getPriorityColor(value)}`}>
            {t(`tasks.priorities.${value.toLowerCase()}`)}
          </span>
        ),
      },
    ],
    [t],
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
          placeholder={t('table.searchTasks')}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="w-full">
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, columnIndex) => (
                  <th
                    key={columnIndex}
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
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="First Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0L9.586 11l4.707-4.707a1 1 0 111.414 1.414L11.414 11l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0L3.586 11l4.707-4.707a1 1 0 111.414 1.414L5.414 11l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Previous Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0L6.586 11l4.707-4.707a1 1 0 111.414 1.414L8.414 11l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <span className="flex items-center gap-1">
              <span className="text-sm text-gray-700">{t('table.page')}</span>
              <strong className="text-sm font-medium">
                {state.pageIndex + 1} {t('table.of')} {pageOptions.length}
              </strong>
            </span>

            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Next Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 15.707a1 1 0 001.414 0L13.414 11 8.707 6.293a1 1 0 00-1.414 1.414L11.586 11l-4.293 4.293a1 1 0 000 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Last Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 001.414 0L10.414 11 5.707 6.293a1 1 0 00-1.414 1.414L8.586 11l-4.293 4.293a1 1 0 000 1.414zm6 0a1 1 0 001.414 0L16.414 11l-4.707-4.707a1 1 0 00-1.414 1.414L14.586 11l-4.293 4.293a1 1 0 000 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Page Size Selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="pageSize" className="text-sm text-gray-700">
              {t('table.rowsPerPage')}
            </label>
            <select
              id="pageSize"
              value={state.pageSize}
              onChange={handlePageSizeChange}
              className="px-3 py-1 text-sm rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

TaskTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      status: PropTypes.oneOf(['TODO', 'IN_PROGRESS', 'DONE']).isRequired,
      priority: PropTypes.oneOf(['LOW', 'MEDIUM', 'HIGH']).isRequired,
      assignees: PropTypes.arrayOf(PropTypes.string),
      dueDate: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TaskTable

// date naissance, 
// sexe 
// num compte, 
// tranche salaire, 
// mouvement compte, 
// rendement annuel
// service credit 
// 
// document remains (local download)
