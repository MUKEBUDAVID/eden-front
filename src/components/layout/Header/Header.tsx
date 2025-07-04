import { useState } from "react";
import headerStyle from "./Header.module.scss";
import { NavLink, Link } from "react-router";
import AsideCard from "../../atom/AsideCard/AsideCard";

function Header() {
const [openCard,setOpenCard]=useState(true)


const toggleCard=()=>{
  setOpenCard(!openCard)
}

  return (
    <header>

    <section className={headerStyle.header_left}>
      <Link to="/" >
   <img src="/img/eden_Logos.svg" alt="eden logo"  title="logo" />
      </Link>
    <span>Eden</span>
    </section>

    <nav>
   <NavLink to="/"  className={({ isActive }) =>isActive ? headerStyle.activeNavStyle : headerStyle.navStyle} >Home </NavLink>
   <NavLink to="/Shop" className={({ isActive }) =>isActive ? headerStyle.activeNavStyle : headerStyle.navStyle} >Shop</NavLink>
   <NavLink to="/About" className={({ isActive }) =>isActive ? headerStyle.activeNavStyle : headerStyle.navStyle} >About</NavLink>
   <NavLink to="/Contact" className={({ isActive }) =>isActive ? headerStyle.activeNavStyle : headerStyle.navStyle} >Contact</NavLink>
     </nav>

      <section className={headerStyle.header_right}>
      {openCard?
      <>
            <img src="/img/globe.svg" alt="globe icon" />
      <img src="/img/shopping-cart.svg" alt=" shopping-cart logo" onClick={toggleCard} />
      <img src="/img/account.svg" alt=" account logo"  />
      </>

      : <AsideCard toggleCard={toggleCard}/>

      }
      </section>
    

  </header>
  )
}

export default Header