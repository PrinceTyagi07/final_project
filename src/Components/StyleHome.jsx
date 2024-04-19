import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { styleimage } from '../assets/Stylehomeimage';
const StyleHome = () => {
  return (
    <div className="bg-white md:w-[20vw]  w-[48%] h-fit md:h-[49vh] pb-8 overflow-hidden shadow-gray-400  shadow-xl mb-10 ">
    <h2 className='md:text-xl font-semibold mx-3 my-2'>Revamp your home in style</h2>
    <div className="flex flex-wrap gap-4 justify-center ">
     {
      styleimage.map((link)=>(
         <div key={link.id} className='w-[44%] h-1/3 overflow-hidden' >
   
         <img className={`h-[13vh]`} src={link.Image} alt="no image found"  />
         <h2>{link.Text}</h2>
         </div>
       
       ))}
    </div>
    <button className='text-blue-600 mx-3 hover:text-amber-700 flex items-center font-semibold'>See More  <span className='text-[0.85rem] mt-1'><FaAngleRight/></span></button>
   
    </div>
  )
}

export default StyleHome