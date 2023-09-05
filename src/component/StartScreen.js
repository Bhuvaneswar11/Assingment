import React from 'react';
import Abc from './product-image.jpg';
import './a.css';
const StartScreen = ({ onStartClick }) => {
  return (
    <div className='abc'>
      <center>
        
      <img src={Abc} alt="Product" width='250px'   />
      <h1>Product Description</h1>
      <span><p>The personal computer is one of the most common types of computer due to its versatility and relatively low price. Desktop personal computers have a monitor, a keyboard, a mouse, and a computer case. The computer case holds the motherboard, fixed or removable disk drives for data storage, the power supply, and may contain other peripheral devices such as modems or network interfaces.</p></span>
      <button onClick={onStartClick} className='aaa'>START</button>
      </center>
      
    </div>
  );
};

export default StartScreen;
