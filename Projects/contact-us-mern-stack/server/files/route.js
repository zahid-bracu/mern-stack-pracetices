const express = require('express');
const Router=express.Router();
const {middleware}=require('./middlware.js');
const User=require('./useSchema.js');
const {securePassword,checkPassword}=require('./util/hashPassword');
const {createToken} =require('./util/token');


Router.get('/', (req, res, next) => {
    res.send('Hello World from the server')
    
  })
  
  Router.get('/about',middleware, (req, res) => {
    res.send('Hello World from the About Page')
  })
  
  
  Router.get('/contact', (req, res) => {
    res.send('Hello World from the Contact Page')
  })
  
  
  
  
  Router.post('/signup', async (req, res) => {
    var {name,email,phone,work,password,cpassword}=   req.body;
    if(!name  || !email || !phone || !work || !password || !cpassword || password!==cpassword){
      res.status(400).json({error:"Please fill up the form correctly"});
    }else{
      try{
        var result = await User.find({email:email});
        console.log(result)
        if(result.length>0){
          res.status(401).json({error:"Email Already existed"});
        }else{
          password=await securePassword(password);
          cpassword= await securePassword(cpassword);
          console.log(password + " : "+cpassword);
          const user = new User({name,email,phone,work,password,cpassword});
          console.log(user._id);
          const token = await createToken(user._id);
          console.log(token);
          
          // const response= await user.save();
          // console.log("Respons is : "+response);
          // res.status(201).json({message:"Data saved successfully"});
        }
      }catch(err){
        console.log(err)
        res.status(410).json({error:err});
      }
    }
  })

  Router.post('/signin', async (req, res) => {
    const {email,password}=req.body;
    if(!email || !password){
      res.status(400).json({message:"Please fill up all fields correctly"});
    }else{
      try{
        console.log(email);
        var result = await User.find({email:email});
        console.log(result);
        if(result.length>0){
          console.log(result[0].email);
          var results=await checkPassword(password,result[0].password);
           
          if(results){
            res.status(201).json({message:"Password is correct"})
          }else{
            res.status(202).json({message:"Password is not correct"});
          }
        }else{
          res.status(401).json({message:"Email not found"});
        }
      }catch(err){
        res.status(400).json({message:err})
      }
    }
  })


   
  
  

  module.exports=Router;