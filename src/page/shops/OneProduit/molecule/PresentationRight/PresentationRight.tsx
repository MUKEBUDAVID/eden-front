import Titre from "../../atom/Titre/Titre";
import Review from "../../atom/Review/Review";
import Description from "../../atom/Description/Description";
import TypeChoisie from "../../atom/TypeChoisie/TypeChoisie";
import Color from "../../atom/color/Color";
import Quantite from "../../atom/Quantite/Quantite";
import Share from "../../atom/Share/Share";
import rightStyle from"./PresentationRight.module.scss";

interface idProps {
      id: number;
    }


function PresentationRight({id}:idProps) {
   

    return (
     <div className={rightStyle.right}>

        <Titre/>
        
         <Review/>

         <Description/>

        <TypeChoisie id={id}/>

        <Color/>

        <Quantite/>

        <Share/>

        
        
        </div>

  )
}

export default PresentationRight