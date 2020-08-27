import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // declaring a variable
  var name="Mr. Bean"

  // Declaring object
  var info=
    {
      name:"Bajlu",
      id:420
    }

  // declaring css object
  var styleObj={
    color:'red'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*using css object inside JSX*/}
        <h3 style={styleObj}>
          Welcome to React Development
        </h3>

        {/*using insile css style in JSX*/}
        <h2 style={{color:'green',backgroundColor:'yellow'}}>
        There's no turning back
        </h2>

        {/* using the variable in JSX*/}
        <h1 >Name : <span>{name}</span></h1>
        
        {/* using object property in JSX*/}
        <h2>Right Hand : <span>{info.name}</span></h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
