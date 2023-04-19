const express=require('express');
const router=express.Router();
const wishes=require('../controllers/Wishes.controller');
const  {verifyToken}  = require('../../express/auth');

router.get('/getWishes',verifyToken,wishes.getWishes)
router.get('/getWishesCount',verifyToken,wishes.getWishesCount)
module.exports=router;