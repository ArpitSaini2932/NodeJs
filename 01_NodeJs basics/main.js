const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.get('/', (req, res) => {
  res.send('Hello World Ji !')
})
app.post('/', (req, res) => {
  res.send('Hello World3!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})