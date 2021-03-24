const pg=require('pg');
const ClientClass=pg.Client;
const pgUrl="postgres://lemoqyeo:uYAwEg0lVUW8BLSGvK0RfG4PQnRFEk4U@satao.db.elephantsql.com:5432/lemoqyeo";
const client= new ClientClass(pgUrl);

 function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  

async function connect(client){
    try{
        await client.connect();
        console.log("Connected");
        
        
        //console.log(result.rows[0].id);
        const lastName="Musa";

        const num=getRandomInt(300);

        // Create
        const insertData=await client.query(`INSERT INTO COMPANY (id, name) VALUES ('${num}','${lastName}')`);
        console.log(insertData);


        const result=await client.query(`SELECT * FROM COMPANY WHERE name = '${lastName}'`);
        console.table(result.rows);


        const resultAll=await client.query(`SELECT * FROM COMPANY`);
        console.table(resultAll.rows);
    
        
    }
    catch(error){
        console.log("Error Message : "+error);
    }
}

connect(client);
