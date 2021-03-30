
const express=require('express'); //express import
const app=express(); // app create from express
const bcrypt=require('bcryptjs'); // BcryptJS import for password hashing
const path=require('path'); // path import
require('dotenv').config() // dot env importing to hide secret 
var cookieParser = require('cookie-parser')
const port = process.env.PORT; // port set
const pg=require('pg');
const ClientClass=pg.Client;
const pgUrl=process.env.psqlUrl;
const client= new ClientClass(pgUrl);
var cors = require('cors')
//require('./conn');
var bodyParser = require('body-parser')

var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //must import 

app.use(express.static(path.join(__dirname,'public')))

app.post('/submit',async (req,res)=>{
    // 
    const name=req.body.name;
    const email=req.body.email;
    const address=req.body.address;
    console.log(name);
    console.log(email);
    console.log(address);
    try{
        await client.connect();
        console.log("Connected")
        const insertData=await client.query(`
        INSERT INTO students(name, email, address)
        VALUES ('${name}','${email}','${address}')`);
        console.log(insertData);
        client.end();
    }catch{
        console.log("not connected");
        res.status(401).send("not-conneted");
    }
    
})

app.get('/info', async (req,res)=>{
    try{
        await client.connect();
        console.log("Connected")
        const allData=await client.query(`SELECT * FROM students`);
        console.log(allData.rows);
        client.end();
        console.log("ended")
        res.status(202).send(allData.rows);
        
    }catch{
        console.log("not connected");
        res.status(401).send("not-conneted");
    }
})




app.listen(port, ()=>{
    console.log("Server is running at "+port);
    
})