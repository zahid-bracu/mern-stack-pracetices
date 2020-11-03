const express=require('express');
const app=express();

app.get('/',(req,res)=>{
	res.send("This is message 2");
})

app.listen(3005,()=>{
	console.log("Listening to port ");
})
