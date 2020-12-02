/*****  tutorial no. 7 ******/

// Express
// Express --> App
const express=require('express');
const app=express();

// cors
// cors --> App
var cors = require('cors');
app.use(cors());

// array
var array=['xx','yy','zz','aa','bb','cc'];


// App get
// Request & Response
// Request & Param ID → display value from array
app.get('/user/:id',(req,res)=>{
   
   var id=req.params.id;
   var word=array[id];
   
   res.send({id,word});
   console.log({id,word});
})


// App Listen
app.listen(4100,()=>{
	console.log("Listening to port ");
})