import './App.css';
import Home from './components/Home';
import ParkList from './components/ParkList';
import Navbar from './components/Navbar';
import { Routes, Route, NavLink } from 'react-router-dom';


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
        <h1>Welcome Traveler</h1>
        
        <Navbar/>
      <Routes>
        <Route path="/parks" element={<ParkList list={parkArray}/>} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );

 
}

export default App;
