// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.status(200).send('Welcome to lambda CI/CD demo!!')
// })
// console.log(window.location.hostname)

// app.listen(3000)
// console.log('application is running on port 3000')

// add an else condition to take aws as server or run serverless

'use strict';

module.exports.generateRandomNumber = event => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The random generated integer is: ", randomNumber);
  return randomNumber;
};

this.generateRandomNumber();