import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Layouts = () => {
    return (
        <div className=' bg-[#F7F7F7]'>
            <ToastContainer />
           <div className='h-16'>  <Navbar></Navbar></div>
            <div className='min-h-[calc(100vh-285px)] '>
                    <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;