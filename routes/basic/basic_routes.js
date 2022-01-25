const express = require("express");
const basic_controllers = require("../../controllers/basic_controllers");
const authentication = require("../../middleware/authenticaton");

const router = express.Router();

router.get("/", basic_controllers.root);
router.get("/cart", authentication.check_auth, basic_controllers.cart);
router.post("/cart",  authentication.check_auth, basic_controllers.cart_append)
router.post("/cart_update",  authentication.check_auth, basic_controllers.cart_update)
router.post("/cart_remove",  authentication.check_auth, basic_controllers.cart_remove)

module.exports = router;
