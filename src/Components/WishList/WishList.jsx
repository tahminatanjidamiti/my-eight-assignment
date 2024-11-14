import React, { useContext } from 'react';
import { ObjectContext } from '../Root/Root';
import { LuXCircle } from "react-icons/lu";

const WishList = () => {
    const {selectedWishList, handleWishlistDelete, handleSelectedProducts, isAddCart} = useContext(ObjectContext);

   
    return (
        <div className='my-10'>
            <h1 className='font-bold text-[#09080F] text-xl'>WishList</h1>
            {
                    selectedWishList.map((product) => (
                        <div className="flex justify-between items-center border w-full mx-auto rounded-lg mt-5" key={product.product_id}>
                                <div className="flex rounded-lg gap-6 p-4">
                                    <div className=" w-[100px] h-[140px]">
                                        <img className="w-full h-full object-cover rounded-lg" src={product.product_image} alt="Player image" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xl font-semibold">{product.product_title}</p>
                                        <p><span className='font-bold text-[#09080F] text-lg'>Description:</span>{product.description}</p>
                                        <p className='font-bold text-[#09080F] text-lg'>Price: ${product.price}</p>
                                        <button disabled={isAddCart.includes(product.product_id)} onClick={()=> handleSelectedProducts(product)} className="btn rounded-xl bg-[#9538E2] text-white">{isAddCart.includes(product.product_id)? 'Added To Cart' : 'Add To Card'}</button>
                                    </div>
                                    
                                </div>
                                <button onClick={() => handleWishlistDelete(product.product_id)} className="text-red-600 text-3xl mr-5"><LuXCircle /></button>
                        </div>
                    ))
                }
        </div>
    );
};

export default WishList;