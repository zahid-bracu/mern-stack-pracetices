import React, { useState } from 'react';
import fakeData from './Components/fakeData';
import Example from './Components/Example';
import Buttons from './Components/Buttons';
import Display from './Components/Display';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const DataContext = React.createContext([]);
 
function App() 
{
  const data=fakeData.slice(0,50);
  const [products,setProducts]=useState(data)

  const [sort,setSort]=useState(products);
  function clicks(category){
    var array=products.filter(pd=> pd.category==category);
    console.log(array);
    setSort(array);
  }
  
  return (
    <DataContext.Provider value={sort}>
      <Example></Example>
      <Buttons clicks={clicks}></Buttons>
      <div className="container">
      <Display></Display>
      </div>
    </DataContext.Provider>
      
  );
}

export default App;
