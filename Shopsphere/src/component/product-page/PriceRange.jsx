import { useState } from "react";

const PriceRange = ({price , setPrice}) => {


    return (
        <div className="bg-white rounded-xl shadow-md p-5">

            <h2 className="font-semibold text-lg mb-5">
                Price Range
            </h2>
            <input
                type="range"
                min="0"
                max="20000"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                className="w-full accent-blue-600"
            />

            <div className="flex justify-between mt-4">

                <span>₹0</span>

                <span>₹{price}</span>

            </div>

        </div>
    )

}
export default PriceRange