const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");//@@@@

const User = require("../models/users.js");






router.get("/new", (req, res) => {
  res.render("sessions/new_signin.ejs");
});

router.post("/", (req, res) => { //@@@@
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.currentUser = foundUser;
    //   res.send("user not found")
      res.redirect("/home");
    } else {
      res.send("wrong password");
      //or redirect to a wrongpass page
      // res.render("/session/new.ejs", {error: "wrong password try again"})
    }
  });
});

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/home");
  });
});

module.exports = router;