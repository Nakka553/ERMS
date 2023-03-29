const express=require('express');
const router=express.Router();
const timesheet=require('../controllers/timesheet.controller');


router.get('/getTimesheet',timesheet.getTimesheet);

module.exports=router;