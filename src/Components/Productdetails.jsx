import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { addCard } from "../utils";

const Productdetails = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const singleData = data.find(product => product.product_id == product_id);
        setProduct(singleData)
    }, [data, product_id]);


    const handleCard = product =>{
        addCard(product);
    }

    return (
        <div>
            <div className="bg-[#F7F7F7]">
                <div className="text-center bg-[#9538E2] p-8 ">
                    <h2 className="text-3xl font-bold text-white">Product details</h2>
                    <p className="w-[750px] mx-auto text-white mb-30">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="w-[1200px] h-[560px] bg-white mx-auto p-8 grid grid-cols-[1fr_2fr] rounded-2xl absolute -mt-32 left-1 right-1 ">
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
                        <button className="btn bg-[#9538E2] text-white w-30 rounded-full" onClick={()=>handleCard(product)}>Add to Card</button>

                    </div>
                </div>
            </div>
            <div className="mt-150 text-center">
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p className="text-gray-700 mt-3">Leading the way in cutting-edge technology and  innovation</p>
            </div>
            <div>
                <footer className="flex flex-col md:flex-row gap-4 md:gap-40 bg-base-200 text-base-content p-10 container mx-auto text-center justify-evenly">
                    <nav className="text-center flex flex-col">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>

            </div>
        </div>
    );
};

export default Productdetails;