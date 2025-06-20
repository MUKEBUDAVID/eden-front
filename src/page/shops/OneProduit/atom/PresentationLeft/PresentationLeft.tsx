import { useState } from "react";
import presentationLeftStyle from "./presentationLeft.module.scss";


function PresentationLeft() {

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

  return (
     <div className={presentationLeftStyle.left}>
          <div className={presentationLeftStyle.listItem}>
            <img onClick={handleItemChange} className={`${active[0]}`} src="/img/autresProduits/siege_simple.png" alt="siege_simple" />
            <img onClick={handleItemChange} className={`${active[1]}`} src="/img/autresProduits/flocon.png" alt="flocon" />
            <img onClick={handleItemChange} className={`${active[2]}`} src="/img/autresProduits/capot.png" alt="capot" />
            <img onClick={handleItemChange} className={`${active[3]}`} src="/img/autresProduits/berceau.png" alt="berceau" />
          </div>
          <div className={presentationLeftStyle.item}><img src={`/img/autresProduits/${urlItem}`} alt="item"  /></div>
        </div>
  )
}

export default PresentationLeft