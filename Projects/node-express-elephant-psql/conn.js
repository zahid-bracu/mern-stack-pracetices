const { Pool, Client } = require('pg')
const pgUrl="postgres://lemoqyeo:uYAwEg0lVUW8BLSGvK0RfG4PQnRFEk4U@satao.db.elephantsql.com:5432/lemoqyeo";
const pool = new Pool({
    pgUrl,
})
pool.connect((err, client, done) => {
    if (err) throw err
    client.query('SELECT * FROM students', (err, res) => {
      done()
      if (err) {
        console.log(err.stack)
      } else {
        console.log(res.rows)
      }
    })
  })

 