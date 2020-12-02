/*****  tutorial no. 5 ******/


// Express
// Express --> App
const express=require('express');
const app=express();

// array
var array=['xx','yy','zz','aa','bb','cc'];


// Request & Param ID
// App Get
// Dynamic Request & Response
// Request & Param ID → display value from array
app.get('/user/:id',(req,res)=>{
   
   var id=req.params.id;
   var word=array[id];
   
   res.send({id,word});
   console.log({id,word});
})


// App Listen
app.listen(4600,()=>{
	console.log("Listening to port ");
})