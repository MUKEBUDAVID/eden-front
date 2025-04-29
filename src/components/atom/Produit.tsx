// import React from "react";



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

interface ProduitProps {
  cards: ProduitType[];
}







function Produit({cards}:ProduitProps) {


 return (
    <div className="produit">
           {cards.map((produit, index) => (
        <div key={index}>
          <h2>{produit.nom}</h2>
          <p>{produit.descriptive}</p>
          <p>Prix actuel: {produit.prix_actuele} {produit.devise}</p>
          {produit.prix_reel && <p>Prix réel: {produit.prix_reel} {produit.devise}</p>}
          <p>État: {produit.etat}</p>
          {produit.solde.toogle && (
            <p>Solde: {produit.solde.pourcentage}% de réduction</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Produit