import {useState} from 'react'
import { Link } from "react-router";
import navBarStyle from "./navBar.module.scss"


function NavBar() {
    const[name,setName]=useState<string>("kilelo");


    console.log(setName);
    
    
  return (
       <section className={navBarStyle.navigation}>
      
        <div className={navBarStyle.left}>

          <Link to={"/"}>Home</Link> 
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />
        <Link to={"/shop"}>Shop</Link>
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />

        <div className={navBarStyle.separateur}></div>

       <p className={navBarStyle.active}>{name}</p>

          </div> 
        
      </section>
  )
}

export default NavBar