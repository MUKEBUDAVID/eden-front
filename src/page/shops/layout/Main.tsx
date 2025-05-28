import shop from "./Main.module.scss" ;
import Publicite from "../atom/Publicite/Publicite";
import FiltreAndSearch from "../atom/FiltreAndSearch/FiltreAndSearch";
import ListeProduit from "../molecule/ListeProduit/ListeProduit";
import Baniere from "../atom/Baniere/Baniere";
function Main() {


  return (
    <main className={shop.mainShop}>

  <Publicite/>
    
  <FiltreAndSearch/>   

 <ListeProduit/>

 <Baniere/>


 </main  >
  )
}

export default Main