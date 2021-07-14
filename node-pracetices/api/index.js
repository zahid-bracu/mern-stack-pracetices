const { info } = require('console');
const fs=require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req);
    if(req.url=='/'){
        res.writeHead(200,{"Content-type":"application/JSON"});
        fs.readFile('file.json','utf-8',(err,data)=>{
            
            if(!err){
                const infos=JSON.parse(data);
           
                res.end(infos[3].title);    
            }else{
                res.end(err);
            }
        })
    }
})

server.listen(3004,(err)=>{
    if(!err){
        console.log("Send");
    }else{
        console.log(err);
    }
})