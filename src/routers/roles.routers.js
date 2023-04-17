const express=require('express');
const router=express.Router();
const roles=require('../controllers/roles.controller');
const  {verifyToken}  = require('../../express/auth');

router.post('/getroles',verifyToken,roles.getRoles);
router.post('/addroles',verifyToken,roles.addroles);
router.put('/editroles',verifyToken,roles.editroles);
router.delete('/deleteroles/:id',verifyToken,roles.deleteroles)

module.exports=router;




