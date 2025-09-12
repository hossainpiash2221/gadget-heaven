import React, { useEffect, useState } from 'react';
import { getAllCarts } from '../utils';
import Card from '../Components/Card';
import Cart from '../Components/Cart';
import Modal from '../Components/Modal';

const Carts = () => {


    const [products, setProducts] = useState([]);


    useEffect(() => {
        const stored = getAllCarts('carts');
        setProducts(stored);
    }, [])

      const hadleSort = (sortBy) =>{
        const sorted = [...products].sort((a,b) => b.price - a.price)
        setProducts(sorted);
    }

    const handleRemove = (id) => {
        const updated = products.filter(item => item.product_id !== id)
        setProducts(updated);
        localStorage.setItem('carts', JSON.stringify(updated));
        window.dispatchEvent(new Event('cartUpdated'));
    }


    const totalPrice = products.reduce((sum, item) => sum + item.price, 0);
    console.log('piash', products);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='flex items-center justify-center mt-10'>
               
                <div  className='flex items-center gap-4 w-[1000px] mx-auto flex-col md:flex-row '>
                    <div className='mr-60'>
                         <h2 className='text-2xl '>Cart</h2>
                    </div>
                    <h2>Total Cost: {totalPrice} </h2>
                    <button className='cursor-pointer hover:bg-purple-800 hover:text-white duration-1000 px-5 py-1 outline outline-purple-600 rounded-full ' onClick={() => hadleSort()}>Sort By Price</button>
                    <button  className='cursor-pointer py-1.5 text-white rounded-full bg-radial px-5 from-purple-600 from-40% to-purple-800' onClick={() => setIsOpen(true)} >Purchase</button>
                </div>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <h2>piash</h2>

                </Modal>
            </div>
            <div className=' mx-auto space-y-6 gap-6 w-[1000px] mt-8' >
                {
                    products.map(product => (<Cart
                        key={product.product_id}
                        product={product}
                        totalPrice={totalPrice}
                        handleRemove={handleRemove}
                    ></Cart>))
                }
            </div>
        </div>
    );
};

export default Carts;