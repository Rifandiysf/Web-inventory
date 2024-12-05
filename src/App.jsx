import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ListBarang from "./pages/ListBarang"
import History from "./pages/History"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import LandingPage from "./pages/LandingPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} loader={() => { document.title = "Dashboard | PISchool Inventory" }}/>
          <Route path="/login" element={<Login/>} loader={() => { document.title = "Login | PISchool Inventory" }}/>
          <Route path="/register" element={<Register/>} loader={() => { document.title = "Register | PISchool Inventory" }}/>
          <Route path="/list-barang" element={<ListBarang/>} loader={() => { document.title = "List Barang | PISchool Inventory" }}/>
          <Route path="/notification" element={<Dashboard/>} loader={() => { document.title = "Notification | PISchool Inventory" }}/>
          <Route path="/history" element={<History/>} loader={() => { document.title = "History | PISchool Inventory" }}/>
          <Route path="/Landing-page" element={<LandingPage/>} loader={() => { document.title = "History | PISchool Inventory" }}/>
          <Route path="/s" element={<SideBar/>} loader={() => { document.title = "History | PISchool Inventory" }}/>
          <Route path="/h" element={<Header/>} loader={() => { document.title = "History | PISchool Inventory" }}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
