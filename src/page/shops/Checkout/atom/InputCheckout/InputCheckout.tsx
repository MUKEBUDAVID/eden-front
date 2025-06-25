// import React from 'react'
import InputCheckoutStyle from "./InputCheckout.module.scss";



interface InputcheckoutType{
  titre?:string,
  typeInput?:string,
  id?:string,
  placehoder?:string,
  name:string
 } 

function Inputcheckout({titre="",typeInput="text",id="inputStyle",name,placehoder}:InputcheckoutType) {
  

  return (
    <div className={InputCheckoutStyle.inputCheckout} >
      <label htmlFor={titre}>{titre} </label>

     <input name={name} placeholder={placehoder}  type={typeInput} id={id}/> 
    </div>
  )
}

export default Inputcheckout