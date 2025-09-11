import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
    const { category } = product;
    const navigate = useNavigate();


    return (
        <div>
            {
                product.length==0 ? (<h2>There is no product0</h2>) : ''
            }
            <div className="card bg-base-100    shadow-sm">
                <figure>
                    <img className='h-50 w-full object-none'
                        src={product.product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.product_title}
                        
                    </h2>
                    <p className='text-gray-700'>Price: {product.price} TK</p>
                    <div className="card-actions justify-end text-[#9538E2]  ">
                        <button className='btn font-bold btn-outline rounded-full hover:bg-[#9538E2] hover:text-white hover:font-bold]' onClick={() => navigate(`/productDetails/${product.product_id}`)}>View Details</button>
                  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;