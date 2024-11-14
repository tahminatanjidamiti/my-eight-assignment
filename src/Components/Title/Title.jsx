import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div className='flex flex-col w-full items-center justify-center my-12 text-white'>
            <h1 className='font-bold text-3xl mb-4'>{title}</h1>
            <p className='w-10/12 md:w-8/12'>{subtitle}</p>
        </div>
    );
};

export default Title;