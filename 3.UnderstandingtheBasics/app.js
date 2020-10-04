const http = require("http");
const fs = require("fs");

//Criaçao de um servidor:
const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);

  const url = req.url;
  const method = req.method;
  if (url == "/") {
    //quit the process:
    //process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page Node JS</title></head>");

    res.write(
      "<body><form method='POST' action='/message' ><input type='text' name='go to message'></input></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();//go+to+message=input value
        const message = parsedBody.split('=')[1];
      console.log("parse", parsedBody);
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //quit the process:
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page Node JS</title></head>");
  res.write("<body><h1>Another page</h1></body>");
  res.write("</html>");
  res.end();
});

//Listening in port localhost : 3000
server.listen(3000);
