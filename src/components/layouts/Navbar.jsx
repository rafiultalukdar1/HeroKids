import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navlink from '../buttons/Navlink';
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {

    const nav = <>
        <li><Navlink href={"/"}>Home</Navlink></li>
        <li><Navlink href={"/products"}>Products</Navlink></li>
        <li><Navlink href={"/about"}>About</Navlink></li>
        <li><Navlink href={"/blog"}>Blog</Navlink></li>
    </>

    return (
        <>
            <div className='bg-base-100 shadow-sm'>
                <div className='container'>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <div tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <ul>
                                        {nav}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Link href={"/"}><Image alt='logo' src={"/assets/logo.png"} width={70} height={50}/></Link>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className='flex items-center gap-5'>
                                {nav}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className='space-x-3'>
                                <Link href={"/cart"} className='btn btn-primary btn-outline'><LuShoppingCart /></Link>
                                <Link href={"/login"} className='btn btn-primary'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;