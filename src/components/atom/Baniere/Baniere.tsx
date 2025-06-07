// import React from 'react'
import { Link } from "react-router";
import baniere from "./baniere.module.scss" ;
import { PropsWithChildren } from "react";

type Props=PropsWithChildren<{
  baniereData:{
  h1:string,
  to:string,
  title:string,
  node1:string,
  node2:string

  }
}>

function Baniere({baniereData}:Props) {
  return (
     <section className={baniere.publicite}>
      <h1 className={baniere.shopPage}>{baniereData.h1}</h1 >
      <p className={baniere.shopNav}>
        <Link to={baniereData.to} title={baniereData.title}>{baniereData.node1}</Link>
        <span>{">"}</span>
        <span title="page actuel">{baniereData.node2}</span></p>
      
      </section>
  )
}

export default Baniere