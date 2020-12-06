//const http = require("http");

const express = require("express");

const app = express();

app.use("/special", (req, res, next) => {
  console.log("Im middleware!");

  res.send("<h1>HELLO Special</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Im middleware!");

  res.send("<h1>HELLO</h1>");
});

const routes = require("./router");

//Criaçao de um servidor:
//const server = http.createServer(app);
//console.log(req.url, req.method, req.headers)
//Listening in port localhost : 3000
//server.listen(3000);

app.listen(3000);
