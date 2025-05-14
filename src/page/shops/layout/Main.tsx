// import React from 'react'

import { Link } from "react-router"

function Main() {
  return (
    <main>
  <section className="publicite">
  <span className="shopPage">Shop</span>
  <p className="shopNav">
    <Link to="/" title="nav to home">Home</Link>
    <span>{">"}</span>
    <span title="page actuel">Shop</span></p>
  
  </section>
  <section></section>
  <section></section>
  <section></section>
        
    </main>
  )
}

export default Main