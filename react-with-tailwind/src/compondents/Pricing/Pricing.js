import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime free',
                'Unlimited deals',
                'Localized deals',
                'Fantastic deals',
                'Crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on free',
                'Unlimited deals',
                'Localized deals',
                'Fantastic deals',
                'Crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Everything on Regular',
                'Unlimited deals',
                'Localized deals',
                'Fantastic deals',
                'Crazy deals'
            ]
        },
    ]
    return (
        <div className='text-justify  bg-cyan-700 px-20 py-5 text-white '>
            <div>
                <div className="text-5xl text-center mt-5">Today's best deals</div>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas itaque officiis esse doloribus possimus quisquam dolores reiciendis laboriosam iusto repudiandae magnam, perspiciatis distinctio aliquam incidunt consectetur quas eum dolorum et dolorem numquam deleniti excepturi vero? Cum officiis accusantium, sed magnam non unde fuga. Laboriosam excepturi, quam tenetur assumenda suscipit incidunt sequi nostrum quisquam magni fuga tempore reprehenderit id at molestias amet deleniti, voluptatibus, commodi vero? Numquam libero natus incidunt ab similique, ullam id, officia amet, beatae voluptatem eos quaerat quibusdam? Consequatur eius quod numquam laborum totam dolor! Earum harum libero minima, porro tempore facere assumenda labore cum itaque facilis.</p>
            </div>
            <div className='mt-5 grid md:grid-cols-3 text-center  gap-9  py-5 rounded-lg' >
                {
                    pricingOptions.map(pricingOption => <PricingOption key={pricingOption.id} pricingOption={pricingOption}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;