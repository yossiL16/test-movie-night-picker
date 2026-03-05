import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Details from "./pages/Details";
import Seats from "./pages/Seats";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Details' element={<Details />}/>
        <Route path='/Seats' element={<Seats />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
