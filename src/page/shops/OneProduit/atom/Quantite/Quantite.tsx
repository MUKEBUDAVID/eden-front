import {useState} from "react";
import { Link } from "react-router";
import quantiteStyle from "./quantite.module.scss"

function Quantite() {

 const [quantite,setQuantite]=useState<number>(0);




const changeQuantie=(event:React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
event.stopPropagation();

const value =event.currentTarget.value as string; 


if(value=="+" ){
  setQuantite(quantite+1)

};


if(value=="-" && quantite>0){
  setQuantite(quantite-1)

};

}

  return (
     <div className={ quantiteStyle.quantite}>

            <div className={ quantiteStyle.choix_quantite}>
              <button onClick={changeQuantie} value={"+"} type="button" className={ quantiteStyle.plus}>+</button>
              <span>{quantite}</span>
              <button onClick={changeQuantie} value={"-"} type="button" className={ quantiteStyle.Moin}>-</button>
              </div>

              <Link to={"/Shop/Carts"} title="add to cart">

              <button type="button" className={ quantiteStyle.addToCardt}> Add To Cart</button>
              </Link>

          </div>
  )
}

export default Quantite