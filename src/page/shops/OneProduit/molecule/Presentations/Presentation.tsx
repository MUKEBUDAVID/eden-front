import PresentationLeft from "../../atom/PresentationLeft/PresentationLeft";
import PresentationRight from "../PresentationRight/PresentationRight";
import presentationStyle from"./presentation.module.scss";


interface idProps {
      id: number;
    }

function Presentation({id}:idProps) {
  

 
return (
    <section className={presentationStyle.presentation}>

<PresentationLeft id={id}/>

<PresentationRight id={id}/>
    </section>

  )
}

export default Presentation