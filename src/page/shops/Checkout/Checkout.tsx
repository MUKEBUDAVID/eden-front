import {useState,SyntheticEvent} from 'react'
import Baniere from "../../../components/atom/Baniere/Baniere";
import Qualite from "../../../components/atom/Qualite/Qualite";
import checkoutStyle from "./checkout.module.scss";
import CheckoutLeft from "./molecule/checkoutLeft/CheckoutLeft";

interface FormDataType{
      firstName: { value: string };
      lastName: { value: string };
      companyName: { value: string };
      country: { value: string };
      streetAdress: { value: string };
      city: { value: string };
      province: { value: string };
      zipCode: { value: string };
      phone: { value: string };
      emailAdress: { value: string };
      additionalInformation: { value: string }; 

}



function Checkout() {
  const [formDatas , setFormData]=useState({
    firstName:"mukebu",
    lastName:"",
    companyName:"",
    country:"",
    streetAdress:"",
    city:"",
    province:"",
    zipCode:"",
    phone:"",
    emailAdress:"",
    additionalInformation:""
    
  });


 const baniereData={
  h1:"Checkout",
  to:"/Shop/Carts",
  title:"nav to Checkout",
  node1:"Carts",
  node2:"Checkout"
 }
  
   const HandleSubmit=(formData:SyntheticEvent)=>{
 
    formData.preventDefault();
    formData.stopPropagation();  
     
      const target = formData.target as typeof formData.target & FormDataType;
 
     const forms={
   firstName: target.firstName.value,
   lastName:target.lastName.value,
   companyName:target.companyName.value,
   country:target.country.value,
   streetAdress:target.streetAdress.value,
   city:target.city.value,
   province:target.province.value,
   zipCode:target.zipCode.value,
   phone:target.phone.value,
   emailAdress:target.emailAdress.value,
   additionalInformation:target.additionalInformation.value
  }

  console.log(forms);
  
  setFormData({...formDatas,...forms})
  
 
   }


  return (
    <main className={checkoutStyle.checkout}>
      <Baniere  baniereData={baniereData}/>  

      <form onSubmit={HandleSubmit} className={checkoutStyle.centre} >

      <CheckoutLeft/>

      {/* <checkoutRight/> */}
      <div>papa</div>
      </form>

      <Qualite/>
        
        </main>
  )
}

export default Checkout