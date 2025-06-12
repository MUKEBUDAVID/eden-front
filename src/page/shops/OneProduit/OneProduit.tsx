// import { useState } from "react";
import NavBar from "./atom/NavBar/NavBar";
import Presentation from "./molecule/Presentations/Presentation";
import Details from "./molecule/Details/Detail";
import Related from "./molecule/Related/Related";
import oneProduitStyle from  "./OneProduit.module.scss";

function OneProduit() {
return (

    <section className={oneProduitStyle.oneProduit}>

    <NavBar/>  
  <Presentation/>
  <Details/>
  <Related/>

  </section>
  )
}

export default OneProduit