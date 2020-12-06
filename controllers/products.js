const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product" });
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body.title);
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //path need to be absolute

  res.render("shop", { prods: products, docTitle: "Shop" });
  //res.sendFile(path.join(__dirname, "..", "views", "shop.html"), products);
};
