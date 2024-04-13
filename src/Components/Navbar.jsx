import React, { useState } from 'react'

import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
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
            <div className="relative h-16 z-[999]">



                <div className={`fixed z-[999] capitalize text-black w-full bg-white flex justify-between items-center px-8 
             ${change === true ? "absolute" : ""}  py-6  shadow-md shadow-gray-300`}>

                    <div className='logo font-bold text-2xl md:text-xl tracking-wider text-blue-500  flex gap-4 '>
                        <button onClick={changehandler} className="md:hidden text-xl ">
                            {
                                change === true ? <IoClose /> : <GiHamburgerMenu />
                            }

                        </button>
                        <div>
                            <img src="../../public/im.png" alt="" className="" />
                            Shopsy
                        </div>
                    </div>

                    {/*  pages navigatior */}

                    <div className={` md:flex-row capitalize gap-8  py-10  absolute md:static md:bg-white transition-all  duration-700 ease-in top-24 flex flex-col   ${change === true ? "flex flex-col top-24 px-10 left-1" : "left-[-250px]"}`}>
                        {Navbarlinks.map((link) => (
                            <li key={link.id} className="p-2 text-2xl hover:border-2  hover:ring-richblue-1   rounded-md 
                             transition-all duration-500 " >
                                <Link to={link.path}>
                                    <p>{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </div>



                    <div className='hidden md:block w-1/3  '>
                        <input
                            class="search h-10 min-w-full px-4 py-2 rounded-full"
                            autocomplete="off"
                            placeholder="Search Here"
                            name="text"
                            type="text"
                        />

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
            </div>
        </>
    )
}

export default Navbar