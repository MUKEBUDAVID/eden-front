// import React from "react";
import { useState } from "react";
import  "./OneProduit.scss";
import { Link } from "react-router";

function OneProduit() {
const[name,setName]=useState<string>("kilelo");
const[urlItem,seturlItem]=useState<string | undefined>("Asgaardsofa3.png");
const[active,setActive]=useState<Array<string>>(["active","","",""]);

const handleItemChange = (event: React.MouseEvent<HTMLImageElement>) => {
  event.preventDefault();
  event.stopPropagation();

  // Pour accéder au src, vous devez caster le target en HTMLImageElement
  const target = event.target as HTMLImageElement;
  seturlItem(target.src.split('/').pop());
   const alt=target.alt;
  console.log(target.alt);

  switch (alt) {
    case "siege_simple":
      setActive(["active","","",""]);
      
      break;

      case "flocon":
        setActive(["","active","",""]);
      
      break;

      case "capot":
         setActive(["","","active",""]);
      
      break;
      case "berceau":
         setActive(["","","","active"]);

      break;
  
   
  }
  

};


console.log(setName);

  return (

    <section className="oneProduit">

      <div className="navigation">

        <div className="left">

          <Link to={"/"}>Home</Link> 
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />
        <Link to={"/shop"}>Shop</Link>
        <img src="/img/VectorArrow.svg" alt="VectorArrow"  />

        <div className="separateur"></div>

       <p className="active">{name}</p>

          </div> 
        
      </div>

      <div className="presentation">

        <div className="left">
          <div className="listItem">
            <img onClick={handleItemChange} className={`${active[0]}`} src="/img/autresProduits/siege_simple.png" alt="siege_simple" />
            <img onClick={handleItemChange} className={`${active[1]}`} src="/img/autresProduits/flocon.png" alt="flocon" />
            <img onClick={handleItemChange} className={`${active[2]}`} src="/img/autresProduits/capot.png" alt="capot" />
            <img onClick={handleItemChange} className={`${active[3]}`} src="/img/autresProduits/berceau.png" alt="berceau" />
          </div>
          <div className="item"><img src={`/img/autresProduits/${urlItem}`} alt="item"  /></div>
        </div>

        <div className="right">
          <h1>Asgaard sofa</h1>
          <h3>Rs. 250,000.00</h3>
          <div>
            <img src="" alt=""  />
            <img src="" alt=""  />
            <img src="" alt=""  />
            <img src="" alt=""  />
            <img src="" alt=""  />
            <div className="sepateur"> </div>
            <p>5 Customer Review</p>
          </div>
          <p>
    Setting the bar as one of the loudest speakers in its class,
     the Kilburn is a compact, stout-hearted hero with a well-balanced 
     audio which boasts a clear midrange and extended highs for a sound.
 </p>
          <div>
            <span>Size</span>
            <div>
              <div>90</div>
              <div>120</div>
              <div>180</div>
              <div className="speciale">
                <button type="button">Largeur</button>
              <input type="text" />
              <button type="button">Longeur</button>
              <input type="text" />

              </div>
            </div>
          </div>

          <div className="color">
            <div>red</div>
            <div>yello</div>
            <div>blue</div>
          </div>

          <div>

            <div>
              <button type="button"></button>
              <span></span>
              <button type="button"></button>
              </div>

              <button type="button"> Add To Cart</button>

          </div>

          <div>
            <div>
              <p>
               <span>SKU</span> 
               <span>:</span>
               <span>SS001</span>
              </p>

              <p>
                <span>Category</span>
                <span>:</span> 
                <span>Sofas</span>
               </p>

              <p>
                <span>Tags</span>
                <span>:</span> 
                <span>Sofa, Chair, Home, Shop</span>

              </p>

              <div>
                <span>Share</span>
                <span>:</span> 
                <div>
                  <a href="www.facebook.com">
                    <img src="/img/facebook.png" alt="facebook icon"  />
                     </a>

                      <a href="www.linkedin.com">
                    <img src="/img/linkedin.png" alt="linkedin"  />
                     </a>

                      <a href="www.twitter.com">
                    <img src="/img/twitter.png" alt="twitter"  />
                     </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <div>
        <h5>Description</h5>
        <h5>Additional Information</h5>
        <h5>Reviews[5]</h5>
        </div>
        
      <div>
        <p></p>

        <div>
       <img src="/img/sofaottoman_1" alt="sofaottoman_1" />
        <img src="/img/sofaottoman_2" alt="sofaottoman_2" />
        </div>
        
      </div>

      </div>

      <div className="related">
      <h2>Related Products</h2>

      {/* <Produit/> */}

      {/* <show more/> */}

      </div>
        
    </section>
  )
}

export default OneProduit