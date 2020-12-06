const http = require("http");

const routes = require("./router");

//Criaçao de um servidor:
const server = http.createServer(routes);
//console.log(req.url, req.method, req.headers)
//Listening in port localhost : 3000
server.listen(3000);
