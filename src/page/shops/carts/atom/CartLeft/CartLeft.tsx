// import React from 'react'
import cartLeftStyle from "./cartLeft.module.scss"
import { useCardContext } from "../../../../../context/CardContext";
function CartLeft() {
   const {buyCard,setBuyCard}=useCardContext();


const handelChangeInput=(even:React.ChangeEvent<HTMLInputElement>,id:number)=>{
  even.preventDefault();
  even.stopPropagation();

const newQuantite =Number(even.currentTarget.value) ;

    setBuyCard(prevItems => {
    if (!prevItems) return null;
    return prevItems.map(item => 
      item.id === id ? {...item, quantite: newQuantite} : item
    );
  });

}


const deleteOneCart=(even:React.MouseEvent<HTMLImageElement, MouseEvent>,id:number)=>{
  even.preventDefault();
  even.stopPropagation();



  setBuyCard((prevBuyCard)=>{
    if(!prevBuyCard) return null;
    return prevBuyCard.filter((buyCard)=> buyCard.id!=id)

  })


}

  return (
    

   <table  className={cartLeftStyle.left}>

  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>

  <tbody >

    {
      buyCard?.map((cart)=>{
        return(

    <tr >
      <td className={cartLeftStyle.Product}> 
        <img src={`/img/autresProduits/${cart.img}`} alt="Outdooset"  />
      <span>{cart.nom}</span>
      </td>

      <td className={cartLeftStyle.price}>{cart.prix_actuele.toLocaleString("de-DE")+ " fc"}</td>

      <td><input type="number" min={1} onChange={(even)=>handelChangeInput(even,cart.id)} value={cart.quantite} className={cartLeftStyle.quantity} /></td>
     
      <td >
        <div className={cartLeftStyle.DivsubTotal}>
<p className={cartLeftStyle.subTotal}>{(cart.prix_actuele*cart.quantite).toLocaleString("de-DE") +" fc"}</p>

    <img src="/img/antdelete.svg" onClick={(even)=>deleteOneCart(even,cart.id)} title="antdelete" alt="antdelete" className={cartLeftStyle.antdelete} />

        </div>
      
      </td>
    </tr>
        )
      })

    }
  
   
  </tbody>

</table>


 
  )
}

export default CartLeft