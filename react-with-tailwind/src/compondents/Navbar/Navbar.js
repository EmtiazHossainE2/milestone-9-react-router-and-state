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
        <nav className='bg-green-500 w-full '>
            <div onClick={() => setOpen(!open)} className="h-8 w-8 md:hidden text-white " >
                {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-green-500 text-center w-full absolute md:static ease-in duration-1000 ${open ? 'top-8' : 'top-[-300px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;