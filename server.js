const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");//@@@@@
const methodOverride = require("method-override");

//use public folder for static assets
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));//@@@@@

app.use(
  session({
    secret: "iamthebest", //some random string
    resave: false,
    saveUninitialized: false
  })
);
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost:27017/hollywood", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/app", (req, res) => { //@@@@@@
  if (req.session.currentUser) {
    res.send("the party");
  } else {
    res.redirect("/sessions/new");
  }
});

app.get("/home", (req, res) => {
    res.render("home.ejs", {
      currentUser: req.session.currentUser
    });
  });


//controller
const usersController = require("./controllers/users.js"); //@@@@
app.use("/users", usersController);

//controller
const sessionsController = require("./controllers/sessions.js"); //@@@@
app.use("/sessions", sessionsController);

//controller
const salonController = require('./controllers/salon.js');
app.use('/home', salonController);

//controller
const brandController = require('./controllers/brand.js');
app.use('/branduse', brandController);

app.listen(3000, () => {
  console.log("listening...");
});