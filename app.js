const http = require("http");

const express = require("express");

const app = express();
const routes = require("./router");

//Criaçao de um servidor:
const server = http.createServer(app);
//console.log(req.url, req.method, req.headers)
//Listening in port localhost : 3000
server.listen(3000);
