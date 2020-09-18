import React from 'react';

import './App.css';
import Header from './Components/Header';
import News from './Components/News';

function App() {
  return(
    <div className="container-fluid">
      <Header></Header>
      <News></News>
    </div>
  )
}

export default App;
