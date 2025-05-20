import { Link } from "react-router";
import { useCardContext } from "../../../context/CardContext";
import Produit from "../../../components/atom/Produit/Produit";
import shop from "./Main.module.scss" ;
import Pagination from "../atom/Pagination/Pagination";


function Main() {
  const {card}=useCardContext();

    const handlePageChange = (page: number): void => {
    console.log(`Chargement des données de la page ${page}`);
    // Ici : Appel API ou filtrage de données
  };


  return (
    <main className={shop.mainShop}>

  <section className={shop.publicite}>
  <span className={shop.shopPage}>Shop</span>
  <p className={shop.shopNav}>
    <Link to="/" title="nav to home">Home</Link>
    <span>{">"}</span>
    <span title="page actuel">Shop</span></p>
  
  </section>

  <section className={shop.filtreAndSearch}>

    <div className={shop.filtre}>

      <div className={shop.filtreIcon}>

         <div> 
          <img src="/img/system-uicons_filtering.png" alt="filter_icon"  /> 
         <span>Filter</span>
         </div>
       <img src="/img/ci_grid-big-round.png" alt="filter_icon"  /> 
       <img src="/img/bi_view-list.png" alt="filter_icon"  />

      </div>

    <span className={shop.separateur}></span>


    <p className={shop.pageView}>
      {`Showing ${1}–${16} of ${32} results`}
    </p>
      
    </div>




    <div className={shop.searchBar}>
       <input type="text" placeholder="recherche"  />
      <button type="button"> <img src="/img/akar-icons_search.png" alt="searchIcon"  /></button>
    </div>

  </section>

  <section className={shop.listeProduit}>
    
    <div className={shop.produit}>
      {card? <Produit rendererItem={12} cards={card.produits}/>:<p>Chargement...</p>}
    </div>

    
      <Pagination totalItems={50}
        itemsPerPage={12}
        onPageChange={handlePageChange}
        maxVisiblePages={3} // Optionnel
        />
    

  </section>



  <section className={shop.baniere}>

    <div className={shop.ban}>
      <img src="./img/Group.png" alt="Group" />
      <div className={shop.qualite}>
        <span>High Quality</span>
        <span>crafted from top materials</span>
      </div>
    </div>

    <div className={shop.ban}>
      <img src="./img/Vector.png" alt="Vector" />
      <div className={shop.qualite}>
        <span>Warranty Protection</span>
        <span>Over 2 years</span>
      </div>
    </div>

    <div className={shop.ban}>
      <img src="./img/shipping.png" alt="shipping" />
      <div className={shop.qualite}>
        <span>Free Shipping</span>
        <span>Order over 150 $</span>
      </div>
    </div>

    <div className={shop.ban}>
      <img src="./img/customer-support.png" alt="customer-support" />
      <div className={shop.qualite}>
        <span>24 / 7 Support</span>
        <span>Dedicated support</span>
      </div>
    </div>

    
  </section>
        
    </main  >
  )
}

export default Main