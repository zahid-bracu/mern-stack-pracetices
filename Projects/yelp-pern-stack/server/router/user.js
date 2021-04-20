const express=require('express');
const userRouter=express.Router();
const db = require('../db/index')

// registration
userRouter.post('/api/user/registration', async (req, res) => {
    console.log(req.body);
     try{
       const result=await db.query(`INSERT INTO registerUser( name, email, password)
       VALUES (  '${req.body.name}', '${req.body.email}', '${req.body.password}') returning id;`)
       console.log(result);
       var id=result.rows[0].id
       res.status(201).json({
         status:"success",
         id:id
     })
     }catch(err){
       res.status(401).json({message:"Not Saved"});
     }
 })


module.exports={userRouter}