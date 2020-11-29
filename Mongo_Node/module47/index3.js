/*****  tutorial no. 3 ******/

const express=require('express');
const app=express();

// page one
app.get('/',(req,res)=>{
	res.send("This is page one");
})


// page two
app.get('/two',(req,res)=>{
	res.send("This is page two");
})



app.listen(3005,()=>{
	console.log("Listening to port ");
})
