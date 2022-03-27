import React from 'react';

const Link = (props) => {
    const { name, link } = props.route
    return (
        <div>
            <li className='mr-16 bg-lime-500 px-6 py-2 rounded text-lg text-white'>
                <a href={link}> {name}</a>
            </li>
        </div>
    );
};

export default Link;