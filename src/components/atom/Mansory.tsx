import  { PropsWithChildren } from "react";

type prorpsMansory=PropsWithChildren<{
className:string,
}>

function Mansory(props:prorpsMansory) {
  return (
    <div className={props.className}>


     <div><img src="/img/Screenshot (1).png" alt="siege_simple" /></div> 
     <div><img src="/img/Screenshot (1).png" alt="siege_simple" /></div> 
     <div><img src="/img/Screenshot (1).png" alt="siege_simple" /></div> 
     <div><img src="/img/Screenshot (1).png" alt="siege_simple" /></div> 
     <div><img src="/img/Screenshot (1).png" alt="siege_simple" /></div> 
     <div><img src="/img/Screenshot (1).png" alt="siege_simple" /></div> 
     <div><img src="/img/Screenshot (1).png" alt="siege_simple" /></div> 
      
      
      </div>
  )
}

export default Mansory