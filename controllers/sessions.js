const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");//@@@@
const User = require("../models/users.js");

router.use(express.static("public"));



router.get("/new", (req, res) => {
  res.render("sessions/new_signin.ejs");
});

router.post("/", (req, res) => { //@@@@
  User.findOne({ username: req.body.username.toLowerCase() }, (err, foundUser) => {
    if (!foundUser) {
      res.redirect("/home")
    }
    else { 
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.currentUser = foundUser;
      res.redirect("/home");
    } else {
      res.send("wrong password");
      //or redirect to a wrongpass page
      // res.render("/session/new.ejs", {error: "wrong password try again"})
    }
  }
  })
});

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/home");
  });
});

module.exports = router;