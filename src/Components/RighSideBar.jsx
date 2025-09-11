import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import { HiH2 } from 'react-icons/hi2';

const RighSideBar = () => {

    const obj = useParams();
    const products = useLoaderData();

    const { catagory } = obj;



    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        if (catagory) {
            const filteredByCatagory = [...products].filter(product => product.category === catagory);
            setProductItems(filteredByCatagory)
        }
        else {
            setProductItems(products.slice(0,6));
        }

    }, [catagory, products])

    console.log(productItems)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between space-y-6 gap-6 w-[1200px]'>
                {
                    catagory === 'All Products' && products.map(product => (<Card key={product.product_id} product={product}></Card>))
                }


                {
                    productItems.length > 0 ? (productItems.map(product => (<Card key={product.product_id} product={product}></Card>)))
                        :
                        (<h2 className='text-center text-xl font-semibold col-span-3 items-center my-auto'>No products Available</h2>)
                }

            </div>
            <div className='text-center'>
                <button onClick={() => setProductItems(products)} className=' btn btn-outline text-[#9538E2] hover:bg-[#9538E2] hover:text-white rounded-4xl px-5'>View All</button>
            </div>
        </div>


    );
};

export default RighSideBar;