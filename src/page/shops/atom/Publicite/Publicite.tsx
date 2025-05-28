// import React from 'react'
import { Link } from "react-router";
import publicite from "./Publicite.module.scss" ;



function Publicite() {
  return (
     <section className={publicite.publicite}>
      <span className={publicite.shopPage}>Shop</span>
      <p className={publicite.shopNav}>
        <Link to="/" title="nav to home">Home</Link>
        <span>{">"}</span>
        <span title="page actuel">Shop</span></p>
      
      </section>
  )
}

export default Publicite