import PresentationLeft from "../../atom/PresentationLeft/PresentationLeft";
import PresentationRight from "../PresentationRight/PresentationRight";
import presentationStyle from"./presentation.module.scss"

function Presentation() {

 
return (
    <section className={presentationStyle.presentation}>

<PresentationLeft/>

<PresentationRight/>
    </section>

  )
}

export default Presentation