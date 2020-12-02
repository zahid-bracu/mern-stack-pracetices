/*****  tutorial no. 1 ******/

// Express
// Express → App
const express=require('express');
const app=express();

// App Get
// Request
// Response
app.get('/',(req,res)=>{
	res.send("This is message 2");
})


// App Listen
app.listen(3005,()=>{
	console.log("Listening to port over and over ");
})


// // msg is sending
// function rootCall(req,res){
// 	res.send("Thank you very much");
// }
// app.get('/',rootCall);