import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Datas from './Datas';
import Display from './Components/Display';
import Cart from './Components/Cart';
import Container from '@material-ui/core/Container';

function App() {
  
  const [prices,setPrice]=useState([]);
  function clicked(price){
    var newPrice=[...prices,price ];
    setPrice(newPrice);
  }

  function checkOut(){
    if(prices.length>0){
      console.log("reached")
    document.getElementById("main").style.display="none";
    document.getElementById("msg").style.display="block";
    }
    
  }


  return (
    <>
      <div >
        <Nav style={{boxShadow:"0px 0px 0px white"}}></Nav>
        <Container id="main" maxWidth="lg">
          <div className="row">
              <div className="row col-9">
              {
                Datas.map(key=> <Display clicked={clicked} datas={key}></Display>)
              }
              </div>
              <div className="col-3">
              <Cart prices={prices} checkOut={checkOut}></Cart>
            </div>
          </div>
        </Container>
      </div>

      <div id="msg" style={{dislplay:"none"}}>
        <h1>Successfull</h1>
      </div>
      </>
  );
}

export default App;
