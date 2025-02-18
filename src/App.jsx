import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import KanbanPage from "./pages/KanbanPage"
import TablePage from "./pages/TablePage"
import MyTasksPage from "./pages/MyTasksPage"

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<KanbanPage />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/my-tasks" element={<MyTasksPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App

