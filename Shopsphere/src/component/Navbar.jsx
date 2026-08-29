import { React,useState } from 'react'
import { Search, User, Heart, ShoppingCart,  ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import Products from '../pages/Products';

const Navbar = () => {
        const [open, setOpen] = useState(false);        
  return (
    <div>
        <nav className='bg-blue-950 text-white w-full'>
            <h3 className='flex justify-center text-xs  lg:text-xl '
            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 lg:size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>

            Free delevery on order over 499 | 7 Days Easy Returns </h3>
        </nav>
        <nav className='bg-amber-400 h-16 flex justify-between items-center pr-4 md:px-6 lg:px-16  '>
            <Link to= '/'> <h1 className='hidden md:flex text-sm md:text-lg lg:text-2xl font-bold'>Shop<span 
            className='text-blue-800'>Sphere</span> </h1></Link>
           
           
            {/* for mobile screeen */}
            <div className=" md:hidden flex justify-start items-center gap-[8vw] h-16 px-2 ">

                    <button onClick={() => setOpen(!open)}>
                        <IoReorderThreeOutline size={35} />
                    </button>

                    <h1 className="px-2 text-2xl font-bold">
                        <Link to="/">Shop<span className="text-blue-700">Sphere</span></Link>
                        
                    </h1>

            </div>

                {/* Dropdown Menu */}
                {open &&(
                    <div  onClick = {()=>setOpen(!open)}  className="absolute top-19 left-5 w-30 bg-amber-400 shadow-lg z-50">
                        <Link to={'/'} className="block px-5 py-3 hover:bg-amber-600 rounded">Home</Link>
                        <Link to={"/Products"} className="block px-5 py-3 hover:bg-amber-600 rounded">Products</Link>
                        <Link to={"/PageCategories"} className="block px-5 py-3 hover:bg-amber-600 rounded">Categories</Link>
                        <Link className="block px-5 py-3 hover:bg-amber-600 rounded">About</Link>
                        <Link className="block px-5 py-3 hover:bg-amber-600 rounded">Contact</Link>
                    </div>
                )}              
                <div className='md:hidden flex gap-4.5 '>
                    <Link to="/Search"><Search size={20}/> </Link>
                    <Link to="/User"><User size={20}/> </Link>
                    <Link to="/ShoppingCart"><ShoppingCart size={20}/> </Link>
                    
                </div>
            
             {/* for laptop screen */}
            <div className="hidden md:flex gap-[8vw] lg:gap-[20vw] ">
                <div className='flex justify-evenly gap-6.5 '>
                    <Link to="/">Home</Link>
                    <Link to="/Products">Products</Link>
                    <Link to="/PageCategories">Categories</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className='flex justify-evenly gap-6.5 '>
                    <Link to="/Search"><Search size={20}/> </Link>
                    <Link to="/User"><User size={20}/> </Link>
                    <Link to="/Heart"><Heart size={20}/></Link>
                    <Link to="/ShoppingCart"><ShoppingCart size={20}/> </Link>
                    
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar