import React from 'react'
import './Main.css'
import {CgScreen} from 'react-icons/cg';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import {AiOutlineWifi} from 'react-icons/ai';
import {FaComments} from 'react-icons/fa';
import Packs from './Packs/Packs';
import Features from './features/Features';
import { useSelector } from 'react-redux';
import {BsWhatsapp} from 'react-icons/bs';
export default function Main() {
  const featurePacks = ["+180000 Chaine", "+10000 Movies AR FR EN SP", "Smart TVs, smartphones, PCs..", "+5000 Series SD/HD/FULLHD/4K", "Free Update", "Premium channels", "24/7 support", "99.9% Availability" ];
  const state = useSelector(state=>state)
  return (
    <div>
      <section id="our-packs">
        <div className="container">
          <div className="section-header">
            <h2 style={{color:`${state.color.h2}`}}>IPtv Packs</h2>
            <p style={{color:state.color.text}}>Choose the perfect pack that suits your needs and enjoy unlimited entertainment</p>
          </div>
          <div className='centralize'>
     
            <Packs title="3 Month" price="14.99" features={featurePacks} />
            <Packs title="12 Month" price="14.99" features={featurePacks} />
            <Packs title="6 Month" price="14.99" features={featurePacks} />
           
          </div> 
          

        </div>
      </section>
      {/* Main features */}
      <section id="main-features">
        <div className="container">
          <div className="section-header">
            <h2 style={{color:state.color.h2}}>Main Features</h2>
            <p style={{color:state.color.text}}>Discover why our IPTV service is the best on the market</p>
          </div>
          <div className="features">
          <Features icon= {<CgScreen />} title="Over 1000 Live TV Channels" text="Enjoy a wide variety of TV channels from around the world, including sports, movies, news, and more." />
            <Features icon= {<BsFillCameraVideoFill />} title="Access to On-Demand Movies and TV Shows" text="Get access to a large library of on-demand movies and TV shows, including the latest releases and popular classics." />
            <Features icon= {<AiOutlineWifi />} title="Multi-Device Support" text="Watch IPTV on multiple devices, including your TV, computer, tablet, and smartphone, with no extra fees or charges." />
            <Features icon={<FaComments />} title="24/7 Customer Support" text="Our friendly and knowledgeable support team is available 24/7 to assist you with any questions or issues you may have." />
            <Features icon={<FaComments />} title="24/7 Customer Support" text="Our friendly and knowledgeable support team is available 24/7 to assist you with any questions or issues you may have." />
              
          </div>
        </div>
      </section>
      {/* whatsap  */}

      <a className="float" href='/'>
        <BsWhatsapp className='whatsapp-icon' />
      </a>

    </div>
  )
}
