// import React from "react";
import "../../style/shop.scss";
import { HeadProvider, Title, Link, Meta } from 'react-head';
import Header from "../../components/layout/Header";
import Main from "./layout/Main";
import Footer from "../../components/layout/Footer";
function Shop() {
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
        <Main/>
        <Footer/>
    
    </>
  )
}

export default Shop