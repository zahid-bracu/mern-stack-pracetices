const express = require('express');
const Router=express.Router();
const {middleware}=require('./middlware.js');
const User=require('./useSchema.js');
 



Router.get('/', (req, res) => {
    res.send('Hello World from the server')
  })
  
  Router.get('/about',middleware, (req, res) => {
    res.send('Hello World from the About Page')
  })
  
  
  Router.get('/contact', (req, res) => {
    res.send('Hello World from the Contact Page')
  })
  
  Router.post('/signin', (req, res) => {
    res.send('Hello World from the Sign In Page')
  })
  
  
  Router.post('/signup', async (req, res) => {
    const {name,email,phone,work,password,cpassword}=   req.body;
    if(!name  || !email || !phone || !work || !password || !cpassword){
      res.status(400).json({error:"Please fill up the form correctly"});
    }else{
      try{
        var result = await User.find({email:email});
        console.log(result)
        if(result.length>0){
          res.status(401).json({error:"Email Already existed"});
        }else{
          const user = new User({name,email,phone,work,password,cpassword});
          const response= await user.save();
          console.log("Respons is : "+response);
          res.status(201).json({message:"Data saved successfully"});
        }
      }catch(err){
        console.log(err)
        res.status(410).json({error:err});
      }
       
    }
    
  })
  
  

  module.exports=Router;