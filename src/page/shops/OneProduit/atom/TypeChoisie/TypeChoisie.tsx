import {useState} from "react";
import typeChoisieStyle from "./TypeChoisie.module.scss";
import { useCardContext,ProduitType } from '../../../../../context/CardContext';
import Select from "../../../../../components/atom/select/Select";

interface inputValueType{ 
 width:string,
  length:string,
  heigh:string 
}

function TypeChoisie() {

const {setBuyCard,oneCard}=useCardContext();


const [inputDisabled,setInputDisabled]=useState(false);
const [SelectDisabled,setSelectDisabled]=useState(false);
const[inputValue,setInputValue]=useState<inputValueType>({
  width:"0",
  length:"0",
  heigh:"0"

});


  const sizeOptions = [
    { value: "90cm", label: "90cm * 190cm" },
    { value: "120cm", label: "120cm * 190cm" },
    { value: "140cm", label: "140cm * 190cm" },
    { value: "160cm", label: "160cm * 190cm" },
    { value: "180cm", label: "180cm * 190cm" },
  ]



function supprimerDoublonsObjets(tableau:ProduitType[]) {
  const tableauSansDoublons = [];
  const set = new Set();

  for (const objet of tableau) {
    // Convertir l'objet en une chaîne JSON pour la comparaison
    const objetString = JSON.stringify(objet);

    if (!set.has(objetString)) {
      set.add(objetString);
      tableauSansDoublons.push(objet);
    }
  }

  return tableauSansDoublons;
}

// const sizeClik=(event: React.MouseEvent<HTMLButtonElement>)=>{
// event.preventDefault();
// event.stopPropagation();

// setInputValue("");
// setInputDisabled(true);

// const value =event.currentTarget.value as string; 

// let Panier=[{...oneCard,size:value}] as ProduitType[];
//     Panier=supprimerDoublonsObjets(Panier);

// setBuyCard([...Panier]);


// switch (value) {
//     case "90":
//       setsizeActive(["sizeActive","","",""]);
      
//       break;

//       case "120":
//         setsizeActive(["","sizeActive","",""]);
      
//       break;

//       case "140":
//          setsizeActive(["","","sizeActive",""]);
      
//       break;
//       case "180":
//          setsizeActive(["","","","sizeActive"]);

//       break;
  
   
//   }
  

// }

const divActiveInputClik=()=>{
setSelectDisabled(true);
setInputDisabled(false);

  
}

const heighActiveInputClik=()=>{
setSelectDisabled(false);

}

const divActiveSelectClik=()=>{
setSelectDisabled(false);
setInputDisabled(true);


setInputValue({...inputValue,width:"",length:""})

  
}



const customSizeClik=(event: React.SyntheticEvent<HTMLInputElement>)=>{
  event.preventDefault();
  event.stopPropagation();

  let taille={
  width:"0",
  length:"0",
  heigh:"0" 
}
 
const value =event.currentTarget.value as string; 
const name=event.currentTarget.name as string;

 if(name==="heigh"){

setInputValue({...inputValue,[name]:value});
taille={...taille,heigh:value}


let Panier=[{...oneCard,size:{...taille}}] as ProduitType[];

      Panier=supprimerDoublonsObjets(Panier);

    setBuyCard([...Panier]);


 }
  

  if(name==="width"){

setInputValue({...inputValue,[name]:value});
taille={...taille,[name]:value}


let Panier=[{...oneCard,size:{...taille}}] as ProduitType[];

      Panier=supprimerDoublonsObjets(Panier);

    setBuyCard([...Panier]);


 }
  
 
  if(name==="length"){

setInputValue({...inputValue,[name]:value});
taille={...taille,[name]:value}


let Panier=[{...oneCard,size:{...taille}}] as ProduitType[];

      Panier=supprimerDoublonsObjets(Panier);

    setBuyCard([...Panier]);


 }
  
}


  return (
     <div className={ typeChoisieStyle.typeChoisie}>
            <span className={ typeChoisieStyle.size}>Size</span>

            <div className={ typeChoisieStyle.dimension}>
              <div className={ typeChoisieStyle.standart} onClick={divActiveSelectClik} >
              <Select options={sizeOptions } disabled={SelectDisabled} />
               </div>






                  <div className={typeChoisieStyle.speciale}>
                    <div className={typeChoisieStyle.taille} onClick={heighActiveInputClik}>
              <span>heigh *</span>
              <input type="number" name="heigh" required={false} title="cm" min={1} value={inputValue.heigh} onChange={customSizeClik} />
                </div>

                    <div className={typeChoisieStyle.taille} onClick={divActiveInputClik}>
                 <span>width</span>
              <input type="number" name="width" required={true} title="cm" min={1} disabled={inputDisabled} value={inputValue.width} onChange={customSizeClik} />
                </div>
                
                <div className={typeChoisieStyle.taille} onClick={divActiveInputClik}>
              <span>length</span>
              <input type="number" name="length" required={false} title="cm" min={1} disabled={inputDisabled} value={inputValue.length} onChange={customSizeClik} />
                </div>


         


              
                  </div>



             
              
                  </div>
                
              </div>
             

        
  )
}

export default TypeChoisie