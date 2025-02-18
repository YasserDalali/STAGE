"use client"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskRow from "./components/main/tableView/TaskRow"
import TaskTable from "./components/main/tableView/TaskTable"
import TaskTableHeader from "./components/main/tableView/TaskTableHeader"
import LandingPage from "./components/pages/LandingPage"
import System from "./components/pages/System"


function App() {

  
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage></LandingPage>}></Route>
    <Route path="system" element={<System></System>}>
    </Route>
    </Routes>
  </BrowserRouter>
}

export default App

