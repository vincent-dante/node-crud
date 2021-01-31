const http = require('http')
const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/api/users', (req, res) => {
  
  let obj = JSON.parse(fs.readFileSync('data.json', 'utf8'))

  res.send(obj)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/* var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
console.table(obj) */




/* const server = http.createServer(function (req, res) {  

}) */


/* server.listen(port, function(error) {
  if (error) {
    console.log("Somethings wrong");
  } else {
    console.log("Listen to port 3000");
  }
}) */

