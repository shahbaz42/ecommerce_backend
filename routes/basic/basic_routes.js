const express = require("express");
const basic_controller = require("../../controllers/basic_controllers");

const router = express.Router();

router.get("/", basic_controller.root);

module.exports = router;
