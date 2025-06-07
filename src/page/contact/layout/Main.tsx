// import React from 'react'

import Baniere from "../../../components/atom/Baniere/Baniere";
import mainContactStyle from "./main.module.scss";
import Qaulite from "../../../components/atom/Qualite/Qualite"
import Adresse from "../atom/adresse/Adresse";
import Message from "../atom/message/Message";

function Main() {

    const baniereData={
  h1:"Contact",
  to:"/",
  title:"nav to Contact",
  node1:"Home",
  node2:"Contact"
 }

  return (
    <main className={mainContactStyle.mainContact}>
        <Baniere baniereData={baniereData}/>

<section className={mainContactStyle.contacts}>
  <div className={mainContactStyle.title}>
    <h1>Get In Touch With Us</h1>

    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email
      . Our Staff Always Be There To Help You Out. 
      Do Not Hesitate!</p>
  </div>

<div className={mainContactStyle.formulaire}>
<Adresse/>
<Message/>

  </div>


</section>


<Qaulite/>


    </main>
  )
}

export default Main