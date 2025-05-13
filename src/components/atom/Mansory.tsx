import  { MouseEvent, PropsWithChildren, useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";


type prorpsMansory=PropsWithChildren<{
className:string,
selectedCity:string , 
position?:LatLngExpression,
setPosition:React.Dispatch<React.SetStateAction<LatLngExpression>>
}>

interface Ville {
  nom: string;
  latitude: number;
  longitude: number;
  image: string;
}

// interface VillesData {
//   kinshasa: Ville[];
//   matadi: Ville[];
//   muanda: Ville[];
// }

function Mansory({className,selectedCity,setPosition}:prorpsMansory) {
  const[oneCity,setOneCity]=useState<Ville[]>([]);


  const moveCity=async()=>{
 try {
      const response = await fetch("./data/depotAdress.json");
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
  
      const data: Record<string,Ville[]> = await response.json();
      

      setOneCity(data[selectedCity]) ;
       setPosition([oneCity[0].latitude,oneCity[0].longitude])

     
  
 } catch (error) {
      console.error("Error in makerMove:", error);
      
    }
  }

  const moveInCity=(even:MouseEvent|any)=>{
    even.preventDefault();
    even.stopPropagation();
   const depotSelected=even.target.alt;
    

    oneCity.forEach((depot)=>{
      if(depot.nom==depotSelected){
        setPosition([depot.latitude,depot.longitude])

      }

    })
    
    



  }



useEffect(()=>{


   moveCity()

   moveInCity()


},[])




  return (
    <div className={className}>

{ oneCity?.map((depot)=>{

 return( 
 <div key={depot.longitude} onClick={moveInCity}><img src={depot.image} alt={depot.nom} /></div> 

 )

})}
     
    
      
      </div>
  )
}

export default Mansory