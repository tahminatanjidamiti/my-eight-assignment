import React, { useContext } from 'react';
import { TbAdjustments } from "react-icons/tb";
import { LuXCircle } from "react-icons/lu";
import { ObjectContext } from '../Root/Root';
import ModalImg from '../../assets/Group.png'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { selectedProducts, handleDelete, price, handlePurchase,setIsModalOpen, finalPrice, isModalOpen, handleSort } = useContext(ObjectContext);
    const navigate = useNavigate();
    return (
        <div className='my-10'>
            <div className='flex justify-between'>
            <h1 className='font-bold text-[#09080F] text-xl'>Cart</h1>
            <div className='gap-5 flex items-center mb-5'>
                <p className='font-bold text-[#09080F] text-lg'>Total cost: <span>{price}</span></p>
                <button onClick={() => handleSort('Price')} className="btn rounded-3xl text-[#9538E2] bg-transparent border border-x-pink-500 border-y-fuchsia-800 hover:bg-[#9538E2] hover:text-white gap-1">Sort by Price <TbAdjustments /></button>
                <button onClick={handlePurchase} className=" font-bold btn rounded-3xl text-white bg-gradient-to-t from-indigo-500 via-amber-400 via-30% to-teal-500 border border-x-fuchsia-800 border-y-fuchsia-800 gap-1 hover:from-indigo-500 hover:to-purple-500">Purchase</button>
            </div>
            </div>
            {isModalOpen && (
                    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='bg-white p-6 rounded-lg max-w-md mx-auto text-center'>
                            <img className='flex items-center justify-center mx-auto mb-2' src={ModalImg} alt="Successful icon!" />
                            <h1 className='text-2xl font-semibold mb-2'>Payment Successfully</h1>
                            <hr className='my-2' />
                            <p className='text-[#09080F99] font-medium'>Thanks for purchasing.</p>
                            <p className='text-[#09080F99] font-medium'>Total: ${finalPrice}</p>
                            <button onClick={()=> {setIsModalOpen(false); navigate('/')}} className='btn w-full mt-4  bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600'>Close</button>
                        </div>
                    </div>
                )}
            {
                    selectedProducts.map((product) => (
                        <div className="flex justify-between items-center border w-full mx-auto rounded-lg mt-5" key={product.product_id}>
                                <div className="flex rounded-lg gap-5 p-4">
                                    <div className=" w-[80px] h-[80px]">
                                        <img className="w-full h-full object-cover rounded-lg" src={product.product_image} alt="Player image" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xl font-semibold">{product.product_title}</p>
                                        <p>{product.description}</p>
                                        <p className='font-bold text-[#09080F] text-lg'>Price: ${product.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(product.product_id)} className="text-red-600 text-3xl mr-5"><LuXCircle /></button>
                        </div>
                    ))
                }
        </div>
    );
};

export default Cart;