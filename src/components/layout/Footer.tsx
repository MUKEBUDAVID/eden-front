import {  Link } from "react-router";

function Footer() {
  return (
    <footer>
    <section className="footer_top" >

    <div className="footer_left">
        <span>EDEN.</span>


        <p>
        400 University Drive Suite 200 Coral <br/> Gables, <br />
        FL 33134 USA
        </p>

           

    </div>

    <div className="footer_center">
      <aside>
      <h3>Links</h3>

      <Link to="/">Home</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      </aside>
        


      <aside>
      <h3>Help</h3>

      <Link to="/">Payment Options</Link>
      <Link to="/">Returns</Link>
      <Link to="/">Privacy Policies</Link>
      
      </aside>
    </div>


    <div className="footer_right">
      <h3>Newsletter</h3>

      <form>
        <input type="email" name="mail" id="mail" placeholder="Enter Your Email Address" />
        <button type="submit" title="click" >SUBSCRIBE</button  >
        </form>      
        
    </div>
    
    </section>


    <hr />

    <p className="footer_botton">
       2025 EDEN. All rights reverved
    </p>


    
  </footer>
  )
}

export default Footer