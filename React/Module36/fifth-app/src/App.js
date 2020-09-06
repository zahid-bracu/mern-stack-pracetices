import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Datas from './Datas';
import Display from './Components/Display';
import Cart from './Components/Cart';
import Container from '@material-ui/core/Container';

function App() {

  return (
    
      <>
        <Nav style={{boxShadow:"0px 0px 0px white"}}></Nav>
        <Container maxWidth="lg">
          <div className="row">
              <div className="row col-9">
              {
                Datas.map(key=> <Display datas={key}></Display>)
              }
              </div>
              <div className="col-3">
              <Cart></Cart>
            </div>
          </div>
        </Container>
      </>
  );
}

export default App;
