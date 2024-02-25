import './App.css';
import AboutUs from './components/AboutUs/index.js';
import HomePage from './components/LandingPage';
import Navbar from './components/NavBar.js';

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
