import {useState} from 'react'
import typeChoisieStyle from "./TypeChoisie.module.scss";





function TypeChoisie() {


const[width,setWidth]=useState<string>("");
const [sizeActive,setsizeActive]=useState<Array<string>>(["sizeActive","","",""]);




const sizeClik=(event: React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
event.stopPropagation();
console.log(width);
const value =event.currentTarget.value as string; 

setWidth(value);


switch (value) {
    case "90":
      setsizeActive(["sizeActive","","",""]);
      
      break;

      case "120":
        setsizeActive(["","sizeActive","",""]);
      
      break;

      case "140":
         setsizeActive(["","","sizeActive",""]);
      
      break;
      case "180":
         setsizeActive(["","","","sizeActive"]);

      break;
  
   
  }
  

}



  return (
     <div className={ typeChoisieStyle.typeChoisie}>
            <span className={ typeChoisieStyle.size}>Size</span>

            <div className={ typeChoisieStyle.dimension}>
              <div className={ typeChoisieStyle.standart}>
              <button onClick={sizeClik} id={sizeActive[0]} value={"90"} type="button" title="90cm * 190cm">90 cm</button>
              <button onClick={sizeClik} id={sizeActive[1]} value={"120"} type="button" title="120cm * 190cm">120 cm</button>
              <button onClick={sizeClik} id={sizeActive[2]} value={"140"} type="button" title="140cm * 190cm">140 cm</button>
              <button onClick={sizeClik} id={sizeActive[3]} value={"180"} type="button" title="180cm * 190cm">180 cm</button>
               </div>






                  <div className={typeChoisieStyle.speciale}>

                    <div className={typeChoisieStyle.taille}>
                <span>width</span>
              <input type="number" min={1} />
                </div>
                
                <div className={typeChoisieStyle.taille}>
              <span>length</span>
              <input type="number" min={1} />
                </div>
              
                  </div>
                
              </div>
             </div>

        
  )
}

export default TypeChoisie