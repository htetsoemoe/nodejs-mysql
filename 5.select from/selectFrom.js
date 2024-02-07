const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

conn.connect((err) => {
    if (err) throw err
    conn.query("SELECT * FROM customers", (err, result, fields) => {
        if (err) throw err
        console.log(result)
    })
})