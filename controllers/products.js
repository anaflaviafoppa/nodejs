const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product" });
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //path need to be absolute
  const products = Product.fetchAll();
  console.log(products);
  res.render("shop", { prods: products, docTitle: "Shop" });
  //res.sendFile(path.join(__dirname, "..", "views", "shop.html"), products);
};
