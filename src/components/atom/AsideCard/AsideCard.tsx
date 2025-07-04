import  { PropsWithChildren } from 'react'
// import { useBuyCardsContext } from "../../../context/BuyContext";
import asideCardStyle from "./asideCard.module.scss";
import { Link } from "react-router";

type AsideCardType=PropsWithChildren<{toggleCard:()=>void}>

function AsideCard({toggleCard}:AsideCardType) {
    // const {BuyCard,setBuyCard}=useBuyCardsContext();

  return (

    <aside className={asideCardStyle.asideCard}>

      <div className={asideCardStyle.buyCard}>

       <div className={asideCardStyle.head}>
         <h2>Shopping Cart</h2>
         <img src="/img/CardToggle.svg" alt="CardToggle" title="close card" onClick={toggleCard}  />
        </div>

        <hr />

        <div className={asideCardStyle.buyCardList}>

         <div className={asideCardStyle.oneCard}>
          <img src="/img/autresProduits/capot.png" alt="capot" className={asideCardStyle.imgProduit}  />

          <div className={asideCardStyle.intitule}>
            <h4>Asgaard sofa</h4>
            <p className={asideCardStyle.prixAndQuantyti}>
            <span>1</span> <span>X</span> <span>250.000fc</span>
            </p>

        </div> 

        <img src="/img/deleteProduit.svg" alt="deleteProduit" title="deleteProduit" /> 
        </div>  


    </div>


        <div className={asideCardStyle.cardFooter}>
        <div className={asideCardStyle.sommeTotal}>
          <span>Subtotal</span> <span>520.000.00 fc</span>
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