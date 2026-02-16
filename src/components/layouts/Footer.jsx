import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className=' bg-base-200 text-base-content py-10'>
                <div className='container'>
                    <footer className="footer sm:footer-horizontal">
                        <aside>
                            <Link href={"/"}><Image alt='logo' src={"/assets/logo.png"} width={90} height={70}/></Link>
                            <p>HERO-KIDZ Industries Ltd.<br />Providing reliable tech since 1992</p>
                        </aside>
                        <nav>
                            <h6 className="footer-title text-primary text-[18px]">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-primary text-[18px]">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-primary text-[18px]">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer;