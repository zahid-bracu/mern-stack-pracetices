const express=require('express');
const app=express();

function rootCall(req,res){
	const info={
		id:151011,
		brand:"RTX"
	}
	res.send(info);
}
function moreInfo(req,res){
	const moreInfos={
		id:430,
		brand:"GTX PTX"
	}
	res.send(moreInfos);
}

const userList=["RTX","GTX","PTX","NTX","XTX"];

function user(req,res){
	const userId=req.params.id;
	console.log(userId);
	const name=userList[userId];
	res.send({userId, name});
}

app.get('/user/:id',user);
app.get('/more/information',moreInfo)
app.get('/',rootCall)
app.listen(3000,()=>console.log("Listening to Port")); 
