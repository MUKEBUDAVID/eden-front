// import React from 'react'
import filtreAndSearch from "./FiltreAndSearch.module.scss" ;


function FiltreAndSearch() {
  return (
    
  <section className={filtreAndSearch.filtreAndSearch}>

    <div className={filtreAndSearch.filtre}>

      <div className={filtreAndSearch.filtreIcon}>

         <div> 
          <img src="/img/system-uicons_filtering.png" alt="filter_icon"  /> 
         <span>Filter</span>
         </div>
       <img src="/img/ci_grid-big-round.png" alt="filter_icon"  /> 
       <img src="/img/bi_view-list.png" alt="filter_icon"  />

      </div>

    <span className={filtreAndSearch.separateur}></span>


    <p className={filtreAndSearch.pageView}>
      {`Showing ${1}–${16} of ${32} results`}
    </p>
      
    </div>




    <div className={filtreAndSearch.searchBar}>
       <input type="text" placeholder="recherche"  />
      <button type="button"> <img src="/img/akar-icons_search.png" alt="searchIcon"  /></button>
    </div>

  </section>
  )
}

export default FiltreAndSearch