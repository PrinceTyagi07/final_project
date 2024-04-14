import React from 'react'
import { Applince } from '../assets/Applince'
import { FaAngleRight } from "react-icons/fa6";
const Appliances = () => {
  return (
 <div className="bg-white w-[20vw] h-fit pb-8  ">
 <h2 className='text-xl font-semibold mx-3'>Appliences for your home | up to 55% off</h2>
 <div className="flex flex-wrap gap-4 justify-center ">
  {
    Applince.map((link)=>(
      <div key={link.id} className='w-[44%]' >

      <img src={link.Image} alt="no image found"  />
      <h2>{link.Text}</h2>
      </div>
    
    ))}
 </div>
 <button className='text-blue-600 mx-3 flex items-center font-semibold'>See More  <span className='text-[0.85rem] mt-1'><FaAngleRight/></span></button>

 </div>
  )
}

export default Appliances