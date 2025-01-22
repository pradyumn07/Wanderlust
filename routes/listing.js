const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js"); 
const {listingSchema}=require("../schema.js");
const Listing=require("../models/listing");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");

const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });     
    
router.route("/").get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single("listing[image]"),
wrapAsync(listingController.createListing)); //Index and create route
 

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id").get(wrapAsync(listingController.showListing)).put(isLoggedIn,isOwner,upload.single("listing[image]"),wrapAsync(listingController.updateListing)).delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));
//Show,Update,Delete

//EDIT Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

module.exports=router;

//Router.route mai common route waale get ya post ya koi aur req mai combine kr sakte hai 