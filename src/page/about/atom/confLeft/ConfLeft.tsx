import {PropsWithChildren} from 'react';
import confLeftStyle from "./confFleft.module.scss"

type Props =PropsWithChildren<{
  confidentElement:{
    h2:string,
    p:string,
    img:string
  },
  
}>



function ConfLeft({confidentElement}:Props) {
  return (
     <div className={confLeftStyle.confLeft}>
            <h2>
              {confidentElement.h2}
            </h2>

            <p>
             {confidentElement.p} 
             </p>


    </div>

  )
}

export default ConfLeft