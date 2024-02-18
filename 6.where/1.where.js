const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

conn.connect((err) => {
    if (err) throw err
    conn.query("SELECT * FROM customers WHERE address='Park Lane 38'", (err, result) => {
        if (err) throw err
        console.log(result)
    })
})