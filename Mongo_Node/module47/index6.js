/*****  tutorial no. 6 ******/

// Express
// Express --> App
const express=require('express');
const app=express();

// App Get
// Request & Response
// Query Access
app.get('/query',(req,res)=>{
   console.log(req.query);
   res.send(req.query);
})


// localhost:4700/query?sort=asc


//  App Listen
app.listen(4700,()=>{
	console.log("Listening to port ");
})