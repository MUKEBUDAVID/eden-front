// import React from 'react'
import shareStyle from "./share.module.scss"

function Share() {
  return (
     <ul className={shareStyle.share}>
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
                <div className={shareStyle.logoSociaux}>
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
  )
}

export default Share