import { NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useEffect, useState } from 'react';



const AllProduct = () => {
    
    const data = useLoaderData();
    const {category} = useParams();
    const [products, setProducts] = useState(data);

        useEffect(() => {
            if (category) {
                const filterProducts = data.filter(product => product.category.toLowerCase() === category.toLowerCase())
                setProducts(filterProducts);
            }
            else{
                setProducts(data);
            }
        }, [category, data]);

        return (
            <div>
                <h1 className='text-4xl font-bold mb-10 text-center'>Dive Into Advanced Tech Gear</h1>

                <div className="flex w-11/12 gap-5 mx-auto pb-10">
                    <div className="w-6/12 md:w-4/12 lg:w-1/5 border h-[460px] rounded-xl shadow-lg p-2 grid grid-cols-1 space-y-2">
                        <NavLink to="/" className={({isActive}) => `py-3 px-4 h-[52px] rounded-3xl border  text-center ${isActive ? 'bg-[#9538E2] text-white' : 'bg-slate-100 text-black'}`}>All Product</NavLink>
                        <NavLink to="/category/laptops" className={({isActive}) => `py-3 px-4 h-[52px] rounded-3xl border  text-center ${isActive ? 'bg-[#9538E2] text-white' : 'bg-slate-100 text-black'}`}>Laptops</NavLink>
                        <NavLink to="/category/phones" className={({isActive}) => `py-3 px-4 h-[52px] rounded-3xl border  text-center ${isActive ? 'bg-[#9538E2] text-white' : 'bg-slate-100 text-black'}`}>Phones</NavLink>
                        <NavLink to="/category/accessories" className={({isActive}) => `py-3 px-4 h-[52px] rounded-3xl border  text-center ${isActive ? 'bg-[#9538E2] text-white' : 'bg-slate-100 text-black'}`}>Accessories</NavLink>
                        <NavLink to="/category/smartWatches" className={({isActive}) => `py-3 px-4 h-[52px] rounded-3xl border  text-center ${isActive ? 'bg-[#9538E2] text-white' : 'bg-slate-100 text-black'}`}>Smart Watches</NavLink>
                        <NavLink to="/category/macBook" className={({isActive}) => `py-3 px-4 h-[52px] rounded-3xl border  text-center ${isActive ? 'bg-[#9538E2] text-white' : 'bg-slate-100 text-black'}`}>MacBook</NavLink>
                        <NavLink to="/category/iphone" className={({isActive}) => `py-3 px-4 h-[52px] rounded-3xl border  text-center ${isActive ? 'bg-[#9538E2] text-white' : 'bg-slate-100 text-black'}`}>Iphone</NavLink>
                    </div>

                    <div className="w-6/12 md:w-8/12 lg:w-4/5 gap-2 lg:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            products.length > 0 ?(
                                products.map(product => <Product key={product.product_id} product={product}></Product>)
                            ) : (<h1 className='text-4xl font-bold text-center'>No Data Found</h1>)
                        }
                    </div>
                </div>
            </div>
        );
    };

    export default AllProduct;