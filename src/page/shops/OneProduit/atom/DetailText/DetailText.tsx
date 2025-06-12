// import React from 'react'
import detailTextStyle from "./DetailText.module.scss";


function DetailText() {
  return (
     <div className={detailTextStyle.text}>
        <p>
        <span>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
           portable active stereo speaker takes the unmistakable look and 
           sound of Marshall, unplugs the chords, and takes the show on the
            road.</span>
   <br />
   <br />
           <span>
            Weighing in under 7 pounds, the Kilburn is a lightweight 
            piece of vintage styled engineering. Setting the bar as one of 
            the loudest speakers in its class, the Kilburn is a compact, 
            stout-hearted hero with a well-balanced audio which boasts a 
            clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the 
            guitar-influenced leather strap enables easy and stylish travel.
           </span>
            </p>

        <div className={detailTextStyle.detailImg}>
       <img src="/img/sofaottoman_1.jpg" alt="sofaottoman_1" />
        <img src="/img/sofaottoman_2.jpg" alt="sofaottoman_2" />
        </div>
        
      </div>
  )
}

export default DetailText