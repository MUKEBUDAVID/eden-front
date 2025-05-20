import CallToAction from "../atom/CallToAction/CalTolAction";
import BestSeller from "../atom/BestSeller/BestSeller";
import AutreProduits from "../molecule/AutreProduits/AutreProduits";
import Localisation from "../molecule/Localisation/Localisation";
import home from"./Main.module.scss"
function Main() {
  
  // const david="AWS access portal URL: https://d-9067d89f1b.awsapps.com/start, Nom d’utilisateur: lokwa, Mot de passe à usage unique: A>t5s7h.%AD"
  
  
return (
    <main className={home.mainHome} >
     <CallToAction/>
     <BestSeller/>
     <AutreProduits/>
     <Localisation/>
     

    </main>
  )
}

export default Main