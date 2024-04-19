import React, { useState } from 'react'

import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import im from "../../public/im.png"
// import { CgLayoutGrid } from 'react-icons/cg';

const Navbar = ({ Navbarlinks }) => {
    // const Navbarlinks = props.Navbarlinks;
    console.log(Navbarlinks)
    const [change, setChange] = useState(false);
    function changehandler() {
        setChange(!change);
    }
    console.log(change)
    return (
        <>
            <div className="md:-mt-0 ">
            <div className="md:pb-24 pb-12">



                <div className={`fixed z-[999] capitalize    w-full bg-white flex justify-between items-center px-8 
             ${change === true ? "" : ""}  py-1 shadow-md shadow-gray-300`}>

                    <div className='logo font-bold text-2xl md:text-xl tracking-wider text-[#23B6AA]  flex gap-2 '>
                        <button onClick={changehandler} className="md:hidden text-xl text-orange-500 ">
                            {
                                change === true ? <IoClose className='text-3xl' /> : <GiHamburgerMenu />
                            }

                        </button>
                        <div className=' '>
                        <NavLink to={'/'} className='flex flex-col space-y-2 items-center'>
                            <img src={im} alt="" className="md:w-[40px]  md:h-[40px] w-[50px]" />
                            <h1 className='gradient-text md:block tracking-tighter font-serif '>SHOPSEY</h1>
                            </NavLink>
                        </div>
                    </div>

                    {/*  pages navigatior */}

                    <div className={` md:flex-row capitalize gap-8  py-8  absolute md:static md:bg-white transition-all  duration-700 ease-in top-6 flex flex-col   ${change === true ? "flex flex-col top-[41px] bg-white px-10 left-[-20px]" : "left-[-200px]"} list-none`}>
                        {Navbarlinks.map((link) => (
                            <li key={link.id} className="px-  font-semibold " >
                                <NavLink to={link?.path}>
                                    <p className='gradient-text btn'>{link.title}</p>
                                </NavLink>
                            </li>
                        ))}
                    </div>



                    <div className='hidden md:block w-1/3  '>
                        <input
                            class=" h-12 border-zinc-400 rounded-sm font-semibold min-w-full px-4 text-orange-500 py-2 border-2"
                            autocomplete="off"
                            placeholder="Search Here"
                            name="text"
                            type="text"
                        />

                    </div>
                    <div className="flex text-[1.40rem] gap-6 mx-4 capitalize items-center text-center justify-center">
                        <div className=" ">
                            <button className='flex flex-col items-center justify-center text-center'>

                                <IoPersonOutline className='hidden md:block text-orange-500' />
                                <IoIosSearch className='md:hidden text-[2rem]  text-orange-500' />
                            <p className="font-semibold text-[1rem] gradient-text mt-2 hidden md:block"> profile</p>
                            </button>
                        </div>
                        <div className="">
                            <button className="flex flex-col  items-center justify-center text-center ">
                                <FaRegHeart  className='text-orange-500' />
                            <p className="font-semibold gradient-text text-[1rem] mt-2 hidden md:block">wishlist</p>
                            </button>
                        </div>
                        <div className="">
                            <button className="flex flex-col  items-center justify-center text-center">
                                <BsHandbag className='text-orange-500' />
                            <p className="font-semibold gradient-text text-[1rem] mt-2 hidden md:block">bag</p>
                            </button>
                        </div>
                    </div>

                </div>
                </div>

            </div>
        </>
    )
}

export default Navbar