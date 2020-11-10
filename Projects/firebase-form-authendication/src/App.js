import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Forms from './Components/Forms';
import Banner from './Components/Banner';
import './App.css';
import React, {createContext, useState} from 'react';

export const information = React.createContext();

function App() {
  const [info,setInfo]=useState(false);
   
  return (
    
    <information.Provider value={[info,setInfo]}>
      <div className="main">
        <Header></Header>
        <Banner></Banner>
        <Forms></Forms>
      </div>
    </information.Provider>
    
  );
}

export default App;
