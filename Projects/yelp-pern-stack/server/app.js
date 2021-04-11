const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const app = express()
const port = process.env.PORT;
const db = require('./db')
const {router}=require('./router/admin.js')
const {middleWare}=require('./middlware/middleware');
var cors = require('cors')

// middle wares
app.use(morgan('tiny'));
app.use(morgan('dev'));
app.use(express.json());
app.use(middleWare);
app.use((req,res,next)=>{
  console.log("Using the middle ware");
  next();
});
app.use(cors())

app.use(router)


// App Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})