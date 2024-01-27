import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs';


function InstaPacks(props) {
 
  return (
    <div>

      <div className="insta-cart">
              <div className="cart-image">
                  <img src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_lim.size_1200x630.v1582751026.png" alt="Product Image" />
                <div className="price-tag">
                  <span id="priceSpan">$20.00</span>
                </div>
              </div>
              <div className="title">
                <h4>Netflix 1 Month</h4>
              </div>
              <div className="add-to-cart">
                <button>Add to Cart</button>
              </div>
      </div>

     </div>
       
      
  )
}

export default InstaPacks
