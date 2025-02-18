import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import System from "./pages/System"
import KanbanPage from "./pages/KanbanPage"
import TablePage from "./pages/TablePage"
import MyTasksPage from "./pages/MyTasksPage"
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<System />}>
          <Route path="/table" element={<TablePage />} />
          <Route path="/kanban" element={<KanbanPage />} />
          <Route path="/my-tasks" element={<MyTasksPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

