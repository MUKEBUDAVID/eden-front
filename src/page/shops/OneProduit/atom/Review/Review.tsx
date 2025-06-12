import reviewStyle from "./review.module.scss"

function Review() {
  return (
     
          <div className={reviewStyle.review}>
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/dashicons_star-filled.svg" alt="dashicons_star"  />
            <img src="/img/carbon_star-half.svg" alt="carbon_star-half"  />
            <div className={reviewStyle.separateur}> </div>
            <p>5 Customer Review</p>
          </div>
  )
}

export default Review