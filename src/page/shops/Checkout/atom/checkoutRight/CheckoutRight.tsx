// import React from 'react'
import { useState,ChangeEvent } from "react"
import checkoutRightStyle from "./checkoutRight.module.scss"


type checkBoxType="direct"|"cash";

function CheckoutRight() {

    /// a remplace par un contexte
    const [qauntite,setQuantite]=useState(1);

    const [optionPayment,setoptionPayment]=useState("");


   const HandlCheck=(even:ChangeEvent<HTMLInputElement>)=>{
    even.preventDefault();
    even.stopPropagation();


    const value=even.target.value as checkBoxType;

    console.log(optionPayment);
    

    setoptionPayment(value)

       ///for delete
console.log(setQuantite);
    

   }





  return (
    <section className={checkoutRightStyle.checkoutRight}>
        
        <ul className={checkoutRightStyle.proSub}>
            <li className={checkoutRightStyle.titre}>
                <span>Product</span>
                <span>Subtotal</span>
            </li>

           <li className={checkoutRightStyle.item}>
                <span>
                    <span>Asgaard sofa</span>   
                    <span>   X</span>
                    <span>  {qauntite}</span>
                </span>

                <span>250,000.00 fc</span>
            </li>

            <li className={checkoutRightStyle.sub}>
                <span>Subtotal</span>
                <span>150,000.00 fc</span>
            </li>

            <li className={checkoutRightStyle.total}>
                <span>Total</span>
                <span>250,000.00 fc</span>
            </li>
        </ul>

        <hr />

        <div className={checkoutRightStyle.bankNotice}>
            <h5><span className={checkoutRightStyle.blackSphere}></span> <span>Direct Bank Transfer</span></h5>

            <p className={checkoutRightStyle.notice_1}>
            Make your payment directly into our bank account. 
            Please use your Order ID as the payment reference. 
            Your order will not be shipped until the funds have cleared in our account.    
            </p>

            <div className={checkoutRightStyle.choisePay}>
                <p>
                    <input type="radio" value={"direct"} name="payType" onChange={HandlCheck} />  <span>Direct Bank Transfer</span>
                </p>

                <p>
                    <input type="radio" value={"cash"} name="payType" id="" onChange={HandlCheck} />  <span>Cash On Delivery</span>
                </p>
            </div>


           <p className={checkoutRightStyle.notice_2}>
           Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span> privacy policy.</span> 
            </p> 
        </div>


<button type="submit">Place order </button>
    </section>
  )
}

export default CheckoutRight