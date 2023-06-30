const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Welcome to lambda CI/CD demo!!')
})

app.listen(3000)