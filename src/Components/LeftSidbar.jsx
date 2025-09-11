import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidbar = ({ catagory }) => {
    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="  flex flex-col gap-2.5 shadow-2xl p-6 rounded-2xl">
                {
                    catagory.map(cat =>
                        <NavLink
                            to={`/rightSideBar/${cat.category_name}`}
                            key={cat.category_id}
                            className={({ isActive }) =>
                                `text-gray-500 px-4 py-2 rounded-4xl ${isActive ? "bg-[#9538E2] font-bold text-white" : " "}`
                            }
                        >
                            {cat.category_name}
                        </NavLink>
                    )

                }

            </div>
        </div>
    );
};

export default LeftSidbar;