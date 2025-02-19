import { NavLink } from "react-router-dom"
import { Squares2X2Icon as ViewBoardsIcon, TableCellsIcon as TableIcon, UserIcon } from "@heroicons/react/24/outline"
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-64 bg-white border-r shadow-lg">
      <div className="flex items-center justify-between  px-6 border-b bg-gray-50">
        <div className="flex w-full flex-col items-center py-4 gap-3">
          <div className="flex w-full justify-between"> 
          
                    <LanguageToggle />

          </div>


          <div className="flex">
                      <p className="text-xl font-semibold text-gray-800">TicketFlow <span className=" text-[10px] bg-orange-400/20 px-2 py-1 rounded-xl">Enterprise <img 
            src="https://www.zonebourse.com/static/private-issuer-squared-9I42B.png" 
            alt="Logo" 
            className="w-[15px] inline" 
          /></span></p>
                      
          </div>

        </div>

      </div>
      <nav className="flex-1 overflow-y-auto">
        <NavLink
          to="/kanban"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200 transition-colors duration-200 ${isActive ? "bg-gray-200" : ""}`
          }
        >
          <ViewBoardsIcon className="w-5 h-5 mr-3" />
          <span>{t('navigation.kanban')}</span>
        </NavLink>
        <NavLink
          to="/table"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200 transition-colors duration-200 ${isActive ? "bg-gray-200" : ""}`
          }
        >
          <TableIcon className="w-5 h-5 mr-3" />
          <span>{t('navigation.table')}</span>
        </NavLink>
        <NavLink
          to="/my-tasks"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200 transition-colors duration-200 ${isActive ? "bg-gray-200" : ""}`
          }
        >
          <UserIcon className="w-5 h-5 mr-3" />
          <span>{t('navigation.myTasks')}</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
