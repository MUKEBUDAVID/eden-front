import Titre from "../../atom/Titre/Titre";
import Review from "../../atom/Review/Review";
import Description from "../../atom/Description/Description";
import TypeChoisie from "../TypeChoisie/TypeChoisie";
import Color from "../../atom/color/Color";
import Quantite from "../../atom/Quantite/Quantite";
import Share from "../../atom/Share/Share";
import rightStyle from"./PresentationRight.module.scss";
import { useState } from "react";

interface idProps {
      id: number;
    }


function PresentationRight({id}:idProps) {
   
  const [prixActuel,setPrixActuel]=useState(0);

    return (
     <div className={rightStyle.right}>

        <Titre id={id} prix={{prixActuel,setPrixActuel}}/>
        
         <Review/>

         <Description/>

        <TypeChoisie id={id}/>

        <Color/>

        <Quantite id={id} setPrixActuel={setPrixActuel}/>

        <Share/>

        
        
        </div>

  )
}

export default PresentationRight