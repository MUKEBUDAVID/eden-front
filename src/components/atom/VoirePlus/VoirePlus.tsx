// import React from 'react'
import voirePlus  from "./VoirePlus.module.scss";
import { Link } from "react-router";


function VoirePlus() {
  return (
<button type="button" title="click" className={voirePlus.voirePlus}><Link to={"/Shop"}>voire Plus</Link> </button>
  )
}

export default VoirePlus