import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { addCard } from '../utils';
const Cart = ({ product, handleRemove }) => {

    const location = useLocation();
    const isWishcart = location.pathname.includes('wishtCarts');
    const [isProduct, setIsproduct] = useState(false);
 const handleCard = product => {
        addCard(product);
        setIsproduct(true)
    }

    return (
        <div className='flex gap-6  bg-white p-2' >
            <img className='h-[124px]' src={product.product_image} alt="" />
            <div className='space-y-3 flex-grow'>

                <h2 className='font-semibold text-2xl'>{product.product_title}</h2>
                <p className='text-gray-700 font-semibold'>{product.description}</p>
                <p className='text-gray-800 font-semibold'>Price: $ {product.price}</p>
                {
                    isWishcart &&  <button disabled={isProduct} className="btn bg-[#9538E2] text-white w-30 rounded-full" onClick={() => handleCard(product)}>Add to Card</button>
                }
            </div>
            <IoMdClose className='text-red-600  outline rounded-full mt-4 mr-4' onClick={()=> handleRemove(product.product_id)} />
        </div>
    );
};

export default Cart;