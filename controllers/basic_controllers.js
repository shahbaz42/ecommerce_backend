const User = require("../models/auth/user");

//route for rendering homepage
exports.root = function (req, res) {
  res.render("home", { loggedIn: req.isAuthenticated() });
};
