const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../resources/path");
let bodyParser = require("body-parser");
//parse bodies:
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res, next) => {
  console.log("Here in users");

  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log("req.body", req.body);
  res.redirect("/");
});

module.exports = router;
