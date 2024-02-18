const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

let name = 'Amy'
let adr = 'Mountain 21'
let sql = 'SELECT * FROM customers WHERE name = ? OR address = ?'
conn.query(sql, [name, adr], (err, result) => {
    if (err) throw err
    console.log(result)
})