// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");

// app.use(cors());

// Create server endpoint for GET requests
app.get('/test', (req, res) => {
  console.log('console test')
  res.send('reached test endpoint')
})

// app.post('/', (req, res) => {
//   res.send('POST request example')
// })


//this starts the app and can confirm its on and listening by running npm start and then
app.listen(port, () => {
  console.log("listening on 8080");
});
