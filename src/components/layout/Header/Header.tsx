import  "./Header.scss";
import { NavLink, Link } from "react-router";

function Header() {
  return (
    <header>

    <section className="header_left">
      <Link to="/" >
   <img src="/img/eden_Logos.svg" alt="eden logo"  title="logo" />
      </Link>
    <span>Eden</span>
    </section>

    <nav>
   <NavLink to="/"  className={({ isActive }) =>isActive ? "activeNavStyle" : "navStyle"} >Home </NavLink>
   <NavLink to="/Shop" className={({ isActive }) =>isActive ? "activeNavStyle" : "navStyle"} >Shop</NavLink>
   <NavLink to="/About" className={({ isActive }) =>isActive ? "activeNavStyle" : "navStyle"} >About</NavLink>
   <NavLink to="/Contact" className={({ isActive }) =>isActive ? "activeNavStyle" : "navStyle"} >Contact</NavLink>
     </nav>

     <section className="header_right">
      <img src="/img/globe.svg" alt="globe icon" />
      <img src="/img/shopping-cart.svg" alt=" shopping-cart logo" />
      <img src="/img/account.svg" alt=" account logo" />
     </section>
    

  </header>
  )
}

export default Header