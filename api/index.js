require('dotenv').config()
var express = require('express')
var cors = require('cors')


// connect mysql
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})

var app = express()

const port  = 5000;

app.use(cors())

app.get('/hello_word', function (req, res, next) {
  res.json({msg: 'Hello_node'})
})

app.listen(port, function () {
  console.log('localhost:'+port)
})