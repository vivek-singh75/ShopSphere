import React from 'react'
import './index.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import PageCategories from './pages/PageCategories'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/PageCategories" element={<PageCategories />} />
      </Routes>
     
    </div>
  )
}

export default App