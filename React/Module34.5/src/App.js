import React, { useState, useEffect } from "react";
import "./styles.css";
import Display from "./Display";
import Information from "./Information";

export default function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((json) => setData(json.splice(0, 5)));
  }, []);

  function add(value) {
    var newCart = [...cart, value];
    setCart(newCart);
    setCount(count + 1);
  }
  console.log(cart);
  return (
    <div>
      <div className="App">
        <h4>Total Country:{data.length}</h4>
        <h3>Country Added : {count}</h3>
        <Information cart={cart}></Information>
      </div>
      {data.map((key) => (
        <Display data={key} add={add}></Display>
      ))}
    </div>
  );
}
