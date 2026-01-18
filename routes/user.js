const express = require("express");
const router = express.Router();

router.get("/selectAllAdmin", function (req, res) {
    res.send("Test");
});

module.exports = router;
