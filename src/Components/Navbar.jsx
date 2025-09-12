import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { getAllCarts } from '../utils';

const Navbar = () => {

    const [cartCount, setCartCount] = useState(0);
    const [wishCartCount, setWishCartCount] = useState(0);

    // useEffect(() =>{
    //     const count = getAllCarts('carts').length;
    //     setCartCount(count);
    //     const wishtCount = getAllCarts('wishCarts').length;
    //     setWishCartCount(wishtCount);
    // } ,[])

    useEffect(() => {
        const updateCounts = () => {
            const count = getAllCarts("carts").length;
            setCartCount(count);

            const wishtCount = getAllCarts("wishCarts").length;
            setWishCartCount(wishtCount);
        };

        // প্রথমবার load হলে চালু করো
        updateCounts();

        // event listener বসাও
        window.addEventListener("cartUpdated", updateCounts);
        window.addEventListener("wishUpdated", updateCounts);

        // cleanup
        return () => {
            window.removeEventListener("cartUpdated", updateCounts);
            window.removeEventListener("wishUpdated", updateCounts);
        };
    }, []);

    
    const location = useLocation();
    const NavbarChange =  location.pathname.includes('/productDetails') || location.pathname.includes('/dashboard');


    const Linkes = <>
        <li> <NavLink to='/' className={({ isActive }) => isActive ? "underline" : ""} >Home</NavLink></li>
        <li> <NavLink to='/statistics' className={({ isActive }) => isActive ? "underline" : " "} >Statistics</NavLink></li>
        <li> <NavLink to='/dashboard' className={({ isActive }) => isActive ? "underline t" : " "} >Dashboard</NavLink></li>

    </>
    return (
        <div className={`  rounded-t-2xl fixed z-10 w-full ${NavbarChange ? 'bg-white text-gray-800' : 'bg-[#9538E2] text-white'}`}>

            <div className="navbar px-3 md:px-5 lg:px-25 shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Linkes}
                        </ul>
                    </div>
                    <Link to='/' className=' font-bold'>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Linkes}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-4 items-center text-black'>
                        <div className='bg-amber-50 p-2 rounded-full'>
                            <IoCartOutline />
                          {
                            cartCount !== 0 ?   <p className='absolute  h-5 w-5 text-[12px] rounded-4xl -mt-8 ml-3  bg-red-500 text-white  text-center'>{cartCount}</p> : ''
                          }
                        </div>
                        <div className='bg-amber-50 p-2 rounded-full ' >
                            <CiHeart />
                           {
                            wishCartCount !== 0 ?  <p className='absolute  h-5 w-5 text-[12px] rounded-4xl -mt-8 ml-3  bg-red-500 text-white  text-center'>{wishCartCount}</p> : ''
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;