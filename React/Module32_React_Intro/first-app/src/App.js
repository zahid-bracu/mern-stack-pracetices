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
      </header>

      <body>
      {/*passing props value dynamically*/}
      <Person name="KisLu"></Person>
      <Person name="Mokbul"></Person>
      <Person name="Sodrul"></Person>
      <Person name="Shajahan"></Person>
      </body>
    </div>
  );
}


// Adding new function component
function Person(props){
  // creating new css style object
  const stylediv={
    padding:"10px",
    backgroundColor:"white",
    width:"300px",
    border:"2px solid red",
    textAlign:"center",
    display:"block",
    margin:"auto",
    marginTop:"30px"
  }


  return(
    // Adding the css style object ot JSX file
    <div style={stylediv}>
    <h2>My Name is {props.name}</h2>
    <p>I am a Disco Dancer, বিড়ি খাইলে হয় cancer</p>
    </div>
  )
}

export default App;
