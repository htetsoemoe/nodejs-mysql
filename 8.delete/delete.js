const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

let sql = "DELETE FROM customers WHERE address = 'Mountain 21'"
conn.connect((err) => {
    if (err) throw err
    conn.query(sql, (err,result) => {
        if (err) throw err
        console.log("Number of records deleted: ", result.affectedRows)
    })
})