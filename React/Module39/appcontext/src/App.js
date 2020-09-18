import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Components/Child';
import Header from './Components/Header';

export const numValue=createContext();
function App() {
  const [value,setValue]=useState(0);
  
  return (
    <numValue.Provider value={value}>
      <div>
        <Header></Header>
          <h3>Parent:</h3>
        <Child setValue={setValue}></Child>
      </div>
    </numValue.Provider>
    
  );
}

export default App;
