import React from 'react';

import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative mb-96'>
            <div className='bg-[#9538E2] h-[570px]  p-12 '>
                <div className="max-w-[1000px] w-full mx-auto text-center space-y-5 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-white">
                        Explore the latest gadgets that will take your experience to the next
                        level. From smart devices to the coolest accessories, we have it all!
                    </p>

                    <button className="bg-white px-4 py-2 rounded-full cursor-pointer mb-10">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className=' absolute w-[1062px] max-h-[563px] mx-auto -mt-65 flex left-1 right-1 p-6 bg-white/20 border border-amber-50 rounded-2xl  '>
                <img className=' rounded-2xl' src={banner} alt="" />
            </div>
        </div>

    );
};

export default Banner;