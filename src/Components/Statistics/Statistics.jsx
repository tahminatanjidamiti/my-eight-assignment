import React from 'react';
import Title from '../Title/Title';


import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData() || [];

    const statistics = data.map(single => ({
        name: single.product_title,
        price: single.price,
        rating: single.rating,
        popularity: single.popularity
    }))
    
   


    return (
        <div>

            <div className="hero-content text-center bg-[#9538E2]">
                <Title title='Statistics' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories based on price, rating and so on, we have it all!'></Title>
            </div>

            <div className=' py-20 bg-base-200'>
                <h1 className='font-bold text-[#09080F] text-xl mb-5 pl-10'>Statistics</h1>


                <div className='bg-white m-10 px-4 py-10'>
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart
                            data={statistics}
                            margin={{
                                top: 20,
                                right: 80,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#9538E2" />
                                <XAxis dataKey="name" />
                                <YAxis dataKey="price" />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="popularity" fill="#8884d8" stroke="#8884d8"/>
                                <Bar dataKey="price"  barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="rating" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>


            </div>

        </div>
    );
};

export default Statistics;