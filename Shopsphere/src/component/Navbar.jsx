import React from 'react'
import { Search, User, Heart, ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-950 text-white w-full'>
            <h3 className='flex justify-center'
            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>

            Free delevery on order over 499 | 7 Days Easy Returns </h3>
        </nav>
        <nav className='bg-amber-400 h-16 flex justify-between items-center px-14 '>
            <h1 className='text-sm md:text-lg lg:text-2xl font-bold'>Shop<span className='text-blue-800'>Sphere</span> </h1>
            <div className='flex justify-evenly gap-6.5 '>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Categories</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className='flex justify-evenly gap-6.5 '>
                <a href=""><Search size={20}/></a>
                <a href=""><User size={20}/></a>   
                <a href=""><Heart size={20}/></a>

                <a href=""><ShoppingCart size={20}/></a>

            </div>

        </nav>
    </div>
  )
}

export default Navbar