const express = require('express');
const router = express.Router();

const Services = require('../models/services.js')

router.use(express.static("public"));


//NEW
router.get("/new/services", (req, res) => {
    if (req.session.currentUser) { //use req.session.currentUser to show page
        Services.find({}, (error, Services) => {
            res.render("new_services.ejs", { Services });
            })
      } else {
        res.redirect("/home/index/services") //change to customer view page
      }
    });
  
// CREATE
router.post("/", (req, res) => {
    Services.create(req.body, (error, result) => {
    res.redirect("/home/new/services");
        });
    });


// INDEX
router.get("/index/services", (req, res) => {
    Services.find({}, (error, Services) => {
      res.render("index_services.ejs", { Services });
    });
  });

  //index gallery
  router.get("/index/gallery", (req, res) => {
      res.render("index_gallery.ejs");
  });

  // SHOW
  router.get("/services/:id", (req, res) => {
    Services.findById(req.params.id, (err, Services) => {
      res.render("show_services.ejs", {
        Services: Services
      });
    });
  });


 //delete
 router.delete('/services/:id', (req, res)=>{
    Services.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/home/new/services');//redirect back to fruits index
  });
  });

//  edit
 router.get('/services/:id/edit', (req, res)=>{
    Services.findById(req.params.id, (err, Services)=>{ 
        res.render('edit_services.ejs',{Services: Services});
    });
  });

 //update
 router.put('/services/:id', (req, res)=>{
    Services.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
      res.redirect('/home/new/services');
  });
  });




  module.exports = router;