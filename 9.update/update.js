const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejsmysql"
})

const sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"

conn.connect((err) => {
    if (err) throw err
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        console.log("Number of Updated Records: ", result.affectedRows)
    })
})