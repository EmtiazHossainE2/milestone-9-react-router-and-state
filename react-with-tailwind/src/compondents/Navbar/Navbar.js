import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: './home' },
        { id: 2, name: 'Shop', link: './shop' },
        { id: 3, name: 'Deals', link: './deals' },
        { id: 4, name: 'Coupons', link: './coupons' },
    ]
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="h-8 w-8 md:hidden text-blue-500" >
                {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute ease-in duration-700 ${open ? 'top-10' : 'top-[-300px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;