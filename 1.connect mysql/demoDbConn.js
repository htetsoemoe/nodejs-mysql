const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin'
})

conn.connect((err) => {
    if (err) throw err
    console.log("Connected from NodeJS to MySQL Server")
})