import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="container">
                <h2><Link to="./">React Router</Link></h2>
                <div>
                    <ul id="MenuItems">
                        <li><Link to="./">Home</Link></li>
                        <li><Link to="./about">About</Link></li>
                        <li><Link to="./contact">Contact Us</Link></li>
                        <li><Link to="./friends">Friends</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;