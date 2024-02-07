// To select only some of the columns in a table, use the "SELECT" statement followed by the column name.

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
        console.log(result) // the result object is an array containing each row as an object.
        console.log(result[2].name)
    })
})