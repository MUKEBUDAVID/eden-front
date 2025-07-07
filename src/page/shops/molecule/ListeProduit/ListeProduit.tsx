// import React from 'react'
import { useCardContext } from "../../../../context/CardContext";
import Pagination from "../../atom/Pagination/Pagination";
import Produit from "../../../../components/atom/Produit/Produit";
import listeProduit from "./ListeProduit.module.scss"
function ListeProduit() {

  const {card}=useCardContext();

    const handlePageChange = (page: number): void => {
    console.log(`Chargement des données de la page ${page}`);
    // Ici : Appel API ou filtrage de données
  }

  return (
    <section className={listeProduit.listeProduit}>
    
    <div className={listeProduit.produit}>
      {card? <Produit rendererItem={12} cards={card}/>:<p>Chargement...</p>}
    </div>

    
      <Pagination totalItems={50}
        itemsPerPage={12}
        onPageChange={handlePageChange}
        maxVisiblePages={3} // Optionnel
        />
    

  </section>
  )
}

export default ListeProduit