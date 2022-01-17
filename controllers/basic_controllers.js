const User = require("../models/auth/user");

exports.root = function (req, res) {
  res.render("home", {loggedIn: req.isAuthenticated()});
};

