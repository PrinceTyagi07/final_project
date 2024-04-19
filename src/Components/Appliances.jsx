import React from 'react'
import { Applince } from '../assets/Applince'
import { FaAngleRight } from "react-icons/fa6";
const Appliances = () => {
  return (
 <div className="bg-white md:w-[20vw]  w-[45%] h-fit md:h-[49vh] pb-8 shadow-gray-400  shadow-xl mb-10 ">
 <h2 className='md:text-xl font-semibold mx-3'>Appliences for your home | up to 55% off</h2>
 <div className="flex flex-wrap gap-4 justify-center ">
  {
    Applince.map((link)=>(
      <div key={link.id} className='w-[44%] overflow-hidden' >

      <img className='' src={link.Image} alt="no image found"  />
      <h2>{link.Text}</h2>
      </div>
    
    ))}
 </div>
 <button className='text-blue-600 hover:text-amber-700 mx-3 flex items-center font-semibold'>See More  <span className='text-[0.85rem] mt-1'><FaAngleRight/></span></button>

 </div>
  )
}

export default Appliances