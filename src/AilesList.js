// AilesList.js
import React from 'react';
import './AilesList.css';

const AilesList = ({ onSelectAile }) => {
  const ailes = ['Aile1', 'Aile2', 'Aile3']; // Replace with your actual list of Ailes

  return (
    <div className="ailes-list-container">
      <h2>Ailes for Cycle Counting</h2>
      <ul>
        {ailes.map((aile) => (
          <li key={aile} onClick={() => onSelectAile(aile)}>
            {aile}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AilesList;
