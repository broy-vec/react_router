import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./Navbar"
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Login from "./components/Login"
import "./App.css"

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      </BrowserRouter>

    </div>
  )
}
