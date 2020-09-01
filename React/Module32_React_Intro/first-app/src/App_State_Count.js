import "./styles.css";
import React, { useState } from "react";

function App() {
  var [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
  );
}

export default App;
