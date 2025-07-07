  import Produit from "../../../../components/atom/Produit/Produit.tsx";
  import VoirePlus from "../../../../components/atom/VoirePlus/VoirePlus.tsx";
  import { useCardContext } from "../../../../context/CardContext.tsx";
  import autreProduits from "./AutreProduits.module.scss"


  function AutreProduits() {
    const {card}=useCardContext();


    

    
    
return (
      <section className={autreProduits.autreProduits}>
      <h3>Autres Produits</h3>

      <div className={autreProduits.listProduits}>
      {card ? <Produit rendererItem={8} cards={card} /> : <p>Chargement...</p>}
      </div>

      <VoirePlus/>

      </section>
    )
  }

  export default AutreProduits