const express = require("express");

const authcontroller = require("../controllers/auth.controller");

const router = express.Router();

//router for signup
router.post("/login", authcontroller.signup);
//get
router.post("/signup", (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! thank you for joining our service`,
  });
});

module.exports = router;
