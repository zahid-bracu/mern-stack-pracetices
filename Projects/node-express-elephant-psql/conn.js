const pg=require('pg');
const ClientClass=pg.Client;
const pgUrl="postgres://lemoqyeo:uYAwEg0lVUW8BLSGvK0RfG4PQnRFEk4U@satao.db.elephantsql.com:5432/lemoqyeo";
const client= new ClientClass(pgUrl);


async function connect(client){
    try{
        await client.connect();
        console.log("Connected");
        
        const result=await client.query('SELECT * FROM COMPANY');
        console.log(result.rows);
        //console.log(result.rows[0].id);
        await client.end();
        return result.rows;
        
    }
    catch(error){
        console.log("Error Message : "+error);
    }
}

connect(client);
