import {useState ,Dispatch,SetStateAction} from "react";
import { Link } from "react-router";
import quantiteStyle from "./quantite.module.scss"
import { useCardContext } from "../../../../../context/CardContext";
import { ProduitType } from "../../../../../context/CardContext";

interface idProps {
      id: number;
      setPrixActuel:React.Dispatch<React.SetStateAction<number>>
    }

type setMyArrayType =Dispatch<SetStateAction<ProduitType[] | null>>
type myArrayType=ProduitType[]|null;

function Quantite({id,setPrixActuel}:idProps) {
const {card,setBuyCard,buyCard,setCard}=useCardContext();
 const [quantite,setQuantite]=useState<number>(1);



//   function supprimerDoublonsObjets(tableau:ProduitType[]) {
//   const tableauSansDoublons = [];
//   const set = new Set();

//   for (const objet of tableau) {
//     // Convertir l'objet en une chaîne JSON pour la comparaison
//     const objetString = JSON.stringify(objet);

//     if (!set.has(objetString)) {
//       set.add(objetString);
//       tableauSansDoublons.push(objet);
//     }
//   }

//   return tableauSansDoublons;
// }

   const addObjectToArray = (newObject: ProduitType, myArray: myArrayType, setMyArray: setMyArrayType) => {
  // Si myArray est null, on commence avec un tableau vide
  const currentArray = myArray || [];
  
  // Crée une nouvelle copie du tableau avec le nouvel objet
  const newArray = [...currentArray, newObject];

  // Met à jour l'état avec le nouveau tableau
  setMyArray(newArray);
};



const changeQuantie = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  event.stopPropagation();

  const value = event.currentTarget.value as string;
  let newQuantite = quantite;

  if (value === "+") {
    newQuantite = quantite + 1;
  } else if (value === "-" && quantite > 1) {
    newQuantite = quantite - 1;
  } else {
    return; // pas de changement nécessaire
  }

/// modification de la quatite affiche localement
  setQuantite(newQuantite);

/// mise a jour du prix parapport a la quatite  
  if (card) {
    setPrixActuel(newQuantite* card[id].prix_actuele)
    }


/// modification de la quatite affiche globalement
    setCard(prevItems => {
    if (!prevItems) return null;
    return prevItems.map(item => 
      item.id === id ? {...item, quantite: newQuantite} : item
    );
  });
};

const createPanier = () => {
  if (!card) return; // Protection supplémentaire
  
  const panierItem = card.find(item => item.id === id); // Plus sûr que card[id]
  if (!panierItem) return;

  addObjectToArray(panierItem, buyCard, setBuyCard);
}


  return (
     <div className={ quantiteStyle.quantite}>

            <div className={ quantiteStyle.choix_quantite}>
              <button onClick={changeQuantie} value={"+"} type="button" className={ quantiteStyle.plus}>+</button>
              <span>{quantite}</span>
              <button onClick={changeQuantie} value={"-"} type="button" className={ quantiteStyle.Moin}>-</button>
              </div>

              

                 <Link to={"/Shop/Carts"} className={ quantiteStyle.addToCardt}  title="add to cart" onClick={createPanier}>
                 Add To Cart
              </Link>
             

          </div>
  )
}

export default Quantite