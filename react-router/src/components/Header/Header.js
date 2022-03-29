import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="container">
                <h2><Link to="./">React Router</Link></h2>
                <div>
                    <ul id="MenuItems">
                        <li><CustomLink to="./">Home</CustomLink></li>
                        <li><CustomLink to="./about">About</CustomLink></li>
                        <li><CustomLink to="./contact">Contact Us</CustomLink></li>
                        <li><CustomLink to="./friends">Friends</CustomLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;