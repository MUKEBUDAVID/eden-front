// import React from 'react'
import baniere from "./Baniere.module.scss"

function Baniere() {
  return (
    
  <section className={baniere.baniere}>

    <div className={baniere.ban}>
      <img src="./img/Group.png" alt="Group" />
      <div className={baniere.qualite}>
        <span>High Quality</span>
        <span>crafted from top materials</span>
      </div>
    </div>

    <div className={baniere.ban}>
      <img src="./img/Vector.png" alt="Vector" />
      <div className={baniere.qualite}>
        <span>Warranty Protection</span>
        <span>Over 2 years</span>
      </div>
    </div>

    <div className={baniere.ban}>
      <img src="./img/shipping.png" alt="shipping" />
      <div className={baniere.qualite}>
        <span>Free Shipping</span>
        <span>Order over 150 $</span>
      </div>
    </div>

    <div className={baniere.ban}>
      <img src="./img/customer-support.png" alt="customer-support" />
      <div className={baniere.qualite}>
        <span>24 / 7 Support</span>
        <span>Dedicated support</span>
      </div>
    </div>

    
  </section>
  )
}

export default Baniere