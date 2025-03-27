import  "../style/page.scss";
import Navlink from "@/utils/Navlink";
import Link from "next/link"

function Header() {
  return (
    <header>

    <section className="home_left">
      <Link href="/">
   <img src="./img/eden_Logos-05@2x.svg" alt="eden logo"  />
      </Link>
    <span>Eden</span>
    </section>

    <nav>
   <Navlink href="/" style="navStyle" activeStyle="activeNavStyle" >Home </Navlink>
   <Navlink href="/Shop" style="navStyle" activeStyle="activeNavStyle" >Shop</Navlink>
   <Navlink href="/About" style="navStyle" activeStyle="activeNavStyle" >About</Navlink>
   <Navlink href="/Contact" style="navStyle" activeStyle="activeNavStyle" >Conatct</Navlink>
     </nav>

     <section className="home_right">
      <img src="./img/globe.svg" alt="globe icon" />
      <img src="./img/shopping-cart.svg" alt=" shopping-cart logo" />
      <img src="./img/account.svg" alt=" account logo" />

   </section>
    

  </header>
  )
}

export default Header