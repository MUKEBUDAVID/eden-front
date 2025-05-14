// import React from 'react'

import { Link } from "react-router"

function Main() {
  return (
    <main>

  <section className="publicite">
  <span className="shopPage">Shop</span>
  <p className="shopNav">
    <Link to="/" title="nav to home">Home</Link>
    <span>{">"}</span>
    <span title="page actuel">Shop</span></p>
  
  </section>

  <section className="filtreAndSearch">

    <div className="filtre">

      <div className="filtreIcon">

         <div> 
          <img src="/img/system-uicons_filtering.png" alt="filter_icon"  /> 
         <span>Filter</span>
         </div>
       <img src="/img/ci_grid-big-round.png" alt="filter_icon"  /> 
       <img src="/img/bi_view-list.png" alt="filter_icon"  />

      </div>

    <span className="separateur"></span>


    <p className="pageView">
      {`Showing ${1}–${16} of ${32} results`}
    </p>
      
    </div>




    <div className="searchBar">
       <input type="text" placeholder="recherche"  />
      <button type="button"> <img src="/img/akar-icons_search.png" alt="searchIcon"  /></button>
    </div>

  </section>

  <section></section>
  <section></section>
        
    </main>
  )
}

export default Main