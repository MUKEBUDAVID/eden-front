import {useEffect, useState} from "react";
import typeChoisieStyle from "./TypeChoisie.module.scss";
import {  useCardContext } from '../../../../../context/CardContext';
import Select from "../../../../../components/atom/select/Select";


interface inputValueType{ 
 width:string,
  length:string,
  heigh:string 
}
interface idProps {
      id: number;
    }


function TypeChoisie({id}:idProps) {

  const {setCard}=useCardContext();


const [inputDisabled,setInputDisabled]=useState(false);
const [SelectDisabled,setSelectDisabled]=useState(false);
const[inputValue,setInputValue]=useState<inputValueType>({
  width:"0",
  length:"0",
  heigh:"0"

});



  useEffect(() => {
   
    return () => {
  updateItemSize(id,"","width");
  updateItemSize(id,"","length");
  updateItemSize(id,"","heigh");
    };
  }, []);

 const sizeOptions = [
    { value: "90cm", label: "90cm * 190cm" },
    { value: "120cm", label: "120cm * 190cm" },
    { value: "140cm", label: "140cm * 190cm" },
    { value: "160cm", label: "160cm * 190cm" },
    { value: "180cm", label: "180cm * 190cm" },
  ]

     let taille={
  width:"0",
  length:"0",
  heigh:"0" 
}



const updateItemSize = (identifian: number, newSize: string, taille: string) => {
  setCard(prevCard => {
    // Si prevCard est null ou undefined, retourner un tableau vide (ou gérer l'erreur différemment)
    if (!prevCard) {
      console.error("prevCard is null or undefined");
      return []; // ou throw new Error("Card state is not initialized");
    }

    return prevCard.map(item => {
      if (item.id === identifian) {
        return {
          ...item,
          size: {
            ...item.size,
            [taille]: newSize
          }
        };
      }
      return item;
    });
  });
};
  

const divActiveInputClik=()=>{
setSelectDisabled(true);
setInputDisabled(false);

  
}


const divActiveSelectClik=()=>{
setSelectDisabled(false);
setInputDisabled(true);

/// reinitialisation de Input
setInputValue({...inputValue,width:"",length:""})

  
}

const customSizeClik=(event: React.SyntheticEvent<HTMLInputElement>)=>{
  event.preventDefault();
  event.stopPropagation();

 

const value =event.currentTarget.value as string; 
const name=event.currentTarget.name as string;



 if(name==="heigh"){

setInputValue({...inputValue,[name]:value});

taille={...taille,heigh:value};
   
 updateItemSize(id,value,name)




 } 
 

  if(name==="width"){

setInputValue({...inputValue,[name]:value});

taille={...taille,heigh:value};
   
 updateItemSize(id,value,name)



 }
  
 
  if(name==="length"){

setInputValue({...inputValue,[name]:value});

taille={...taille,heigh:value};
   
 updateItemSize(id,value,name)



 }



}

const selectSize=(value:string)=>{
  const local=value.split("c");

  updateItemSize(id,local[0],"width");
  updateItemSize(id,"190","length");

 
}


 return (
     <div className={ typeChoisieStyle.typeChoisie}>
            <span className={ typeChoisieStyle.size}>Size</span>

            <div className={ typeChoisieStyle.dimension}>
              <div className={ typeChoisieStyle.standart} onClick={divActiveSelectClik} >
              <Select options={sizeOptions } onChange={(value)=>{ selectSize(value)
              }} disabled={SelectDisabled} />
               </div>


                      <div className={typeChoisieStyle.speciale}>
                    <div className={typeChoisieStyle.taille} >
              <span>heigh *</span>
              <input type="number" name="heigh" required={true} title="cm" min={1} value={inputValue.heigh} onChange={customSizeClik} />
                </div>

                    <div className={typeChoisieStyle.taille} onClick={divActiveInputClik}>
                 <span onClick={divActiveInputClik}>width</span >
              <input type="number" name="width" required={true} title="cm" min={1} disabled={inputDisabled} value={inputValue.width} onChange={customSizeClik} />
                </div>
                
                <div className={typeChoisieStyle.taille} onClick={divActiveInputClik}>
              <span onClick={divActiveInputClik}>length</span>
              <input type="number" name="length" required={false} title="cm" min={1} disabled={inputDisabled} value={inputValue.length} onChange={customSizeClik} />
                </div>


         


              
                  </div>



             
              
                  </div>
                
              </div>
             

        
  )


}







 








 










 
  

 






export default TypeChoisie