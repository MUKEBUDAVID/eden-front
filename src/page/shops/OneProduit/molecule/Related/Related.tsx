// import React from 'react';
import Produit from "../../../../../components/atom/Produit/Produit";
import VoirePlus from "../../../../../components/atom/VoirePlus/VoirePlus";
import { useCardContext } from "../../../../../context/CardContext";
import relatedStyle from "./Related.module.scss"


function Related() {
     const {card}=useCardContext();
    
  return (
    <div className={relatedStyle.related}>
      <h2>Related Products</h2>

<div className={relatedStyle.listeProduit}>
  {card? <Produit rendererItem={4} cards={card.produits}/>:<p>Chargement...</p>}
      

</div>
      
        <VoirePlus/>
      


      </div>
  )
}

export default Related