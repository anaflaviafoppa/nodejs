const express = require("express");
const path = require("path");

const router = express.Router();
const adminRoutes = require("./admin");

router.get("/", (req, res, next) => {
  //path need to be absolute
  let products = adminRoutes.products;

  res.sendFile(path.join(__dirname, "..", "views", "shop.html"), products);
});

module.exports = router;
