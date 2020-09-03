import React from "react";
import "./styles.css";

function Information(props) {
  var total = 0;
  for (var i = 0; i < props.cart.length; i++) {
    total += props.cart[i].population;
  }

  return (
    <div>
      <h5>Total Population : {total}</h5>;
    </div>
  );
}

export default Information;
