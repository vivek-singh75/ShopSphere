import React from 'react'
import './index.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import PageCategories from './pages/PageCategories'
import Footer from './component/Footer'
import Product from './component/product-Details/product'

const App = () => {
  return (
    <div className='bg-blue-100'>
      <Navbar/>

      <Routes>
       
        <Route path="/product/:id" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/PageCategories" element={<PageCategories />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App