import { useEffect, useState } from "react";
import Produit from "../atom/Produit.tsx";

 
type ProduitType = {
  nom: string;
  descriptive: string;
  prix_actuele: number;
  prix_reel?: number;
  devise?: string;
  etat: string;
  solde: {
    toogle: boolean;
    pourcentage?: number;
  };
};
  
type Cards = {
  produits: ProduitType[];
};


function AutreProduits() {
  const [card,setcard]= useState<Cards | null>(null);

useEffect(()=>{
  
  fetch("./data.json").then((response)=>{
  
  if (!response.ok) {
      throw new Error("json error " + response.status);
  }
  return response.json()

   }).then((json)=>{
   console.log(json.produits);
   
setcard(json)
   
  }).then(()=>{
    console.log(card);
  })

  
},[])



  return (
    <section className="autreProduits">
     <h3>Autres Produits</h3>

     <div className="listProduits">
     {card ? <Produit cards={card.produits} /> : <p>Chargement...</p>}
     </div>

    </section>
  )
}

export default AutreProduits