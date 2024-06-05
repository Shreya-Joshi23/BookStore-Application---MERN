const express=require("express");
const {getbooks}=require("../controllers/bookcontroller");

const router=express.Router();

router.get('/',getbooks);

module.exports=router;