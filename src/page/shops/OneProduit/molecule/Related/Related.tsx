// import React from 'react';
import Produit from "../../../../../components/atom/Produit/Produit";
import VoirePlus from "../../../../../components/atom/VoirePlus/VoirePlus";
import { useCardContext } from "../../../../../context/CardContext";
import relatedStyle from "./Related.module.scss"


function Related() {
     const {card}=useCardContext();
    
  return (
    <section className={relatedStyle.related}>
      <h2>Related Products</h2>

<div className={relatedStyle.listeProduit}>
  {card? <Produit rendererItem={4} cards={card}/>:<p>Chargement...</p>}
      

</div>
      
        <VoirePlus/>
  </section>
  )
}

export default Related