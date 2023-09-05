/*import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import ProductDescription from './components/ProductDescription';
import PartsSelection from './components/PartsSelection';
import Assembly from './components/Assembly';
import FinalProduct from './components/FinalProduct';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={ProductDescription} />
          <Route path="/parts-selection" component={PartsSelection} />
          <Route path="/assembly" component={Assembly} />
          <Route path="/final-product" component={FinalProduct} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/
//component

import React, { useState } from 'react';
import StartScreen from './component/StartScreen';
import PuzzleScreen from './component/PuzzleScreen';
import AssembleScreen from './component/AssembleScreen';
import ResultScreen from './component/ResultScreen';
import part1 from './component/part1.jpg';
function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'puzzle', 'assemble', 'result'
  const [selectedParts, setSelectedParts] = useState([]);
  const [assembledImage, setAssembledImage] = useState(null);

  const partsData = [
    { name: 'Part 1', image: part1 },
    { name: 'Part 2', image: part1 },
    { name: 'Part 3', image: part1 },
    { name: 'Part 4', image: part1 },
    { name: 'Part 5', image: part1 },
  ];

  const handleStartClick = () => {
    setCurrentScreen('puzzle');
  };

  const handlePartSelect = (index) => {
    if (!selectedParts.includes(index)) {
      setSelectedParts([...selectedParts, index]);
    }
  };

  const handleNextClick = () => {
   
    if (selectedParts.length >0) {
      setCurrentScreen('assemble');
    } else {
      alert('Please select all puzzle parts.');
    }
  };

  const handleAssembleClick = () => {
    // Implement your logic to assemble the parts into an image
    // and set it to the 'assembledImage' state.
    // For simplicity, we'll assume it's just a placeholder image.
    setAssembledImage('assembled-image.jpg');
    setCurrentScreen('result');
  };
  /*
  const handleAssembleClick = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Assuming your partsData contains references to the selected parts.
    const selectedImages = selectedParts.map((index) => partsData[index].image);
  
    // Set canvas dimensions based on the size of the parts (adjust as needed).
    canvas.width = 150;
    canvas.height = 150;
  
    // Draw selected images onto the canvas.
    selectedImages.forEach((image, index) => {
      const x = (index % 2) * 250; // Adjust the positioning as needed
      const y = Math.floor(index / 2) * 250; // Adjust the positioning as needed
      ctx.drawImage(image, x, y, 250, 250); // Assuming each part is 250x250 pixels
    });
  
    // Convert the canvas content to a data URL.
    const assembledImageUrl = canvas.toDataURL('image/jpeg');
  
    // Set the assembled image URL to the 'assembledImage' state.
    setAssembledImage(assembledImageUrl);
    setCurrentScreen('result');
  };
  */

  return (
    <div className="App">
      {currentScreen === 'start' && <StartScreen onStartClick={handleStartClick} />}
      {currentScreen === 'puzzle' && (
        <PuzzleScreen parts={partsData} onPartSelect={handlePartSelect} onNextClick={handleNextClick} />
      )}
      {currentScreen === 'assemble' && (
        <AssembleScreen parts={partsData} onAssembleClick={handleAssembleClick} />
      )}
      {currentScreen === 'result' && <ResultScreen assembledImage={assembledImage} />}
    </div>
  );
}

export default App; 

// Comp
/*import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './comp/Home';
import Puzzle from './comp/Puzzle';
import Assembly from './comp/Assemble';
import Final from './comp/Final';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/puzzle" component={Puzzle} />
      <Route path="/assembly" component={Assembly} />
      <Route path="/final" component={Final} />
    </Router>
  );
}

export default App;
*/
