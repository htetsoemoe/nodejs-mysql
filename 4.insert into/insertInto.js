// Insert Multiple Records
// To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array:
// INSERT INTO customers(name, address) VALUES ?

const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    // Make sure you define the name of the database when you create the connection
    database: 'nodejsmysql'
})

/*
conn.connect((err) => {
    if (err) throw err
    console.log("Connected from nodejs to MySQL")

    let sql = "INSERT INTO customers (name, address) VALUES ?"
    let values = [
        ['John', 'Highway 71'],
        ['Peter', 'Love street 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ]

    conn.query(sql, [values], (err, result) => {
        if (err) throw err
        console.log(`Number of records inserted: ${result.affectedRows}`)
    })
})
*/

// Insert single record and print insertId
conn.connect((err) => {
    if (err) throw err
    console.log("Connected from nodejs to MySQL")

    let sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')"
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log(`1 record inserted, ID: ${result.insertId}`)
    })
})