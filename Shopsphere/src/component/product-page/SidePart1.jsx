import React, { use, useState } from 'react'
import PriceRange from './PriceRange';
import SelectCatog from './SelectCatog';
import SelectBrand from './SelectBrand';

const SidePart1 = ({price , setPrice}) => {
   
  return (
        <div className=' gap-2 hidden md:grid'>
            <div>
                <SelectCatog/>
            </div>
            <div>
               <PriceRange 
                        price = {price}
                        setPrice = {setPrice}
                    />
                
            </div>
            <div>
                <SelectBrand/>
            </div>
          
        </div>
    
)
}

export default SidePart1