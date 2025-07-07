// import { useState } from "react";
import NavBar from "./atom/NavBar/NavBar";
import Presentation from "./molecule/Presentations/Presentation";
import Details from "./molecule/Details/Detail";
import Related from "./molecule/Related/Related";
import oneProduitStyle from  "./OneProduit.module.scss";
import { useParams } from "react-router";



function OneProduit() {

  const { id } = useParams();

   const index=Number(id);
  


return (

    <main className={oneProduitStyle.oneProduit}>

    <NavBar id={ index}/>  
  <Presentation id={index} />
  <Details/>
  <Related/>

  </main>
  )
}

export default OneProduit