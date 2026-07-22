import React from 'react'
import { BiCategory } from "react-icons/bi";

const SelectCatog = () => {
  return (
          <div className='bg-white md:w-45 lg:w-60 h-60 px-5  rounded'>
                <div className='flex gap-1 py-4'>
                    <h3><BiCategory/></h3>
                    <h3 className='flex font-bold'>Categories</h3>
                </div>
                <div>
                    <div className='flex justify-between text-blue-900'>
                        <h5 >All Categories</h5>
                        <h5> (20)</h5>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className=''>Fashion</h5>
                        <h5> (20)</h5>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className=''>Electronics</h5>
                        <h5> (20)</h5>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className=''>Home & Kitchen</h5>
                        <h5> (20)</h5>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className=''>Beauty</h5>
                        <h5> (20)</h5>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className=''>Sports</h5>
                        <h5> (20)</h5>
                    </div>
                </div>
            </div>
  )
}

export default SelectCatog