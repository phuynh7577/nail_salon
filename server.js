require("dotenv").config() 

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");//@@@@@
const methodOverride = require("method-override");

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const SECRET = process.env.SECRET

//use public folder for static assets......middleware
app.use(express.static("public"));



app.use(express.urlencoded({ extended: true }));//@@@@@

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(methodOverride("_method"));

mongoose.connect(MONGODB_URI, {
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

app.listen(PORT, () => {
  console.log("listening...");
});