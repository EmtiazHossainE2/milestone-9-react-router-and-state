import React from 'react';

const Link = (props) => {
    const { name, link } = props.route
    return (
        <div>
            <li className='mr-16  py-2 rounded text-2xl text-white mb-5'>
                <a href={link}> {name}</a>
            </li>
        </div>
    );
};

export default Link;