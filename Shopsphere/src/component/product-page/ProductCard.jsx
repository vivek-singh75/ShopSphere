import React, { useEffect, useState } from 'react'
import { FaCartArrowDown, FaStar} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import axios from "axios";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";



const ProductCard =  () => {
    const [product, setproduct] = useState([])
    const [List, setList] = useState(10)
    const nextData = ()=>{
        setList(List+10)
        console.log(List)
    }
    const preData = ()=>{
        if(List>10){
            setList(List-10)
            console.log(List)
        }
       
    }
    
    useEffect(()=>{
        const getData=async ()=>{
            const responce=await axios.get(`https://dummyjson.com/products/?limit=10&skip=${List}`);
            await setproduct(responce.data.products)
            await console.log(responce.data.products)
        }
        getData()
    },[List])
    
  return (
    <div className=''> 
        <div >
          
            <div className=' flex gap-13 h-8 md:gap-20   lg:gap-150 px-3 '>
                <div className='flex gap-10'>
                    <button className='flex h-7 w-25 bg-white rounded gap-3'><IoFilter size={15}/>Filter</button>
                    <h4 className='w-50 hidden md:flex'>100 product Found</h4>
                </div>
                <button className='h-7 w-35 bg-white rounded'>Sort By:</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-3 p-3">
                 {
            product.map((item, id)=>{
                const dicountedPrice = (item.price - (item.price * item.discountPercentage) / 100).toFixed(2);
                return(
                    <div>
                        <Link key={item.id} to={`/product/${item.id}`}>
                        <div  className='bg-cyan-100 h-71 w-45 lg:h-81 lg:w-57  rounded hidden md:grid '>
                        <div className='px-2 py-2 overflow-hidden  relative'>
                            <div className='flex gap-30 py-1 absolute top-2 left-2 z-10'>
                                <h5 className='h-4 w-15 bg-red-400 text-white flex justify-center rounded text-[10px]'><span>{item.discountPercentage}%</span>OFF</h5>
                                <h5><CiHeart/></h5>
                            </div>
                            <img className='py-5 h-40  w-full object-contain rounded-xl bg-white' src={item.thumbnail} alt="Not Availble" />
                        </div>
                        <div className='px-2'>
                            <p className='flex'><FaStar size={15} color='yellow'/>{item.rating}<span>({item.reviews.length})</span></p>
                            <h3 className='font-bold'>{item.category}</h3>
                            <p >{item.brand}</p>
                            <div className=' flex gap-2'>
                                <h3 className='font-bold'>₹{dicountedPrice}</h3> 
                                <p>₹{item.price}</p>
                            </div>
                        </div>
                        <div className='px-2' >
                            <button className="w-[95%] flex items-center justify-center gap-2  text-blue-500 px-4 py-2 rounded border-2 border-blue-500">
                            <FaCartArrowDown/> Add to Cart</button>
                        </div>
                       </div>
                     {/* for mobile   */}
                      <div className=' py-2 md:hidden'>
                        <div className='flex  min-w-[92vw] sm:max-w-[92vw] h-[25vh] gap-1  bg-cyan-100 rounded-md'>
                             <div className=' bg-white  border-cyan-100 border-10'>
                                <div className='flex gap-14 py-2'>
                                    <h5 className='h-4 w-15 bg-red-400 text-white flex justify-center rounded text-[10px]'><span>{item.discountPercentage}%</span>OFF</h5>
                                    <h5><CiHeart/></h5>
                                </div>
                                <img className='h-[15vh] w-[27vw] ' src={item.thumbnail}  alt="" />
                            </div>
                            <div className='block  w-[47vw]'>
                                 <p className='flex'><FaStar size={15} color='yellow'/>{item.rating}<span>({item.reviews.length})</span></p>
                                 <h3>{item.category}</h3>
                                 <p >{item.brand}</p>
                                <div className=' flex gap-2'>
                                    <h3 className='font-bold'>₹{dicountedPrice}</h3> 
                                    <p>₹{item.price}</p>
                                </div>
                                <div className='py-2' >
                                    <button className="sm:w-20 h-6 flex items-center justify-center   text-blue-500 px-4 py-3 rounded border-2 border-blue-500">
                                    <FaCartArrowDown/> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                           
                        </div>
                        </Link> 
                   </div>
                    
                    
            )
         })

        }
       
            </div>
       
       </div>

       <div className='flex gap-4 justify-center'>
        <button className='bg-blue-950 text-white rounded h-6 w-16 hover:bg-amber-700' onClick={preData}>Previus</button>
        <h4>Page No {List/10}</h4>
        <button className='bg-blue-950 text-white rounded h-6 w-16  hover:bg-amber-700' onClick={nextData}>Next</button>
       </div>=-
      
    </div>
  )
}

export default ProductCard