const express = require("express");
const router = express.Router();

router.use("/shop", require("./shop"));
router.use("/user", require("./user"));

module.exports = router;
