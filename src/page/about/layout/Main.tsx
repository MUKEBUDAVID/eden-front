// import React from 'react'
import mainStyle from "./Main.module.scss"
function Main() {
  return (
    <main className={mainStyle.mainAbout}>

      <section className={mainStyle.bannier}>
      <h1>About Us</h1>

      <p>
        From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.
      </p>
      </section>

    </main>
  )
}

export default Main