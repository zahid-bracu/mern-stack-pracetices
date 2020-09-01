import React from "react";
import "./styles.css";

function App() {
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
      {
        //  Object Array Data is mapping into other components
        products.map((key) => (
          <Display product={key}></Display>
        ))
      }
    </div>
  );
}

function Display(props) {
  // Destructure
  const { name, price } = props.product;
  return (
    <div className="App">
      <p>Name : {name}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default App;
