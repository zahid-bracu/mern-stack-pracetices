import React, { useState } from 'react';
import Child from '../src/Components/Child';
import fakeData from './Components/fakeData';

export const contextValue = React.createContext([]);
 
function App() 
{
  const data=fakeData.slice(0,20);
  console.log(data);
  return (
    <contextValue.Provider value={data}>
      <Child></Child>
    </contextValue.Provider>  
  );
}

export default App;
