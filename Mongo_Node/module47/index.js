const express=require('express');
const app=express();
function rootCall(req,res){
	res.send("Thank You.It's Working");
	}
app.get('/',rootCall)
app.listen(3002,()=>console.log("Listening to Port")); 