const express=require('express');
const app=express();

const array=["Abrar","Salim","Jobbar","Kalam","Yousha","No one"];

app.get('/:id',(req,res)=>{
    
    var value=req.params.id;
    var name =array[value];
    res.send({value,name});
})

app.listen(4200,()=>{
	console.log("Listening to port ");
})
