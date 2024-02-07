const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'nodejsmysql' // Make sure you define the name of the database when you create the connection
})

/*
conn.connect((err) => {
    if (err) throw err
    console.log("Connected from NodeJS to MySQL Server")

    let sql = "CREATE TABLE customers (name VARCHAR(25), address VARCHAR(255))"
    conn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table created in MySQL")
    })
})
*/

conn.connect((err) => {
    if (err) throw err
    console.log("Connected from NodeJS to MySQL Server")

    let sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY'
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log("Customer Table Altered")
    })
})