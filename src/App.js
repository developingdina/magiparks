import './App.css';
import Home from './components/Home';
import ParkList from './components/ParkList';
import Navbar from './components/Navbar';
import Button from './components/Button';
import { Routes, Route, NavLink } from 'react-router-dom';
import Welcome from './components/Welcome';

function App() {
  const parkArray = [
    "The Forgotten Woods",
    "Amity Island National Park",
    "Dagobah National Park",
    "Tatooine National Park",
    "Mordor Historical Monument"
]

  
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/parks" element={<ParkList list={parkArray}/>} />
        <Route path="/home" element={<Home />}/>
        <Route exact path="/" element={<Welcome />}/>
      </Routes>
    </div>
  );

 
}

export default App;
