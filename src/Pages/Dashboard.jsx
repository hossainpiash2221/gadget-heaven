import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='text-center bg-[#9538E2] p-8'>
                <div className=" ">
                    <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                    <p className="max-w-[750px] mx-auto text-white mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

                <div className='flex gap-4 justify-center'>


                    <NavLink to='carts' className={({ isActive }) => isActive ? "btn bg-[#ffffff] text-purple-800 t rounded-4xl w-30 " : "btn bg-[#9538E2] text-white rounded-4xl w-30 "} >Carts</NavLink>
                    <NavLink to='wishtCarts' className={({ isActive }) => isActive ? "btn bg-[#ffffff] text-purple-800 t rounded-4xl w-30 " : "btn bg-[#9538E2] text-white rounded-4xl w-30 "} >WishtCarts </NavLink>
                </div>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;