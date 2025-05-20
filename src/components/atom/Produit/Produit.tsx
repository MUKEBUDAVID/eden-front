// import React from "react";
import { Link } from "react-router";
import card from "./Produit.module.scss";



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
  rendererItem:number
}



function Produit({ cards, rendererItem }: ProduitProps) {


  return (
    <>
      {cards.map((produit, index) => (
        index<rendererItem?
        <Link to={"/Shop/oneProduit"} key={index} className={card.card}>
          <img className={card.card_img} src={"/img/autresProduits/" + produit.img} alt={produit.nom}  />
          

       <div className={card.bottom}>

          <span className={card.nom_produit}>{produit.nom}</span>


      <div className={card.prix_produit}>
        <span className={card.prix_actuele}>{produit.prix_actuele.toLocaleString("de-DE")} fc </span>          
        {produit.prix_reel && <span className={card.prix_reel}>{produit.prix_reel} fc</span>}
      </div>

         {produit.solde.toogle && (
            <span className={card.solde}>{produit.solde.pourcentage} %</span>
          )}

          </div>


          <div className={card.hover}>
            <button type="button">Add to cart</button>

            <div className={card.sociale_button}>

              <button type="button" className={card.share_btn}><img src="/img/share.svg" alt="share img"  /><span>Share</span></button>
              <button type="button" className={card.like_btn}><img src="/img/like.svg" alt="like img"  /><span>Like</span></button>
             
            </div>
           </div>



           
          
        </Link>
        :null

        
      ))}
    </>

  )
}

export default Produit