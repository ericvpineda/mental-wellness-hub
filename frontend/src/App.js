import './App.css';
import Navbar from './components/Navbar.jsx';
import AboutUs from './routes/AboutUs/index.js';
import HomePage from './routes/LandingPage/index.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Zero to One Hackathon */}
      <Navbar />
      <HomePage />
      <AboutUs />
    </div>
  );
}

export default App;
