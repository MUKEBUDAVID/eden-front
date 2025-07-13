// import React from 'react'
import titreStyle from "./titre.module.scss"
import { useCardContext } from "../../../../../context/CardContext";
import { useEffect } from "react";


interface idProps {
      id: number;
      prix:{
        prixActuel:number,
        setPrixActuel:React.Dispatch<React.SetStateAction<number>>
      }
    }



function Titre({id,prix}:idProps) {
  const {card}=useCardContext();
  const {prixActuel,setPrixActuel } =prix;

  useEffect(()=>{
      if(card){

        setPrixActuel(card[id].prix_actuele);
      }
    
  },[]);

  return (
      <div className={titreStyle.titre} >
           <h1>{(card && card[id])?card[id].nom:null}</h1>
          <h3>{(card && card[id])?prixActuel.toLocaleString("de-DE")+" fc":null}</h3>
          </div>
  )
          
}

export default Titre