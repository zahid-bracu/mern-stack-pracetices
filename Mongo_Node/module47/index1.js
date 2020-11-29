/*****  tutorial no. 1 ******/


// always write
const express=require('express');
const app=express();

//page link
app.get('/',(req,res)=>{
	res.send("This is message 2");
})


// setting the server address
app.listen(3005,()=>{
	console.log("Listening to port over and over ");
})


// // msg is sending
// function rootCall(req,res){
// 	res.send("Thank you very much");
// }
// app.get('/',rootCall);