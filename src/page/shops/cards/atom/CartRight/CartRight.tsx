// import React from 'react'
import cartRightStyle from "./cartRight.module.scss";

function CartRight() {
  return (
    <div className={cartRightStyle.right}>
    <h3 className={cartRightStyle.titre}>Cart Totals</h3>

    <div className={cartRightStyle.divTotal}>
      <div className={cartRightStyle.subTotal}> <span>Subtotal</span>  <span>250.000.00 fc</span></div>
      <div className={cartRightStyle.total}> <span>Total</span> <span>250.000.00 fc</span></div>
    </div>

    <button type="button" className={cartRightStyle.checkBtn}> Check Out</button>

    </div>
  )
}

export default CartRight