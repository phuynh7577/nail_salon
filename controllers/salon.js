const express = require('express');
const router = express.Router();

const Services = require('../models/services.js')





// NEW
router.get("/new/services", (req, res) => {
    Services.find({}, (error, Services) => {
    res.render("new_services.ejs", { Services });
    })
  });
  
// CREATE
router.post("/", (req, res) => {
    Services.create(req.body, (error, result) => {
    res.redirect("/home/new/services");
        });
    });












  module.exports = router;