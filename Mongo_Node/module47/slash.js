const express=require('express');
const app=express();

app.get('/two',(req,res)=>{
	res.send("This is page two");
})

app.get('/',(req,res)=>{
	res.send("This is page one");
})

app.listen(3005,()=>{
	console.log("Listening to port ");
})
