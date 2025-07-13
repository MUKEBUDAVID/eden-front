// import React from 'react'
import { PropsWithChildren ,MouseEvent} from "react";
import oneCardStyle from "./oneCard.module.scss";
import { ProduitType } from "../../../context/CardContext";
type OneCardProps=PropsWithChildren<{
  card:ProduitType,
  onclick:(id:number,even: MouseEvent<HTMLImageElement, globalThis.MouseEvent>)=>undefined
}>

function OneCard({card,onclick}:OneCardProps) {


  return (
    <div className={oneCardStyle.oneCard}>
             <img src={`/img/autresProduits/${card.img}`} alt={card.nom} className={oneCardStyle.imgProduit}  />
   
             <div className={oneCardStyle.intitule}>
               <h4>{card.nom}</h4>
               <p className={oneCardStyle.prixAndQuantyti}>
               <span>{card.quantite}</span> <span>X</span> <span>{card.prix_actuele.toLocaleString("de-DE")+" fc"}</span>
               </p>
   
           </div> 
   
           <img src="/img/deleteProduit.svg" alt="deleteProduit" title="deleteProduit" onClick={(even)=>onclick(card.id,even)} /> 
           </div> 
  )
};

export default OneCard;