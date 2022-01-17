exports.check_auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
};

exports.check_admin_auth = (req, res, next) => {
    if(req.isAuthenticated() && req.user.username == "admin@admin"){
        return next();
    } else {
        res.redirect("/login");
    }
};