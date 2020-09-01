import React from "react";
import "./styles.css";

function App() {
  // Object_array
  var products = [
    {
      name: "ps4",
      price: "130$"
    },
    {
      name: "nintendo switch",
      price: "530$"
    },
    {
      name: "xbox",
      price: "537$"
    }
  ];

  return (
    <div>
      {/* Object array value passing */}
      <Display products={products[0]}></Display>
      <Display products={products[1]}></Display>
      <Display products={products[2]}></Display>
    </div>
  );
}

function Display(props) {
  return (
    <div className="App">
      {/* Object Array value using */}
      <p>Name : {props.products.name}</p>
      <p>Price : {props.products.price}</p>
    </div>
  );
}

export default App;
