// import React from 'react';
import { PropsWithChildren } from "react"
import conftRightStyle from "./conftRight.module.scss"
type Props=PropsWithChildren<{
  img:string
}> 

function ConftRight({img}:Props) {
  return (
   <div className={conftRightStyle.conftRight}>
            <img className={conftRightStyle.vectore_forme1} src="/img/Vector_forme.svg" alt="Vector_forme"  />
            <img className={conftRightStyle.femme_dor1} src={img} alt="femme_dor1"  />
            <img className={conftRightStyle.Frame} src="/img/Frame.svg" alt="Frame"  />
            <img className={conftRightStyle.Frame_1} src="/img/Frame-1.svg" alt="Frame"  />
            <img className={conftRightStyle.Frame_2} src="/img/Frame-2.svg" alt="Frame"  />
    

    </div>
  )
}

export default ConftRight