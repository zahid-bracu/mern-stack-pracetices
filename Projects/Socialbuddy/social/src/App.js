import React, { useEffect, useState } from 'react';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post';
import Banner from './Components/Banner';

function App() {
  const [data,setData]=useState([]);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      const datas=json.slice(0,30)
      setData(datas);
    })
  });

  console.log(data);

  

  return(
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Banner></Banner>
      <Post></Post>
    </>
  )
}

export default App;
