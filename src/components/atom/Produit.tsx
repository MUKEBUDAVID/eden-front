// import React from "react";



type ProduitType = {
  nom: string;
  descriptive: string;
  prix_actuele: number;
  prix_reel?: number;
  devise?: string;
  etat: string;
  img: string;
  solde: {
    toogle: boolean;
    pourcentage?: number;
  };
};

interface ProduitProps {
  cards: ProduitType[];
}







function Produit({ cards }: ProduitProps) {


  return (
    <>
      {cards.map((produit, index) => (
        <div key={index} className="card">
          <img src={"/img/autresProduits/" + produit.img} alt={produit.nom} />
          
          <div className="bottom">

          <span className="nom_produit">{produit.nom}</span>


      <div className="prix_produit">
        <span className="prix_actuele">{produit.prix_actuele.toLocaleString("de-DE")} fc </span>          
        {produit.prix_reel && <span className="prix_reel">{produit.prix_reel} fc</span>}
      </div>

         {produit.solde.toogle && (
            <span className="solde">{produit.solde.pourcentage} %</span>
          )}

          </div>

        </div>

        
      ))}
    </>

  )
}

export default Produit