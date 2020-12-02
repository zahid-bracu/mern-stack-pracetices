/*****  tutorial no. 4 ******/


// Express
// Express --> App
const express=require('express');
const app=express();

// Request & Param ID
// App Get
// Dynamic Request & Response
app.get('/user/:id',(req,res)=>{
    res.send(req.params.id);
    console.log(req.params);
})


// App Listen
app.listen(4500,()=>{
	console.log("Listening to port ");
})