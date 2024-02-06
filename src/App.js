import React, { useState } from 'react';
import Login from './Login';
import AilesList from './AilesList';
import Counting from './Counting';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedAile, setSelectedAile] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSelectAile = (aile) => {
    setSelectedAile(aile);
  };

  const handleGoBack = () => {
    setSelectedAile(null);
  };

  const handleSubmitCount = (aile, count) => {
    // Perform submission logic here
    console.log(`Count for Aile ${aile}: ${count} submitted`);
    // You can add more logic like updating state, showing success message, etc.
  };

  return (
    <div className="app-container">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : selectedAile ? (
        <Counting selectedAile={selectedAile} onSubmitCount={handleSubmitCount} goBack={handleGoBack} />
      ) : (
        <AilesList onSelectAile={handleSelectAile} />
      )}
    </div>
  );
};

export default App;
