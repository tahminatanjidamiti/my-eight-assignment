import React from 'react';
import Title from '../Title/Title';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';
import { NavLink, useLoaderData, useLocation } from 'react-router-dom';


const Dashboard = () => {
    const location = useLocation();
    const data = useLoaderData();
    
    return (
        <div>
            <div className="hero-content text-center bg-[#9538E2]">
                <Title title='Dashboard' subtitle='Your wishlist is about to come to life! Dive into cutting-edge tech and essential accessories selected just for you—perfect for elevating your experience with every purchase.'></Title>
            </div>
            <div className='text-center pb-20 bg-[#9538E2] flex hero-content items-center gap-5'>
                <NavLink to="/dashboard/cart" className={({ isActive }) => `btn rounded-3xl px-8 ${isActive ? 'text-[#9538E2] bg-white font-bold' : 'bg-[#9538E2] border border-white text-white'}`}>Cart</NavLink>
                <NavLink to="/dashboard/wishlist" className={({ isActive }) => `btn rounded-3xl px-6 ${isActive ? 'text-[#9538E2] bg-white font-bold' : 'bg-[#9538E2] border border-white text-white'}`}>WishList</NavLink>
            </div>
            {location.pathname === '/dashboard/cart' && <Cart></Cart>}
            {location.pathname === '/dashboard/wishlist' && <WishList></WishList>}
        </div >
    );
};

export default Dashboard;