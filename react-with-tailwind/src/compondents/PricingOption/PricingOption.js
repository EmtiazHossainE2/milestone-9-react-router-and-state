import React from 'react';

const PricingOption = (props) => {
    const { name, price } = props.pricingOption
    return (
        <div className=' bg-white rounded-lg mx-4 p-5'>
            <h2 className='text-3xl rounded-lg bg-emerald-900 py-4'>{name}</h2>
            <p>
                <span className='text-5xl font-bold text-gray-700'>$ {price}</span>
                <span className='text-xl font-bold text-black'>/mo</span>
            </p>
        </div>

    );
};

export default PricingOption;