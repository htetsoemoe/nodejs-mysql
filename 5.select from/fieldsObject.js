// The third parameter of the callback function is an array containing information about each field in the result.
const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

conn.connect((err) => {
    if (err) throw err
    conn.query("SELECT name, address FROM customers", (err, result, fields) => {
        if (err) throw err
        console.log(fields)
        console.log(fields[1].name)
    })
})