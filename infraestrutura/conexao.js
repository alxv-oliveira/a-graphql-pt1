const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: '192.168.99.105',
  port: 3306,
  user: 'root',
  password: '2020',
  database: 'agenda-petshop'
})

module.exports = conexao
