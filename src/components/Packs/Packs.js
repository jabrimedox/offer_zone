import './Packs.css';
import React from 'react';
export default function Packs(props) {

  return (
    <div className="pack" >
              <div className="pack-header">
                <h3>{props.title}</h3>
                <p className="price">${props.price}</p>
              </div>
              <ul className="pack-features">
                {props.features.map((e,i)=><li key={i}>{e}</li>)}
              </ul>
              <a className="btn btn-primary" href='/'>Subscribe</a>
              
    </div>          
  )
}
