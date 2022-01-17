// checks if use is authenticated or not
exports.check_auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
};

// checks if authenticated user is admin or not
exports.check_admin_auth = (req, res, next) => {
    if(req.isAuthenticated() && req.user.username == "admin@admin"){
        return next();
    } else {
        res.redirect("/login");
    }
};