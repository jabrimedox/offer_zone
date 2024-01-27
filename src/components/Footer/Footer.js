import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-column">
              <h3>About Us</h3>
              <p>OfferZone IPTV Services is a leading provider of high-quality live TV channels, video on demand, and premium sports channels from around the world. Our goal is to offer our customers an unparalleled entertainment experience with excellent customer service and competitive pricing.</p>
            </div>
            <div className="footer-column">
              <h3>Our Services</h3>
              <ul>
                <li>Live TV Channels</li>
                <li>Video on Demand</li>
                <li>Premium Sports Channels</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li>123 Main St, Anytown USA</li>
                <li>(123) 456-7890</li>
                <li>info@offertzone.com</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footer-row">
            <div className="footer-column">
              <p>© 2023 OfferZone IPTV Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
