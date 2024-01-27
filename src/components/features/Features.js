import React from 'react'
import { useSelector } from 'react-redux';

//features.js
import './features.css'

export default function Features(props) {
    const state = useSelector(state=>state)
  return (
    <div className='feature' style={{backgroundColor:state.cardColor}}>
      
              <div className="feature-icon">
                {props.icon}
              </div>
              <h3 style={{color:state.color.text}}>{props.title}</h3>
              <p style={{color:state.color.text}}>{props.text}</p>
    </div>
            
  )
}
