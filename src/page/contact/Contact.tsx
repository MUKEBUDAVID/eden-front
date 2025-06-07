// import React from "react";
import { HeadProvider, Title, Link, Meta } from 'react-head';
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Fouter/Footer";
import Main from "./layout/Main";


function Contact() {
  return (
    <>
    <HeadProvider>
            <div className="Home">
              <Title>Contact</Title>
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

export default Contact