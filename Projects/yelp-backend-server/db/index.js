const { Pool } = require('pg')
//const elephantURL='postgres://bwcrajbx:Oy15Qz4lVlFMYL11B9oL5uQ2iTp4Rh9P@topsy.db.elephantsql.com/bwcrajbx'
const pool = new Pool({ 
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.dbport
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}