const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const app = express()
const port = process.env.PORT;
const db = require('./db')


// middle wares
app.use(morgan('tiny'));
app.use(morgan('dev'));
app.use(express.json());
app.use((req,res,next)=>{
  console.log("Using the middle ware");
  next();
});



// getting all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
  try{
    const result=await db.query('SELECT * FROM restaurants')
    res.status(200).json({
      status:'success',
      result:result.rows.length,
      data:{
          restaurant:result.rows
      }
  })
  }catch(err){
    res.status(400).json({message:err});
  }
})


// getting one restaurant bny dynamic id
app.get('/api/v1/restaurants/:id',async (req, res) => {
  console.log(req.params.id)
     try{
      const id=req.params.id
      
      const result=await db.query(`SELECT * FROM restaurants WHERE id=${req.params.id}`)
      console.log(result.rows);

      res.status(200).json({
       id:id,
       status:'success',
       data:result.rows
   })
     }catch(err){
       console.log(err)
     }
  })


  // creating a restaurant
app.post('/api/v1/restaurants', async (req, res) => {
    try{
      const result=await db.query(`INSERT INTO restaurants(  name, location, price_range)
      VALUES (  '${req.body.name}', '${req.body.location}', '${req.body.price_range}');`)
      console.log(result);
      res.status(201).json({
        status:"success",
        data:result.rowCount
    })
    }catch(err){
      res.status(401).json({message:err});
    }
    
 })


 //update a restaurants
 app.put('/api/v1/restaurants/:id', async (req, res) => {
   try{
     const result = await db.query(`UPDATE restaurants SET name='${req.body.name}', location='${req.body.location}' where id='${req.params.id}'`
     );
     console.log(result);
     res.status(202).json({
      id:req.params.id,
      status:'success',
      })
   }catch(err){
     console.log(err)
   }
  
 })

 //delete a restaurant
 app.delete('/api/v1/restaurants/:id', async (req, res) => {
  try{
    const result= await db.query(`DELETE FROM restaurants where id='${req.params.id}'`);
    res.status(404).json({
      id:req.params.id,
      message:"Deleted Successfully"
    })

  }catch(err){
    console.log(err)
    res.status(404).json({message:err})
  }
  
  
  
 })


 




// App Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})