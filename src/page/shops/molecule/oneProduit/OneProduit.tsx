// import React from "react";
import { useState } from "react";
import  "./OneProduit.scss";
import { Link } from "react-router";

function OneProduit() {
const[name,setName]=useState<string>("kilelo");
const[urlItem,seturlItem]=useState<string | undefined>("Asgaardsofa3.png");
const[active,setActive]=useState<Array<string>>(["active","","",""]);

const handleItemChange = (event: React.MouseEvent<HTMLImageElement>) => {
  event.preventDefault();
  event.stopPropagation();

  // Pour accéder au src, vous devez caster le target en HTMLImageElement
  const target = event.target as HTMLImageElement;
  seturlItem(target.src.split('/').pop());
   const alt=target.alt;
  console.log(target.alt);

  switch (alt) {
    case "siege_simple":
      setActive(["active","","",""]);
      
      break;

      case "flocon":
        setActive(["","active","",""]);
      
      break;

      case "capot":
         setActive(["","","active",""]);
      
      break;
      case "berceau":
         setActive(["","","","active"]);

      break;
  
   
  }
  

};


console.log(setName);

  return (

    <section className="oneProduit">

      <div className="navigation">

        <div className="left">

          <Link to={"/"}>Home</Link> 
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />
        <Link to={"/shop"}>Shop</Link>
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />

        <div className="separateur"></div>

       <p className="active">{name}</p>

          </div> 
        
      </div>

      <div className="presentation">

        <div className="left">
          <div className="listItem">
            <img onClick={handleItemChange} className={`${active[0]}`} src="/img/autresProduits/siege_simple.png" alt="siege_simple" />
            <img onClick={handleItemChange} className={`${active[1]}`} src="/img/autresProduits/flocon.png" alt="flocon" />
            <img onClick={handleItemChange} className={`${active[2]}`} src="/img/autresProduits/capot.png" alt="capot" />
            <img onClick={handleItemChange} className={`${active[3]}`} src="/img/autresProduits/berceau.png" alt="berceau" />
          </div>
          <div className="item"><img src={`/img/autresProduits/${urlItem}`} alt="item"  /></div>
        </div>

        <div className="right"></div>
      </div>

      <div className="description"></div>
      <div className="related"></div>
        
    </section>
  )
}

export default OneProduit