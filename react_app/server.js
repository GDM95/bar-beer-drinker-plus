const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mysql = require('mysql')

var connection

function initalizeConnection () {
  connection = mysql.createConnection({
    host: 'gdm52db.ctnau5wqr4h4.us-east-2.rds.amazonaws.com',
    user: 'gdm52',
    password: 'Newarka13!',
    database: 'BarBeerDrinkerPlus'
  })
  return connection
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.get('/bars', (req, res) => {
  connection = initalizeConnection()
  connection.connect()

  connection.query('SELECT * FROM Bars ORDER BY Bar', function (
    err,
    results,
    fields
  ) {
    if (err) throw err
    res.json(results)
    console.log('The first bar is: ', results[0])
  })

  connection.end()
})

app.get('/bars/:name', (req, res) => {
  connection = initalizeConnection()
  connection.connect()

  connection.query('SELECT * FROM Bars ORDER BY Bar', function (
    err,
    results,
    fields
  ) {
    if (err) throw err
    res.json(results)
    console.log('The first bar is: ', results[0])
  })

  connection.end()
})

app.get('/items', (req, res) => {
  connection = initalizeConnection()
  connection.connect()

  connection.query('SELECT * FROM Items ORDER BY Name', function (
    err,
    results,
    fields
  ) {
    if (err) throw err
    res.json(results)
    console.log('The first item is: ', results[0])
  })

  connection.end()
})

app.get('/items/:name', (req, res) => {
  var name = req.params.name

  connection = initalizeConnection()
  connection.connect()

  var sql = 'SELECT Bar FROM Transactions'
  connection.query(sql, name, function (err, results, fields) {
    if (err) throw err
    res.json(results)
    console.log('The first transaction is: ', results[0])
  })

  connection.end()
})

app.get('/drinkers', (req, res) => {
  console.log('Hello')
  connection = initalizeConnection()
  connection.connect()

  connection.query('SELECT * FROM Drinkers ORDER BY Name', function (
    err,
    results,
    fields
  ) {
    if (err) throw err
    res.json(results)
    console.log('The first drinker is: ', results[0])
  })

  connection.end()
})

app.get('/drinkers/:name', (req, res) => {
  var name = req.params.name

  connection = initalizeConnection()
  connection.connect()

  var sql =
    'SELECT Bar, Total, Time FROM Transactions WHERE Name = ? ORDER BY Time'
  connection.query(sql, name, function (err, results, fields) {
    if (err) throw err
    res.json(results)
    console.log('The first transaction is: ', results[0])
  })

  connection.end()
})
