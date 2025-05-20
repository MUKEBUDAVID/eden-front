import { Link } from "react-router";
import callToAction from"./CallToAction.module.scss";
function CallToAction() {
  return (
   <>
     <section className={callToAction.presentation}>

<div className={callToAction.call_action}>
 <h1 className={callToAction.slogan} >Votre confort, notre priorité.</h1>
 <p className={callToAction.propValeur}>Livraison gratuite – Essayez votre matelas sans risque !</p>

 <Link to={"/Shop"}><button title="shop" type="button" className={callToAction.action}>Achetez en ligne</button></Link>
   
</div>

</section>

</>
  )
}

export default CallToAction