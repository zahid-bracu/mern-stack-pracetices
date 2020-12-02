/*****  tutorial no. 2 ******/

// Express
// Express --> App
const express=require('express');
const app=express();

// App Get
// Request * Response
// Response Object
app.get('/',(req,res)=>{
    const info={
        message:"First Page",
        id:420
    }
	res.send(info);
})


// Response Object
// Second page
app.get('/second',(req,res)=>{
    const info={
        message:"Second Page",
        id:421
    }
    res.send(info);
})


// App Listen : a port to open 
app.listen(3006,()=>{
	console.log("Listening to port ");
})
