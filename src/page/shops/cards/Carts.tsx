// import React from 'react';
import Baniere from "../../../components/atom/Baniere/Baniere";
import Qualite from "../../../components/atom/Qualite/Qualite";
import cartStyle from "./carts.module.scss";
import CartLeft from "./atom/CartLeft/CartLeft";
import CartRight from "./atom/CartRight/CartRight";
function Carts() {

 const baniereData={
  h1:"Cart",
  to:"/Shop/oneProduit",
  title:"nav to Produit",
  node1:"Produit",
  node2:"Cart"
 }

  return (
    <main className={cartStyle.cart}>
      <Baniere  baniereData={baniereData}/>

      <section className={cartStyle.centre}>
      <CartLeft/>
      <CartRight/>

      </section>

      <Qualite/>
    </main>
  )
}

export default Carts