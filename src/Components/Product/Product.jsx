import React from 'react';


const Product = ({ product }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating, popularity } = product || {};
    return (
        <div>
            <div className='h-[200px]'>
                <img className='w-full h-full object-cover' src={product_image} alt="Gadgets picture" />
            </div>
        </div>
    );
};

export default Product;