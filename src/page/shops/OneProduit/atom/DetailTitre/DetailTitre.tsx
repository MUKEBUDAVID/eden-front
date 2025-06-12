import {useState} from "react";
import detailTitreStyle from "./detailTitre.module.scss"

function DetailTitre() {

const [desActive,setDesActive]=useState<Array<string>>([detailTitreStyle.detailActive,"",""]);



const handleDescripeChange=(event:React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
event.stopPropagation();

const value =event.currentTarget.value;


switch (value) {
    case "0":
      setDesActive([detailTitreStyle.detailActive,"","",""]);
      
      break;

      case "1":
        setDesActive(["",detailTitreStyle.detailActive,"",""]);
      
      break;

      case "2":
         setDesActive(["","",detailTitreStyle.detailActive]);
      
      break;
  
   
  }
  


}

  return (
     <div className={detailTitreStyle.titre}>

        <button onClick={handleDescripeChange} value={"0"} className={desActive[0]}>Description</button>
        <button onClick={handleDescripeChange} value={"1"} className={desActive[1]}>Additional Information</button>
        <button onClick={handleDescripeChange} value={"2"} className={desActive[2]}>Reviews[5]</button>

        </div>
  )
}

export default DetailTitre