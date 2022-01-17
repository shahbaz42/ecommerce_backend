const User = require("../models/auth/user");
const Products = require("../models/products/products")

// Route for fetching all products
exports.admin = function (req, res) {
    Products.find({}, function (err, products) {
        if (err) {
            res.render("error", { error: "Error occured", message: "error in fetching products" });
        } else {
            res.render("admin", { loggedIn: req.isAuthenticated(), products });
        }
    })
}

// Route for adding a new product
exports.admin_add = function (req, res) {
    const new_product = new Products({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });

    new_product.save(function (err, product) {
        if (err) {
            res.render("error", { error: "Error occured", message: "error in saving product" });
        } else {
            res.redirect("/admin");
        }
    });
}

//Route for updating a product
exports.admin_update = function (req, res) {
    Products.findByIdAndUpdate(req.body.id, {
        $set: {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }
    }, function (err, product) {
        if (err) {
            res.render("error", { error: "Error occured", message: "error in updating product" });
        } else {
            res.redirect("/admin");
        }
    })
}

// Route for deleting a product
exports.admin_delete = function (req, res) {
    Products.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.render("error", { error: "Error occured", message: "error in deleting product" });
        } else {
            res.redirect("/admin");
        }
    });
}