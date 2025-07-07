// import {useState} from 'react'
import { Link } from "react-router";
import navBarStyle from "./navBar.module.scss"
import { useCardContext } from "../../../../../context/CardContext";

 interface idProps {
      id: number;
    }


function NavBar({id}:idProps) {

  
  const {card}=useCardContext();
   
    
    
  return (
       <section className={navBarStyle.navigation}>
      
        <div className={navBarStyle.left}>

          <Link to={"/"}>Home</Link> 
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />
        <Link to={"/Shop"}>Shop</Link>
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />

        <div className={navBarStyle.separateur}></div>

       <p className={navBarStyle.active}>{card!=null?card[id].nom:null}</p>

          </div> 
        
      </section>
  )
}

export default NavBar