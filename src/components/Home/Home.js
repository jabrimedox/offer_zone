import React from 'react';
import Main from '../Main';
import '../Main.css'
import Navbar from '../Navbar/Navbar'
import '../Navbar/Navbar.css'
import Hero from '../Hero/Hero'
import '../Hero/Hero.css'
import Dark from '../darkMode/Dark';
import {useSelector} from 'react-redux';
import Footer from '../Footer/Footer'

function Home() {
  const state = useSelector(received => received);
  const my_style = {
    backgroundColor: state.bgColor,
    color:state.color.text
  }
  return (
    
    <div style={my_style}>
        <Navbar />
        <Hero />
        <Main />
        <Dark />
        {/* <Footer /> */}
        
        

      
    </div>
  )
}

export default Home
