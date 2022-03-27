import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Benefit from '../Benefit/Benefit';
const PricingOption = (props) => {
    const { name, price, benefits } = props.pricingOption
    return (
        <div className=' bg-white rounded-lg mx-4 p-5'>
            <h2 className='text-3xl rounded-lg bg-emerald-900 py-4'>{name}</h2>
            <p>
                <span className='text-5xl font-bold text-gray-700'>$ {price}</span>
                <span className='text-xl font-bold text-black'>/mo</span>
            </p>
            <div className='text-black'>
                <h3 className='text-xl mt-3 text-left '>Benefits: </h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700 font-bold'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>

    );
};

export default PricingOption;