import React from 'react';
import LeftSidbar from './LeftSidbar';
import RighSideBar from './RighSideBar';
import { Outlet, useLoaderData } from 'react-router-dom';

const Exploregadget = () => {
    const catagory = useLoaderData();
    

   
    return (
       <div>
        <h2 className='text-center relative right-60 mb-6 text-3xl font-bold'>Explore Cutting-edge Gadget</h2>
         <div className='flex flex-col md:flex-row  gap-11  justify-center'>
          <LeftSidbar catagory={catagory} key={catagory.category_id}></LeftSidbar>
          <Outlet></Outlet>
        </div>
       </div>
    );
};

export default Exploregadget;