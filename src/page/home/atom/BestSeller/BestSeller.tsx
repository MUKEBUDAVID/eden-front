import {  Link } from "react-router";
import bestSeller from"./BestSeller.module.scss";
function BestSeller() {
  return (
   <section className={bestSeller.bestseller}>
    <h3>Explorez nos  produits</h3>

      <div className={bestSeller.produit}>
      <Link to="/Shop" className={bestSeller.item} ><img src="/img/matela.jpeg" alt="Matelas img" title="click" /> <span>Matelas</span></Link>
      <Link to="/Shop" className={bestSeller.item} ><img src="/img/Screenshot (1).png" alt="Mousse img" title="click"  /> <span>Mousse</span></Link>
      <Link to="/Shop" className={bestSeller.item} ><img src="/img/pack-oreillers-lestra-fjord-microduv.webp" alt="Oreillers img" title="click"  /> <span>Oreillers</span></Link>
       
        
    </div>    
   </section>
  )
}

export default BestSeller