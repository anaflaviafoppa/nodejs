const fs = require("fs");

const requireHandle = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/") {
    //quit the process:
    //process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page Node JS</title></head>");
    res.write("<body>");

    res.write("<h1>HELLO!</h1>");
    res.write(
      "<form method='POST' action='/create-users' ><input type='text' name='go to users'></input></form>"
    );

    res.write("</body>");
    res.write("</html>");
    return res.end();
    }
    
    if (url == "/") {
        //quit the process:
        //process.exit();
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My first Page Node JS</title></head>");
        res.write("<body>");
    
        res.write("<h1>HELLO!</h1>");
        res.write(
          "<form method='POST' action='/create-users' ><input type='text' name='go to users'></input></form>"
        );
    
        res.write("</body>");
        res.write("</html>");
        return res.end();
      }

  if (url === "/users" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      //é um callback, runs after registration
      const parsedBody = Buffer.concat(body).toString(); //go+to+message=input value
      const users = parsedBody.split("=")[1];
      console.log(users);

      res.write("<body>");

      res.write("<h1>USERS</h1>");
      res.write("<h2>USERS</h2>");

      res.write("</body>");

      //write a file with write file
      fs.writeFile("message.txt", users, (err) => {
        console.log(err);
        //will be exec. after writing a file:
        res.statusCode = 302;
        //res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  //quit the process:
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page Node JS</title></head>");
  res.write("<body><h1>Another page</h1></body>");
  res.write("</html>");
  res.end();
};

//module.exports = requireHandle;

exports.routes = requireHandle;
