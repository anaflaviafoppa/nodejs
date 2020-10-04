const http = require("http");

//Criaçao de um servidor:
const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);

  const url = req.url;
  if (url == "/") {
    //quit the process:
    //process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page Node JS</title></head>");
    res.write("<body><h1>TEXT</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    //quit the process:
    //process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page Node JS</title></head>");
    res.write("<body><h1>Another page</h1></body>");
    res.write("</html>");
    res.end();
  }
});

//Listening in port localhost : 3000
server.listen(3000);
