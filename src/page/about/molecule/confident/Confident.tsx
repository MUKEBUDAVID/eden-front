// import React from 'react'
import { PropsWithChildren} from "react"
import ConfidentStyle from "./Confident.module.scss"
import ConfLeft from "../../atom/confLeft/ConfLeft"
import ConftRight from "../../atom/confRignt/ConftRight"

type Props =PropsWithChildren<{
  confidentElement:{
    h2:string,
    p:string,
    img:string
  },
  ordre:string,
}>



function Confident({confidentElement,ordre}:Props) {

  
return (
    
        <div className={ConfidentStyle.confident}>
{ordre==="normale"?
<>
<ConfLeft confidentElement={confidentElement}/>
<ConftRight img={confidentElement.img}/>
</>
:
<>
<ConftRight img={confidentElement.img}/>
<ConfLeft confidentElement={confidentElement}/>
</>



  
}
         

        </div>
  )
}

export default Confident