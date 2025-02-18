import { NavLink } from "react-router-dom"
import { Squares2X2Icon as ViewBoardsIcon, TableCellsIcon as TableIcon, UserIcon } from "@heroicons/react/24/outline"

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold text-gray-800">Task Manager</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <NavLink
          to="/kanban"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`
          }
        >
          <ViewBoardsIcon className="w-5 h-5 mr-3" />
          <span>Kanban</span>
        </NavLink>
        <NavLink
          to="/table"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`
          }
        >
          <TableIcon className="w-5 h-5 mr-3" />
          <span>Table</span>
        </NavLink>
        <NavLink
          to="/my-tasks"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`
          }
        >
          <UserIcon className="w-5 h-5 mr-3" />
          <span>My Tasks</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar

