"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {

  const path = usePathname();
  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link href={href} className={`font-medium ${isActive ? "text-primary" : "text-black"}`} >
      {children}
    </Link>
  );
};


export default Navlink;
