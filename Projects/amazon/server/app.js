const express = require('express');
const app = express();
var bodyParser = require('body-parser');
require('dotenv').config();
require('./db/conn')
const port = process.env.port;
const router=require('./router/router');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Example Router listening at http://localhost:${port}`)
  })