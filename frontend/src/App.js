import './App.css';
import AboutUs from './routes/AboutUs/index.js';
import HomePage from './routes/LandingPage/index.js';
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
