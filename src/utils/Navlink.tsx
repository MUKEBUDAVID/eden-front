"use client"        
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {  useEffect, useState } from 'react';

interface Navprops{
    href:string;
    style:string;
    activeStyle:string;
    children: React.ReactNode
}


export default function Navlink({href,style,activeStyle,children}:Navprops) {

    const route:string| any =useRouter().pathname;
    const [styles, setStyles]=useState("");

    useEffect(()=>{

     href==route ? setStyles(activeStyle): setStyles(style);

},[route])

  return (
   <Link href={href}  className={styles}>
   {children}
   </Link>
  )
}
