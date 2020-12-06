const express = require("express");
const path = require("path");

const router = express.Router();
const adminRoutes = require("./admin");

router.get("/", (req, res, next) => {
  //path need to be absolute
  let products = adminRoutes.products;
  console.log(products);
  res.render("shop", { prods: products, docTitle: "Shop" });
  //res.sendFile(path.join(__dirname, "..", "views", "shop.html"), products);
});

module.exports = router;
