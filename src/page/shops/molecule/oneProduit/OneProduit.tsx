// import React from "react";
import { useState } from "react";
import  "./OneProduit.scss";
import { Link } from "react-router";
import VoirePlus from "../../../../components/atom/VoirePlus/VoirePlus";
import { useCardContext } from "../../../../context/CardContext";
import Produit from "../../../../components/atom/Produit/Produit"

function OneProduit() {
const[name,setName]=useState<string>("kilelo");
const[urlItem,seturlItem]=useState<string | undefined>("Asgaardsofa3.png");
const[active,setActive]=useState<Array<string>>(["active","","",""]);
const[width,setWidth]=useState<string>("");
const [sizeActive,setsizeActive]=useState<Array<string>>(["sizeActive","","",""]);
const [quantite,setQuantite]=useState<number>(0);
const [desActive,setDesActive]=useState<Array<string>>(["descriActive","",""]);
 const {card}=useCardContext();

 console.log(card);
 




const handleDescripeChange=(event:React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
event.stopPropagation();

const value =event.currentTarget.value;


switch (value) {
    case "0":
      setDesActive(["descriActive","","",""]);
      
      break;

      case "1":
        setDesActive(["","descriActive","",""]);
      
      break;

      case "2":
         setDesActive(["","","descriActive"]);
      
      break;
  
   
  }
  


}

const changeQuantie=(event:React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
event.stopPropagation();

const value =event.currentTarget.value as string; 


if(value=="+" ){
  setQuantite(quantite+1)

};


if(value=="-" && quantite>0){
  setQuantite(quantite-1)

};

}

const sizeClik=(event: React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
event.stopPropagation();
console.log(width);
const value =event.currentTarget.value as string; 

setWidth(value);


switch (value) {
    case "90":
      setsizeActive(["sizeActive","","",""]);
      
      break;

      case "120":
        setsizeActive(["","sizeActive","",""]);
      
      break;

      case "140":
         setsizeActive(["","","sizeActive",""]);
      
      break;
      case "180":
         setsizeActive(["","","","sizeActive"]);

      break;
  
   
  }
  

}

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
          <div className="review">
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/carbon_star-half.svg" alt="carbon_star-half"  />
            <div className="separateur"> </div>
            <p>5 Customer Review</p>
          </div>
          <p className="discription">
    Setting the bar as one of the loudest speakers in its class,
     the Kilburn is a compact, stout-hearted hero with a well-balanced 
     audio which boasts a clear midrange and extended highs for a sound.
               </p>
          <div className="typeChoise">
            <span className="size">Size</span>

            <div className="dimension">
              <div className="standart">
              <button onClick={sizeClik} id={sizeActive[0]} value={"90"} type="button" title="90cm * 190cm">90 cm</button>
              <button onClick={sizeClik} id={sizeActive[1]} value={"120"} type="button" title="120cm * 190cm">120 cm</button>
              <button onClick={sizeClik} id={sizeActive[2]} value={"140"} type="button" title="140cm * 190cm">140 cm</button>
              <button onClick={sizeClik} id={sizeActive[3]} value={"180"} type="button" title="180cm * 190cm">180 cm</button>
               </div>

              <div className="speciale">
                <div className="taille">
                <span>width</span>
              <input type="number" min={1} />
                </div>
                
                <div className="taille">
              <span>length</span>
              <input type="number" min={1} />
                </div>
              
              </div>
             </div>

          </div>

          <div className="color">
            <span>color</span>

            <div className="colorList">
            <div className="red"></div>
            <div className="yello"></div>
            <div className="blue"></div>
            </div>
            
          </div>


          <div className="quantite">

            <div className="choix_quantite">
              <button onClick={changeQuantie} value={"+"} type="button" className="plus">+</button>
              <span>{quantite}</span>
              <button onClick={changeQuantie} value={"-"} type="button" className="Moin">-</button>
              </div>

              <button type="button" className="addToCardt"> Add To Cart</button>

          </div>


            <ul className="share">
              <li>
               <span>SKU</span> 
               <span>:</span>
               <span> SS001</span>
              </li>

              <li>
                <span>Category</span>
                <span>:</span> 
                <span>Sofas</span>
               </li>

              <li>
                <span>Tags</span>
                <span>:</span> 
                <span>Sofa, Chair, Home, Shop</span>

              </li>

              <li>
                <span>Share</span>
                <span>:</span> 
                <div className="logoSociaux">
                  <a href="www.facebook.com" title="facebook">
                    <img src="/img/facebook.png" alt="facebook icon"  />
                     </a>

                      <a href="www.linkedin.com" title="linkedin">
                    <img src="/img/linkedin.png" alt="linkedin"  />
                     </a>

                      <a href="www.twitter.com" title="twitter">
                    <img src="/img/twitter.png" alt="twitter"  />
                     </a>
                </div>
                </li>

              </ul>

           
          


        </div>

      </div>

      <div className="description">
        <div className="titre">

        <button onClick={handleDescripeChange} value={"0"} className={desActive[0]}>Description</button>
        <button onClick={handleDescripeChange} value={"1"} className={desActive[1]}>Additional Information</button>
        <button onClick={handleDescripeChange} value={"2"} className={desActive[2]}>Reviews[5]</button>

        </div>
        
      <div className="text">
        <p>
        <span>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
           portable active stereo speaker takes the unmistakable look and 
           sound of Marshall, unplugs the chords, and takes the show on the
            road.</span>
   <br />
   <br />
           <span>
            Weighing in under 7 pounds, the Kilburn is a lightweight 
            piece of vintage styled engineering. Setting the bar as one of 
            the loudest speakers in its class, the Kilburn is a compact, 
            stout-hearted hero with a well-balanced audio which boasts a 
            clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the 
            guitar-influenced leather strap enables easy and stylish travel.
           </span>
            </p>

        <div className="descriptImg">
       <img src="/img/sofaottoman_1.jpg" alt="sofaottoman_1" />
        <img src="/img/sofaottoman_2.jpg" alt="sofaottoman_2" />
        </div>
        
      </div>

      </div>

      <div className="related">
      <h2>Related Products</h2>

<div className="listeProduit">
  {card? <Produit rendererItem={4} cards={card.produits}/>:<p>Chargement...</p>}
      

</div>
      
        <VoirePlus/>
      


      </div>
        
    </section>
  )
}

export default OneProduit