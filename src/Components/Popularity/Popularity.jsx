import React, {  useState } from 'react';
import Title from '../Title/Title';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';



const Popularity = () => {
const data = useLoaderData() || [];
   
const [products, setProducts] = useState(data);
const [sort, setSort] = useState('');
    
const handleSortPopularity = sortType => {
    setSort(sortType);
    if(sortType === 'Popularity'){
        const sortedByPopularity = [...products].sort((a, b) => b.popularity - a.popularity);
        setProducts(sortedByPopularity);
    }
    
}


    return (
        <div>
            <div className="hero-content text-center bg-[#9538E2]">
                <Title title='Popularity' subtitle='Explore our latest tech that’s guaranteed to upgrade your experience. Based on popularity, there’s something for everyone!'></Title>
            </div>

            <div className='flex justify-between items-center my-20'>
                <h1 className='font-bold text-[#09080F] text-xl'>Popularity</h1>
                <button onClick={() => handleSortPopularity('Popularity')} className="btn rounded-3xl text-white bg-gradient-to-t from-indigo-500 via-amber-400 via-30% to-teal-500 border border-x-fuchsia-800 border-y-fuchsia-800 hover:from-indigo-500 hover:to-purple-500">Sort by Popularity</button>
            </div>
            <div className="bg-base-200 p-6 rounded-lg gap-2 lg:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Popularity;