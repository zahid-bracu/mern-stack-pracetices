/*****  tutorial no. 2 ******/

// always use
const express=require('express');
const app=express();

// first page
app.get('/',(req,res)=>{
    const info={
        message:"First Page",
        id:420
    }
	res.send(info);
})


// second page
app.get('/second',(req,res)=>{
    const info={
        message:"Second Page",
        id:421
    }
    res.send(info);
})


// port to open
app.listen(3006,()=>{
	console.log("Listening to port ");
})
