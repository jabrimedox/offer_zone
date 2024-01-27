import React from 'react'
import image from '../../images/Netflix-1.svg'

function NetflixPacks() {
  return (
    <div>
      <div className="netflix-packs-container">
        <div className="n-pack">
          <h2>Netflix Premium 4K 1Month</h2>
          <img src={image} alt="Basic Pack" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel velit mauris. Donec in lorem vel elit consectetur sodales.</p>
          <div className="n-price">$5/month</div>
          <ul className="n-features">
            <li>✅ Works on any device.</li>
            <li>✅ You can change the language while watching.
</li>
            <li>✅ The account won't stop working if you don't change credentials (email, password).</li>
            <li>✅ Contact us for any issue, if the account stops working before the duration
</li>
            <li>✅Safety Account Warranty 100%</li>
            
            
          </ul>
          <a href="#" className="cta">Choose Basic Pack</a>
        </div>
        <div className="n-pack">
          <h2>NETFLIX PREMIUM 4K 1YEAR</h2>
          <img src={image} alt="Standard Pack" />
          <p>The account lasts with you for an Unlimited period of Time if you follow the rules + WARRANTY 1 Year</p>
          <div className="n-price">$30 For once</div>
          <ul className="n-features">
            <li>Access to FULL HD/4K</li>
            <li>free replacement if the account stops working</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <a href="#" className="cta">Choose Standard Pack</a>
        </div>
        <div className="n-pack">
          <h2>Netflix Premium 4K 3month</h2>
          <img src={image} alt="Premium Pack" />
          <p></p>
          <div className="n-price">$15</div>
          <ul className="n-features">
          <li>Works on any device.</li>
            <li>You can change the language while watching.</li>
            <li>The account won't stop working if you don't change credentials (email, password).</li>
            <li>Contact us for any issue, if the account stops working before the duration</li>
            <li>Safety Account Warranty 100%</li>
          </ul>
          <a href="#" className="cta">Choose Premium Pack</a>
        </div>
        </div>
    </div>
  )
}

export default NetflixPacks
