// import React from 'react'
import cartLeftStyle from "./cartLeft.module.scss"

function CartLeft() {
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

  <tbody>
    <tr >
      <td className={cartLeftStyle.Product}> 
        <img src="/img/autresProduits/Asgaardsofa3.png" alt="Outdooset"  />
      <span>Asgaard sofa</span>
      </td>

      <td className={cartLeftStyle.price}>250.000.00 fc</td>

      <td><input type="number" min={1} className={cartLeftStyle.quantity} /></td>
     
      <td >
        <div className={cartLeftStyle.DivsubTotal}>
<p className={cartLeftStyle.subTotal}>250.000.00 fc</p>

    <img src="/img/antdelete.svg" title="antdelete" alt="antdelete" className={cartLeftStyle.antdelete} />

        </div>
      
      </td>
    </tr>
  
   
  </tbody>

</table>


 
  )
}

export default CartLeft