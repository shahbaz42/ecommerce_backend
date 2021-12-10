const User = require("../models/auth/user");

exports.root = function (req, res) {
  if (req.isAuthenticated()) {
    res.render("secrets", { userSecret: req.user.secret , loggedIn: req.isAuthenticated()});
  } else {
    User.find({ secret: { $ne: null } }, function (err, foundUsers) {
      if (err) {
        console.log(err);
        res.render("error", { error: "Something went wrong", message: err , loggedIn: req.isAuthenticated() });
      } else {
        if (foundUsers) {
          res.render("home", { usersWithSecrets: foundUsers , loggedIn: req.isAuthenticated()});
        }
      }
    });
  }
};

exports.get_submit = function (req, res) {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
};

exports.post_submit = function (req, res) {
  if (req.isAuthenticated()) {
    User.findById(req.user.id, function (err, found) {
      if (err) {
        console.log(err);
        res.render("error", { error: "Something went wrong", message: err });
      } else {
        if (found) {
          found.secret = req.body.secret;
          found.save(function () {
            res.redirect("/secrets");
          });
        }
      }
    });
  } else {
    res.redirect("/login");
  }
};

exports.get_secrets = function (req, res) {
  if (req.isAuthenticated()) {
    res.render("secrets", { userSecret: req.user.secret, loggedIn: req.isAuthenticated() });
  } else {
    res.redirect("/");
  }
};
