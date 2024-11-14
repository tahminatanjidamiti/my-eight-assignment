import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating, popularity } = product || {};
    return (
        <Link to={`/${product_id}`}>
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-4 h-48">
                <img className='w-full h-full object-cover rounded-xl' src={product_image} alt={product_title}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='font-semibold'>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn rounded-3xl text-[#9538E2] bg-transparent border border-x-pink-500 border-y-fuchsia-800 hover:bg-[#9538E2] hover:text-white">View Details</button>
                </div>
            </div>
        </div></Link>

    );
};

export default Product;