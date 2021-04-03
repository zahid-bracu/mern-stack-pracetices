const express = require('express');
const app = express();
const port = process.env.port;
const {middleware}=require('./middlware');

// simple routing
app.get('/', (req, res) => {
    res.send('Hello World from the server')
  })
  
  app.get('/about',middleware, (req, res) => {
    res.send('Hello World from the About Page')
  })
  
  
  app.get('/contact', (req, res) => {
    res.send('Hello World from the Contact Page')
  })
  
  app.get('/signin', (req, res) => {
    res.send('Hello World from the Sign In Page')
  })
  
  app.get('/signup', (req, res) => {
    res.send('Hello World from the Sign Up Page')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })