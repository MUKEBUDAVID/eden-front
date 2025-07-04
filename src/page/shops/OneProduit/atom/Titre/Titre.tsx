// import React from 'react'
import titreStyle from "./titre.module.scss"
import { useCardContext } from "../../../../../context/CardContext";

function Titre() {
  const {oneCard}=useCardContext();

  return (
      <div className={titreStyle.titre} >
           <h1>{oneCard?.nom}</h1>
          <h3>{oneCard?.prix_reel}</h3>
          </div>
  )
}

export default Titre