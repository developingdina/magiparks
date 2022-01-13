import './App.css';
import Home from './components/Home';

function App() {


//Renders Home Component
  function showComponent(){

  }
  
//Handles click on Enter btn
  function handleClick(event){
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Traveler</h1>
        <button onClick={handleClick}>Enter</button>
      </header>
    </div>
  );
}

export default App;
