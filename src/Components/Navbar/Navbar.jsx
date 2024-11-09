import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { useEffect } from 'react';

const Navbar = () => {

    const location = useLocation();

    const [bgClass, setBgClass] = useState("text-[#9538E2] bg-white w-11/12");
    useEffect(() => {
        if (location.pathname === '/') {
            setBgClass("text-white bg-[#9538E2] w-full rounded-t-xl");
        }
        else {
            setBgClass("text-[#9538E2] bg-white w-11/12");
        }
    }, [location])
    

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/popularity">Popularity</Link></li>

    </>

    return (
        <div className={`navbar  pb-10  mx-auto mt-10 ${bgClass}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#9538E2]">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-black">Gadget Zone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator bg-white rounded-full p-1">
                            <img src="https://img.icons8.com/?size=24&id=3337&format=png" alt="Cart icon!" />
                            <span className="badge badge-sm indicator-item text-[#9538E2]">{0}</span>
                        </div>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator bg-white rounded-full p-1">
                            <img src="https://img.icons8.com/?size=24&id=85038&format=png" alt="Heart icon!" />
                            <span className="badge badge-sm indicator-item text-[#9538E2]">{0}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold text-[#9538E2]">{0} Items</span>
                            <span className="border-t-2 border-[#9538E2] text-[#9538E2]">Subtotal: ${0}</span>
                            <div className="card-actions">
                                <button className="btn btn-primary rounded-lg bg-[#9538E2] btn-block">Dashboard</button>
                            </div>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold text-[#9538E2]">{0} Items</span>
                            <span className="border-t-2 border-[#9538E2] text-[#9538E2]">Subtotal: ${0}</span>
                            <div className="card-actions">
                                <button className="btn btn-primary rounded-lg bg-[#9538E2] btn-block">Dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;