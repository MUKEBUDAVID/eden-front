import React from "react";
import { HeadProvider, Title, Link, Meta } from 'react-head';
import Header from "../../components/layout/Header/Header";
// import Main from "./components/main";
import Footer from "../../components/layout/Fouter/Footer";


function About() {
  return (
    <>
      <HeadProvider>
        <div className="Home">
          <Title>About</Title>
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

export default About