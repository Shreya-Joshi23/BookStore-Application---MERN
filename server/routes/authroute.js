const express=require('express');
const {register,loginUser} =require('../controllers/authcontroller')
const router=express.Router();

router.post('/register',register);
router.post('/login',loginUser);

module.exports=router;