const Pool=require('pg').Pool;
const psqlUrl="postgres://rcqjomox:7eQ9oO3ENB61gOBufRM-F5eXNC4QEJqr@queenie.db.elephantsql.com:127.0.0.1.5432/rcqjomox";
const pool=new Pool({
    psqlUrl,
});

module.exports=pool;