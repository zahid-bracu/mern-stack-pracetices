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
  return (
    <div className="App">
      <ul>
      {
          //sending data dynamically from a object to a component using map
          products.map(pd=>  <ProductDisplay product={pd}></ProductDisplay>)
      }
      </ul>

      <ol>
      {
          names.map(name=><li>{name}</li>)
      }
      </ol>
    </div>
  );
}


const box={
    height:"200px",
    width:"200px",
    border:"2px solid black",
    margin:"auto"
}

function ProductDisplay(props){
    return(
        <div style={box}>
        <h5>Name : {props.product.name} </h5>
        <h6>Price : {props.product.price} </h6>
        </div>
    )
}
export default App;
