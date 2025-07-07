import {  createContext,useState ,Dispatch,SetStateAction, ReactNode, useEffect,useContext} from "react";

export type ProduitType = {
  id:number;
  nom: string;
  descriptive: string;
  prix_actuele: number;
  prix_reel?: number;
  devise?: string;
  etat: string;
  img:string;
  quantite?:number;
  solde: {
    toogle: boolean;
    pourcentage?: number;
  };
 size:{
  width:number,
  length:number,
  heigh:number
 }

};




type propsType={
  children:ReactNode
};


interface StateContextType {
    card: ProduitType[]|null,
    setCard: Dispatch<SetStateAction<ProduitType[] | null>>,

    buyCard: ProduitType[]|null,
    setBuyCard:Dispatch<SetStateAction< ProduitType[] | null>>


}





export const CardContext=createContext<StateContextType|undefined>(undefined);




function CardContextProvider({children}:propsType){
    const [card,setCard]= useState<ProduitType[] | null>(null);
    const [buyCard,setBuyCard]=useState<ProduitType[] | null>(null)

 const getCard = async () => {
  try {
    const response = await fetch("/data/produits.json");
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Fetched data is not JSON");
    }

    const data = await response.json();
    
    
    setCard(data.produits);
    
  } catch (error) {
    console.error("Error fetching card data:", error);
    // Vous pourriez vouloir définir un état d'erreur ici
  }
};
useEffect(()=>{
  getCard();

  


},[])



    return(
    <CardContext.Provider value={{card,setCard,buyCard,setBuyCard}}>
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