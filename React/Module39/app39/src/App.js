import React, { useState } from 'react';
import './App.css';
import Child from './Components/Child';

function App() {
  const [value,setValue]=useState(0);
  

  return (
    <div>
      <h3>Parent Value: {value}</h3>
      <Child setValue={setValue} value={value}></Child>
    </div>
  );
}

export default App;
