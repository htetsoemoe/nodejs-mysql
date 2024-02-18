const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

const sql = 'SELECT * FROM customers ORDER BY name DESC'
conn.connect((err) => {
    if (err) throw err
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
    })
})