import React from 'react'
import { use, useState } from 'react'

import { TiPencil } from "react-icons/ti";

const SelectBrand = () => {
    const [selectedBrands, setselectedBrands] = useState([])

    const handleCheckbox = (brand) => {
        if (selectedBrands.includes(brand)) {
        setSelectedBrands(selectedBrands.filter((item) => item !== brand));
        } else {
        setSelectedBrands([...selectedBrands, brand]);
        }
    };
  return (
    <div>
          <div className='bg-white md:w-45 lg:w-60 h-60 px-5  rounded'>
                <div>
                    <h3><TiPencil/>Brands</h3>
                </div>
                    
                <div>
                <label>
                    <input
                    type="checkbox"
                    onChange={() => handleCheckbox("Nike")}
                    />
                    Nike
                </label>

                <br />

                <label>
                    <input
                    type="checkbox"
                    onChange={() => handleCheckbox("Adidas")}
                    />
                    Adidas
                </label>

                <br />
                <label>
                    <input
                    type="checkbox"
                    onChange={() => handleCheckbox("Zara")}
                    />
                    Zara
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    onChange={() => handleCheckbox("Puma")}
                   
                    />
                     Puma
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    onChange={() => handleCheckbox("Apple")}
                    />
                    Apple
                </label>

                <h3>Selected Brands:</h3>
                <p>{selectedBrands.join(", ")}</p>
            </div>
                        
            </div>
    </div>
  )
}

export default SelectBrand