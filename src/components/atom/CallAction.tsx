import { Link } from "react-router";

function CallAction() {
  return (
   <>
     <section className="presentation">

<div className="call_action">
 <h1 className="slogan" >Votre confort, notre priorité.</h1>
 <p className="propValeur">Livraison gratuite – Essayez votre matelas sans risque !</p>

 <Link to={"/Shop"}><button title="shop" type="button" className="action">Achetez en ligne</button></Link>
   
</div>

</section>

</>
  )
}

export default CallAction