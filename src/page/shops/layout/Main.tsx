import shop from "./Main.module.scss" ;
import Baniere from "../../../components/atom/Baniere/Baniere";
import FiltreAndSearch from "../atom/FiltreAndSearch/FiltreAndSearch";
import ListeProduit from "../molecule/ListeProduit/ListeProduit";
import Qualite from "../../../components/atom/Qualite/Qualite";
function Main() {
 const baniereData={
  h1:"Shop",
  to:"/",
  title:"nav to home",
  node1:"Home",
  node2:"Shop"
 }

  return (
    <main className={shop.mainShop}>

  <Baniere  baniereData={baniereData}/>
    
  <FiltreAndSearch/>   

 <ListeProduit/>

 <Qualite/>


 </main  >
  )
}

export default Main