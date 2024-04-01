// import logo from './logo.svg';
import wip from './wip.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Roblox Terminators</h1>
      <video autoPlay loop>
      <source src={wip} type='video/mp4'/>
      </video>
      <p>
        Work in progress...
      </p>
      </header>
    </div>
  );
}

export default App;
