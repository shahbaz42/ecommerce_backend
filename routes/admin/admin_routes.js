const express = require("express");
const admin_controller = require("../../controllers/admin_controllers");
const authentication = require("../../middleware/authenticaton");

const router = express.Router();

router.get("/admin", authentication.check_admin_auth, admin_controller.admin);
router.post("/admin_add", authentication.check_admin_auth, admin_controller.admin_add);
router.post("/admin_update", authentication.check_admin_auth, admin_controller.admin_update);
router.post("/admin_delete", authentication.check_admin_auth, admin_controller.admin_delete);

module.exports = router; 