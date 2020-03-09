const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

router.use(express.static("public"));


router.get("/new", (req, res) => {
  res.render("users/create_user.ejs");
});


//create user
router.post("/", (req, res) => {  //@@@@
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
    res.redirect("/home");
  });
});





module.exports = router;