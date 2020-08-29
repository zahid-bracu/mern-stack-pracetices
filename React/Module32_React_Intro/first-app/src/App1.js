import React from 'react';

import './App.css';

function App() {
  // declaring an array to dynamically pass data 1.1
  var names=["chiknesh","goblet","Foglet"]

  // declaring and object to dynamically pass the object
  var products=[
    {
      name:"ps4",
      price:"130$"
    },
    {
      name:"nintendo switch",
      price:"530$"
    },
    {
      name:"xbox",
      price:"537$"
    }
  ]

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
    color:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
         
        
        {/*using css object inside JSX*/}
        <h3 style={styleObj}>
          It's not who we are underneath, but what we do that defines us
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
      <Person name="KisLu" food="biri"></Person>

      {/*Dynamicallt calling data from array 1.1 */}
      <Person name={names[1]} food="ganja"></Person>
      <Person name="Sodrul" food="stick"></Person>
      <Person name={names[2]} food="weed"></Person>


      {/*2nd example of dynamic passing*/}
      <Student name="TikLu" id="420"></Student>
      <Student name="Kotbel" id="421"></Student>

      {/*Passing object from array*/}
      <Product product={products[0]} ></Product>
      <Product product={products[1]} ></Product>
      <Product product={products[2]} ></Product>
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
    {/* Array Value Pass 1.1 */}
    <h2>My Name is {props.name}</h2> 
    <p>I am a Disco Dancer, {props.food} খাইলে হয় cancer</p>
    </div>
  )
}

// 2nd example of dynmic passing
function Student(props){
  const styles={
    border: "2px solid green",
    padding:"10px",
    margin:"auto",
    marginTop:"10px",
    width:"200px"

  }

  return(
    <div style={styles}>
    <h3>Name : {props.name} </h3>
    <h3>Id: {props.id} </h3>
    </div>
  )
}

// Object passing to props
function Product(props){
  const style={
    width:"200px",
    height:"200px",
    backgroundColor:"#fff5d9",
    textAlign:"center",
    margin:"auto"
  }

  // can be used as destructure value
  var {name,price}=props.product;
  console.log(name);
  console.log(price);

  return(
    <div style={style}>
    {/*Using the object*/}
    <h4>Product : {props.product.name}</h4>
    <h5>Price : {props.product.price}</h5>
    </div>
  )
}
export default App;
