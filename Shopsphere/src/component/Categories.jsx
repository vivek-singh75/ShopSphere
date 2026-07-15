import React from 'react'
import { GiShirt , GiSofa, GiLipstick } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosFootball } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const Categories = () => {

  const catego = [
    {
      logo: <GiShirt className="text-blue-400 text-5xl bg-blue-100 rounded-2xl p-2" />,
      Text: "Fashion",
      path: "/category/fashion",
    },
    {
      logo: <HiOutlineDevicePhoneMobile className="text-blue-400 text-5xl bg-blue-100 rounded-2xl p-2" />,
      Text: "Electronics"
    },
    {
      logo: <GiSofa  className="text-blue-400 text-5xl bg-blue-100 rounded-2xl p-2" />,
      Text: "Home & Living"
    },
    {
      logo: <GiLipstick className="text-blue-400 text-5xl bg-blue-100 rounded-2xl p-2" />,
      Text: "Beauty"
    },
    {
      logo: <IoIosFootball className="text-blue-400 text-5xl bg-blue-100 rounded-2xl p-2" />,
      Text: "Sports"
    },
    {
      logo: <BsThreeDots className="text-blue-400 text-5xl bg-blue-100 rounded-2xl p-2" />,
      Text: "More"
    }
  ];

  return (
    <div className="flex gap-10 justify-center mt-6 flex-wrap">
      {catego.map((data, idx) => (
        <div
          key={idx}
          className="h-35 w-45 bg-amber-100 rounded-xl flex flex-col justify-center items-center"
        >
           
          {data.logo}
          <h3 className="font-bold mt-2">{data.Text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
