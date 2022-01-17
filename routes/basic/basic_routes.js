const express = require("express");
const basic_controller = require("../../controllers/basic_controllers");
const authentication = require("../../middleware/authenticaton");

const router = express.Router();

router.get("/",authentication.check_auth ,basic_controller.root);
router.get("/admin", authentication.check_admin_auth, basic_controller.admin);

module.exports = router;
