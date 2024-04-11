import React, { useState } from 'react'
// import Link from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [change, setChange] = useState(false);
    function changehandler() {
        setChange(!change);
    }
    console.log(change)
    return (
        <>

            <div className={`fixed z-[999] capitalize text-black w-full bg-white flex justify-between items-center px-8
             ${change===true?"absolute":""}  py-6  shadow-md shadow-gray-300`}>
                <div className='logo font-bold text-2xl md:text-xl tracking-wider gradient-text  flex gap-4 '>
                    <button onClick={changehandler} className="md:hidden text-xl ">
                        <GiHamburgerMenu />
                    </button>
                    Shopsy
                </div>



                <div className={`md:flex capitalize gap-8  ${change===true?"flex flex-col relative left-0 top-0":"hidden"}`}>
                    {["men", "women", "kids", "home & living", "beauty", "fashion"].map((item, index) => (

                        <a key={index} className={`text-lg font-semibold `}>{item}</a>
                    ))}
                </div>
                


                <div className='hidden md:block w-1/3 border-2 px-3 py-2'>
                    search
                </div>
                <div className="flex text-[1.40rem] gap-6 mx-4 capitalize items-center">
                    <div className="">
                        <button className=''>

                            <IoPersonOutline className='hidden md:block' />
                            <IoIosSearch className='md:hidden text-[2rem]' />
                        </button>
                        <p className="font-semibold text-[1rem] mt-2 hidden md:block"> profile</p>
                    </div>
                    <div className="">
                        <button className="">
                            <FaRegHeart />
                        </button>
                        <p className="font-semibold text-[1rem] mt-2 hidden md:block">wishlist</p>
                    </div>
                    <div className="">
                        <button className="">
                            <BsHandbag />
                        </button>
                        <p className="font-semibold text-[1rem] mt-2 hidden md:block">bag</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar