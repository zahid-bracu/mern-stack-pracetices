const express=require('express');
const router=express.Router();
require('dotenv').config()
const db = require('../db/index')



// getting all restaurants
router.get('/api/v1/restaurants', async (req, res) => {
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
  router.get('/api/v1/restaurants/:id',async (req, res) => {
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
  router.post('/api/v1/restaurants', async (req, res) => {
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
   router.put('/api/v1/restaurants/:id', async (req, res) => {
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
   router.delete('/api/v1/restaurants/:id', async (req, res) => {
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

   module.exports={router}