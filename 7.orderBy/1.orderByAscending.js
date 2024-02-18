const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

let sql = 'SELECT * FROM customers ORDER BY name' // Ascending is default
conn.connect((err) => {
    if (err) throw err
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
    })
})