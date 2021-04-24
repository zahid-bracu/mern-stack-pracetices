const { Pool } = require('pg')
//const elephantURL='postgres://btbyzssw:tpIm6L3g6ClKgr5zXvq2ogyY-ofLikXp@queenie.db.elephantsql.com:5432/btbyzssw'
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