// import React from 'react';
import Inputcheckout from "../../atom/InputCheckout/InputCheckout";
import formStyle from "./checkoutLeft.module.scss"



function CheckoutLeft() {

 

  return (
    
      <section  className={formStyle.checkoutLeft}>
        <h1>Billing details</h1>
        <div className={formStyle.name}>
        <Inputcheckout name="firstName" titre="First Name"  typeInput="text"  />
        <Inputcheckout name="lastName" titre="Last Name"  typeInput="text"  />
        </div>

        <div className={formStyle.adresse}>
        <Inputcheckout name="companyName" titre="Company Name (Optional)"  typeInput="text" id={formStyle.inputStyle}  />
        <Inputcheckout name="streetAdress" titre="Street Adress"  typeInput="text" id={formStyle.inputStyle}  />
        <Inputcheckout name="country" titre="Country"  typeInput="text" id={formStyle.inputStyle}  />
        <Inputcheckout name="city" titre="City"  typeInput="text" id={formStyle.inputStyle}  />
        <Inputcheckout name="province" titre="Province"  typeInput="text" id={formStyle.inputStyle}  />
        <Inputcheckout name="zipCode" titre="Zip Code"  typeInput="text" id={formStyle.inputStyle}  />
        <Inputcheckout name="phone" titre="Phone"  typeInput="text" id={formStyle.inputStyle}  />
        <Inputcheckout name="emailAdress" titre="Email Adress"  typeInput="text" id={formStyle.inputStyle} />
        <Inputcheckout name="additionalInformation"  placehoder="Additional Information"   typeInput="text" id={formStyle.inputStyle} />
        
        </div>
        
      
      </section>
      
       
  )
}

export default CheckoutLeft