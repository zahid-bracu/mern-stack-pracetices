

const express = require('express');
const app = express();
var bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.port;
require('./files/conn');
const Router=require('./files/route.js');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

app.use(Router);


app.listen(port, () => {
    console.log(`Example Router listening at http://localhost:${port}`)
  })