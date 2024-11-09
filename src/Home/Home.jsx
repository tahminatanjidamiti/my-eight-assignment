import React from 'react';
import Banner from '../Components/Banner/Banner';
import AllProduct from '../Components/AllProduct/AllProduct';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <AllProduct></AllProduct>
            
        </div>
    );
};

export default Home;