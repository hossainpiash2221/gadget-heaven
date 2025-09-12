import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { addCard, addWishCard, getAllCarts } from "../utils";
import { FaRegHeart } from "react-icons/fa";
import Footer from "./Footer";

const Productdetails = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const [product, setProduct] = useState({});

    const [isProduct, setIsproduct] = useState(true);
    
    useEffect(() => {
        const singleData = data.find(product => product.product_id == product_id);
        setProduct(singleData)
        const products = getAllCarts();
        const isExist = products.find(product => product.product_id == singleData.product_id)

        if (isExist) {
            setIsproduct(true);
        } else {
            setIsproduct(false);
        }
    }, [data, product_id]);


    const handleCard = product => {
        addCard(product);
        setIsproduct(true)
    }

    const handleWishCart = product => {
        addWishCard(product);
    }



    return (
        <div className=" ">
            <div className="bg-[#F7F7F7] mb-10">
                <div className="text-center bg-[#9538E2] p-8 ">
                    <h2 className="text-3xl font-bold text-white">Product details</h2>
                    <p className="w-[750px] mx-auto text-white mb-30">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="w-[1200px] h-[560px] bg-white mx-auto p-8 grid grid-cols-[1fr_2fr] rounded-2xl -mt-32 left-1 right-1 ">
                    <div className="rounded-xl">
                        <img src={product.product_image} alt="" className=" object-none h-full rounded-2xl" />
                    </div>
                    <div className="flex flex-col justify-between p-8">
                        <div>
                            <h2 className="text-3xl font-bold">{product.product_title}</h2>
                            <p className="text-gray-800 text-xl ">Price: {product.price}</p>
                        </div>
                        <button className="btn btn-outline rounded-full text-green-600 w-30">In stock</button>
                        <p className="text-gray-600">{product.description}</p>
                        <ul>
                            {
                                product.Specification?.map((spec, idx) => <li key={idx}>{spec}</li>)
                            }
                        </ul>
                        <h2 className="flex items-center gap-1.5">Ratings <MdOutlineStar /></h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                        <div className="flex items-center gap-4">
                            <button disabled={isProduct} className="btn bg-[#9538E2] text-white w-30 rounded-full" onClick={() => handleCard(product)}>Add to Card</button>
                            <button onClick={() => handleWishCart(product)} className="cursor-pointer p-2 rounded-full  outline outline-gray-400"><FaRegHeart /></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Productdetails;