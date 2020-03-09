const express = require('express');
const router = express.Router();

const Brand = require('../models/brands.js')

router.use(express.static("public"));




//NEW
router.get("/new/brands", (req, res) => {
    if (req.session.currentUser) { //use req.session.currentUser to show page
        Brand.find({}, (error, Brand) => {
            res.render("new_brands.ejs", { Brand });
            })
      } else {
        res.redirect("/branduse/index/brands") //change to customer view page
      }
    });
  
// CREATE
router.post("/", (req, res) => {
    Brand.create(req.body, (error, result) => {
    res.redirect("/branduse/new/brands");
        });
    });

// INDEX
router.get("/index/brands", (req, res) => {
    Brand.find({}, (error, Brand) => {
      res.render("index_brands.ejs", { Brand });
    });
  });

  //delete
 router.delete('/brands/:id', (req, res)=>{
    Brand.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/branduse/new/brands');//redirect back to brands index
  });
  });

//  edit
 router.get('/brands/:id/edit', (req, res)=>{
    Brand.findById(req.params.id, (err, Brand)=>{ 
        res.render('edit_brands.ejs',{Brand: Brand});
    });
  });

 //update
 router.put('/brands/:id', (req, res)=>{
    Brand.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
      res.redirect('/branduse/new/brands');
  });
  });


  module.exports = router;