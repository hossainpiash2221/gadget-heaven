import { getAllCarts } from '../utils';
import Card from '../Components/Card';
import Cart from '../Components/Cart';
import { useEffect, useState } from 'react';
const WishCarts = () => {
     const [products, setProducts] = useState([]);


    useEffect(() => {
        const stored = getAllCarts('wishCarts');
        setProducts(stored);
    }, [])


    const handleRemove = (id) => {
        const updated = products.filter(item => item.product_id !== id)
        setProducts(updated);
        localStorage.setItem('wishCarts', JSON.stringify(updated));
        window.dispatchEvent(new Event('wishUpdated'));
    }


    
    console.log('piash', products);
    return (
        <div className='mt-10'>
            <h2 className='w-[1000px] mx-auto text-xl font-bold'>WishList</h2>
            <div>
                    <div className=' mx-auto space-y-6 gap-6 w-[1000px] mt-8' >
                {
                    products.map(product => (<Cart
                        key={product.product_id}
                        product={product}
                     
                        handleRemove={handleRemove}
                    ></Cart>))
                }
            </div>

            </div>
        </div>
    );
};

export default WishCarts;