import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Title from '../Title/Title';
import { ObjectContext } from '../Root/Root';

const ProductDetail = () => {
    const { handleSelectedProducts, isAddCart, handleWishlistProducts, isAddWishlist } = useContext(ObjectContext);
    const { product_id } = useParams();
    const data = useLoaderData();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const singleData = data.find(product => product.product_id === parseInt(product_id))
        setProduct(singleData);
    }, [data, product_id])

    const { product_title, product_image, category, price, description, specification, availability, rating, popularity } = product || {};

    const isAdded = isAddCart.includes(product.product_id);
    const isAddedWish = isAddWishlist.includes(product.product_id);
    return (
        <div>

            <div className="hero-content  mb-72 relative text-center pb-[150px] bg-[#9538E2]">
                <Title title='Product Details' subtitle='Discover the latest in tech innovation with gadgets designed to enhance your world. From the smartest devices to trendsetting accessories, our collection has something for everyone!'></Title>
            </div>
            <div className="rounded-3xl bg-base-300 w-11/12 md:w-10/12 lg:w-8/12 mx-auto border-2 border-white absolute p-2 md:p-5 top-[400px] md:top-[390px] lg:top-[350px] left-4 md:left-16 lg:left-56">

                <div
                    className="hero h-[370px] rounded-3xl"
                    style={{
                        backgroundColor: '#FFFFFF',
                    }}>
                    <div className='flex w-full gap-2 md:gap-5 lg:gap-8 p-2 lg:p-4'>
                        <div className='w-2/5 h-[330px]'>
                            <img className='w-full h-full object-cover rounded-xl' src={product_image} alt={product_title} />
                        </div>
                        <div className='w-3/5 md:space-y-1 lg:space-y-2'>
                            <h2 className="card-title">{product_title}</h2>
                            <p className='font-semibold'>Price: ${price}</p>
                            <button className="btn btn-outline bg-[#309C081A] btn-success btn-sm rounded-3xl">In Stock</button>
                            <p className='text-[#09080F99]'>{description}</p>
                            <p><span className='font-bold text-[#09080F] text-lg'>Specification:</span> <br /> {specification}</p>
                            <p className='font-bold text-[#09080F] text-lg flex'>Rating <img src="https://img.icons8.com/?size=26&id=fkiVxojF7Mkw&format=png" alt="Black square" /> </p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <img src="https://img.icons8.com/?size=24&id=8ggStxqyboK5&format=png" alt="Star icon!" />
                                    <img src="https://img.icons8.com/?size=24&id=8ggStxqyboK5&format=png" alt="Star icon!" />
                                    <img src="https://img.icons8.com/?size=24&id=8ggStxqyboK5&format=png" alt="Star icon!" />
                                    <img src="https://img.icons8.com/?size=24&id=8ggStxqyboK5&format=png" alt="Star icon!" />
                                    <img src="https://img.icons8.com/?size=24&id=85448&format=png" alt="Star icon!" />
                                </div>
                                <button className="btn btn-xs">{rating}</button>
                            </div>
                            <div className='flex gap-1 md:gap-2'>
                                <button disabled={isAdded} onClick={() => handleSelectedProducts(product)} className="btn rounded-3xl bg-[#9538E2] text-white">{isAdded ? 'Added To Cart' : 'Add To Card'} <img className='text-white' src="https://img.icons8.com/?size=24&id=3337&format=png" alt="Cart icon!" /></button>
                                <button disabled={isAddedWish} onClick={() => handleWishlistProducts(product)} className="bg-base-200 rounded-full p-3 items-center justify-center"><img className='' src="https://img.icons8.com/?size=24&id=85038&format=png" alt="Heart icon!" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;