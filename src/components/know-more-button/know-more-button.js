import React from 'react';
import './know-more-button.css';
import buttonImage from '../../imgs/Group 4013.png'
export default function KnowMoreButton() {
  return (
    <div className="text-center">
      <img src={buttonImage}></img>
      <p className="text-white h5 font-weight-bold"> Quiero saber más</p>
    </div>
  )
};
