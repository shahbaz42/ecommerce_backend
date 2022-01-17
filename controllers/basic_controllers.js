const User = require("../models/auth/user");

exports.root = function (req, res) {
  res.render("home", {loggedIn: req.isAuthenticated()});
};

exports.admin = function(req, res) {
  res.render("admin", {loggedIn: req.isAuthenticated()});
}

