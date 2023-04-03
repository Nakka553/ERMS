const express=require('express');
const router=express.Router();
const roles=require('../controllers/roles.controller');


router.get('/getroles',roles.getRoles);
router.post('/addroles',roles.addroles);
router.put('/editroles',roles.editroles);


module.exports=router;