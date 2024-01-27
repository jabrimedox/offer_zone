import React from 'react'
import {useSelector} from 'react-redux';
import Home from './components/Home/Home'
// import { Suspense } from 'react';
// import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer'


function App() {
  const state = useSelector(received => received);
  const my_style = {
    backgroundColor: state.bgColor,
    color:state.color.text
  }
 

  
  
  
  return (
    <div style={my_style}>
      
        <Home />
        <Footer />
        
    </div>
  );
}

export default App;
