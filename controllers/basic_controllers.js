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

// fetching cart items
exports.cart = function (req, res){
  cart = req.user.cart;
  res.render("cart", { loggedIn: req.isAuthenticated(), cart });
}

// add product to cart
exports.cart_append = function(req, res){
  
  Products.findById(req.body.product_id, function(err, product){
    if(err){
      res.render("error", { error: "Error occured", message: "error in fetching products" });
    } else {
      cart_item = {
        item : product,
        quantity : 1
      }
      req.user.cart.push(cart_item);
      req.user.save(function(err,result){
        if(err){
          res.render("error", { error: "Error occured", message: "error in adding to cart" });
        } else {
          res.redirect("/");
        }
      });
    }
  });
}

// update quantity
exports.cart_update = function(req, res) {
  req.user.cart[req.body.index].quantity = Number(req.body.quantity);
  //req.user.cart.splice(req.body.index, 1);
  req.user.save(function(err,result){
    if(err){
      res.render("error", { error: "Error occured", message: "error in changing quantity of item in cart" });
    } else {
      console.log(result);
      res.redirect("/cart");
    }
  });
}

// remove an item from cart
exports.cart_remove = function(req, res) {
  req.user.cart.splice(req.body.index, 1);
  req.user.save(function(err,result){
    if(err){
      res.render("error", { error: "Error occured", message: "error in removing element from cart" });
    } else {
      res.redirect("/cart");
    }
  });
}
 