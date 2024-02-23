const express = require("express");
const {signupFunction,loginFunction, adminFunction, productFunction, productDisplayFunction, addToCart} = require("../CONTROLLER/signuploginController");

const router = express.Router();



router.route("/signup/login").post(signupFunction)
router.route("/login").post(loginFunction)
router.route("/admin").post(adminFunction)
router.route("/addproducts").post(productFunction)
router.route("/display").get(productDisplayFunction)
router.route("/addtocart").post(addToCart)


module.exports=router;