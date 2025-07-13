import  { PropsWithChildren,MouseEvent, useState, useEffect,useRef } from "react";
import { useCardContext } from "../../../context/CardContext"; 
import asideCardStyle from "./asideCard.module.scss";
import { Link } from "react-router";
import OneCard from "../../atom/oneCard/OneCard";
// import { ProduitType } from "../../../context/CardContext";

type AsideCardType=PropsWithChildren<{toggleCard:()=>void}>

function AsideCard({toggleCard}:AsideCardType) {
    const {buyCard,setBuyCard}=useCardContext();
    const [somme,setSomme]=useState(0);

     // 1. On crée une référence qui suit `buyCard`
     const buyCardRef = useRef(buyCard);


   const DeleteBuyCard=(id:number,even:MouseEvent<HTMLImageElement, globalThis.MouseEvent>)=>{
  even.preventDefault();
  even.stopPropagation();

   setBuyCard(prevBuyCard => {
    // Si prevCard est null ou undefined, retourner un tableau vide (ou gérer l'erreur différemment)
    if (!prevBuyCard) {
      console.error("prevCard is null or undefined");
      return []; // ou throw new Error("Card state is not initialized");
    }

    return prevBuyCard.filter((card)=> card.id!=id);
  });
  setSomme(0)

 
   

    return undefined

   }

 


const calculeSomme = () => {

  buyCardRef.current = buyCard;
  // 3. On utilise `buyCardRef.current` pour avoir la dernière version
  const currentBuyCard = buyCardRef.current;

  if (currentBuyCard) {
    const compte = currentBuyCard.reduce(
      (acc, curr) => acc + ((curr.prix_actuele || 0)* (curr.quantite|| 0)),
      somme
    );
    setSomme(compte);
  }
};


useEffect(()=>{
  calculeSomme()

  return ()=>{ setSomme(0)}

},[buyCard])



  return (

    <aside className={asideCardStyle.asideCard}>

      <div className={asideCardStyle.buyCard}>

       <div className={asideCardStyle.head}>
         <h2>Shopping Cart</h2>
         <img src="/img/CardToggle.svg" alt="CardToggle" title="close card" className={asideCardStyle.CardToggleImg} onClick={toggleCard}  />
        </div>

        <hr />

        <div className={asideCardStyle.buyCardList}>
         {buyCard?.map((card)=> <OneCard onclick={DeleteBuyCard} key={card.id} card={card}/>)}

     
          </div>


        <div className={asideCardStyle.cardFooter}>
        <div className={asideCardStyle.sommeTotal}>
          <span>Subtotal</span> <span>{somme.toLocaleString("de-DE")+" fc"}</span>
        </div>
        <hr />    
            
    
 <div className={asideCardStyle.cardBtn}>
<button><Link to={"/shop/Carts"}> Cart</Link></button>
<button><Link to={"/shop/Checkout"}> Checkout</Link></button>    
</div>   
       </div>        
      </div>  
    </aside>
  
  )
  
}

export default AsideCard