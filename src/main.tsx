 import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./main.scss"
import Home from "./page/home/Home.tsx"
import { BrowserRouter,Route,Routes } from "react-router";
import About from "./page/about/About.tsx";
import Contact from "./page/contact/Contact.tsx";
import Shop from "./page/shops/Shop.tsx";
import CardContextProvider from "./context/CardContext.tsx";
import OneProduit from "./page/shops/OneProduit/OneProduit.tsx";

createRoot(document.getElementById('root')!).render(
 
  <StrictMode>
    <CardContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/shop" element={<Shop />} >
      <Route path="oneProduit" element={<OneProduit />} />
      </Route>

     </Routes>
    </BrowserRouter>
    </CardContextProvider>
     </StrictMode>
    
)
