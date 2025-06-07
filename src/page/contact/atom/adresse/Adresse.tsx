// import React from 'react';
import adresseStyle from "./adresse.module.scss";

function Adresse() {
  return (
    <div className={adresseStyle.adresse}>

      <div className={adresseStyle.localisation}>
        <img src="/img/Vector.svg" alt="Vector" />

        <div>
          <h4>Address</h4>

          <p>236 5th SE Avenue <br />
            , New York NY10000,<br />
             United States</p>
        </div>
      </div>

      <div className={adresseStyle.localisation}>

        <img src="/img/phone.svg" alt="phone" />

        <div>
          <h4>Phone</h4>

          <p>
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
            </p>
        </div>

      </div>



      <div className={adresseStyle.localisation}>
        <img src="img/bi_clock.svg" alt="bi_clock" />

<div>
  <h4>Working Time</h4>

  <p>
Monday-Friday: 9:00 <br /> - 22:00 <br />
Saturday-Sunday: 9:00 <br /> - 21:00
</p>
</div>

      </div>



    </div>
  )
}

export default Adresse