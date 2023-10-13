const express = require("express");
const router = express.Router();
// --------------------------------

const {
    adminlogout
} = require("../controller/logoutController");


router.route("/logout").get(adminlogout);
module.exports = router;