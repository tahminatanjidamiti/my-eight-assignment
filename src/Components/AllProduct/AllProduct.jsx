import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';


const AllProduct = () => {
    
    return (
        <div>
            <h1 className='text-4xl font-bold mb-4 text-center'>Dive Into Advanced Tech Gear</h1>

            <div className="flex w-11/12 gap-5 mx-auto pb-10">
                <div className="w-3/12 md:w-1/5 border rounded-xl shadow-lg p-2 grid grid-cols-1 space-y-2">
                    <NavLink to="/" className='py-3 px-4 rounded-3xl border bg-slate-100 text-center'>All Product</NavLink>
                    <NavLink to="/:laptops" className='py-3 px-4 rounded-3xl border bg-slate-100 text-center'>Laptops</NavLink>
                    <NavLink to="/:phones" className='py-3 px-4 rounded-3xl border bg-slate-100 text-center'>Phones</NavLink>
                    <NavLink to="/:accessories" className='py-3 px-4 rounded-3xl border bg-slate-100 text-center'>Accessories</NavLink>
                    <NavLink to="/:smart Watches" className='py-3 px-4 rounded-3xl border bg-slate-100 text-center'>Smart Watches</NavLink>
                    <NavLink to="/:macBook" className='py-3 px-4 rounded-3xl border bg-slate-100 text-center'>MacBook</NavLink>
                    <NavLink to="/:iphone" className='py-3 px-4 rounded-3xl border bg-slate-100 text-center'>Iphone</NavLink>
                </div>

                <div className="w-8/12 md:w-4/5 gap-2 md:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Outlet></Outlet>
                
                
                </div>
            </div>
        </div>
    );
};

export default AllProduct;