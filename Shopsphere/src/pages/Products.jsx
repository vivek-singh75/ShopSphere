import React from 'react'
import ProductCard from '../component/product-page/ProductCard'
import SidePart1 from '../component/product-page/SidePart1'


const Products = () => {
  return (
    <div>
      <div className='py-6 px-8 grid gap-1'>
        <h4>Home - <span className='text-blue-800'>Product</span></h4>
        <h1 className='font-bold text-3xl'>All Products</h1>
        <h3>Showing 1 to 10 of 100 Products</h3>
      </div>
      <div className='flex px-2'>
        <div className=' lg:px-4'>
          <SidePart1/>
        </div>
        <div className='w-[80%] relative '>
          <ProductCard/>      
        </div>
      </div>
     
    </div>
  )
}

export default Products