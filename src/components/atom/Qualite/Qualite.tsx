// import React from 'react'
import qualite from "./qualite.module.scss"

function Baniere() {
  return (
    
  <section className={qualite.Qualites}>

    <div className={qualite.ban}>
      <img src="./img/Group.png" alt="Group" />
      <div className={qualite.qualite}>
        <span>High Quality</span>
        <span>crafted from top materials</span>
      </div>
    </div>

    <div className={qualite.ban}>
      <img src="./img/Vector.png" alt="Vector" />
      <div className={qualite.qualite}>
        <span>Warranty Protection</span>
        <span>Over 2 years</span>
      </div>
    </div>

    <div className={qualite.ban}>
      <img src="./img/shipping.png" alt="shipping" />
      <div className={qualite.qualite}>
        <span>Free Shipping</span>
        <span>Order over 150 $</span>
      </div>
    </div>

    <div className={qualite.ban}>
      <img src="./img/customer-support.png" alt="customer-support" />
      <div className={qualite.qualite}>
        <span>24 / 7 Support</span>
        <span>Dedicated support</span>
      </div>
    </div>

    
  </section>
  )
}

export default Baniere