const express=require('express');
const router=express.Router();
const workExperience=require('../controllers/workExperience.controlles');


router.get('/getWorkExperience',workExperience.getWorkExperience);

module.exports=router;