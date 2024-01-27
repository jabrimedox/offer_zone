import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='heroshima'>
            <div className='content'>
                <p>Discover a World of Entertainment with OfferZone IPTV Services</p>
                <p>Stream all your favorite sports and matches in high definition with OfferZone IPTV. Get access to over 5000 channels from around the world, including premium sports channels. Whether it's football, basketball, cricket or any other sport, we've got you covered. With OfferZone IPTV, you can watch your favorite teams play live, even if you're on the go. Select a Pack and Subscribe now and start watching your favorite sport and matches.</p>
                {/* <button href='/' className='button'>Get IPTV Now</button> */}
                <a href="#buy" className="btn btn-white btn-animate">Get OfferZone IPTV Now</a>
            </div>
            </div>
        </div>
    )
}

export default Hero