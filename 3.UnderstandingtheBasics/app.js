const http = require("http");

//Criaçao de um servidor:
const server = http.createServer((req, res) => {
  console.log(req);
});

//Listening in port localhost : 3000
server.listen(3000);
