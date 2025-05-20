// import React from "react";
import { HeadProvider, Title, Link, Meta } from 'react-head';
import Header from "../../components/layout/Header/Header";
import Main from "./layout/Main";
import Footer from "../../components/layout/Fouter/Footer";
import { Outlet, useLocation } from 'react-router';

function Shop() {
  const  location =useLocation();
console.log(location.pathname);


  return (
    <>
     <HeadProvider>
                <div className="Home">
                  <Title>Shop</Title>
                  <Link rel="canonical" href="http://jeremygayed.com/" />
                  <Link rel="icon" type="image/svg+xml" href="/react.svg" />
                  <Meta name="example" content="whatever" />
                 </div>

            
        </HeadProvider>

  
   <Header/>
   {
    location.pathname=="/Shop"? <Main/>:<Outlet/>

        
}
        <Footer/>
  

    
        
    
    </>
  )
}

export default Shop