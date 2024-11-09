import React from 'react';

const Footer = () => {
    return (
        <div className='p-10'>
            <div className='w-8/12 mx-auto text-center pb-10'>
                <h1 className='font-bold text-3xl mb-5'>Gadget Zone</h1>
                <p>Pioneering the future with innovative technology and groundbreaking advancements!</p>
            </div>
            <hr className='w-10/12 mx-auto' />
            <footer className="footer w-8/12 mx-auto mt-10">
            <nav className='text-center'>
                <h6 className=" text-black text-lg font-bold">Services</h6>
                <a className="link link-hover text-[#09080F99]">Product Support</a>
                <a className="link link-hover text-[#09080F99]">Order Tracking</a>
                <a className="link link-hover text-[#09080F99]">Shipping & Delivery</a>
                <a className="link link-hover text-[#09080F99]">Returns</a>
            </nav>
            <nav className='text-center'>
                <h6 className="text-black text-lg font-bold">Company</h6>
                <a className="link link-hover text-[#09080F99]">About us</a>
                <a className="link link-hover text-[#09080F99]">Careers</a>
                <a className="link link-hover text-[#09080F99]">Contact</a>
            </nav>
            <nav className='text-center'>
                <h6 className="text-black text-lg font-bold">Legal</h6>
                <a className="link link-hover text-[#09080F99]">Terms of Service</a>
                <a className="link link-hover text-[#09080F99]">Privacy policy</a>
                <a className="link link-hover text-[#09080F99]">Cookie policy</a>
            </nav>
        </footer>
        </div>
    );
};

export default Footer;