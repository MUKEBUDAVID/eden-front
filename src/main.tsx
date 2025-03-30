import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./style/index.scss"
import App from "./App.tsx"
import { BrowserRouter,Route,Routes } from "react-router";
import About from "./page/about/About.tsx";
import Contact from "./page/contact/Contact.tsx";
import Shop from "./page/shops/Shop.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
