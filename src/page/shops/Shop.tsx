import React from "react";
import { HeadProvider, Title, Link, Meta } from 'react-head';
import Header from "../../components/Header";
// import Main from "./components/main";
import Footer from "../../components/footer";
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
        <main></main>
        <Footer/>
    
    </>
  )
}

export default Shop