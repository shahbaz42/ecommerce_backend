const User = require("../models/auth/user");
const Products = require("../models/products/products");

//route for rendering homepage
exports.root = function (req, res) {
  Products.find({}, function (err, products) {
    if (err) {
      res.render("error", { error: "Error occured", message: "error in fetching products" });
    } else {
      res.render("home", { loggedIn: req.isAuthenticated(), products });
    }
  })
};
