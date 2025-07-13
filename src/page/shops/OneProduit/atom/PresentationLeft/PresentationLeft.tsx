import { useEffect, useState } from "react";
import presentationLeftStyle from "./presentationLeft.module.scss";
import { useCardContext } from "../../../../../context/CardContext";


interface idProps {
      id: number;
    }

function PresentationLeft({id}:idProps) {

const {card}=useCardContext();
 const[urlItem,seturlItem]=useState<string | null>(null);
 const[active,setActive]=useState<Array<string>>(["active","","",""]);


useEffect(() => {
  // Mettre à jour l'URL uniquement quand `card` est disponible
  if (card && card[id]) {
    seturlItem(card[id].img);
  }
}, [card, id]); // Déclenché quand `card` ou `id` change

   

   


    const handleItemChange = (event: React.MouseEvent<HTMLImageElement>) => {
  event.preventDefault();
  event.stopPropagation();

  // Pour accéder au src, vous devez caster le target en HTMLImageElement
  const target = event.target as HTMLImageElement;
  const src=target.src.split('/').pop() as string|null;

  
  
  seturlItem(src);

   const alt=target.alt;
 

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
            <img onClick={handleItemChange} className={`${active[0]}`} src={`/img/autresProduits/${urlItem}`} alt="siege_simple" />
            <img onClick={handleItemChange} className={`${active[1]}`} src="/img/autresProduits/flocon.png" alt="flocon" />
            <img onClick={handleItemChange} className={`${active[2]}`} src="/img/autresProduits/capot.png" alt="capot" />
            <img onClick={handleItemChange} className={`${active[3]}`} src="/img/autresProduits/berceau.png" alt="berceau" />
          </div>
          <div className={presentationLeftStyle.item}><img src={`/img/autresProduits/${urlItem}`} alt="item"  /></div>
        </div>
  )
}

export default PresentationLeft