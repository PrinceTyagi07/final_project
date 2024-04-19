import React from 'react'
import { Menstyle } from '../assets/Menstyle'
import { FaAngleRight } from "react-icons/fa6";
const Styleformen = () => {
  return (
    <div className="bg-white md:w-[20vw]  w-[48%] h-fit md:h-[49vh] pb-8 shadow-gray-400  shadow-xl mb-10 ">
 <h2 className='md:text-xl font-semibold mx-3 mb-2'>Up to 60% off | Style for Men</h2>
 <div className="flex flex-wrap gap-4 justify-center ">
    {
      Menstyle.map((link)=>(
        <div className='w-[44%]'>
          <img src={link.Image} alt="" />
          <h2>{link.Text}</h2>
        </div>
      )) }
    </div>
    <button className='text-blue-600 hover:text-amber-700 mx-3 flex items-center font-semibold'>See More  <span className='text-[0.85rem] mt-1'><FaAngleRight/></span></button>

    </div>
    
    
  
    )
}

export default Styleformen