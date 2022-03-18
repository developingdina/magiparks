import './App.css';
import Home from './components/Home';
import ParkList from './components/ParkList';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import { About } from './components/About';
import NewPark from './components/NewPark';

function App() {


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/parks" element={<ParkList />} />
        <Route path="/about" element={<About />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/parks/new" element={<NewPark/>}/>
        <Route exact path="/" element={<Welcome />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );

 
}

export default App;
