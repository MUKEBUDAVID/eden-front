// import React from 'react'
import Confident from "../molecule/confident/Confident"
import mainStyle from "./Main.module.scss"
function Main() {


const confidentElement=[
  {
  h2:` Developing Confident and
        Successful Learners`
     ,

 p: `
    Ut enim ad minima veniam,
     quis nostrum exercitationem 
     ullam corporis suscipit laboriosam, 
     nisi ut al Ut enim ad minima veniam,
      quis nostrum exercitationem ullam
       corporis suscipit laboriosam, nisi ut al
     ` ,
  img:"/img/femme_dor1.jpg"     

},
{
  h2:` Enjoy Learning with a Unique 
      Classroom Experience`
     ,

 p: `
    Ut enim ad minima veniam, 
    quis nostrum exercitationem ullam corporis 
    suscipit laboriosam, nisi ut al Ut enim ad 
    minima veniam, quis nostrum exercitationem 
    ullam corporis suscipit laboriosam, nisi ut al
     ` ,


 img:"/img/delivery_truck.jpg" 
},
{
   h2:` Passionate Teachers That
         Make a Difference`
     ,

 p: `
    Ut enim ad minima veniam, 
    quis nostrum exercitationem ullam 
    corporis suscipit laboriosam,
     nisi ut al Ut enim ad minima veniam
     quis nostrum exercitationem ullam corporis 
     suscipit laboriosam,
     nisi ut 
     ` ,
  img:"/img/vector_quality.jpg"   

}
]



  return (
    <main className={mainStyle.mainAbout}>

      <section className={mainStyle.bannier}>
      <h1>About Us</h1>

      <p>
        From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.
      </p>
      </section>

      <section className={mainStyle.presentation}>

        <div className={mainStyle.titre}>
          <h1>Preparing Students to Achieve Success</h1>
          <img src="/img/trace.svg" alt="tracee_svg"  />
        </div>


        <Confident  ordre="normale"  confidentElement={confidentElement[0]}/>
        <Confident  ordre="riverse"  confidentElement={confidentElement[1]}/>
        <Confident  ordre="normale"  confidentElement={confidentElement[2]}/>
          


      </section>

    </main>
  )
}

export default Main