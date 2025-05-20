import {  createContext,useState ,Dispatch,SetStateAction, ReactNode, useEffect,useContext} from "react";

type ProduitType = {
  nom: string;
  descriptive: string;
  prix_actuele: number;
  prix_reel?: number;
  devise?: string;
  etat: string;
  img:string;
  solde: {
    toogle: boolean;
    pourcentage?: number;
  };
};

type Cards = {
  produits: ProduitType[];
};

type propsType={
  children:ReactNode
};


interface StateContextType {
    card: Cards|null,
    setCard: Dispatch<SetStateAction<Cards | null>>;


}





export const CardContext=createContext<StateContextType|undefined>(undefined);




function CardContextProvider({children}:propsType){
    const [card,setCard]= useState<Cards | null>(null);

useEffect(()=>{
  fetch("./data/produits.json").then((response)=>{
    
    if (!response.ok) {
        throw new Error("json error " + response.status);
    }
    return response.json()

    }).then((json)=>{
    
    setCard(json)
    
    })

  
},[])



    return(
    <CardContext.Provider value={{card,setCard}}>
        {children}
</CardContext.Provider>
    )
}

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};


export default CardContextProvider;