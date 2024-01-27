import React from 'react'
import Navbar from '../Navbar/Navbar'
import Dark from '../darkMode/Dark'
import './Instagram.css'
import { useSelector } from 'react-redux';
import {BsInstagram} from 'react-icons/bs'
import InstaPacks from './InstaPacks/InstaPacks'
import NetflixPacks from './Netlflix/NetflixPacks'
// import {motion} from 'framer-motion'



export default function Shop() {
  const state = useSelector(received => received);
  const my_style = {
    backgroundColor: state.bgColor,
    color:state.color.text
  }
  const features1 = ["Speed: 10k/Day ", "Refill: NO REFILL"];
  const features2 = ["Max 5k ", "0-30 Minutes"];
  
  return (

    <div style={my_style}>
      <Navbar />
      <div className='main'>
              <div className='main-div'>
                  <div className='content'>
                       

                      <BsInstagram className='icon' />
                    
                      <p>%25 Sale</p>
                      <p>Buy Cheap Social Media</p>
                      <p>Services & Premium </p>
                      <p>Accounts</p>
                      

                      <p className='small'>Benefit from our guaranteed professional services</p>
                      <button href='/' className='button'>Buy Now</button>
                     
                  </div>
              </div>
             
      </div>
        <div className='main-content '>
                <h1>What Services You Receive ?</h1>
                <p>We perform Like, Follower, Views, Subscriber, etc. Transactions on all Social Media Platforms, There is also a lot of content available for Premium Accounts, Game Accounts, VDS Server Packs, etc.</p>
            
          <div className='containerr'>
          {/* <div className="instaPic">
              <img src={instaPic} alt="insta example" />
            </div>       */}
        <div className='packs-container'>
       
          <InstaPacks />
          <InstaPacks />
          <InstaPacks />
          <InstaPacks />
          <InstaPacks />
        
        </div>
          
        

        
          </div>
          <div className='netflix-packs'>
          <div className='section-header'>
            <h2><span style={{color:'red'}}>Netflix </span> Accounts</h2>
          </div>
          </div>
          <NetflixPacks />
        </div>
       
        

      <Dark />
      </div>
    
  )
}
