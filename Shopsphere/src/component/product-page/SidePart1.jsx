import React, { use, useState } from 'react'
import PriceRange from './PriceRange';
import SelectCatog from './SelectCatog';
import SelectBrand from './SelectBrand';

const SidePart1 = () => {
   
  return (
        <div className=' gap-2 hidden md:grid'>
            <div>
                <SelectCatog/>
            </div>
            <div>
               <PriceRange/>
                
            </div>
            <div>
                <SelectBrand/>
            </div>
          
        </div>
    
)
}

export default SidePart1