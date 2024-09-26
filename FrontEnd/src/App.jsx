import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProduct from './Components/ViewProduct/ViewProduct';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path="/:a" element={<ViewProduct/>}></Route>
        </Routes>
    </Router>
  )
}

export default App