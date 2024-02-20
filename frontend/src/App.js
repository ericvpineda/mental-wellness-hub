import './App.css';
import HomePage from './components/LandingPage';
import Navbar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      {/* Zero to One Hackathon */}
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
