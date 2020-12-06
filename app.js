//const http = require("http");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

//sharing data around the app:
//view engine
app.set("view engine", "pug");
//onde está as views:
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

//routers

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//static router - css files in public folder for example
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

//404 page:
app.use((req, res, next) => {
  res.render("404");
  //res.sendFile(path.join(__dirname, "views", "404.html"));
});

//Criaçao de um servidor:
//const server = http.createServer(app);
//console.log(req.url, req.method, req.headers)
//Listening in port localhost : 3000
//server.listen(3000);

app.listen(3000);
