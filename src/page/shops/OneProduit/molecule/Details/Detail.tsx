// import {useState} from "react";
import DetailText from "../../atom/DetailText/DetailText";
import DetailTitre from "../../atom/DetailTitre/DetailTitre";
import detailStyle from "./detail.module.scss"

function Description() {



  return (
         <div className={detailStyle.detail}> 
         <DetailTitre/>
          <DetailText/>
         </div>
  )
}

export default Description