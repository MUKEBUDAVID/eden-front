// import {useState} from "react";
import DetailText from "../../atom/DetailText/DetailText";
import DetailTitre from "../../atom/DetailTitre/DetailTitre";
import detailStyle from "./detail.module.scss"

function Description() {



  return (
         <section className={detailStyle.detail}> 
         <DetailTitre/>
          <DetailText/>
         </section>
  )
}

export default Description