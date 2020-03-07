const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");






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

// router.get("/secret", (req, res) => {
//   if (res.session.currentUser) { //use res.session.currentUser to show page
//     res.send(req.session.currentUser.username + "-this is a secret page")
//   } else {
//     res.redirect("/sessions/new")
//   }
// })



module.exports = router;