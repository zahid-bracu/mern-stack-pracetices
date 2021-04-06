const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const app = express()
const port = process.env.PORT;


// middle wares
app.use(morgan('tiny'));
app.use(morgan('dev'));
app.use(express.json());
app.use((req,res,next)=>{
  console.log("Using the middle ware");
  next();
});



// getting all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.status(200).json({
      status:'success',
      data:{
          restaurant:["mcdonalds","wendys"],
          place:['new york','usa']
      }
  })
})


// getting one restaurant bny dynamic id
app.get('/api/v1/restaurants/:id', (req, res) => {
     console.log(req.params)
     res.send(req.params.id)
  })


  // creating a restaurant
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req.body)
    res.send('created');
 })


// App Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})