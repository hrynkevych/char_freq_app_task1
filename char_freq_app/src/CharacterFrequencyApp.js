import React, { useState } from 'react';
import './CharacterFrequencyAppStyle.css'

function CharacterFrequencyApp() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const findMostFrequentChar = () => {
    const text = inputText.toLowerCase();
    const charMap = new Map();

    for (const char of text) {
      if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1);
      } else {
        charMap.set(char, 1);
      }
    }

    let mostFrequentChar = '';
    let highestFrequency = 0;

    for (const [char, frequency] of charMap) {
      if (frequency > highestFrequency) {
        mostFrequentChar = char;
        highestFrequency = frequency;
      }
    }

    setResult(mostFrequentChar);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Most Frequent Character Finder</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Enter a string"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="find-button" onClick={findMostFrequentChar}>
          Find Most Frequent Character
        </button>
      </div>
      {result && (
        <div className="result-container">
          <p className="result-text">The most frequent character is: {result}</p>
        </div>
      )}
    </div>
  );
}

export default CharacterFrequencyApp;