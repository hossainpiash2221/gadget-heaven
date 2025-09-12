import React from 'react';

const Footer = () => {
    return (
        <div className='p-10 bg-white mt-10'>
                 <div className="text-center">
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p className="text-gray-700 mt-3">Leading the way in cutting-edge technology and  innovation</p>
            </div>
             <footer className="flex flex-col md:flex-row gap-4 md:gap-40  text-base-content p-10 container mx-auto text-center justify-evenly">
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
    );
};

export default Footer;