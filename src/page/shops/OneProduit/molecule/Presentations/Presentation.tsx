import PresentationLeft from "../../atom/PresentationLeft/PresentationLeft";
import PresentationRight from "../PresentationRight/PresentationRight";
import presentationStyle from"./presentation.module.scss"

function Presentation() {

 
return (
    <div className={presentationStyle.presentation}>

<PresentationLeft/>

<PresentationRight/>
    </div>

  )
}

export default Presentation