const express = require("express");

const authcontroller = require("../controllers/auth.controller");

const router = express.Router();

//*router for signup
router.post("/signup", authcontroller.signup);

//*login route
router.post("/login", authcontroller.login);

//*check if user is authenticated
router.get("/checkauth", authcontroller.checkauth);

module.exports = router;
