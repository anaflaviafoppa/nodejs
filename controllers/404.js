exports.get404 = (req, res, next) => {
  res.status(404).render("404");
  //res.sendFile(path.join(__dirname, "views", "404.html"));
};
