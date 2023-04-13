const express=require('express');
const router=express.Router();
const  {verifyToken}  = require('../../express/auth');
const { getPermissionController } = require('../controllers/permission.controller');

router.get('/getPermission',verifyToken,getPermissionController)

module.exports=router;