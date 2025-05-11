import "./style/App.scss";
import { HeadProvider, Title, Link, Meta} from 'react-head';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";


function App() {
 

  return (
    <>
     <HeadProvider>
    <div className="Home">
      <Title>Home</Title>
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

export default App
