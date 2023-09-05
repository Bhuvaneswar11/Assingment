import React from 'react';
import './a.css';
const PuzzleScreen = ({ parts, onPartSelect, onNextClick }) => {
  return (
    <div className='abc'>
      <center>
    <div id="aa" className="scroll-container">
      {parts.map((part, index) => (
        <div  >
        <div key={index}className="card" >
        <h2>OUR PRODUCTS</h2>
          <img src={part.image} alt={part.name}  width='200px' height='200px' /><br/>
          <input type='checkbox' onClick={() => onPartSelect(index)}/>
          <p>{part.name}</p></div>
         
        </div>
      ))}
      
    </div>
    <button onClick={onNextClick} className='aaa'>Next</button>
    </center>
    </div>
  );
};

export default PuzzleScreen;
