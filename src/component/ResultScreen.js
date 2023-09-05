import React from 'react';
import Andy from './computer-1.webp';
// import Sun from './final.jpeg';
const ResultScreen = ({ assembledImage }) => {
  return (
    <div className='abc'>
      <h2>Assembled Product</h2>
      <img src={assembledImage} alt="Assembled Product"  />
      <img src={Andy} alt="front" height='500px' width='500px' />
      {/* <img src={Sun} alt="back" /> */}
      
    </div>
  );
};

export default ResultScreen;
