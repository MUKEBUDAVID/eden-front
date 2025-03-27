"use client"        
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {  useEffect, useState } from 'react';

interface Navprops{
    href:string;
    style:string;
    activeStyle:string;
    children: React.ReactNode
}


export default function Navlink({href,style,activeStyle,children}:Navprops) {

  const pathName = usePathname();
    const [styles, setStyles]=useState(style);


    useEffect(()=>{

     href==pathName ? setStyles(activeStyle): setStyles(style);

},[])

  return (
   <Link href={href}  className={styles}>
   {children}
   </Link>
  )
}
