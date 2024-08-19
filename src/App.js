import logo from './logo.svg';
import './App.css';
//il componentte react
//un componente react puo essere una funzione che ritorna una sistassi simile ad HTML che si chiama JSX
//differenze tra HTML e JSX:
//- tutti gli attributi "class" diventano "className"
//- le variabili si iniettano nella sintassi con {}
const myName = 'Diana'  //var definita da me

function App() {   //i componenti react hanno la funzione con la lettera maiuscola
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {myName}  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
  );
}

export default App;
