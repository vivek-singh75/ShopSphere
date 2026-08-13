import React from 'react'
import Categories from '../component/Categories'
import {ArrowRight} from "lucide-react";
import ShopsImg1 from '../assets/ShopsImg1.png'
import Footer from '../component/Footer';
const Home = () => {
  return (
    <div >
      <div className=' w-full bg-blue-200 px-14 md:px-24 py-12 grid gap-3 grid-cols-1'>
        <div >
          <h3 className='text-xs font-bold text-blue-700'>NEW CLLECTION</h3>
          <h1 className='text-4xl font-bold '>Best Quality Products <br /> For You</h1>
          <h4>Discover amazing products at best prices 
          <br/> Shop the latest trends and get exclusive offers</h4>
          <a className='flex px-3 py-1.5 h-10 w-30 bg-blue-800 rounded text-white' href="">Shop Now<ArrowRight size={18}  /></a>      
        </div>
        <div className='hidden md:flex w-50 absolute top-35 left-[60%] '>
          <img  src={ShopsImg1} alt="no imagee" />
        </div>
      </div>
     
        <div className='py-10'>
            <h3 className='font-bold text-2xl text-center'>Shop By Categories</h3>
            <Categories/>
        </div>
      
    </div>
   
  )
}

export default Home