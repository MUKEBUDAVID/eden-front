import {  Link } from "react-router";
function BestSeller() {
  return (
   <section className="bestseller">
    <h3>Explorez nos  produits</h3>

      <div className="produit">
      <Link to="/Shop"><div className="item"><img src="/img/matela.jpeg" alt="Matelas img" title="click" /> <span>Matelas</span></div></Link>
      <Link to="/Shop"><div className="item"><img src="/img/Screenshot (1).png" alt="Mousse img" title="click"  /> <span>Mousse</span></div></Link>
      <Link to="/Shop"><div className="item"><img src="/img/pack-oreillers-lestra-fjord-microduv.webp" alt="Oreillers img" title="click"  /> <span>Oreillers</span></div></Link>
       
        
    </div>    
   </section>
  )
}

export default BestSeller