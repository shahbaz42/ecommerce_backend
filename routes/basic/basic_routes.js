const express = require("express");
const basic_controllers = require("../../controllers/basic_controllers");

const router = express.Router();

router.get("/", basic_controllers.root);

module.exports = router;
