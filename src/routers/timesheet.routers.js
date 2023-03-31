const express=require('express');
const router=express.Router();
const timesheet=require('../controllers/timesheet.controller');


router.get('/getTimesheet',timesheet.getTimesheet);
router.post('/addTimeSheet',timesheet.addTimeSheet);

module.exports=router;